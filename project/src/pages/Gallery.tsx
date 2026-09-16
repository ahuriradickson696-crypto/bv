import { useState, useMemo, useEffect } from 'react';
import { X, Play } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { pageImages } from '@/data/pageImages';
import {
  galleryFeed,
  galleryCategories,
  galleryPhotos,
  galleryTikToks,
  type GalleryItem,
} from '@/data/galleryMedia';
import { TikTokEmbed } from '@/components/TikTokEmbed';

export function Gallery() {
  const [filter, setFilter] = useState<string>('all');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const items = useMemo(() => {
    if (filter === 'all') return galleryFeed;
    return galleryFeed.filter((i) => i.category === filter);
  }, [filter]);

  const photos = items.filter((i): i is Extract<GalleryItem, { type: 'photo' }> => i.type === 'photo');
  const videos = items.filter((i): i is Extract<GalleryItem, { type: 'tiktok' }> => i.type === 'tiktok');

  useEffect(() => {
    document.title = 'Gallery — Photos & TikTok | Avance International University';
  }, []);

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.gallery?.slice?.(0, 6) || pageImages.home}
        eyebrow="Media gallery"
        title={
          <>
            Photos &amp; <em>videos</em>
          </>
        }
        subtitle="Photos and TikTok videos from AVIU campus life."
      />

      <section className="section-pad">
        <div className="gallery-filters" role="tablist" aria-label="Gallery categories">
          {galleryCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={filter === c.id}
              className={`gallery-filter-btn ${filter === c.id ? 'is-active' : ''}`}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <p className="results-count" style={{ marginTop: 16 }}>
          {videos.length} video{videos.length !== 1 ? 's' : ''} · {photos.length} photo
          {photos.length !== 1 ? 's' : ''}
        </p>

        {videos.length > 0 && (
          <>
            <div className="section-heading" style={{ marginTop: 28 }}>
              <div>
                <div className="eyebrow">
                  <span className="eyebrow-line" /> TikTok
                </div>
                <h2>
                  Watch <em>AVIU</em> on video.
                </h2>
              </div>
            </div>
            <div className="tiktok-gallery-grid">
              {videos.map((v) => (
                <div key={v.id} className="tiktok-gallery-card">
                  <TikTokEmbed item={v} />
                </div>
              ))}
            </div>
          </>
        )}

        {photos.length > 0 && (
          <>
            <div className="section-heading" style={{ marginTop: 48 }}>
              <div>
                <div className="eyebrow">
                  <span className="eyebrow-line" /> Photos
                </div>
                <h2>
                  Campus <em>gallery.</em>
                </h2>
              </div>
            </div>
            <div className="gallery-grid">
              {photos.map((p) => (
                <button
                  type="button"
                  key={p.id}
                  className="gallery-item"
                  onClick={() => setLightbox(p.src)}
                  aria-label={`Open ${p.title}`}
                >
                  <img src={p.src} alt={p.alt} loading="lazy" />
                  <span className="gallery-caption">{p.title}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {items.length === 0 && (
          <div className="empty-state">
            <p>No media in this category yet.</p>
          </div>
        )}
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button type="button" className="lightbox-close" aria-label="Close" onClick={() => setLightbox(null)}>
            <X size={24} />
          </button>
          <img src={lightbox} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <section className="section-pad alt-bg" style={{ textAlign: 'center' }}>
        <Play size={28} style={{ color: 'var(--purple-500)', marginBottom: 8 }} />
        <h3>Follow AVIU on TikTok</h3>
        <p style={{ color: 'var(--ink-soft)', maxWidth: 480, margin: '8px auto 16px' }}>
          @avancestudentpulse · @avance.marketing — campus updates, graduation and admissions.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            className="button"
            href="https://www.tiktok.com/@avancestudentpulse"
            target="_blank"
            rel="noopener noreferrer"
          >
            @avancestudentpulse
          </a>
          <a
            className="button button-outline"
            href="https://www.tiktok.com/@avance.marketing"
            target="_blank"
            rel="noopener noreferrer"
          >
            @avance.marketing
          </a>
        </div>
        <p style={{ fontSize: 12, color: 'var(--ink-muted)', marginTop: 16 }}>
          {galleryTikToks.length} official videos · {galleryPhotos.length} photos in the library
        </p>
      </section>
    </div>
  );
}
