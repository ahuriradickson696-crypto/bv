import { useEffect, useState } from 'react';

const KEY = 'aviu_cookie_consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = (value: 'all' | 'essential') => {
    try {
      localStorage.setItem(KEY, value);
      if (value === 'all' && typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('aviu-analytics-consent'));
      }
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-consent"
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10000,
        background: 'var(--purple-900, #2d1454)',
        color: '#fff',
        padding: '16px 20px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 -4px 24px rgba(0,0,0,.25)',
      }}
    >
      <p style={{ margin: 0, fontSize: 14, maxWidth: 640, lineHeight: 1.5, opacity: 0.95 }}>
        We use essential cookies for site function. Optional analytics cookies help us improve the
        site if you accept. See our{' '}
        <a href="/privacy" style={{ color: 'var(--gold-light, #e0c478)' }}>
          Privacy
        </a>{' '}
        and{' '}
        <a href="/cookies" style={{ color: 'var(--gold-light, #e0c478)' }}>
          Cookie Policy
        </a>
        .
      </p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button
          type="button"
          className="button button-outline"
          style={{ borderColor: 'rgba(255,255,255,.4)', color: '#fff' }}
          onClick={() => accept('essential')}
        >
          Essential only
        </button>
        <button type="button" className="button button-light" onClick={() => accept('all')}>
          Accept all
        </button>
      </div>
    </div>
  );
}
