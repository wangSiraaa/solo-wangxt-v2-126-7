// 站点遮挡轮廓：少量人工控制点 + 方位角环形线性插值。
// 轮廓是观测者人工输入的近似（例如指星软件/罗盘测量），不是地形实测。
// 方位角是环形量：插值在 0°/360° 处续接，轮廓跨零点连续。

import type { HorizonControlPoint } from '../types';

export const MIN_OBSTRUCTION_ALT = 0;
export const MAX_OBSTRUCTION_ALT = 60;

/** 方位角归一化到 [0,360) */
export function normAz(az: number): number {
  return ((az % 360) + 360) % 360;
}

/** 控制点规范形：剔除非法值、方位归一化、高度夹取、按方位升序 */
export function normalizePoints(points: HorizonControlPoint[]): HorizonControlPoint[] {
  return points
    .filter((p) => Number.isFinite(p.azDeg) && Number.isFinite(p.altDeg))
    .map((p) => ({
      azDeg: normAz(p.azDeg),
      altDeg: Math.min(MAX_OBSTRUCTION_ALT, Math.max(MIN_OBSTRUCTION_ALT, p.altDeg))
    }))
    .sort((a, b) => a.azDeg - b.azDeg);
}

/** 控制点是否构成有效轮廓（至少 1 个合法点） */
export function hasProfile(points: HorizonControlPoint[] | null | undefined): boolean {
  return !!points && normalizePoints(points).length > 0;
}

/**
 * 环形线性插值：给定方位角 az（度），返回该方位上的遮挡高度角（度）。
 * 末点与首点之间跨 0°/360° 续接，因此 az=0 与 az=360 取值一致，
 * 轮廓在方位环上处处连续。0 个点返回 null（视为未配置），1 个点视为常数。
 */
export function sampleObstructionAlt(points: HorizonControlPoint[], azDeg: number): number | null {
  const pts = normalizePoints(points);
  if (pts.length === 0) return null;
  if (pts.length === 1) return pts[0].altDeg;

  const az = normAz(azDeg);
  // 找到区间 [p0, p1] 使 az ∈ [p0.az, p1.az)；az 大于所有点时绕回首点
  let hi = pts.findIndex((p) => p.azDeg > az);
  if (hi === -1) hi = 0;
  const lo = (hi - 1 + pts.length) % pts.length;
  const p0 = pts[lo];
  const p1 = pts[hi];
  const a0 = p0.azDeg;
  let a1 = p1.azDeg;
  if (a1 <= a0) a1 += 360; // 跨 0°/360° 的绕回区间
  const t = a1 === a0 ? 0 : (az - a0) / (a1 - a0);
  return p0.altDeg + (p1.altDeg - p0.altDeg) * t;
}

/**
 * 按方位等间隔采样轮廓，供三视图绘制遮挡线。
 * 返回 n+1 个点（含 az=360 的闭合点，取值与 az=0 相同）。
 * 未配置轮廓时返回 null。
 */
export function sampleProfileRing(
  points: HorizonControlPoint[],
  n = 240
): Array<{ azDeg: number; altDeg: number }> | null {
  if (!hasProfile(points)) return null;
  const out: Array<{ azDeg: number; altDeg: number }> = [];
  for (let i = 0; i <= n; i++) {
    const az = (360 * i) / n;
    out.push({ azDeg: az, altDeg: sampleObstructionAlt(points, az)! });
  }
  return out;
}
