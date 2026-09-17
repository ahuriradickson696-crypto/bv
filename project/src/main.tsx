import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootEl = document.getElementById('root');

function showBootError(err: unknown) {
  const message = err instanceof Error ? err.message : String(err);
  const stack = err instanceof Error ? err.stack : '';
  if (rootEl) {
    rootEl.innerHTML = `
      <div style="font-family: system-ui, sans-serif; max-width: 560px; margin: 48px auto; padding: 24px;">
        <h1 style="color: #2d1454;">AVIU site failed to load</h1>
        <p style="color: #5a4a6e;">A JavaScript error stopped the app. Details:</p>
        <pre style="background:#f4ecfa;padding:16px;border-radius:8px;overflow:auto;font-size:12px;">${message}\n\n${stack || ''}</pre>
      </div>
    `;
  }
  console.error('[AVIU boot error]', err);
}

try {
  if (!rootEl) throw new Error('Root element #root not found');
  createRoot(rootEl).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} catch (err) {
  showBootError(err);
}

// Register Progressive Web App service worker (HTTPS / localhost only)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((err) => {
      console.warn('[AVIU] Service worker not registered', err);
    });
  });
}
