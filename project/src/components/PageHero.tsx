import { type ReactNode } from 'react';
import { AVIU_VIDEOS, youtubeBgSrc } from '@/data/pageVideos';

/**
 * Compact page banner — title always readable.
 * Video stays behind the banner only; page body is never covered.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  images?: string[];
  videos?: string[];
}) {
  // Graduation + campus environment
  const bgId = AVIU_VIDEOS.facilities;

  return (
    <section className="page-hero-safe">
      <div className="page-hero-safe-bg" aria-hidden="true">
        <iframe
          src={youtubeBgSrc(bgId)}
          title=""
          allow="autoplay; encrypted-media"
          tabIndex={-1}
        />
        <div className="page-hero-safe-shade" />
      </div>
      <div className="page-hero-safe-content">
        <p className="page-hero-safe-eyebrow">{eyebrow}</p>
        <h1 className="page-hero-safe-title">{title}</h1>
        {subtitle ? <p className="page-hero-safe-sub">{subtitle}</p> : null}
        {children}
      </div>
    </section>
  );
}
