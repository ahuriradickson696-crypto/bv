import { useCallback, useEffect, useRef, useState } from 'react';
import { ALL_SITE_VIDEOS, ytPlayerSrc } from '@/data/siteVideos';
import { Volume2, VolumeX, X, GripVertical, ChevronDown, ChevronUp } from 'lucide-react';

const VIDEOS = ALL_SITE_VIDEOS.map((v) => ({ id: v.id, label: v.title }));

type Pos = { x: number; y: number };

const STORAGE_KEY = 'aviu_yt_fab_pos';

function defaultPos(): Pos {
  if (typeof window === 'undefined') return { x: 12, y: 120 };
  const isMobile = window.innerWidth < 700;
  // Mobile: lower-left, clear of WhatsApp
  if (isMobile) return { x: 10, y: Math.max(80, window.innerHeight - 260) };
  return { x: 16, y: Math.max(100, window.innerHeight - 300) };
}

function loadPos(): Pos {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const p = JSON.parse(raw) as Pos;
      if (typeof p.x === 'number' && typeof p.y === 'number') return p;
    }
  } catch {
    /* ignore */
  }
  return defaultPos();
}

export function FloatingYouTube() {
  const [pos, setPos] = useState<Pos>(loadPos);
  const [muted, setMuted] = useState(true);
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(0);
  const [hidden, setHidden] = useState(false);
  const dragging = useRef(false);
  // Auto-advance to next video every 45 seconds
  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % VIDEOS.length);
    }, 45000);
    return () => window.clearInterval(id);
  }, []);
  const offset = useRef({ x: 0, y: 0 });
  const panelRef = useRef<HTMLDivElement>(null);

  const clamp = useCallback((x: number, y: number): Pos => {
    const w = panelRef.current?.offsetWidth || 260;
    const h = panelRef.current?.offsetHeight || 180;
    const maxX = Math.max(0, window.innerWidth - w - 6);
    const maxY = Math.max(0, window.innerHeight - h - 6);
    return {
      x: Math.min(Math.max(4, x), maxX),
      y: Math.min(Math.max(4, y), maxY),
    };
  }, []);

  useEffect(() => {
    const onResize = () => setPos((p) => clamp(p.x, p.y));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [clamp]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      const next = clamp(e.clientX - offset.current.x, e.clientY - offset.current.y);
      setPos(next);
    };
    const onUp = () => {
      if (!dragging.current) return;
      dragging.current = false;
      setPos((p) => {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
        } catch {
          /* ignore */
        }
        return p;
      });
    };
    window.addEventListener('pointermove', onMove, { passive: false });
    window.addEventListener('pointerup', onUp);
    window.addEventListener('touchmove', onMove as unknown as EventListener, { passive: false });
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('touchmove', onMove as unknown as EventListener);
      window.removeEventListener('touchend', onUp);
    };
  }, [clamp]);

  const onDragStart = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button, a, iframe')) return;
    dragging.current = true;
    offset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    try {
      (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    } catch {
      /* ignore */
    }
  };

  if (hidden) {
    return (
      <button
        type="button"
        className="yt-fab-show"
        aria-label="Show campus videos"
        onClick={() => setHidden(false)}
      >
        ▶ Videos
      </button>
    );
  }

  const vid = VIDEOS[active];
  const muteParam = muted ? 1 : 0;
  // playsinline=1 is critical for iPhone
  const embedSrc = ytPlayerSrc(vid.id, { mute: muted, controls: true });

  return (
    <div
      ref={panelRef}
      className={`yt-floating ${open ? 'is-open' : 'is-collapsed'}`}
      style={{ left: pos.x, top: pos.y }}
      onPointerDown={onDragStart}
      role="complementary"
      aria-label="Campus videos — drag to move"
    >
      <div className="yt-floating-bar">
        <span className="yt-drag-handle" title="Drag to move">
          <GripVertical size={16} />
        </span>
        <span className="yt-floating-title" title={vid.label}>{vid.label || "Campus videos"}</span>
        <button type="button" aria-label={muted ? 'Unmute' : 'Mute'} onClick={() => setMuted((m) => !m)}>
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
        <button type="button" aria-label={open ? 'Collapse' : 'Expand'} onClick={() => setOpen((o) => !o)}>
          {open ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </button>
        <button type="button" aria-label="Hide videos" onClick={() => setHidden(true)}>
          <X size={16} />
        </button>
      </div>

      {open && (
        <>
          <div className="yt-floating-player">
            <iframe
              key={`${vid.id}-${muteParam}`}
              src={embedSrc}
              title={vid.label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              playsInline
            />
          </div>
          <div className="yt-floating-tabs">
            {VIDEOS.map((v, i) => (
              <button
                key={v.id}
                type="button"
                className={i === active ? 'is-active' : ''}
                onClick={() => setActive(i)}
                title={v.label}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <p className="yt-floating-hint">Drag anywhere · Tap unmute for sound</p>
        </>
      )}
    </div>
  );
}
