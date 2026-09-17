import { useEffect, useRef, useState } from 'react';
import { Download, X } from 'lucide-react';

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

/**
 * Shows "Install app" when the browser supports PWA install (Android Chrome, desktop Chrome/Edge).
 * iOS: guides user to Share → Add to Home Screen.
 */
export function PwaInstall() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const deferredRef = useRef<BeforeInstallPromptEvent | null>(null);
  const isIosRef = useRef(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const ios = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true;

    if (standalone) return;

    setIsIos(ios);
    isIosRef.current = ios;

    // Both this bar and the cookie-consent banner are fixed to the bottom of the
    // screen. Never show this one until the person has answered the cookie
    // banner, so the two never stack on top of each other.
    const hasCookieDecision = () => {
      try {
        return Boolean(localStorage.getItem('aviu_cookie_consent'));
      } catch {
        return true; // storage unavailable: don't block the prompt forever
      }
    };

    let iosTimer: number | undefined;
    const armIosTip = () => {
      if (iosTimer) return;
      iosTimer = window.setTimeout(() => {
        if (hasCookieDecision()) setVisible(true);
      }, 4000);
    };

    const onBip = (e: Event) => {
      e.preventDefault();
      deferredRef.current = e as BeforeInstallPromptEvent;
      setDeferred(deferredRef.current);
      if (hasCookieDecision()) setVisible(true);
    };
    window.addEventListener('beforeinstallprompt', onBip);

    const onCookieDecided = () => {
      if (deferredRef.current || isIosRef.current) setVisible(true);
    };
    window.addEventListener('aviu-cookie-consent-resolved', onCookieDecided);

    if (ios) armIosTip();

    return () => {
      if (iosTimer) window.clearTimeout(iosTimer);
      window.removeEventListener('beforeinstallprompt', onBip);
      window.removeEventListener('aviu-cookie-consent-resolved', onCookieDecided);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  const install = async () => {
    if (deferred) {
      await deferred.prompt();
      const choice = await deferred.userChoice;
      if (choice.outcome === 'accepted') setVisible(false);
      setDeferred(null);
    }
  };

  return (
    <div className="pwa-install-bar" role="dialog" aria-label="Install AVIU app">
      <div className="pwa-install-inner">
        <img src="/images/aviu-logo.png" alt="" width={40} height={40} className="pwa-install-icon" />
        <div className="pwa-install-copy">
          <strong>Install AVIU app</strong>
          <span>
            {isIos && !deferred
              ? 'On iPhone/iPad: tap Share, then “Add to Home Screen”.'
              : 'Add Avance International University to your home screen for quick access.'}
          </span>
        </div>
        {deferred && (
          <button type="button" className="pwa-install-btn" onClick={install}>
            <Download size={16} /> Install
          </button>
        )}
        <button type="button" className="pwa-install-close" aria-label="Dismiss" onClick={() => setVisible(false)}>
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
