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
  let p = raw.split('?')[0].split('#')[0] || '/';
  if (!p.startsWith('/')) p = '/' + p;
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  return p || '/';
}

/** History API paths; migrates legacy hash URLs once. */
export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => {
    if (typeof window === 'undefined') return '/';
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && hash.startsWith('/')) return normalizePath(hash);
    return normalizePath(window.location.pathname);
  });

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && hash.startsWith('/')) {
      const next = normalizePath(hash);
      window.history.replaceState(null, '', next);
      setPath(next);
      window.scrollTo(0, 0);
    }

    const onPop = () => {
      setPath(normalizePath(window.location.pathname));
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (to: string) => {
    const next = normalizePath(to);
    if (normalizePath(window.location.pathname) === next) {
      window.scrollTo(0, 0);
      return;
    }
    window.history.pushState(null, '', next);
    setPath(next);
    window.scrollTo(0, 0);
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
