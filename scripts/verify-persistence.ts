// 验证站点遮挡轮廓的 IndexedDB 持久化：
// 通过 db.ts 写入后，用一条全新的 IndexedDB 连接（模拟浏览器刷新后重开）读回。
import 'fake-indexeddb/auto';
import { putHorizonProfile, getAllHorizonProfiles, deleteHorizonProfile } from '../src/lib/db';

const PTS = [
  { az: 350, alt: 12 },
  { az: 15, alt: 18 },
  { az: 90, alt: 4 }
];

let failures = 0;
const check = (name: string, cond: boolean, detail = '') => {
  if (cond) console.log(`  ok  ${name}`);
  else { failures++; console.error(`FAIL  ${name} ${detail}`); }
};

// 写入（走应用自己的封装）
await putHorizonProfile({ siteId: 'custom', points: PTS, updatedAt: 123 });

// 模拟刷新：绕过模块缓存的连接，直接重新打开同一个数据库读取
const raw = await new Promise<unknown[]>((resolve, reject) => {
  const req = indexedDB.open('local-starchart', 2);
  req.onsuccess = () => {
    const db = req.result;
    const tx = db.transaction('horizonProfiles', 'readonly');
    const getAll = tx.objectStore('horizonProfiles').getAll();
    getAll.onsuccess = () => resolve(getAll.result as unknown[]);
    getAll.onerror = () => reject(getAll.error);
  };
  req.onerror = () => reject(req.error);
});
const rec = (raw as Array<{ siteId: string; points: unknown[]; updatedAt: number }>).find((r) => r.siteId === 'custom');
check('刷新后轮廓记录仍在', !!rec);
check('控制点逐点一致', JSON.stringify(rec?.points) === JSON.stringify(PTS));
check('updatedAt 保留', rec?.updatedAt === 123);

// 版本升级：旧库（fovs/annotations）与新库（horizonProfiles）三个对象库都在
const stores = await new Promise<string[]>((resolve, reject) => {
  const req = indexedDB.open('local-starchart', 2);
  req.onsuccess = () => resolve([...req.result.objectStoreNames]);
  req.onerror = () => reject(req.error);
});
check('三个对象库齐全', ['annotations', 'fovs', 'horizonProfiles'].every((s) => stores.includes(s)), stores.join(','));

// 走封装读回 + 删除（清空轮廓 → 恢复未配置行为）
const viaApi = await getAllHorizonProfiles();
check('封装读回 1 条记录', viaApi.length === 1 && viaApi[0].siteId === 'custom');
await deleteHorizonProfile('custom');
const afterDel = await getAllHorizonProfiles();
check('清空后无记录（恢复未配置原行为）', afterDel.length === 0);

console.log(failures === 0 ? '\n持久化校验全部通过 ✓' : `\n${failures} 项失败 ✗`);
process.exit(failures === 0 ? 0 : 1);
