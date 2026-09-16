import { useState, useEffect, useCallback } from 'react';

const defaultSlides = [
  '/images/campus-aviu-students-1.jpg',
  '/images/campus-aviu-event-1.jpg',
  '/images/campus-aviu-students-2.jpg',
  '/images/graduation-ceremony.jpg',
  '/images/campus-building.jpg',
  '/images/university-gate.jpg',
];

/**
 * Contained image carousel for CTA bands only.
 * Does NOT use video (videos are only in the top PageHero banner).
 * Always clipped to its parent — never covers page text.
 */
export function BackgroundCarousel({
  images,
  interval = 6000,
  overlay = 0.82,
}: {
  images?: string[];
  videos?: string[]; // ignored — kept for call-site compatibility
  interval?: number;
  videoInterval?: number;
  overlay?: number;
}) {
  const slides = images && images.length > 0 ? images : defaultSlides;
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const tick = setInterval(next, interval);
    return () => clearInterval(tick);
  }, [interval, next]);

  return (
    <div className="bg-carousel bg-carousel-contained" aria-hidden="true">
      {slides.map((src, i) => (
        <div
          key={src + i}
          className={`bg-carousel-slide ${i === current ? 'is-active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div
        className="bg-carousel-overlay"
        style={{
          background: `linear-gradient(135deg, rgba(45,20,84,${overlay}), rgba(76,37,133,${overlay * 0.95}))`,
        }}
      />
    </div>
  );
}
