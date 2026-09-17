import { PageHero } from '@/components/PageHero';
import { pageImages } from '@/data/pageImages';
import { videosFor } from '@/data/pageVideos';

export function Terms() {
  return (
    <div className="page-content">
      <PageHero
videos={videosFor('home')}         images={pageImages.about}
        eyebrow="Legal"
        title={<>Terms of <em>Use</em></>}
        subtitle="Terms governing use of the Avance International University website and online services."
      />
      <section className="section-pad" style={{ maxWidth: 760 }}>
        <h2>1. Acceptance</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          By accessing aviu.ac.ug and related AVIU digital services, you agree to these Terms of Use
          and our Privacy and Cookie policies. If you do not agree, please do not use the site.
        </p>
        <h2>2. Information accuracy</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          Programme descriptions, accreditation dates and campus information are provided in good
          faith. AVIU may update content without notice. Admission offers, fees (when published) and
          academic regulations issued by the University take precedence over website summaries.
        </p>
        <h2>3. Applications</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          Online enquiries and applications are offers to be considered for admission; they do not
          guarantee a place. You must provide accurate information. False statements may lead to
          withdrawal of an offer or enrolment.
        </p>
        <h2>4. Intellectual property</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          Site content, logos and materials are owned by Avance International University or its
          licensors. You may not copy or redistribute them for commercial purposes without written
          permission.
        </p>
        <h2>5. External links</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          Links to third-party sites (including maps, video hosts and social networks) are provided
          for convenience. AVIU is not responsible for their content or privacy practices.
        </p>
        <h2>6. Limitation of liability</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          To the fullest extent permitted by law, AVIU is not liable for loss arising from use of
          this website or reliance on its content, except where liability cannot be excluded.
        </p>
        <h2>7. Contact</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          Questions about these terms: info@aviu.ac.ug · +256 700 670 691 · Nabweru, Wakiso, Uganda.
        </p>
        <p style={{ fontSize: 13, color: 'var(--ink-muted)', marginTop: 32 }}>Last updated: September 2026</p>
      </section>
    </div>
  );
}
