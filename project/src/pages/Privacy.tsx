import { PageHero } from '@/components/PageHero';
import { pageImages } from '@/data/pageImages';

export function Privacy() {
  return (
    <div className="page-content">
      <PageHero
        images={pageImages.about}
        eyebrow="Legal"
        title={<>Privacy <em>Policy</em></>}
        subtitle="How Avance International University collects, uses and protects personal data."
      />
      <section className="section-pad" style={{ maxWidth: 760 }}>
        <h2>1. Who we are</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          Avance International University (AVIU), Nabweru, Wakiso District, Uganda. Contact:
          info@aviu.ac.ug · admissions@aviu.ac.ug · +256 700 670 691.
        </p>
        <h2>2. Data we collect</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          When you use Apply Now or contact forms we may collect name, email, phone, nationality,
          programme interest, intake preference and message content. Server logs may record IP
          address and browser type for security. Analytics data is collected only if you consent to
          optional cookies.
        </p>
        <h2>3. Why we use data</h2>
        <ul style={{ color: 'var(--ink-soft)', lineHeight: 1.8 }}>
          <li>To respond to admission and information enquiries</li>
          <li>To process applications and communicate offers</li>
          <li>To support international students with visa-related correspondence</li>
          <li>To improve the website (aggregated analytics, if consented)</li>
          <li>To meet legal and regulatory obligations</li>
        </ul>
        <h2>4. Sharing</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          We do not sell personal data. Data may be shared with University staff who need it for
          admissions, with service providers who host email or forms under contract, and with
          authorities where required by law. Application systems such as REDES may process data when
          configured.
        </p>
        <h2>5. Retention</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          Enquiry data is kept as long as needed to complete the admissions cycle and for legitimate
          University records. You may request deletion of enquiry data subject to legal retention
          duties.
        </p>
        <h2>6. Your rights</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          Subject to applicable law, you may request access, correction or deletion of personal data
          we hold about you, and object to certain processing. Contact info@aviu.ac.ug.
        </p>
        <h2>7. Security</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          We use reasonable technical and organisational measures to protect data. No method of
          transmission over the internet is fully secure.
        </p>
        <h2>8. Children</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          This site is aimed at prospective adult students and guardians. We do not knowingly collect
          data from children for marketing.
        </p>
        <h2>9. Changes</h2>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
          We may update this policy. The “Last updated” date will change when we do.
        </p>
        <p style={{ fontSize: 13, color: 'var(--ink-muted)', marginTop: 32 }}>Last updated: September 2026</p>
      </section>
    </div>
  );
}
