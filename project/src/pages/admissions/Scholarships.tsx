import { ArrowRight, Clock, Mail } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { videosFor } from '@/data/pageVideos';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';

export function Scholarships() {
  const { navigate } = useRouter();
  const { openApply } = useApply();

  return (
    <div className="page-content">
      <SubPageHero
videos={videosFor('admissions')}         images={pageImages.admissions}
        eyebrow="Financial support"
        title={
          <>
            Scholarships &amp; <em>Bursaries</em>
          </>
        }
        subtitle="Scholarship and bursary details for Ugandan and international students are being updated. Contact Admissions for the latest guidance."
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Admissions', path: '/admissions' },
          { label: 'Scholarships', path: '/admissions/scholarships' },
        ]}
      />

      <section className="section-pad">
        <div
          className="coming-soon-block"
          style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto', padding: '48px 24px' }}
        >
          <Clock size={48} strokeWidth={1.5} style={{ color: 'var(--purple-500)', marginBottom: 16 }} />
          <h2 style={{ marginBottom: 12 }}>
            Coming <em>Soon</em>
          </h2>
          <p style={{ color: 'var(--ink-soft)', lineHeight: 1.65, marginBottom: 20 }}>
            Merit awards, need-based support and any partner-funded opportunities will be published
            here when confirmed. Until then, include a funding question in your application enquiry
            so Admissions can advise based on your nationality and programme.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="button" onClick={() => openApply()}>
              Apply / Enquire <ArrowRight size={17} />
            </button>
            <a className="button button-outline" href="mailto:admissions@aviu.ac.ug">
              <Mail size={16} /> admissions@aviu.ac.ug
            </a>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.admissions} overlay={0.88}  videos={videosFor('admissions')} />
        <div>
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> International applicants
          </div>
          <h2>Plan early for visas and funding.</h2>
          <p>
            Apply early so you have time for offer letters, visa processing and any external
            sponsorship applications in your home country.
          </p>
        </div>
        <button className="button button-light" onClick={() => navigate('/admissions/international')}>
          International admissions <ArrowRight size={17} />
        </button>
      </section>
    </div>
  );
}
