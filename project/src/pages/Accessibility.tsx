import { PageHero } from '@/components/PageHero';
import { pageImages } from '@/data/pageImages';
import { useRouter } from '@/router/Router';

export function Accessibility() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <PageHero
        images={pageImages.about}
        eyebrow="Inclusion"
        title={<>Accessibility <em>Statement</em></>}
        subtitle="AVIU aims to make this website usable by as many people as possible."
      />
      <section className="section-pad" style={{ maxWidth: 760 }}>
        <h2>Our commitment</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          We work toward WCAG 2.1 Level AA principles: perceivable, operable, understandable and
          robust content. This includes semantic structure, keyboard access, skip links and readable
          contrast where practicable.
        </p>
        <h2>Measures in place</h2>
        <ul style={{ color: 'var(--ink-soft)', lineHeight: 1.8 }}>
          <li>Skip to main content link</li>
          <li>Responsive layouts for mobile and desktop</li>
          <li>Text alternatives on primary logos</li>
          <li>Focusable controls for navigation and forms</li>
          <li>Error messages on application forms</li>
        </ul>
        <h2>Known limitations</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          Some embedded third-party content (maps, autoplay video) may not fully meet AA. Complex
          data tables on small screens may require horizontal scrolling. We continue to improve these
          areas.
        </p>
        <h2>Feedback</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          If you encounter an accessibility barrier, contact{' '}
          <a href="mailto:info@aviu.ac.ug">info@aviu.ac.ug</a> or call +256 700 670 691. Please
          describe the page and the problem so we can prioritise a fix.
        </p>
        <button className="button" style={{ marginTop: 16 }} onClick={() => navigate('/contact')}>
          Contact us
        </button>
        <p style={{ fontSize: 13, color: 'var(--ink-muted)', marginTop: 32 }}>Last updated: September 2026</p>
      </section>
    </div>
  );
}
