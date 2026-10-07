// 天区计算：把静态星表与动态太阳系天体合并成统一目标列表，
// 逐一计算本地地平坐标（astronomy-engine），并按
// 「球面角距视场 / 星等 / 地平线」三条相互独立的条件筛选。

import { STAR_CATALOG, type CatalogStar } from '../data/catalog';
import { SkyEpoch, type SolarSystemBodyInfo } from './astronomy';
import { angularSeparation, DEG } from './geoMath';
import { hasProfile, sampleObstructionAlt, sampleProfileRing } from './horizonProfile';
import type { FovConfig, HorizonControlPoint } from '../types';

export interface SkyTarget {
  id: string;
  name: string;
  designation: string;
  kind: 'star' | 'sun' | 'moon' | 'planet';
  ra: number; // J2000 赤经，度
  dec: number; // J2000 赤纬，度
  mag: number;
  az: number; // 方位角，度（北0顺时针）
  alt: number; // 地平高度，度
  /** 地平直角单位向量 x=北 y=西 z=天顶 */
  hx: number;
  hy: number;
  hz: number;
  sepFromCenter: number; // 与视场中心的球面角距（度）
  inFov: boolean;
  passesMag: boolean;
  aboveHorizon: boolean;
  /** 目标方位上的站点遮挡高度（度）；当前台站未配置轮廓时为 undefined */
  obstructionAlt?: number;
  /** 几何地平以上但被站点遮挡（仅当配置了轮廓才可能为 true） */
  occludedByTerrain: boolean;
  tags: CatalogStar['tags'];
  phaseFraction?: number;
}

export interface HorizonGeometry {
  /** 地平圈在 J2000 赤道坐标上的密集采样 [ra,dec]（度） */
  ring: Array<[number, number]>;
  /** 天底 J2000 坐标（度）；地平以下半球 = 天底为中心、90° 球面圆 */
  nadirRa: number;
  nadirDec: number;
  /** 北点/东点/南点/西点 J2000 坐标（度） */
  cardinalPoints: Array<{ label: string; ra: number; dec: number }>;
}

export interface SkyModel {
  targets: SkyTarget[];
  horizon: HorizonGeometry;
  /** 站点遮挡轮廓（当前台站已配置时）：J2000 赤道坐标环 + 地平直角向量环 */
  obstruction: ObstructionGeometry | null;
  centerAlt: number;
  centerAz: number;
  gmstHours: number;
  julianDay: number;
  fovBoundary: Array<[number, number]>;
}

export interface ObstructionGeometry {
  /** 遮挡线在 J2000 赤道坐标上的密集采样 [ra,dec]（度），首尾闭合 */
  ring: Array<[number, number]>;
  /** 遮挡线在本地地平直角坐标中的单位向量采样（x=北 y=西 z=天顶） */
  ringHorizontal: Array<[number, number, number]>;
}

function kindOf(bodyName: SolarSystemBodyInfo['name']): SkyTarget['kind'] {
  if (bodyName === '太阳') return 'sun';
  if (bodyName === '月球') return 'moon';
  return 'planet';
}

/**
 * @param magLimit   星等上限（含），仅作用于恒星
 * @param horizonClip true 时只保留地平以上目标；与星等筛选相互独立
 * @param obstructionPoints 当前台站的遮挡轮廓控制点（人工输入）；null/空 = 未配置，保持原行为
 */
