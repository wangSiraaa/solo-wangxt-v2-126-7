// 站点遮挡轮廓：人工输入的「方位角 → 遮挡高度」控制点，
// 在方位环（0° 与 360° 同指北）上做线性插值，得到任意方位的遮挡高度。
// 轮廓只描述观测者主观录入的地平遮挡（山体/建筑等），不是地形实测数据。

import type { HorizonPoint } from '../types';

/** 方位角归一化到 [0, 360) */
export function normAz(az: number): number {
  return ((az % 360) + 360) % 360;
}

/**
 * 归一化控制点：方位卷入 [0,360)、高度夹取到 [-90,90]、
 * 按方位升序排序、同方位去重（后写覆盖先写）。
 * 对输入顺序不敏感，编辑器里可以任意顺序录入。
 */
export function normalizePoints(points: readonly HorizonPoint[]): HorizonPoint[] {
  const byAz = new Map<number, number>();
  for (const p of points) {
    if (!Number.isFinite(p.az) || !Number.isFinite(p.alt)) continue;
    const az = Math.round(normAz(p.az) * 100) / 100;
    const alt = Math.max(-90, Math.min(90, Math.round(p.alt * 100) / 100));
    byAz.set(az, alt);
  }
  return [...byAz.entries()].map(([az, alt]) => ({ az, alt })).sort((a, b) => a.az - b.az);
}

/**
 * 方位环形线性插值：控制点围成一圈，末点与首点之间跨过 0°/360°
 * 也是一段普通区间，因此方位 0° 与 360° 的采样值天然相等，
 * 轮廓在跨零点处连续（sampleOcclusionAlt(0) === sampleOcclusionAlt(360)）。
 * 无控制点时返回 0（退化为几何地平线，即未配置轮廓的原行为）。
 */
export function sampleOcclusionAlt(points: readonly HorizonPoint[], azDeg: number): number {
  const pts = normalizePoints(points);
  if (pts.length === 0) return 0;
  if (pts.length === 1) return pts[0].alt;
  const az = normAz(azDeg);
  // 找区间起点 i：pts[i].az <= az < pts[i+1].az；末段跨 0° 回卷到首点
  let i = pts.length - 1;
  for (let k = 0; k < pts.length; k++) {
    if (pts[k].az <= az) i = k;
    else break;
  }
  const a = pts[i];
  const b = pts[(i + 1) % pts.length];
  const azA = a.az;
  let azB = b.az;
  if (azB <= azA) azB += 360; // 跨 0°/360° 的末段
  const z = az < azA ? az + 360 : az;
  const t = (z - azA) / (azB - azA);
  return a.alt + (b.alt - a.alt) * t;
}
