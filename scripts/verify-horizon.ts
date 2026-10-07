// 验收数值校验：站点遮挡轮廓
// 1) 轮廓跨 0°/360° 方位连续（环形插值）
// 2) horizontalToEquatorial(az,0) 与原 horizonPointEquatorial 一致
// 3) 「几何地平以上但被山体遮挡」状态判定正确；未配置轮廓保持原行为
// 4) 换台站后同一目标遮挡状态重算
// 5) 遮挡区域多边形绕向自动校正（含天底）
// 6) 投影路径非空；导出 JSON/SVG 注明人工输入而非地形实测

import { normalizePoints, sampleOcclusionAlt } from '../src/lib/horizonProfile';
import { SkyEpoch } from '../src/lib/astronomy';
import { computeSky } from '../src/lib/computeSky';
import { buildProjection, occlusionLineObject, occlusionRegionObject } from '../src/lib/projections';
import { buildExportJson, buildStandaloneSvg } from '../src/lib/exporter';
import { geoContains } from 'd3-geo';

const PROFILE = [
  { az: 350, alt: 12 },
  { az: 15, alt: 18 },
  { az: 45, alt: 9 },
  { az: 90, alt: 4 },
  { az: 150, alt: 1 },
  { az: 210, alt: 0 },
  { az: 270, alt: 6 },
  { az: 320, alt: 9 }
];

let failures = 0;
function check(name: string, cond: boolean, detail = '') {
  if (cond) console.log(`  ok  ${name}`);
  else {
    failures++;
    console.error(`FAIL  ${name} ${detail}`);
  }
}
const close = (a: number, b: number, eps = 1e-9) => Math.abs(a - b) < eps;

// ---------- 1) 环形插值与 0°/360° 连续 ----------
console.log('— 环形插值 —');
check('sample(0) === sample(360)', sampleOcclusionAlt(PROFILE, 0) === sampleOcclusionAlt(PROFILE, 360));
check('sample(-5) === sample(355)', sampleOcclusionAlt(PROFILE, -5) === sampleOcclusionAlt(PROFILE, 355));
// 350°→15° 跨零段：0° 处应为 12 + (18-12)*(10/25) = 14.4
check('跨零段中点插值 14.4', close(sampleOcclusionAlt(PROFILE, 0), 14.4, 1e-9), String(sampleOcclusionAlt(PROFILE, 0)));
// 连续性：跨零两侧极限相等
check(
  '跨零两侧极限连续',
  close(sampleOcclusionAlt(PROFILE, 359.999) , sampleOcclusionAlt(PROFILE, 0.001), 1e-3)
);
check('单点轮廓为常数', sampleOcclusionAlt([{ az: 100, alt: 7 }], 250) === 7);
check('空轮廓退化为 0（原行为）', sampleOcclusionAlt([], 123) === 0);
check('normalizePoints 排序去重', JSON.stringify(normalizePoints([
  { az: 90, alt: 1 }, { az: 10, alt: 2 }, { az: 90, alt: 3 }, { az: 370, alt: 4 }
])) === JSON.stringify([{ az: 10, alt: 4 }, { az: 90, alt: 3 }]));

// ---------- 2) 坐标转换等价 ----------
console.log('— 坐标转换 —');
const site = { latitude: 39.9042, longitude: 116.4074, height: 50 };
const epoch = new SkyEpoch(new Date('2026-09-30T13:00:00Z'), site);
let eqOK = true;
for (const az of [0, 1, 45, 90, 179.9, 180, 270, 359.9]) {
  const a = epoch.horizontalToEquatorial(az, 0);
  const b = epoch.horizonPointEquatorial(az);
  if (!close(a.ra, b.ra, 1e-9) || !close(a.dec, b.dec, 1e-9)) eqOK = false;
}
check('horizontalToEquatorial(az,0) ≡ horizonPointEquatorial(az)', eqOK);
// 高度为正的采样应落在地平圈「以上」：转换回地平坐标后高度复原
let roundTrip = true;
for (const [az, alt] of [[10, 5], [200, 30], [350, 12]] as Array<[number, number]>) {
  const eq = epoch.horizontalToEquatorial(az, alt);
  const hz = epoch.equatorialToHorizontal(eq.ra, eq.dec);
  if (!close(hz.altDeg, alt, 1e-6) || !close(((hz.azDeg - az + 540) % 360) - 180, 0, 1e-6)) roundTrip = false;
}
check('地平→赤道→地平 往返一致', roundTrip);

// ---------- 3) 遮挡状态判定 ----------
console.log('— 遮挡状态 —');
const fov = { centerRa: 213.9, centerDec: 19.2, radiusDeg: 30 };
// 常数高轮廓：所有 0≤alt<80 的目标都被遮挡
const skyHigh = computeSky(epoch, fov, 4.5, false, [], [{ az: 0, alt: 80 }]);
const arcturus = skyHigh.targets.find((t) => t.id === 'arcturus')!;
check('大角星几何地平以上', arcturus.alt >= 0, `alt=${arcturus.alt.toFixed(3)}`);
check('大角星被山体遮挡（alt<80）', arcturus.occluded === true && arcturus.occlusionAlt === 80);
const highTargets = skyHigh.targets.filter((t) => t.alt >= 80);
check('高度≥80° 目标不被遮挡', highTargets.every((t) => !t.occluded));
const belowTargets = skyHigh.targets.filter((t) => t.alt < 0);
check('地平以下目标不算"被遮挡"（状态独立）', belowTargets.every((t) => !t.occluded));

