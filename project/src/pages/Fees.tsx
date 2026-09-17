import { ArrowRight, Clock, Mail } from 'lucide-react';
import { feeStructure } from '@/data/university';
import { PageHero } from '@/components/PageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';

export function Fees() {
  const { navigate } = useRouter();
  const { openApply } = useApply();

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.fees}
        eyebrow="Tuition & costs"
        title={
          <>
            Fees &amp; <em>Bursaries</em>
          </>
        }
        subtitle="Detailed tuition fees and bursary information for Ugandan and international students is currently being updated. Contact Admissions for the latest guidance."
      />

      <section className="section-pad">
        <div
          className="coming-soon-block"
          style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto', padding: '40px 24px' }}
        >
          <Clock size={48} strokeWidth={1.5} style={{ color: 'var(--purple-500)', marginBottom: 16 }} />
          <h2 style={{ marginBottom: 12 }}>
            Coming <em>Soon</em>
          </h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: 20, lineHeight: 1.65 }}>
            Fee schedules, payment plans, and bursary / scholarship details for all 25
            NCHE-accredited programmes are under review. We will publish clear rates for East
            African and international students as soon as they are confirmed.
          </p>
          <p style={{ color: 'var(--ink-muted)', marginBottom: 28 }}>
            In the meantime, email <strong>admissions@aviu.ac.ug</strong> (or use Apply Now) with
            your nationality and preferred programme — Admissions will advise on current costs
            and any available support.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="button" onClick={() => openApply()}>
              Apply / Enquire <ArrowRight size={17} />
            </button>
            <a className="button button-outline" href="mailto:admissions@aviu.ac.ug">
              <Mail size={16} /> Email Admissions
            </a>
          </div>
        </div>

        <div className="tuition-table" style={{ marginTop: 40, opacity: 0.85 }}>
          <div className="tuition-row tuition-header">
            <span>Category</span>
            <span>Ugandan / East African</span>
            <span>International</span>
            <span>Notes</span>
          </div>
          {feeStructure.map((row) => (
            <div className="tuition-row tuition-row-4" key={row.programme}>
              <span>{row.programme}</span>
              <strong>{row.uganda}</strong>
              <strong>{row.international}</strong>
              <span>{row.perLabel}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.fees} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> International students
          </div>
          <h2>Plan your studies with us.</h2>
          <p>
            Visa support, orientation and English-medium programmes. Ask Admissions about fees
            for your country of origin.
          </p>
        </div>
        <button className="button button-light" onClick={() => navigate('/admissions/international')}>
          International admissions <ArrowRight size={17} />
        </button>
      </section>
    </div>
  );
}
