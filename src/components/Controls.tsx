// 控制面板：观测位置/时间、视场中心与角半径、星等与地平线独立筛选、
// 演示场景、视场与批注的 IndexedDB 存取。

import { useState } from 'react';
import { OBSERVING_SITES } from '../data/sites';
import { DEMO_SCENARIOS } from '../data/scenarios';
import { MAX_OBSTRUCTION_ALT, MIN_OBSTRUCTION_ALT } from '../lib/horizonProfile';
import type { FovConfig, HorizonControlPoint, HorizonProfile, SavedFov, Annotation, SiteState } from '../types';

interface ControlsProps {
  site: SiteState;
  timeUtcIso: string;
  fov: FovConfig;
  magLimit: number;
  horizonClip: boolean;
  showHorizon: boolean;
  showGraticule: boolean;
  savedFovs: SavedFov[];
  annotations: Annotation[];
  /** 当前台站的遮挡轮廓（人工输入）；null = 未配置，保持原行为 */
  horizonProfile: HorizonProfile | null;
  onChangeSite: (site: SiteState) => void;
  onChangeTime: (iso: string) => void;
  onChangeFov: (fov: FovConfig) => void;
  onChangeMag: (m: number) => void;
  onToggleHorizonClip: (v: boolean) => void;
  onToggleShowHorizon: (v: boolean) => void;
  onToggleGraticule: (v: boolean) => void;
  onApplyScenario: (id: string) => void;
  onSaveFov: (name: string) => void;
  onLoadFov: (f: SavedFov) => void;
  onDeleteFov: (uuid: string) => void;
  onAddAnnotation: (text: string, color: string) => void;
  onDeleteAnnotation: (uuid: string) => void;
  onSaveProfile: (points: HorizonControlPoint[]) => void;
  onClearProfile: () => void;
}

