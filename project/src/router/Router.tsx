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
  // Legacy hash routes: example.com/#/study
  if (hash && hash.startsWith('/')) return normalizePath(hash);
  return normalizePath(window.location.pathname);
}

/**
 * History API router with legacy hash support (from original site).
 * Ensures Study, Admissions, etc. always navigate correctly on mobile & desktop.
 */
export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(readLocationPath);

  useEffect(() => {
    // Migrate #/path → /path once
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && hash.startsWith('/')) {
      const next = normalizePath(hash);
      window.history.replaceState(null, '', next);
      setPath(next);
      window.scrollTo(0, 0);
    }

    const onPop = () => {
      setPath(readLocationPath());
      window.scrollTo(0, 0);
    };
    const onHash = () => {
      const h = window.location.hash.replace(/^#/, '');
      if (h && h.startsWith('/')) {
        const next = normalizePath(h);
        window.history.replaceState(null, '', next);
        setPath(next);
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('popstate', onPop);
    window.addEventListener('hashchange', onHash);
    return () => {
      window.removeEventListener('popstate', onPop);
      window.removeEventListener('hashchange', onHash);
    };
  }, []);

  const navigate = (to: string) => {
    const next = normalizePath(to);
    window.history.pushState(null, '', next);
    setPath(next);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      const main = document.getElementById('main-content');
      if (main) main.scrollIntoView({ block: 'start', behavior: 'auto' });
    });
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
