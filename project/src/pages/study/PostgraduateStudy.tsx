import { ArrowRight, Clock, Microscope } from 'lucide-react';
import { faculties } from '@/data/university';
import { SubPageHero } from '@/components/SubPageHero';
import { videosFor } from '@/data/pageVideos';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';

export function PostgraduateStudy() {
  const { navigate } = useRouter();
  const { openApply } = useApply();
  const pgProgrammes = faculties.flatMap((f) =>
    f.programs
      .filter((p) => p.level === 'Masters' || p.level === 'PhD' || p.level === 'Postgraduate Diploma')
      .map((p) => ({ ...p, faculty: f.shortName }))
  );

  return (
    <div className="page-content">
      <SubPageHero
videos={videosFor('study')}         images={pageImages.study}
        eyebrow="Degree level"
        title={<>Postgraduate &amp; <em>Doctoral Study</em></>}
        subtitle="Advance your career and contribute to cutting-edge research with our master's, doctoral, and postgraduate diploma programmes. Designed for working professionals and aspiring researchers alike."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Study', path: '/study' }, { label: 'Postgraduate', path: '/study/postgraduate' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Master's degrees</div>
            <h2>Taught &amp; research <em>master's.</em></h2>
          </div>
        </div>
        <div className="programme-catalogue">
          {pgProgrammes.filter((p) => p.level === 'Masters').map((p, i) => (
            <div className="programme-row" key={i}>
              <div className="programme-row-main">
                <span className="programme-faculty-tag">{p.faculty}</span>
                <strong>{p.name}</strong>
              </div>
              <p className="programme-desc">{p.description}</p>
              <div className="programme-row-meta">
                <span className="programme-level-tag">{p.level}</span>
                <span className="programme-duration"><Clock size={13} /> {p.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Postgraduate diplomas</div>
            <h2>Professional <em>qualifications.</em></h2>
          </div>
        </div>
        <div className="programme-catalogue">
          {pgProgrammes.filter((p) => p.level === 'Postgraduate Diploma').map((p, i) => (
            <div className="programme-row" key={i}>
              <div className="programme-row-main">
                <span className="programme-faculty-tag">{p.faculty}</span>
                <strong>{p.name}</strong>
              </div>
              <p className="programme-desc">{p.description}</p>
              <div className="programme-row-meta">
                <span className="programme-level-tag">PG Diploma</span>
                <span className="programme-duration"><Clock size={13} /> {p.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Doctoral study</div>
            <h2>PhD &amp; <em>professional doctorates.</em></h2>
          </div>
        </div>
        <div className="coming-soon-block" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto', padding: '32px 24px' }}>
          <Clock size={40} strokeWidth={1.5} style={{ color: 'var(--purple-500)', marginBottom: 12 }} />
          <h3 style={{ marginBottom: 8 }}>Coming Soon</h3>
          <p style={{ color: 'var(--ink-soft)', marginBottom: 20, lineHeight: 1.6 }}>
            AVIU is preparing PhD programmes by research and professional doctorates. Details on supervisors, funded studentships, and applications will be announced here when enrolment opens.
          </p>
          <a className="text-link" onClick={(e) => { e.preventDefault(); navigate('/research/phd-opportunities'); }}>
            View PhD opportunities page <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.study} overlay={0.88}  videos={videosFor('study')} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Ready to advance?</div>
          <h2>Apply for postgraduate study.</h2>
          <p>Contact the academic registrar to start your postgraduate application.</p>
        </div>
        <button className="button button-light" onClick={openApply}>Apply now <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
