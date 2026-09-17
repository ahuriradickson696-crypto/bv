import { ArrowRight, Clock } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { videosFor } from '@/data/pageVideos';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

export function PhdOpportunities() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <SubPageHero
videos={videosFor('research')}         images={pageImages.research}
        eyebrow="Research"
        title={<>PhD <em>Opportunities</em></>}
        subtitle="Doctoral programmes at AVIU are currently being prepared. Check back soon for funded studentships and research opportunities."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Research', path: '/research' }, { label: 'PhD Opportunities', path: '/research/phd-opportunities' }]}
      />

      <section className="section-pad">
        <div className="coming-soon-block" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto', padding: '48px 24px' }}>
          <Clock size={48} strokeWidth={1.5} style={{ color: 'var(--purple-500)', marginBottom: 16 }} />
          <h2 style={{ marginBottom: 12 }}>Coming <em>Soon</em></h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: 24, lineHeight: 1.6 }}>
            AVIU is developing PhD programmes by research across our faculties. Funded studentships,
            supervisor matching, and application details will be published here when enrolment opens.
          </p>
          <p style={{ color: 'var(--ink-muted)', marginBottom: 32 }}>
            In the meantime, explore our research centres and current postgraduate offerings, or contact us to register your interest.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="button" onClick={() => navigate('/research')}>
              Explore Research <ArrowRight size={17} />
            </button>
            <button className="button button-outline" onClick={() => navigate('/contact')}>
              Register interest
            </button>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.research} overlay={0.88}  videos={videosFor('research')} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Doctoral study</div>
          <h2>Stay informed.</h2>
          <p>Contact the graduate research school to be notified when PhD applications open.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>Get in touch <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
