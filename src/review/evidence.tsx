'use client';
import { asset } from '@/lib/assets';
import { useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import s from './storyboards.module.css';

const captures = [
  {
    label: 'Viasat case',
    file: 'evidence-viasat.webp',
    alt: 'Supplied OpenSwarm Evidence Studio screenshot: Viasat simulation, disclosed calculation and linked source filings.',
  },
  {
    label: 'ON Semiconductor case',
    file: 'evidence-on.webp',
    alt: 'Supplied OpenSwarm Evidence Studio screenshot: ON Semiconductor simulation with its completed mechanical result.',
  },
];

export function Evidence({ preview = false }: { preview?: boolean }) {
  const [selected, setSelected] = useState(0);
  const pane = useRef<HTMLDivElement>(null);
  const capture = captures[selected];
  return (
    <div className={s.evidenceFrame}>
      <div className={s.evidenceBar}>
        <span>
          <FileText /> Evidence Lab <small>Supplied app capture</small>
        </span>
        <div>
          {captures.map((c, i) => (
            <button
              key={c.file}
              aria-pressed={i === selected}
              onClick={() => {
                setSelected(i);
                pane.current?.scrollTo(0, 0);
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
        <a
          href={asset(`storyboards-v3/${capture.file}`)}
          target="_blank"
          rel="noreferrer"
          aria-label="Open full supplied app capture"
        >
          <ArrowUpRight />
        </a>
      </div>
      <div
        className={s.evidenceScroll}
        ref={pane}
        tabIndex={preview ? -1 : 0}
        role="region"
        aria-label="Scrollable supplied app capture"
      >
        <img
          src={asset(`storyboards-v3/${capture.file}`)}
          alt={capture.alt}
          loading="lazy"
        />
      </div>
      <div className={s.evidenceCaption}>
        <span>
          Original screenshot · demonstration data and assumptions retained
        </span>
        <span>
          Scroll to inspect the detail <ArrowDown />
        </span>
      </div>
    </div>
  );
}