export default function Controls(p: ControlsProps) {
  const [fovName, setFovName] = useState('');
  const [noteText, setNoteText] = useState('');
  const [noteColor, setNoteColor] = useState('#ffd54a');

  const setRa = (v: number) => p.onChangeFov({ ...p.fov, centerRa: ((v % 360) + 360) % 360 });
  const setDec = (v: number) => p.onChangeFov({ ...p.fov, centerDec: Math.max(-90, Math.min(90, v)) });
  const setRadius = (v: number) => p.onChangeFov({ ...p.fov, radiusDeg: Math.max(1, Math.min(90, v)) });

  return (
    <div className="controls">
      <section className="ctl-block">
        <h3>演示场景</h3>
        <div className="btn-row">
          {DEMO_SCENARIOS.map((s) => (
            <button key={s.id} className="btn scenario" onClick={() => p.onApplyScenario(s.id)} title={s.description}>
              {s.label}
            </button>
          ))}
        </div>
        <p className="hint" title={DEMO_SCENARIOS.find((s) => s.id === 'horizon')?.description}>
          {DEMO_SCENARIOS.find((s) => s.id === 'horizon')?.description}
        </p>
      </section>

      <section className="ctl-block">
        <h3>观测位置与时间</h3>
        <label>
          位置
          <select
            value={p.site.id}
            onChange={(e) => {
              const found = OBSERVING_SITES.find((s) => s.id === e.target.value)!;
              p.onChangeSite({ ...found });
            }}
          >
            {OBSERVING_SITES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        {p.site.id === 'custom' && (
          <div className="num-row">
            <label>
              纬度°
              <input type="number" value={p.site.latitude} step={0.0001} onChange={(e) => p.onChangeSite({ ...p.site, latitude: Number(e.target.value) })} />
            </label>
            <label>
              经度°
              <input type="number" value={p.site.longitude} step={0.0001} onChange={(e) => p.onChangeSite({ ...p.site, longitude: Number(e.target.value) })} />
            </label>
          </div>
        )}
        <label>
          时间（UTC，非本地时区）
          <input type="datetime-local" step={1} value={p.timeUtcIso.slice(0, 19)} onChange={(e) => p.onChangeTime(e.target.value + 'Z')} />
        </label>
        <p className="hint">北京时间 = UTC + 8 小时。默认 2026-09-30 13:00 UTC（北京 21:00，大角星近地平）。</p>
      </section>

      <section className="ctl-block">
        <h3>视场（J2000 赤道坐标）</h3>
        <div className="num-row">
          <label>
            中心赤经°
            <input type="number" value={round3(p.fov.centerRa)} min={0} max={360} step={0.1} onChange={(e) => setRa(Number(e.target.value))} />
          </label>
          <label>
            中心赤纬°
            <input type="number" value={round3(p.fov.centerDec)} min={-90} max={90} step={0.1} onChange={(e) => setDec(Number(e.target.value))} />
          </label>
          <label>
            角半径°
            <input type="number" value={round3(p.fov.radiusDeg)} min={1} max={90} step={0.5} onChange={(e) => setRadius(Number(e.target.value))} />
          </label>
        </div>
        <p className="hint">视场边界是围绕中心的球面小圆；中心在极点时赤经自动失效。</p>
        <div className="save-row">
          <input placeholder="命名当前视场…" value={fovName} onChange={(e) => setFovName(e.target.value)} />
          <button className="btn" disabled={!fovName.trim()} onClick={() => { p.onSaveFov(fovName.trim()); setFovName(''); }}>
            存视场
          </button>
        </div>
        {p.savedFovs.length > 0 && (
          <ul className="store-list">
            {p.savedFovs.slice(0, 6).map((f) => (
              <li key={f.uuid}>
                <button className="link-btn" title={`RA ${f.fov.centerRa.toFixed(1)}° Dec ${f.fov.centerDec.toFixed(1)}° r ${f.fov.radiusDeg}°`} onClick={() => p.onLoadFov(f)}>
                  {f.name}
                </button>
                <button className="x-btn" onClick={() => p.onDeleteFov(f.uuid)}>×</button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="ctl-block">
        <h3>筛选（两条相互独立）</h3>
        <label className="range-label">
          星等上限（仅恒星）：≤ {p.magLimit.toFixed(1)}
          <input type="range" min={-2} max={6} step={0.1} value={p.magLimit} onChange={(e) => p.onChangeMag(Number(e.target.value))} />
        </label>
        <label className="check">
          <input type="checkbox" checked={p.horizonClip} onChange={(e) => p.onToggleHorizonClip(e.target.checked)} />
          地平线裁切：仅显示地平以上目标
        </label>
        <label className="check">
          <input type="checkbox" checked={p.showHorizon} onChange={(e) => p.onToggleShowHorizon(e.target.checked)} />
          显示地平圈与地平以下区域
        </label>
        <label className="check">
          <input type="checkbox" checked={p.showGraticule} onChange={(e) => p.onToggleGraticule(e.target.checked)} />
          显示 J2000 经纬网
        </label>
      </section>

      <section className="ctl-block">
        <h3>站点遮挡轮廓（人工输入）</h3>
        {p.horizonProfile ? (
          <>
            <ul className="store-list profile-list">
              {p.horizonProfile.points.map((pt, i) => (
                <li key={i}>
                  <label className="profile-field">
                    方位°
                    <input
                      type="number"
                      min={0}
                      max={360}
                      step={1}
                      value={round3(pt.azDeg)}
                      onChange={(e) => updatePoint(p, i, { azDeg: Number(e.target.value) })}
                    />
                  </label>
                  <label className="profile-field">
                    遮挡高°
                    <input
                      type="number"
                      min={MIN_OBSTRUCTION_ALT}
                      max={MAX_OBSTRUCTION_ALT}
                      step={0.5}
                      value={round3(pt.altDeg)}
                      onChange={(e) => updatePoint(p, i, { altDeg: Number(e.target.value) })}
                    />
                  </label>
                  <button
                    className="x-btn"
                    title="删除该控制点"
                    onClick={() => {
                      const pts = p.horizonProfile!.points;
                      // 删到最后一个点时直接清除轮廓，回到"未配置"状态
                      if (pts.length <= 1) p.onClearProfile();
                      else p.onSaveProfile(pts.filter((_, k) => k !== i));
                    }}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
            <div className="btn-row" style={{ marginTop: 6 }}>
              <button className="btn" onClick={() => addPoint(p)}>
                + 控制点
              </button>
              <button className="btn" onClick={p.onClearProfile}>
                清除轮廓
              </button>
            </div>
            <p className="hint">
              控制点按方位角环形线性插值（跨 0°/360° 连续），橙色虚线即遮挡线。
              轮廓为人工输入而非地形实测，仅存于本台站（{p.site.name}），换台站后遮挡状态按各自轮廓重算。
            </p>
          </>
        ) : (
          <>
            <p className="hint">
              当前台站（{p.site.name}）未配置遮挡轮廓，仅使用几何地平线（高度 0°），行为与之前一致。
            </p>
            <button className="btn" onClick={() => p.onSaveProfile(DEFAULT_PROFILE_POINTS)}>
              新建遮挡轮廓
            </button>
          </>
        )}
      </section>

      <section className="ctl-block">
        <h3>批注（绑定天球坐标，存 IndexedDB）</h3>
        <div className="save-row">
          <input type="color" value={noteColor} onChange={(e) => setNoteColor(e.target.value)} />
          <input placeholder="批注文字（锚定当前选中目标）" value={noteText} onChange={(e) => setNoteText(e.target.value)} />
          <button className="btn" disabled={!noteText.trim()} onClick={() => { p.onAddAnnotation(noteText.trim(), noteColor); setNoteText(''); }}>
            添加
          </button>
        </div>
        {p.annotations.length > 0 && (
          <ul className="store-list">
            {p.annotations.map((a) => (
              <li key={a.uuid}>
                <span className="dot" style={{ background: a.color }} />
                <button
                  className="link-btn"
                  onClick={() => p.onChangeFov({ centerRa: a.ra, centerDec: a.dec, radiusDeg: Math.max(10, p.fov.radiusDeg) })}
                  title="把视场中心移到批注位置"
                >
                  {a.text}
                </button>
                <button className="x-btn" onClick={() => p.onDeleteAnnotation(a.uuid)}>×</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function round3(v: number): number {
  return Math.round(v * 1000) / 1000;
}

/** 新建轮廓时的默认控制点（人工示例值，可逐点编辑） */
const DEFAULT_PROFILE_POINTS: HorizonControlPoint[] = [
  { azDeg: 0, altDeg: 5 },
  { azDeg: 90, altDeg: 12 },
  { azDeg: 180, altDeg: 4 },
  { azDeg: 270, altDeg: 18 }
];

/** 修改第 i 个控制点并保存（非法输入忽略，保持上次的值） */
function updatePoint(p: ControlsProps, i: number, patch: Partial<HorizonControlPoint>) {
  const pts = p.horizonProfile!.points.map((pt, k) => (k === i ? { ...pt, ...patch } : pt));
  const changed = pts[i];
  if (!Number.isFinite(changed.azDeg) || !Number.isFinite(changed.altDeg)) return;
  p.onSaveProfile(pts);
}

/** 在最大方位间隔的中点处插入新控制点，高度取两端插值 */
function addPoint(p: ControlsProps) {
  const pts = p.horizonProfile!.points;
  if (pts.length === 0) {
    p.onSaveProfile([{ azDeg: 0, altDeg: 5 }]);
    return;
  }
  const sorted = [...pts].sort((a, b) => a.azDeg - b.azDeg);
  let bestGap = -1;
  let bestIdx = 0;
  for (let k = 0; k < sorted.length; k++) {
    const a = sorted[k].azDeg;
    const b = k + 1 < sorted.length ? sorted[k + 1].azDeg : sorted[0].azDeg + 360;
    if (b - a > bestGap) {
      bestGap = b - a;
      bestIdx = k;
    }
  }
  const a = sorted[bestIdx];
  const b = bestIdx + 1 < sorted.length ? sorted[bestIdx + 1] : { azDeg: sorted[0].azDeg + 360, altDeg: sorted[0].altDeg };
  const newPt: HorizonControlPoint = { azDeg: (a.azDeg + b.azDeg) / 2, altDeg: (a.altDeg + b.altDeg) / 2 };
  p.onSaveProfile([...pts, newPt]);
}
