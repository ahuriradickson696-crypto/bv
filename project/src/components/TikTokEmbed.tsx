import type { ReactNode } from 'react';
import type { GalleryTikTok } from '@/data/galleryMedia';

/**
 * TikTok via official embed iframe — reliable on mobile & desktop.
 * Does not autoplay with sound.
 */
export function TikTokEmbed({ item }: { item: GalleryTikTok; compact?: boolean }) {
  const src = `https://www.tiktok.com/embed/v2/${item.videoId}?lang=en-US`;

  return (
    <div className="tiktok-embed-wrap tiktok-clean">
      <iframe
        src={src}
        title={item.title || 'AVIU on TikTok'}
        allow="encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="tiktok-iframe"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <a
        className="tiktok-open-link"
        href={item.cite}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open on TikTok
      </a>
    </div>
  );
}

export function TikTokStrip({
  items,
  title,
}: {
  items: GalleryTikTok[];
  title?: ReactNode;
  subtitle?: string;
}) {
  if (!items.length) return null;
  return (
    <section className="section-pad tiktok-strip-section">
      {title && (
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> TikTok
            </div>
            <h2>{title}</h2>
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
