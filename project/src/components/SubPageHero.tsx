import { type ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { useRouter } from '@/router/Router';
import { AVIU_VIDEOS, youtubeBgSrc } from '@/data/pageVideos';

type Crumb = { label: string; path: string };

export function SubPageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  crumbs: Crumb[];
  children?: ReactNode;
  images?: string[];
  videos?: string[];
}) {
  const { navigate } = useRouter();
  const bgId = AVIU_VIDEOS.installation;

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
        <nav className="page-hero-safe-crumbs" aria-label="Breadcrumb">
          {crumbs.map((crumb, i) => (
            <span key={crumb.path}>
              {i > 0 && <ChevronRight size={12} />}
              <button
                type="button"
                className={i === crumbs.length - 1 ? 'is-current' : ''}
                onClick={() => navigate(crumb.path)}
              >
                {crumb.label}
              </button>
            </span>
          ))}
        </nav>
        <p className="page-hero-safe-eyebrow">{eyebrow}</p>
        <h1 className="page-hero-safe-title">{title}</h1>
        {subtitle ? <p className="page-hero-safe-sub">{subtitle}</p> : null}
        {children}
      </div>
    </section>
  );
}
