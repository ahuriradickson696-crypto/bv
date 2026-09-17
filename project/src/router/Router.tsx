import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type RouterContextType = {
  path: string;
  navigate: (to: string) => void;
};

const RouterContext = createContext<RouterContextType>({
  path: '/',
  navigate: () => {},
});

function normalizePath(raw: string): string {
  try {
    raw = decodeURIComponent(raw);
  } catch {
    /* ignore */
  }
  let p = (raw || '/').split('?')[0].split('#')[0].trim() || '/';
  if (!p.startsWith('/')) p = '/' + p;
  p = p.replace(/\/+/g, '/');
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  return p || '/';
}

function readLocationPath(): string {
  if (typeof window === 'undefined') return '/';
  const hash = window.location.hash.replace(/^#/, '');
  if (hash && hash.startsWith('/')) return normalizePath(hash);
  return normalizePath(window.location.pathname);
}

/** Instant scroll to top-left — no smooth scroll, no horizontal drift */
function resetScroll() {
  if (typeof window === 'undefined') return;
  const html = document.documentElement;
  const body = document.body;
  const prevHtml = html.style.scrollBehavior;
  const prevBody = body.style.scrollBehavior;
  html.style.scrollBehavior = 'auto';
  body.style.scrollBehavior = 'auto';
  window.scrollTo(0, 0);
  html.scrollTop = 0;
  body.scrollTop = 0;
  html.scrollLeft = 0;
  body.scrollLeft = 0;
  const main = document.getElementById('main-content');
  if (main) {
    main.scrollTop = 0;
    main.scrollLeft = 0;
  }
  // restore after paint
  requestAnimationFrame(() => {
    html.style.scrollBehavior = prevHtml;
    body.style.scrollBehavior = prevBody;
  });
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(readLocationPath);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && hash.startsWith('/')) {
      const next = normalizePath(hash);
      window.history.replaceState(null, '', next);
      setPath(next);
      resetScroll();
    }

    const onPop = () => {
      setPath(readLocationPath());
      resetScroll();
    };
    const onHash = () => {
      const h = window.location.hash.replace(/^#/, '');
      if (h && h.startsWith('/')) {
        const next = normalizePath(h);
        window.history.replaceState(null, '', next);
        setPath(next);
        resetScroll();
      }
    };
    window.addEventListener('popstate', onPop);
    window.addEventListener('hashchange', onHash);
    return () => {
      window.removeEventListener('popstate', onPop);
      window.removeEventListener('hashchange', onHash);
    };
  }, []);

  // Reset scroll whenever path changes (including first paint of a route)
  useEffect(() => {
    resetScroll();
  }, [path]);

  const navigate = (to: string) => {
    const next = normalizePath(to);
    if (readLocationPath() !== next) {
      window.history.pushState(null, '', next);
      setPath(next);
    } else {
      resetScroll();
    }
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}
