import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const ua = navigator.userAgent;
    const ios = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true;

    if (standalone) return;

    setIsIos(ios);

    const onBip = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setVisible(true);
    };
    window.addEventListener('beforeinstallprompt', onBip);

    // iOS: show gentle tip after short delay if not installed
    if (ios && !standalone) {
      const t = window.setTimeout(() => setVisible(true), 4000);
      return () => {
        window.clearTimeout(t);
        window.removeEventListener('beforeinstallprompt', onBip);
      };
    }

    return () => window.removeEventListener('beforeinstallprompt', onBip);
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
