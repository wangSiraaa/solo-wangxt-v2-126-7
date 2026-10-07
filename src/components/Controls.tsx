// 控制面板：观测位置/时间、视场中心与角半径、星等与地平线独立筛选、
// 演示场景、视场与批注的 IndexedDB 存取、自定义台站的站点遮挡轮廓编辑。

import { useState } from 'react';
import { OBSERVING_SITES } from '../data/sites';
import { DEMO_SCENARIOS } from '../data/scenarios';
import { normAz, sampleOcclusionAlt } from '../lib/horizonProfile';
import type { FovConfig, SavedFov, Annotation, SiteState, HorizonPoint } from '../types';

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
  /** 当前台站的遮挡轮廓控制点（录入顺序，可为空数组） */
  horizonProfile: HorizonPoint[];
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
  onChangeProfile: (points: HorizonPoint[]) => void;
}

/** 山体示例轮廓：跨 0°/360° 方位（350°→15° 之间环形插值），便于验证连续性 */
const SAMPLE_PROFILE: HorizonPoint[] = [
  { az: 350, alt: 12 },
  { az: 15, alt: 18 },
  { az: 45, alt: 9 },
  { az: 90, alt: 4 },
  { az: 150, alt: 1 },
  { az: 210, alt: 0 },
  { az: 270, alt: 6 },
  { az: 320, alt: 9 }
];

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

      {p.site.id === 'custom' && (
        <section className="ctl-block">
          <h3>站点遮挡轮廓（人工输入，非地形实测）</h3>
          <p className="hint">
            山地台站的真实地平线并非处处 0°：按方位角录入少量遮挡控制点，系统按方位环形线性插值
            （0° 与 360° 同值、跨零点连续）。仅存本地 IndexedDB，换台站后自动重算遮挡状态。
          </p>
          {p.horizonProfile.map((pt, i) => (
            <div className="profile-row" key={i}>
              <label>
                方位°
                <input
                  type="number"
                  min={0}
                  max={360}
                  step={1}
                  value={Number.isFinite(pt.az) ? pt.az : ''}
                  onChange={(e) => {
                    const next = p.horizonProfile.slice();
                    next[i] = { ...pt, az: Number(e.target.value) };
                    p.onChangeProfile(next);
                  }}
                />
              </label>
              <label>
                遮挡高度°
                <input
                  type="number"
                  min={-90}
                  max={90}
                  step={0.5}
                  value={Number.isFinite(pt.alt) ? pt.alt : ''}
                  onChange={(e) => {
                    const next = p.horizonProfile.slice();
                    next[i] = { ...pt, alt: Number(e.target.value) };
                    p.onChangeProfile(next);
                  }}
                />
              </label>
              <button
                className="x-btn"
                title="删除该控制点"
                onClick={() => p.onChangeProfile(p.horizonProfile.filter((_, k) => k !== i))}
              >
                ×
              </button>
            </div>
          ))}
          <div className="btn-row">
            <button
              className="btn"
              onClick={() => {
                const last = p.horizonProfile[p.horizonProfile.length - 1];
                const az = last ? (normAz(last.az) + 30) % 360 : 0;
                p.onChangeProfile([...p.horizonProfile, { az, alt: 5 }]);
              }}
            >
              添加控制点
            </button>
            <button className="btn" onClick={() => p.onChangeProfile(SAMPLE_PROFILE.map((x) => ({ ...x })))}>
              填入山体示例
            </button>
            <button className="btn" disabled={p.horizonProfile.length === 0} onClick={() => p.onChangeProfile([])}>
              清空轮廓
            </button>
          </div>
          {p.horizonProfile.length > 0 && <ProfilePreview points={p.horizonProfile} />}
        </section>
      )}

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

/**
 * 轮廓预览：横轴方位 0°→360°，纵轴遮挡高度。
 * 采样走完整的方位环，首尾同值，直观验证跨 0°/360° 连续。
 */
function ProfilePreview({ points }: { points: HorizonPoint[] }) {
  const W = 252;
  const H = 72;
  const padL = 6;
  const padR = 6;
  const padT = 6;
  const padB = 13;
  const alts = points.map((pt) => pt.alt).filter(Number.isFinite);
  const hi = Math.max(10, ...alts) * 1.12;
  const lo = Math.min(0, ...alts);
  const x = (az: number) => padL + (normAz(az) / 360) * (W - padL - padR);
  const y = (alt: number) => padT + (1 - (alt - lo) / (hi - lo || 1)) * (H - padT - padB);
  const samples: string[] = [];
  for (let az = 0; az <= 360; az += 3) {
    samples.push(`${x(az).toFixed(1)},${y(sampleOcclusionAlt(points, az)).toFixed(1)}`);
  }
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="profile-preview">
      {/* 几何地平线（0°） */}
      <line x1={padL} x2={W - padR} y1={y(0)} y2={y(0)} stroke="#ff5d5d" strokeWidth={1} />
      {/* 遮挡轮廓（环形插值采样） */}
      <polyline points={samples.join(' ')} fill="none" stroke="#ffb74d" strokeWidth={1.6} />
      {points.map((pt, i) =>
        Number.isFinite(pt.az) && Number.isFinite(pt.alt) ? (
          <circle key={i} cx={x(pt.az)} cy={y(pt.alt)} r={2.4} fill="#ffb74d" />
        ) : null
      )}
      <text x={padL} y={H - 2} fontSize={8} fill="#93a5c8">
        0° 北
      </text>
      <text x={W / 2} y={H - 2} fontSize={8} fill="#93a5c8" textAnchor="middle">
        180° 南
      </text>
      <text x={W - padR} y={H - 2} fontSize={8} fill="#93a5c8" textAnchor="end">
        360°（=0°，连续）
      </text>
    </svg>
  );
}
