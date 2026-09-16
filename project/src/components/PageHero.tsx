import { type ReactNode } from 'react';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { defaultPageVideos } from '@/data/pageVideos';

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  images,
  videos,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  images?: string[];
  /** YouTube IDs for muted autoplay background */
  videos?: string[];
}) {
  const bgVideos = videos && videos.length > 0 ? videos : defaultPageVideos;

  return (
    <section className="page-hero">
      <BackgroundCarousel images={images} videos={bgVideos} overlay={0.8} />
      <div className="page-hero-inner">
        <div className="eyebrow">
          <span className="eyebrow-line" /> {eyebrow}
        </div>
        <h1>{title}</h1>
        {subtitle && <p className="page-hero-text">{subtitle}</p>}
        {children}
      </div>
      <div className="page-hero-deco" aria-hidden="true">
        <span className="deco-circle deco-1" />
        <span className="deco-circle deco-2" />
        <span className="deco-circle deco-3" />
      </div>
    </section>
  );
}
