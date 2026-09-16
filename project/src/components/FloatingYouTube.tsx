import { useCallback, useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, X, GripVertical, ChevronDown, ChevronUp } from 'lucide-react';

const VIDEOS = [
  { id: '7bcnZQhDfzM', label: 'Campus 1' },
  { id: 'AS6sHqFZek4', label: 'Campus 2' },
  { id: '-Z3M-jtCSDU', label: 'Campus 3' },
];

type Pos = { x: number; y: number };

const STORAGE_KEY = 'aviu_yt_fab_pos';

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
  // Default: bottom of the screen (auto video starts at bottom)
  return { x: 16, y: typeof window !== 'undefined' ? Math.max(8, window.innerHeight - 320) : 500 };
}

/**
 * Floating, draggable YouTube players on every page.
 * Muted by default — user turns sound on. Collapsible.
 */
export function FloatingYouTube() {
  const [pos, setPos] = useState<Pos>(loadPos);
  const [muted, setMuted] = useState(true);
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(0);
  const [hidden, setHidden] = useState(false);
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });
  const panelRef = useRef<HTMLDivElement>(null);

  const clamp = useCallback((x: number, y: number): Pos => {
    const w = panelRef.current?.offsetWidth || 280;
    const h = panelRef.current?.offsetHeight || 200;
    const maxX = Math.max(0, window.innerWidth - w - 8);
    const maxY = Math.max(0, window.innerHeight - h - 8);
    return {
      x: Math.min(Math.max(8, x), maxX),
      y: Math.min(Math.max(8, y), maxY),
    };
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
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
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [clamp]);

  const onDragStart = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button, a, iframe')) return;
    dragging.current = true;
    offset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  if (hidden) {
    return (
      <button
        type="button"
        className="yt-fab-show"
        aria-label="Show campus videos"
        onClick={() => setHidden(false)}
        style={{ left: 16, bottom: 88 }}
      >
        ▶ Videos
      </button>
    );
  }

  const vid = VIDEOS[active];
  const muteParam = muted ? 1 : 0;

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
        <span className="yt-floating-title">Campus videos</span>
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
              src={`https://www.youtube.com/embed/${vid.id}?autoplay=1&mute=${muteParam}&loop=1&playlist=${vid.id}&controls=1&modestbranding=1&rel=0&playsinline=1`}
              title={vid.label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="yt-floating-tabs">
            {VIDEOS.map((v, i) => (
              <button
                key={v.id}
                type="button"
                className={i === active ? 'is-active' : ''}
                onClick={() => setActive(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <p className="yt-floating-hint">Drag to any side · Sound off until you unmute</p>
        </>
      )}
    </div>
  );
}
