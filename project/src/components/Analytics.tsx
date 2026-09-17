import { useEffect } from 'react';
import { useRouter } from '@/router/Router';

/**
 * Lightweight analytics hook.
 * Set VITE_GA_MEASUREMENT_ID in .env to enable Google Analytics 4 when user consents.
 */
export function Analytics() {
  const { path } = useRouter();

  useEffect(() => {
    const id = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
    if (!id) return;

    const load = () => {
      try {
        if (localStorage.getItem('aviu_cookie_consent') !== 'all') return;
      } catch {
        return;
      }
      if (document.getElementById('aviu-ga')) return;

      const s = document.createElement('script');
      s.id = 'aviu-ga';
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      document.head.appendChild(s);

      const w = window as unknown as { dataLayer: unknown[]; gtag: (...args: unknown[]) => void };
      w.dataLayer = w.dataLayer || [];
      w.gtag = function gtag() {
        w.dataLayer.push(arguments);
      };
      w.gtag('js', new Date());
      w.gtag('config', id, { anonymize_ip: true });
    };

    load();
    window.addEventListener('aviu-analytics-consent', load);
    return () => window.removeEventListener('aviu-analytics-consent', load);
  }, []);

  useEffect(() => {
    const id = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (!id || !w.gtag) return;
    try {
      if (localStorage.getItem('aviu_cookie_consent') !== 'all') return;
    } catch {
      return;
    }
    w.gtag('event', 'page_view', { page_path: path });
  }, [path]);

  return null;
}
