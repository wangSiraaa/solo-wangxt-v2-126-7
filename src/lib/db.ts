// IndexedDB 本地持久化：保存视场配置、天球坐标锚定的批注，
// 以及自定义台站的站点遮挡轮廓（人工输入的方位→遮挡高度控制点）。
// 无后端；所有数据仅存于浏览器。Promise 风格的极简封装。

import type { Annotation, HorizonProfileRecord, SavedFov } from '../types';

const DB_NAME = 'local-starchart';
const DB_VERSION = 2;
const STORE_FOVS = 'fovs';
const STORE_ANNOTATIONS = 'annotations';
const STORE_PROFILES = 'horizonProfiles';

let dbPromise: Promise<IDBDatabase> | null = null;

function openDb(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_FOVS)) {
        db.createObjectStore(STORE_FOVS, { keyPath: 'uuid' });
      }
      if (!db.objectStoreNames.contains(STORE_ANNOTATIONS)) {
        db.createObjectStore(STORE_ANNOTATIONS, { keyPath: 'uuid' });
      }
      if (!db.objectStoreNames.contains(STORE_PROFILES)) {
        db.createObjectStore(STORE_PROFILES, { keyPath: 'siteId' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbPromise;
}

function tx<T>(storeName: string, mode: IDBTransactionMode, fn: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const t = db.transaction(storeName, mode);
        const req = fn(t.objectStore(storeName));
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      })
  );
}

export async function putFov(fov: SavedFov): Promise<void> {
  await tx(STORE_FOVS, 'readwrite', (s) => s.put(fov));
}

export async function getAllFovs(): Promise<SavedFov[]> {
  const all = await tx<SavedFov[]>(STORE_FOVS, 'readonly', (s) => s.getAll());
  return all.sort((a, b) => b.createdAt - a.createdAt);
}

export async function deleteFov(uuid: string): Promise<void> {
  await tx(STORE_FOVS, 'readwrite', (s) => s.delete(uuid));
}

export async function putAnnotation(a: Annotation): Promise<void> {
  await tx(STORE_ANNOTATIONS, 'readwrite', (s) => s.put(a));
}

export async function getAllAnnotations(): Promise<Annotation[]> {
  const all = await tx<Annotation[]>(STORE_ANNOTATIONS, 'readonly', (s) => s.getAll());
  return all.sort((a, b) => a.createdAt - b.createdAt);
}

export async function deleteAnnotation(uuid: string): Promise<void> {
  await tx(STORE_ANNOTATIONS, 'readwrite', (s) => s.delete(uuid));
}

// ---- 站点遮挡轮廓（按台站 id 存取；人工输入，非地形实测） ----

export async function putHorizonProfile(rec: HorizonProfileRecord): Promise<void> {
  await tx(STORE_PROFILES, 'readwrite', (s) => s.put(rec));
}

export async function getAllHorizonProfiles(): Promise<HorizonProfileRecord[]> {
  return tx<HorizonProfileRecord[]>(STORE_PROFILES, 'readonly', (s) => s.getAll());
}

export async function deleteHorizonProfile(siteId: string): Promise<void> {
  await tx(STORE_PROFILES, 'readwrite', (s) => s.delete(siteId));
}
