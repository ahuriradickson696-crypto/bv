import { useEffect, useState, useCallback } from 'react';

export function useHashRoute() {
  const [route, setRoute] = useState(() => parseHash());

  useEffect(() => {
    const onChange = () => setRoute(parseHash());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const navigate = useCallback((path: string) => {
    window.location.hash = path;
    window.scrollTo(0, 0);
  }, []);

  return { route, navigate };
}

function parseHash(): string {
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}
