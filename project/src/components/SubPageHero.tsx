import { type ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';

type Crumb = { label: string; path: string };

export function SubPageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
  children,
  images,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  crumbs: Crumb[];
  children?: ReactNode;
  images?: string[];
}) {
  const { navigate } = useRouter();

  return (
    <section className="page-hero">
      <BackgroundCarousel images={images} />
      <div className="page-hero-inner">
        <nav className="breadcrumb">
          {crumbs.map((crumb, i) => (
            <span key={crumb.path} className="breadcrumb-item">
              {i > 0 && <ChevronRight size={12} />}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  navigate(crumb.path);
                }}
                className={i === crumbs.length - 1 ? 'breadcrumb-current' : ''}
              >
                {crumb.label}
              </a>
            </span>
          ))}
        </nav>
        <div className="eyebrow" style={{ marginTop: '12px' }}>
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
