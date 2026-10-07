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

export interface Annotation {
  uuid: string;
  createdAt: number;
  /** 批注锚点 J2000 赤经赤纬（度），坐标绑定，不绑像素 */
  ra: number;
  dec: number;
  text: string;
  color: string;
}

/** 站点遮挡轮廓控制点：方位角（度，北=0 顺时针）→ 遮挡高度（度） */
export interface HorizonPoint {
  az: number;
  alt: number;
}

/**
 * 存 IndexedDB 的站点遮挡轮廓记录。
 * 注意：这是观测者人工输入的遮挡估计（山体/建筑等），不是地形实测数据。
 */
export interface HorizonProfileRecord {
  siteId: string;
  points: HorizonPoint[];
  updatedAt: number;
}
