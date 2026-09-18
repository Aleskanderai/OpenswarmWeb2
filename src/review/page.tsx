'use client';
import { asset } from '@/lib/assets';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Pause,
  Play,
} from 'lucide-react';
import { directions } from './data';
import { Scene } from './scenes';
import { openings } from './data';
import s from './storyboards.module.css';
const total = directions.reduce((n, d) => n + d.frames.length, 0);
export default function Storyboards() {
  const [selected, setSelected] = useState(0),
    [beat, setBeat] = useState(0),
    [playing, setPlaying] = useState(false),
    [motionOn, setMotionOn] = useState(true),
    [saved, setSaved] = useState<string[]>([]),
    [ready, setReady] = useState(false),
    [filter, setFilter] = useState('All');
  const stage = useRef<HTMLElement>(null),
    viewer = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const current = directions[selected];
  useEffect(() => {
    const r = requestAnimationFrame(() => {
      try {
        const v = JSON.parse(
          localStorage.getItem('openswarm-storyboard-shortlist') || '[]',
        );
        if (Array.isArray(v))
          setSaved(
            v.filter(
              (x) =>
                typeof x === 'string' && directions.some((d) => d.id === x),
            ),
          );
      } catch {}
      const q = new URLSearchParams(location.search);
      const i = directions.findIndex((d) => d.id === q.get('direction'));
      if (i >= 0) {
        setSelected(i);
        const b = Number(q.get('frame'));
        if (b >= 1 && b <= directions[i].frames.length) setBeat(b - 1);
      }
      setReady(true);
    });
    return () => cancelAnimationFrame(r);
  }, []);
  useEffect(() => {
    if (ready)
      try {
        localStorage.setItem(
          'openswarm-storyboard-shortlist',
          JSON.stringify(saved),
        );
      } catch {}
  }, [saved, ready]);
  useEffect(() => {
    const el = viewer.current;
    if (!el) return;
    const o = new IntersectionObserver(
      ([e]) => {
        setVisible(e.isIntersecting);
        if (!e.isIntersecting) setPlaying(false);
      },
      { threshold: 0.15 },
    );
    o.observe(el);
    return () => o.disconnect();
  }, []);
  useEffect(() => {
    const fn = () => {
      if (document.hidden) setPlaying(false);
    };
    document.addEventListener('visibilitychange', fn);
    return () => document.removeEventListener('visibilitychange', fn);
  }, []);
  useEffect(() => {
    if (!playing || !visible) return;
    const t = setTimeout(() => {
      if (beat === current.frames.length - 1) setPlaying(false);
      else setBeat(beat + 1);
    }, 5500);
    return () => clearTimeout(t);
  }, [playing, beat, visible, current.frames.length]);
  function select(index: number, scroll = true) {
    setSelected(index);
    setBeat(0);
    setPlaying(false);
    history.replaceState({}, '', `?direction=${directions[index].id}`);
    if (scroll)
      stage.current?.scrollIntoView({
        behavior: matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'instant'
          : 'smooth',
        block: 'start',
      });
  }
  function chooseFrame(index: number) {
    setBeat(index);
    setPlaying(false);
    history.replaceState({}, '', `?direction=${current.id}&frame=${index + 1}`);
  }
  function shortlist() {
    setSaved((v) =>
      v.includes(current.id)
        ? v.filter((x) => x !== current.id)
        : [...v, current.id],
    );
  }
  return (
    <main
      className={s.review}
      data-storyboard-review
      data-ready={ready}
      id="main-content"
    >
      <header className={s.reviewHeader}>
        <a href="#top" className={s.reviewBrand}>
          <img src={asset('openswarm-mark.png')} alt="" />
          OpenSwarm <span>/ Direction studies</span>
        </a>
        <a href="#directions">
          All 30 directions
          <ArrowDown size={15} />
        </a>
      </header>
      <section className={s.introduction} id="top">
        <div>
          <span className={s.reviewEyebrow}>
            OpenSwarm · Design exploration 03
          </span>
          <h1>
            More than a look.
            <br />A way to work.
          </h1>
        </div>
        <div>
          <p>
            30 directions. Six or seven scenes in each. Explore the opening,
            navigation, product interactions, and the way the story comes
            together.
          </p>
          <p className={s.quiet}>
            Rebuilt around your native components, spatial references and
            feedback. Choose a direction to inspect it at full size.
          </p>
        </div>
      </section>
      <section
        className={s.gridSection}
        id="directions"
        aria-label="Thirty design directions"
      >
        <div className={s.sectionLabel}>
          <span>30 directions / {total} scenes</span>
          <div className={s.filters} aria-label="Filter directions">
            {[
              'All',
              'Light',
              'Dark',
              'Graphic',
              'ASCII',
              'No product hero',
              'Shortlisted',
            ].map((x) => (
              <button
                key={x}
                aria-pressed={filter === x}
                onClick={() => setFilter(x)}
              >
                {x}
              </button>
            ))}
          </div>
        </div>
        <div className={s.directionGrid}>
          {directions
            .filter(
              (d) =>
                filter === 'All' ||
                d.group === filter ||
                (filter === 'No product hero' && !openings[d.id].product) ||
                (filter === 'Shortlisted' && saved.includes(d.id)),
            )
            .map((d) => (
              <article
                key={d.id}
                className={`${s.directionCard} ${current.id === d.id ? s.selectedCard : ''}`}
              >
                <button
                  className={s.cardHit}
                  aria-label={`Explore ${d.number} ${d.name}`}
                  onClick={() => select(directions.indexOf(d))}
                />
                <div className={s.cardTop}>
                  <div className={s.cardScene} inert>
                    <Scene id={d.id} beat={0} preview />
                  </div>
                  {saved.includes(d.id) && (
                    <span className={s.savedBadge}>
                      <Check size={12} />
                      Shortlisted
                    </span>
                  )}
                </div>
                <div className={s.cardLabel}>
                  <span>{d.number}</span>
                  <strong>{d.name}</strong>
                  <ArrowUpRight />
                </div>
                <p>{d.category}</p>
              </article>
            ))}
        </div>
        {filter === 'Shortlisted' && !saved.length && (
          <p>
            No directions shortlisted yet. Open a direction and add it here.
          </p>
        )}
      </section>
      <section
        className={s.detail}
        ref={stage}
        id="storyboard"
        aria-label="Selected storyboard"
      >
        <div className={s.detailHeading}>
          <div>
            <span className={s.reviewEyebrow}>
              Direction {current.number} of 30 · {current.frames.length} scenes
            </span>
            <h2>{current.name}</h2>
            <p>{current.category}</p>
          </div>
          <div className={s.detailActions}>
            <button
              onClick={shortlist}
              aria-pressed={saved.includes(current.id)}
            >
              {saved.includes(current.id) ? (
                <>
                  <Check size={15} />
                  Shortlisted
                </>
              ) : (
                'Add to shortlist'
              )}
            </button>
            <button
              aria-label="Previous direction"
              onClick={() =>
                select(
                  (selected + directions.length - 1) % directions.length,
                  false,
                )
              }
            >
              <ArrowLeft size={17} />
            </button>
            <button
              aria-label="Next direction"
              onClick={() => select((selected + 1) % directions.length, false)}
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
        <p className={s.thesis}>{current.thesis}</p>
        <div className={s.transport}>
          <div role="group" aria-label="Storyboard scenes">
            {current.frames.map((f, i) => (
              <button
                key={i}
                aria-pressed={beat === i}
                onClick={() => chooseFrame(i)}
              >
                <span>{String(i + 1).padStart(2, '0')}</span>
                {f.name}
              </button>
            ))}
          </div>
          <button
            className={s.motionToggle}
            aria-pressed={motionOn}
            onClick={() => setMotionOn((v) => !v)}
          >
            Motion {motionOn ? 'on' : 'off'}
          </button>
          <button
            className={s.play}
            onClick={() => {
              if (playing) setPlaying(false);
              else {
                setBeat(0);
                setPlaying(true);
              }
            }}
          >
            {playing ? <Pause size={15} /> : <Play size={15} />}{' '}
            {playing ? 'Pause sequence' : 'Play sequence'}
          </button>
        </div>
        <div
          className={s.viewer}
          ref={viewer}
          data-testid="storyboard-viewer"
          data-direction={current.id}
          data-frame={beat + 1}
          onPointerDown={() => {
            if (playing) setPlaying(false);
          }}
        >
          <Scene
            key={current.id}
            id={current.id}
            beat={beat}
            active={motionOn && visible}
            onChapter={chooseFrame}
          />
          <div
            className={s.playProgress}
            data-playing={playing}
            key={`${current.id}-${beat}-${playing}`}
          />
        </div>
        <div className={s.frameDescription} aria-live="polite">
          <span>
            Scene {beat + 1} / {current.frames[beat].name}
          </span>
          <div>
            <h3>{current.frames[beat].title}</h3>
            <p>
              {beat === 0
                ? openings[current.id].motion
                : current.frames[beat].motion}
            </p>
            <span className={s.try}>
              <ArrowUpRight size={14} />
              {current.frames[beat].action}
            </span>
          </div>
        </div>
        <div className={s.filmstrip} aria-label="Complete storyboard">
          {current.frames.map((f, i) => (
            <article key={`${current.id}-${i}`} data-selected={beat === i}>
              <button
                className={s.cardHit}
                aria-label={`View scene ${i + 1}: ${f.name}`}
                aria-pressed={beat === i}
                onClick={() => chooseFrame(i)}
              />
              <div inert>
                <Scene id={current.id} beat={i} preview />
              </div>
              <span>
                {String(i + 1).padStart(2, '0')}
                <strong>{f.name}</strong>
                <ArrowRight size={14} />
              </span>
            </article>
          ))}
        </div>
        <div className={s.notes}>
          <div>
            <span className={s.reviewEyebrow}>Reference foundation</span>
            <h3>{current.source}</h3>
            <p>{current.borrow}</p>
          </div>
          <div>
            <span className={s.reviewEyebrow}>What makes it different</span>
            <h3>{current.name}</h3>
            <p>{openings[current.id].composition}</p>
          </div>
          <div>
            <span className={s.reviewEyebrow}>Material and product</span>
            <div className={s.palette}>
              {current.palette.map((x) => (
                <span key={x} style={{ background: x }} title={x} />
              ))}
            </div>
            <p>
              Original OpenSwarm mark and source-derived product anatomy.
              Interactive sample content is illustrative; native recordings and
              supplied Evidence Lab captures are identified.
            </p>
          </div>
        </div>
      </section>
      <section className={s.shortlist}>
        <div>
          <span className={s.reviewEyebrow}>Your shortlist</span>
          <h2>
            {saved.length
              ? `${saved.length} direction${saved.length === 1 ? '' : 's'} to take further.`
              : 'Find the direction that feels right.'}
          </h2>
          <p>
            Shortlist a few as you explore. Your choices stay in this browser.
          </p>
        </div>
        <div>
          {saved.length ? (
            saved.map((id) => {
              const d = directions.find((x) => x.id === id)!;
              return (
                <button key={id} onClick={() => select(directions.indexOf(d))}>
                  {d.number} {d.name}
                  <ArrowUpRight size={16} />
                </button>
              );
            })
          ) : (
            <a href="#directions">
              Back to all 30
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </section>
      <footer className={s.reviewFooter}>
        <span>OpenSwarm / Direction studies</span>
        <span>30 directions · {total} scenes · Interactive studies</span>
        <span>Local design review</span>
      </footer>
    </main>
  );
}
