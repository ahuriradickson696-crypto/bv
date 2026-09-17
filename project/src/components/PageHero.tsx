import { type ReactNode } from 'react';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  images,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  images?: string[];
}) {
  return (
    <section className="page-hero">
      <BackgroundCarousel images={images} />
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
