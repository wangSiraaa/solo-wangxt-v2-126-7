// 共享数据类型

export interface FovConfig {
  /** 中心 J2000 赤经（度） */
  centerRa: number;
  /** 中心 J2000 赤纬（度） */
  centerDec: number;
  /** 视场角半径（度），按球面角距定义 */
  radiusDeg: number;
}

export interface SiteState {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  height: number;
}

export interface SavedFov {
  uuid: string;
  name: string;
  createdAt: number;
  fov: FovConfig;
  siteId: string;
  /** 观测时间 UTC ISO 字符串 */
  timeUtcIso: string;
  note?: string;
}

/** 站点遮挡轮廓控制点：某方位角上的遮挡高度角（人工输入，非地形实测） */
export interface HorizonControlPoint {
  /** 方位角（度，北=0 顺时针），保存时归一化到 [0,360) */
  azDeg: number;
  /** 遮挡高度角（度），0 = 几何地平，越大遮挡越高 */
  altDeg: number;
}

/** 某台站的遮挡轮廓：少量控制点 + 按方位角环形插值 */
export interface HorizonProfile {
  /** 对应台站 id（IndexedDB 主键） */
  siteId: string;
  updatedAt: number;
  points: HorizonControlPoint[];
}

export interface Annotation {
  uuid: string;
  createdAt: number;
  /** 批注锚点 J2000 赤经赤纬（度），坐标绑定，不绑像素 */
  ra: number;
  dec: number;
  text: string;
  color: string;
}
