import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type CarouselSlide = {
  image: string;
  label: string;
  title: string;
  description: string;
};

export function Carousel({ slides, autoPlay = true, interval = 5000 }: { slides: CarouselSlide[]; autoPlay?: boolean; interval?: number }) {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
    setProgress(0);
  }, [slides.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const tick = setInterval(next, interval);
    return () => clearInterval(tick);
  }, [autoPlay, interval, next]);

  useEffect(() => {
    if (!autoPlay) return;
    const pInterval = setInterval(() => {
      setProgress((p) => Math.min(p + 100 / (interval / 50), 100));
    }, 50);
    return () => clearInterval(pInterval);
  }, [autoPlay, interval, current]);

  return (
    <div className="carousel">
      <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide, i) => (
          <div className="carousel-slide" key={i}>
            <img src={slide.image} alt={slide.title} />
            <div className="carousel-overlay">
              <span>{slide.label}</span>
              <strong>{slide.title}</strong>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-arrows">
        <button className="carousel-arrow" onClick={prev} aria-label="Previous slide">
          <ChevronLeft size={20} />
        </button>
        <button className="carousel-arrow" onClick={next} aria-label="Next slide">
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? 'active' : ''}`}
            onClick={() => { setCurrent(i); setProgress(0); }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      <div className="carousel-progress" style={{ width: `${progress}%` }} />
    </div>
  );
}
