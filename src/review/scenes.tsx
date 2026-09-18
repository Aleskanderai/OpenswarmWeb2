'use client';
import { asset } from '@/lib/assets';
import { useEffect, useId, useRef, useState, type CSSProperties } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  FileText,
  Grid2X2,
  Layers,
  MessageSquare,
  Pause,
  Play,
  Workflow,
  X,
} from 'lucide-react';
import { directions, type Direction, type ChapterKind } from './data';
import { Product } from './product';
import { Evidence } from './evidence';
import { HeroArtwork } from './heroes';
import { openings } from './data';
import s from './storyboards.module.css';
export function Brand() {
  return (
    <span className={s.brand}>
      <img src={asset('openswarm-mark.png')} alt="" />
      OpenSwarm
    </span>
  );
}
const capabilities = [
  {
    name: 'One open workspace',
    body: 'Keep the whole project in view.',
    icon: Layers,
    kind: 'canvas',
  },
  {
    name: 'Agents that work together',
    body: 'Independent work. Shared context.',
    icon: MessageSquare,
    kind: 'request',
  },
  {
    name: 'Your apps and tools',
    body: 'Bring your context into the work.',
    icon: Grid2X2,
    kind: 'apps',
  },
  {
    name: 'Workflows that follow through',
    body: 'A clear process, from start to finish.',
    icon: Workflow,
    kind: 'workflow',
  },
];
function Navigation({
  direction: d,
  beat,
  preview: _preview,
  onChapter,
}: {
  direction: Direction;
  beat: number;
  preview: boolean;
  onChapter?: (n: number) => void;
}) {
  const [open, setOpen] = useState(d.frames[beat].kind === 'menu');
  const [hover, setHover] = useState(0);
  const nav = useRef<HTMLDivElement>(null);
  const menuId = useId();
  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent) => {
      if (!nav.current?.contains(e.target as Node)) setOpen(false);
    };
    const escape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', close);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', close);
      document.removeEventListener('keydown', escape);
    };
  }, [open]);
  function chapter(kind: string) {
    let n = d.frames.findIndex((x) => x.kind === kind);
    if (n < 0) n = d.frames.findIndex((x) => x.kind === 'canvas');
    onChapter?.(Math.max(0, n));
    setOpen(false);
  }
  return (
    <div
      role="navigation"
      aria-label="OpenSwarm sample navigation"
      className={s.navigation}
      data-treatment={d.header}
      ref={nav}
    >
      <div className={s.navBar}>
        <button
          className={s.brandButton}
          aria-label="OpenSwarm opening"
          onClick={() => onChapter?.(0)}
        >
          <Brand />
        </button>
        <div className={s.navLinks}>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={menuId}
          >
            Platform
            <ChevronDown />
          </button>
          <button onClick={() => chapter('apps')}>Solutions</button>
          <button onClick={() => chapter('film')}>Resources</button>
        </div>
        <button className={s.navCta} onClick={() => chapter('request')}>
          Get OpenSwarm
          <ArrowUpRight />
        </button>
      </div>
      {open && (
        <>
          <div className={s.menuVeil} />
          <div className={s.megaMenu} id={menuId}>
            <div className={s.megaLinks}>
              <span>Explore the platform</span>
              {capabilities.map((x, i) => (
                <button
                  key={x.name}
                  onMouseEnter={() => setHover(i)}
                  onFocus={() => setHover(i)}
                  onClick={() => chapter(x.kind)}
                >
                  <x.icon />
                  <span>
                    <strong>{x.name}</strong>
                    <small>{x.body}</small>
                  </span>
                  <ArrowUpRight />
                </button>
              ))}
            </div>
            <div className={s.megaPreview}>
              <div className={s.megaPreviewArt}>
                {d.image ? (
                  <img src={d.image} alt="" loading="lazy" />
                ) : (
                  <Graphic
                    type={d.graphic ?? 'orbit'}
                    dark={d.dark}
                    active={false}
                    preview
                  />
                )}
                <div>
                  <Layers />
                  <span>
                    {['Conversation', 'Research', 'Sources'][hover % 3]}
                  </span>
                  <FileText />
                  <strong>{capabilities[hover].name}</strong>
                </div>
              </div>
              <h3>{capabilities[hover].name}</h3>
              <p>{capabilities[hover].body}</p>
              <button onClick={() => chapter(capabilities[hover].kind)}>
                Explore the workspace
                <ArrowRight />
              </button>
            </div>
            <button
              className={s.menuClose}
              aria-label="Close platform menu"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
function Graphic({
  type,
  dark,
  active,
  preview,
}: {
  type: string;
  dark: boolean;
  active: boolean;
  preview: boolean;
}) {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const el = canvas.current;
    if (!el || !['flock', 'weave', 'contour'].includes(type)) return;
    const ctx = el.getContext('2d');
    if (!ctx) return;
    let raf = 0;
    let time = 0;
    let last = 0;
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const w = 1000,
      h = 620;
    el.width = w;
    el.height = h;
    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.font = '10px ui-monospace, SFMono-Regular, monospace';
      const chars = ' .:+/\\|*#';
      for (let y = 0; y < h; y += 12)
        for (let x = 0; x < w; x += 9) {
          const xx = x / w,
            yy = y / h;
          let density = 0;
          if (type === 'contour') {
            const yy2 = yy - 0.02 * Math.sin(xx * 12 + t * 0.15);
            const outer = xx > 0.13 && xx < 0.88 && yy2 > 0.12 && yy2 < 0.9;
            const hole = xx > 0.3 && xx < 0.7 && yy2 > 0.32;
            density =
              outer && !hole
                ? 0.52 + 0.46 * Math.abs(Math.sin(xx * 19 + yy * 31 + t * 0.08))
                : 0;
          } else if (type === 'flock') {
            const spine = 0.5 + 0.15 * Math.sin(xx * 6 + t * 0.2);
            const wid = 0.05 + 0.18 * Math.pow(Math.sin(xx * 3.14), 2);
            density = Math.max(0, 1 - Math.abs(yy - spine) / wid);
            density *= 0.55 + 0.45 * Math.sin(xx * 14 + yy * 7 + t * 0.15) ** 2;
          } else {
            const a = Math.sin(xx * 10 + Math.sin(yy * 5 + t * 0.08) * 2);
            const b = Math.cos(yy * 12 + xx * 3 - t * 0.12);
            density = Math.abs(a * b) > 0.43 ? 0.55 + Math.abs(a * b) * 0.4 : 0;
            density *= Math.min(1, xx * 6, (1 - xx) * 6);
          }
          if (density > 0.13) {
            ctx.fillStyle = dark
              ? `rgba(200,225,222,${density * 0.75})`
              : `rgba(26,68,76,${density * 0.65})`;
            const n = Math.min(
              chars.length - 1,
              Math.floor(density * chars.length),
            );
            ctx.fillText(chars[(n + Math.floor(xx * 13)) % chars.length], x, y);
          }
        }
    };
    draw(0);
    const tick = (now: number) => {
      if (now - last > 75) {
        time += 0.075;
        draw(time);
        last = now;
      }
      raf = requestAnimationFrame(tick);
    };
    const update = () => {
      cancelAnimationFrame(raf);
      if (active && !preview && !media.matches && !document.hidden)
        raf = requestAnimationFrame(tick);
    };
    update();
    media.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    return () => {
      cancelAnimationFrame(raf);
      media.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
    };
  }, [type, dark, active, preview]);
  if (['flock', 'weave', 'contour'].includes(type))
    return (
      <canvas ref={canvas} className={s.characterArt} aria-hidden="true" />
    );
  return (
    <svg
      className={s.networkArt}
      viewBox="0 0 1200 760"
      aria-hidden="true"
      data-active={active && !preview}
      data-graphic={type}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {Array.from({ length: 14 }, (_, i) => (
          <path
            key={i}
            d={
              type === 'grid'
                ? `M ${80 + i * 80} 80 V680 M80 ${80 + i * 44} H1120`
                : `M ${40 + i * 8} ${110 + i * 40} C 440 ${20 + i * 8} 690 ${720 - i * 9} ${1150 - i * 6} ${85 + i * 43}`
            }
          />
        ))}
      </g>
      {type === 'orbit' && (
        <g>
          {[
            { x: 180, y: 220, t: 'Research' },
            { x: 1030, y: 160, t: 'Sources' },
            { x: 280, y: 570, t: 'Your apps' },
            { x: 940, y: 540, t: 'The next step' },
          ].map((n) => (
            <g key={n.t} transform={`translate(${n.x} ${n.y})`}>
              <circle r="8" fill="currentColor" />
              <text
                x="18"
                y="6"
                fill="currentColor"
                fontSize="18"
                fontFamily="Arial,sans-serif"
              >
                {n.t}
              </text>
            </g>
          ))}
        </g>
      )}
    </svg>
  );
}
function Environment({
  direction: d,
  active,
  preview,
}: {
  direction: Direction;
  active: boolean;
  preview: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      if (active && !media.matches && !document.hidden)
        void v.play().catch(() => {});
      else v.pause();
    };
    update();
    media.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    return () => {
      v.pause();
      media.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
    };
  }, [active]);
  return (
    <div className={s.environment} aria-hidden="true">
      {d.image && (
        <img src={d.image} alt="" loading={preview ? 'lazy' : 'eager'} />
      )}{' '}
      {d.film && !preview && (
        <video
          ref={ref}
          src={d.film}
          muted
          playsInline
          loop
          preload="none"
          poster={d.image}
        />
      )}{' '}
      {d.graphic && (
        <Graphic
          type={d.graphic}
          dark={d.dark}
          active={active}
          preview={preview}
        />
      )}
      <div className={s.environmentVeil} />
    </div>
  );
}
function NativeFilm({
  active,
  preview,
}: {
  active: boolean;
  preview: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [manual, setManual] = useState<boolean | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let inView = false;
    const update = () => {
      if (
        inView &&
        !document.hidden &&
        (manual === true || (manual === null && active && !media.matches))
      )
        void v.play().catch(() => {});
      else v.pause();
    };
    const observer = new IntersectionObserver(
      ([e]) => {
        inView = e.isIntersecting;
        update();
      },
      { threshold: 0.1 },
    );
    observer.observe(v);
    update();
    media.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    return () => {
      v.pause();
      observer.disconnect();
      media.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
    };
  }, [active, manual]);
  return (
    <div className={s.nativeFilm}>
      {preview ? (
        <img
          src={asset('homepage-review/canvas-wide.webp')}
          alt="OpenSwarm native canvas"
        />
      ) : (
        <video
          ref={ref}
          src={asset('motion/canvas-loop.mp4')}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          poster={asset('homepage-review/canvas-wide.webp')}
          preload="none"
          muted
          playsInline
          loop
        />
      )}
      <div>
        <span>Actual OpenSwarm recording</span>
        <button
          onClick={() => setManual(!isPlaying)}
          aria-label={
            isPlaying ? 'Pause native recording' : 'Play native recording'
          }
        >
          {isPlaying ? <Pause /> : <Play />}
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}
export function Scene({
  id,
  beat,
  active = false,
  preview = false,
  onChapter,
}: {
  id: string;
  beat: number;
  active?: boolean;
  preview?: boolean;
  onChapter?: (n: number) => void;
}) {
  const d = directions.find((x) => x.id === id) ?? directions[0];
  const frame = d.frames[Math.min(beat, d.frames.length - 1)];
  const hero = frame.kind === 'hero';
  const ending = frame.kind === 'closing';
  const opening = openings[d.id];
  const chapterFor = (kind: ChapterKind) =>
    Math.max(
      1,
      d.frames.findIndex((f) => f.kind === kind),
    );
  const go = () => {
    const i = d.frames.findIndex((x) => x.kind === 'request');
    onChapter?.(i >= 0 ? i : 1);
  };
  return (
    <div
      className={s.scene}
      data-id={d.id}
      data-layout={d.layout}
      data-opening={opening.mode}
      data-dark={d.dark}
      data-kind={frame.kind}
      data-beat={beat}
      data-long-title={frame.title.length > 55}
      data-active={active}
      data-preview={preview}
      style={
        {
          '--scene-ink': d.dark ? '#f6f6f3' : '#1b2930',
          '--scene-paper': d.dark ? '#10171a' : '#fafbf9',
        } as CSSProperties
      }
    >
      <Environment direction={d} active={active} preview={preview} />
      <div className={s.sceneStructure} />
      <Navigation
        key={`${d.id}-${beat}`}
        direction={d}
        beat={beat}
        preview={preview}
        onChapter={onChapter}
      />
      <div className={s.sceneIntro} key={`${d.id}-${frame.kind}`}>
        <h2>{hero ? d.headline : frame.title}</h2>
        <p>{hero ? d.subtitle : frame.body}</p>
        {(hero || ending) && (
          <button className={s.sceneCta} onClick={go}>
            Get OpenSwarm
            <ArrowUpRight />
          </button>
        )}
      </div>
      {hero && (
        <HeroArtwork id={d.id} onChapter={onChapter} chapterFor={chapterFor} />
      )}
      {!ending && frame.kind !== 'menu' && (!hero || opening.product) && (
        <div className={s.stage} data-native-stage>
          {frame.kind === 'evidence' ? (
            <Evidence preview={preview} />
          ) : frame.kind === 'film' ? (
            <NativeFilm active={active} preview={preview} />
          ) : (
            <Product
              direction={d}
              kind={hero ? opening.product! : frame.kind}
              preview={preview}
              onAdvance={go}
            />
          )}
        </div>
      )}
      {frame.kind === 'menu' && (
        <div className={s.menuBackdrop}>
          <Product direction={d} kind="hero" preview />
        </div>
      )}
      {ending && (
        <>
          <div className={s.closingProduct}>
            <Product
              direction={d}
              kind="closing"
              preview={preview}
              onAdvance={go}
            />
          </div>
          <footer className={s.sceneFooter}>
            <Brand />
            <div>
              <button onClick={() => onChapter?.(1)}>Platform</button>
              <button onClick={() => onChapter?.(2)}>Explore the work</button>
              <button onClick={() => onChapter?.(0)}>
                Back to the opening
                <ArrowUpRight />
              </button>
            </div>
            <span>A workspace for what comes next.</span>
          </footer>
        </>
      )}
    </div>
  );
}
