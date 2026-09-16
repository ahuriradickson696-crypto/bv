import { useEffect, type ReactNode } from 'react';
import type { GalleryTikTok } from '@/data/galleryMedia';

function ensureTikTokScript() {
  if (typeof window === 'undefined') return;
  if (document.querySelector('script[data-aviu-tiktok]')) {
    const tt = (window as unknown as { tiktok?: { embed?: { lib?: { render?: () => void } } } }).tiktok;
    tt?.embed?.lib?.render?.();
    return;
  }
  const s = document.createElement('script');
  s.src = 'https://www.tiktok.com/embed.js';
  s.async = true;
  s.setAttribute('data-aviu-tiktok', '1');
  document.body.appendChild(s);
}

/** Clean TikTok-only embed — no extra marketing copy */
export function TikTokEmbed({ item }: { item: GalleryTikTok; compact?: boolean }) {
  useEffect(() => {
    ensureTikTokScript();
    const t = window.setTimeout(() => ensureTikTokScript(), 500);
    return () => window.clearTimeout(t);
  }, [item.videoId]);

  return (
    <div className="tiktok-embed-wrap tiktok-clean">
      <blockquote
        className="tiktok-embed"
        cite={item.cite}
        data-video-id={item.videoId}
        data-autoplay="true"
        style={{ maxWidth: 605, minWidth: 280, margin: '0 auto' }}
      >
        <section>
          <a target="_blank" rel="noopener noreferrer" href={item.cite}>
            @{item.author?.replace('@', '') || 'avance_iu_uganda'} on TikTok
          </a>
        </section>
      </blockquote>
    </div>
  );
}

export function TikTokStrip({
  items,
  title,
  subtitle,
}: {
  items: GalleryTikTok[];
  title?: ReactNode;
  subtitle?: string;
}) {
  if (!items.length) return null;
  return (
    <section className="section-pad tiktok-strip-section">
      {(title || subtitle) && (
        <div className="section-heading">
          <div>
            {title && (
              <>
                <div className="eyebrow">
                  <span className="eyebrow-line" /> TikTok
                </div>
                <h2>{title}</h2>
              </>
            )}
          </div>
        </div>
      )}
      <div className="tiktok-strip-grid">
        {items.map((item) => (
          <TikTokEmbed key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
