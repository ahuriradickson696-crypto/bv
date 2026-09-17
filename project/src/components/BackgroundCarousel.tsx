import { useState, useEffect, useCallback } from 'react';
import { youtubeBgSrc } from '@/data/pageVideos';

const defaultSlides = [
  '/images/campus-aviu-students-1.jpg',
  '/images/campus-aviu-event-1.jpg',
  '/images/campus-aviu-students-2.jpg',
  '/images/campus-aviu-event-2.jpg',
  '/images/campus-aviu-extra.jpg',
  '/images/university-gate.jpg',
  '/images/campus-aerial.jpg',
  '/images/campus-building.jpg',
  '/images/award-ceremony.jpg',
  '/images/graduation-ceremony.jpg',
];

/**
 * Full-bleed background: prefers muted autoplay YouTube when `videos` is set;
 * falls back to image carousel.
 */
export function BackgroundCarousel({
  images,
  videos,
  interval = 6000,
  videoInterval = 40000,
  overlay = 0.78,
}: {
  images?: string[];
  /** YouTube video IDs — play as background (muted, loop, no controls) */
  videos?: string[];
  interval?: number;
  videoInterval?: number;
  overlay?: number;
}) {
  const useVideo = Boolean(videos && videos.length > 0);
  const slides = images ?? defaultSlides;
  const vids = videos ?? [];
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => {
      const len = useVideo ? vids.length : slides.length;
      return len ? (c + 1) % len : 0;
    });
  }, [useVideo, vids.length, slides.length]);

  useEffect(() => {
    const ms = useVideo ? videoInterval : interval;
    const tick = setInterval(next, ms);
    return () => clearInterval(tick);
  }, [interval, videoInterval, next, useVideo]);

  // Reset index when switching set
  useEffect(() => {
    setCurrent(0);
  }, [useVideo, vids.join(','), slides.join(',')]);

  return (
    <div className={`bg-carousel ${useVideo ? 'bg-carousel-video' : ''}`} aria-hidden="true">
      {useVideo ? (
        <div className="bg-video-wrap">
          <iframe
            key={vids[current % vids.length]}
            className="bg-video-iframe"
            src={youtubeBgSrc(vids[current % vids.length])}
            title="Background video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={false}
          />
        </div>
      ) : (
        slides.map((src, i) => (
          <div
            key={i}
            className={`bg-carousel-slide ${i === current ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))
      )}
      <div
        className="bg-carousel-overlay"
        style={{
          background: `linear-gradient(135deg, rgba(45,20,84,${overlay}), rgba(76,37,133,${overlay * 0.95}))`,
        }}
      />
    </div>
  );
}
