import { PageHero } from '@/components/PageHero';
import { pageImages } from '@/data/pageImages';
import { videosFor } from '@/data/pageVideos';

export function Cookies() {
  return (
    <div className="page-content">
      <PageHero
videos={videosFor('home')}         images={pageImages.about}
        eyebrow="Legal"
        title={<>Cookie <em>Policy</em></>}
        subtitle="How Avance International University uses cookies and similar technologies."
      />
      <section className="section-pad" style={{ maxWidth: 760 }}>
        <h2>What are cookies?</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          Cookies are small text files stored on your device. They help the site work and, if you
          consent, help us understand how it is used.
        </p>
        <h2>Essential cookies</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          Required for navigation, security, theme preference and remembering your cookie choice.
          These do not require consent beyond legitimate interest in operating the site.
        </p>
        <h2>Analytics cookies (optional)</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          If you choose “Accept all”, we may load analytics (for example Google Analytics when a
          measurement ID is configured) to measure page views and improve content. IP anonymisation
          is requested where supported.
        </p>
        <h2>Your choices</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          You can accept all cookies or essential only via the banner. You can also clear site data
          in your browser settings. Blocking essential cookies may affect site function.
        </p>
        <h2>Contact</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          Privacy questions: info@aviu.ac.ug
        </p>
        <p style={{ fontSize: 13, color: 'var(--ink-muted)', marginTop: 32 }}>Last updated: September 2026</p>
      </section>
    </div>
  );
}
