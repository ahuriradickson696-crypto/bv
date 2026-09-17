import { useState, useEffect, useCallback } from 'react';

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

export function BackgroundCarousel({
  images,
  interval = 6000,
  overlay = 0.82,
}: {
  images?: string[];
  interval?: number;
  overlay?: number;
}) {
  const slides = images ?? defaultSlides;
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const tick = setInterval(next, interval);
    return () => clearInterval(tick);
  }, [interval, next]);

  return (
    <div className="bg-carousel" aria-hidden="true">
      {slides.map((src, i) => (
        <div
          key={i}
          className={`bg-carousel-slide ${i === current ? 'is-active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="bg-carousel-overlay" style={{ background: `linear-gradient(135deg, rgba(45,20,84,${overlay}), rgba(76,37,133,${overlay}))` }} />
    </div>
  );
}