// 未配置轮廓：保持原行为
const skyNone = computeSky(epoch, fov, 4.5, false, [], null);
check('无轮廓时 occlusion=null', skyNone.occlusion === null);
check(
  '无轮廓时所有目标 occlusionAlt=null 且 occluded=false',
  skyNone.targets.every((t) => t.occlusionAlt === null && t.occluded === false)
);

// 山体示例轮廓：遮挡线采样环闭合且 0°=360°
const skyProf = computeSky(epoch, fov, 4.5, false, [], PROFILE);
const ring = skyProf.occlusion!.ring;
check('遮挡环闭合（末点=首点）', ring[0][0] === ring[ring.length - 1][0] && ring[0][1] === ring[ring.length - 1][1]);

// ---------- 4) 换台站重算 ----------
console.log('— 换台站重算 —');
const customEpoch = new SkyEpoch(new Date('2026-09-30T13:00:00Z'), { latitude: 40.0, longitude: 115.0, height: 1200 });
const skyCustom = computeSky(customEpoch, fov, 4.5, false, [], PROFILE);
const skyBeijing = computeSky(epoch, fov, 4.5, false, [], null);
const tCustom = skyCustom.targets.find((t) => t.id === 'arcturus')!;
const tBeijing = skyBeijing.targets.find((t) => t.id === 'arcturus')!;
check('自定义台站（有轮廓）遮挡高度已算', tCustom.occlusionAlt !== null);
check('北京（无轮廓）保持原行为', tBeijing.occlusionAlt === null && tBeijing.occluded === false);
check(
  '同一目标两台站方位不同 → 遮挡高度不同',
  tCustom.occlusionAlt !== tBeijing.occlusionAlt && tCustom.az !== tBeijing.az
);
// 同一台站、有无轮廓对比：有轮廓时部分几何地平以上目标被遮挡
const occCount = skyCustom.targets.filter((t) => t.occluded).length;
check(`山体轮廓下存在被遮挡目标（${occCount} 个）`, occCount > 0);
check(
  '被遮挡目标均满足 0≤alt<遮挡线',
  skyCustom.targets.filter((t) => t.occluded).every((t) => t.alt >= 0 && t.alt < (t.occlusionAlt ?? -1))
);

// ---------- 5) 遮挡区域绕向 ----------
console.log('— 遮挡区域多边形 —');
const nadir = [skyProf.horizon.nadirRa, skyProf.horizon.nadirDec] as [number, number];
const region = occlusionRegionObject(ring, nadir[0], nadir[1]);
check('遮挡区域包含天底', geoContains(region as never, nadir));
// 天顶方向的对跖点不应在遮挡区内
const zenithRa = (nadir[0] + 180) % 360;
const zenithDec = -nadir[1];
check('遮挡区域不包含天顶侧', !geoContains(region as never, [zenithRa, zenithDec]));

// ---------- 6) 投影路径与导出 ----------
console.log('— 投影与导出 —');
const built = buildProjection('stereographic', fov.centerRa, fov.centerDec, fov.radiusDeg);
const linePath = built.path(occlusionLineObject(ring));
const regionPath = built.path(region);
check('遮挡线投影路径非空', linePath.length > 0, '(路径为空)');
check('遮挡区域投影路径非空', regionPath.length > 0, '(路径为空)');

const meta = {
  projectionLabel: '测试',
  site: { id: 'custom', name: '自定义位置', ...site },
  timeUtcIso: '2026-09-30T13:00:00Z',
  fov,
  julianDay: skyProf.julianDay,
  gmstHours: skyProf.gmstHours,
  horizonClip: false,
  magLimit: 4.5
};
const visible = skyProf.targets.filter((t) => t.inFov && t.passesMag);
const json = JSON.parse(buildExportJson(skyProf, visible, [], meta));
check('JSON 注明人工输入', json.siteHorizonProfile.source === 'manual-entry');
check('JSON 注明非地形实测', String(json.siteHorizonProfile.note).includes('非地形实测'));
check('JSON 逐目标带遮挡字段', visible.every((t) => {
  const j = json.targets.find((x: { id: string }) => x.id === t.id);
  return j && typeof j.occludedByTerrain === 'boolean' && 'terrainOcclusionAltitude_deg' in j;
}));
const jsonNone = JSON.parse(buildExportJson(skyNone, skyNone.targets.filter((t) => t.inFov && t.passesMag), [], meta));
check('无轮廓时 JSON profile=null 且目标不被遮挡', jsonNone.siteHorizonProfile === null && jsonNone.targets.every((t: { occludedByTerrain: boolean }) => t.occludedByTerrain === false));

const svg = buildStandaloneSvg('stereographic', skyProf, visible, [], meta);
check('SVG 图注注明人工输入而非地形实测', svg.includes('人工输入') && svg.includes('非地形实测'));
check('SVG 含遮挡线（琥珀色）', svg.includes('#ffb74d'));
const svgNone = buildStandaloneSvg('stereographic', skyNone, visible, [], meta);
check('无轮廓时 SVG 不含遮挡说明', !svgNone.includes('非地形实测'));

console.log(failures === 0 ? '\n全部通过 ✓' : `\n${failures} 项失败 ✗`);
process.exit(failures === 0 ? 0 : 1);
