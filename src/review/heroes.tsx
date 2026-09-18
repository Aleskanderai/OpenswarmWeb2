'use client';
import { asset } from '@/lib/assets';
import { ArrowUpRight } from 'lucide-react';
import type { ChapterKind } from './data';
import s from './storyboards.module.css';

export function HeroArtwork({
  id,
  onChapter,
  chapterFor,
}: {
  id: string;
  onChapter?: (n: number) => void;
  chapterFor: (kind: ChapterKind) => number;
}) {
  if (id === 'prism' || id === 'confluence') {
    const materials =
      id === 'prism'
        ? [
            asset('storyboards/monument.webp'),
            asset('storyboards/living.webp'),
            asset('storyboards/afterglow.webp'),
          ]
        : [
            asset('storyboards/estuary.webp'),
            asset('storyboards-v3/botanical.webp'),
            asset('storyboards-v3/green-folds.webp'),
          ];
    return (
      <div className={s.heroGallery}>
        {(['sources', 'canvas', 'artifact'] as const).map((kind, i) => (
          <button key={kind} onClick={() => onChapter?.(chapterFor(kind))}>
            <img src={materials[i]} alt="" loading="lazy" />
            <span>
              {
                [
                  'Start with context',
                  'See the whole idea',
                  'Make something useful',
                ][i]
              }
              <ArrowUpRight />
            </span>
          </button>
        ))}
      </div>
    );
  }
  if (id === 'aperture')
    return (
      <div className={s.heroSlit}>
        <img src={asset('storyboards-v3/green-folds.webp')} alt="" />
      </div>
    );
  if (id === 'folio')
    return (
      <div className={s.paperFold} aria-hidden="true">
        <div />
        <div />
        <div />
      </div>
    );
  if (id === 'higher')
    return <div className={s.cloudAperture} aria-hidden="true" />;
  return null;
}