export function computeSky(
  epoch: SkyEpoch,
  fov: FovConfig,
  magLimit: number,
  horizonClip: boolean,
  fovBoundaryPts: Array<[number, number]>,
  obstructionPoints: HorizonControlPoint[] | null = null
): SkyModel {
  const planets = epoch.solarSystemBodies();
  const profileOn = hasProfile(obstructionPoints);

  // 目标在本地平坐标下的遮挡判定：恒星与太阳系天体走同一套坐标转换与同一轮廓
  const obstructionAt = (azDeg: number, altDeg: number): { obstructionAlt?: number; occludedByTerrain: boolean } => {
    if (!profileOn) return { occludedByTerrain: false };
    const obs = sampleObstructionAlt(obstructionPoints!, azDeg);
    if (obs === null) return { occludedByTerrain: false };
    return { obstructionAlt: obs, occludedByTerrain: altDeg >= 0 && altDeg < obs };
  };

  const targets: SkyTarget[] = [];

  for (const s of STAR_CATALOG) {
    const hz = epoch.equatorialToHorizontal(s.ra, s.dec);
    const sep = angularSeparation(fov.centerRa, fov.centerDec, s.ra, s.dec);
    const inFov = sep <= fov.radiusDeg;
    const above = hz.altDeg >= 0;
    targets.push({
      id: s.id,
      name: s.name,
      designation: s.designation,
      kind: 'star',
      ra: s.ra,
      dec: s.dec,
      mag: s.mag,
      az: hz.azDeg,
      alt: hz.altDeg,
      hx: hz.hx,
      hy: hz.hy,
      hz: hz.hz,
      sepFromCenter: sep,
      inFov,
      passesMag: s.mag <= magLimit,
      aboveHorizon: above,
      ...obstructionAt(hz.azDeg, hz.altDeg),
      tags: s.tags
    });
  }

  for (const p of planets) {
    const hz = epoch.equatorialToHorizontal(p.ra, p.dec);
    const sep = angularSeparation(fov.centerRa, fov.centerDec, p.ra, p.dec);
    const inFov = sep <= fov.radiusDeg;
    const above = hz.altDeg >= 0;
    // 太阳系天体不参与星等筛选（它们是动态参考目标），但仍参与视场与地平线筛选
    targets.push({
      id: `body-${p.body}`,
      name: p.name,
      designation: p.name,
      kind: kindOf(p.name),
      ra: p.ra,
      dec: p.dec,
      mag: p.mag,
      az: hz.azDeg,
      alt: hz.altDeg,
      hx: hz.hx,
      hy: hz.hy,
      hz: hz.hz,
      sepFromCenter: sep,
      inFov,
      passesMag: true,
      aboveHorizon: above,
      ...obstructionAt(hz.azDeg, hz.altDeg),
      tags: [],
      phaseFraction: p.phaseFraction
    });
  }

  // 地平圈（J2000 赤道坐标采样）
  const ring: Array<[number, number]> = [];
  const cardinals: HorizonGeometry['cardinalPoints'] = [];
  const cardMap: Record<number, string> = { 0: '北点 N', 90: '东点 E', 180: '南点 S', 270: '西点 W' };
  const N = 240;
  for (let i = 0; i < N; i++) {
    const az = (360 * i) / N;
    const pt = epoch.horizonPointEquatorial(az);
    ring.push([pt.ra, pt.dec]);
    if (az in cardMap) cardinals.push({ label: cardMap[az], ra: pt.ra, dec: pt.dec });
  }
  ring.push(ring[0]);

  const nadir = epoch.nadirEquatorial();
  const centerHz = epoch.equatorialToHorizontal(fov.centerRa, fov.centerDec);

  // 站点遮挡轮廓：沿方位环采样（跨 0°/360° 连续），同时给出
  // J2000 赤道坐标（二维投影用）与地平直角向量（三维球面用）。
  // 坐标转换沿用 SkyEpoch 的同一旋转矩阵，与目标位置口径一致。
  let obstruction: ObstructionGeometry | null = null;
  if (profileOn) {
    const samples = sampleProfileRing(obstructionPoints!, 240)!;
    const obsRing: Array<[number, number]> = [];
    const obsRingHor: Array<[number, number, number]> = [];
    for (const s of samples) {
      const eq = epoch.horizontalToEquatorial(s.azDeg, s.altDeg);
      obsRing.push([eq.ra, eq.dec]);
      const az = s.azDeg * DEG;
      const alt = s.altDeg * DEG;
      obsRingHor.push([Math.cos(alt) * Math.cos(az), -Math.cos(alt) * Math.sin(az), Math.sin(alt)]);
    }
    obstruction = { ring: obsRing, ringHorizontal: obsRingHor };
  }

  // 标记可见性：三条筛选独立，但必须同时满足才绘制
  for (const t of targets) {
    t.inFov = t.sepFromCenter <= fov.radiusDeg;
  }

  return {
    targets,
    horizon: { ring, nadirRa: nadir.ra, nadirDec: nadir.dec, cardinalPoints: cardinals },
    obstruction,
    centerAlt: centerHz.altDeg,
    centerAz: centerHz.azDeg,
    gmstHours: epoch.gmstHours(),
    julianDay: epoch.julianDay(),
    fovBoundary: fovBoundaryPts
  };
}

/** UI 层共用的"是否绘制"判定：视场 ∧ 星等 ∧（可选）地平 */
export function isTargetVisible(t: SkyTarget, horizonClip: boolean): boolean {
  return t.inFov && t.passesMag && (!horizonClip || t.aboveHorizon);
}
