import { ArrowRight, Clock, Award } from 'lucide-react';
import { faculties, programmeSlug } from '@/data/university';
import { SubPageHero } from '@/components/SubPageHero';
import { videosFor } from '@/data/pageVideos';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';

export function UndergraduateStudy() {
  const { navigate } = useRouter();
  const { openApply } = useApply();
  const undergradProgrammes = faculties.flatMap((f) =>
    f.programs
      .filter((p) => p.level === 'Bachelor' || p.level === 'Diploma' || p.level === 'Certificate')
      .map((p) => ({ ...p, faculty: f.shortName }))
  );

  return (
    <div className="page-content">
      <SubPageHero
videos={videosFor('study')}         images={pageImages.study}
        eyebrow="Degree level"
        title={<>Undergraduate <em>Study</em></>}
        subtitle="Begin your academic journey with a bachelor's degree, diploma, or certificate. Our undergraduate programmes combine theory with hands-on practice to prepare you for the workforce or further study."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Study', path: '/study' }, { label: 'Undergraduate', path: '/study/undergraduate' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Bachelor's degrees</div>
            <h2>Three-year <em>degree programmes.</em></h2>
          </div>
        </div>
        <div className="programme-catalogue">
          {undergradProgrammes.filter((p) => p.level === 'Bachelor').map((p, i) => (
            <div className="programme-row" key={i}>
              <div className="programme-row-main">
                <span className="programme-faculty-tag">{p.faculty}</span>
                <strong style={{ cursor: 'pointer' }} onClick={() => navigate(`/study/programme/${programmeSlug(p.name)}`)}>{p.name}</strong>
              </div>
              <p className="programme-desc">{p.description}</p>
              <div className="programme-row-meta">
                <span className="programme-level-tag">{p.level}</span>
                <span className="programme-duration"><Clock size={13} /> {p.duration}</span>
              </div>
              <button className="text-link" style={{ marginTop: 8 }} onClick={() => navigate(`/study/programme/${programmeSlug(p.name)}`)}>
                View full details <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Diplomas &amp; certificates</div>
            <h2>Foundation <em>qualifications.</em></h2>
          </div>
        </div>
        <div className="programme-catalogue">
          {undergradProgrammes.filter((p) => p.level !== 'Bachelor').map((p, i) => (
            <div className="programme-row" key={i}>
              <div className="programme-row-main">
                <span className="programme-faculty-tag">{p.faculty}</span>
                <strong style={{ cursor: 'pointer' }} onClick={() => navigate(`/study/programme/${programmeSlug(p.name)}`)}>{p.name}</strong>
              </div>
              <p className="programme-desc">{p.description}</p>
              <div className="programme-row-meta">
                <span className="programme-level-tag">{p.level}</span>
                <span className="programme-duration"><Clock size={13} /> {p.duration}</span>
              </div>
              <button className="text-link" style={{ marginTop: 8 }} onClick={() => navigate(`/study/programme/${programmeSlug(p.name)}`)}>
                View full details <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow"><span className="eyebrow-line" /> Study modes</div>
            <h2>Full-time, part-time &amp; <em>evening.</em></h2>
            <p>Most undergraduate programmes are offered full-time over three years. Selected programmes also offer part-time and evening schedules for working students. The modular semester structure allows you to build your qualification unit by unit.</p>
            <p>Each semester runs 16 weeks, with two semesters per academic year. Three intakes are available: January, May, and August.</p>
          </div>
          <div className="col-half">
            <div className="library-grid">
              <div className="library-card">
                <span className="library-icon"><Award size={24} strokeWidth={1.5} /></span>
                <strong>Direct Entry</strong>
                <p>A-Level graduates with at least two principal passes can apply directly to bachelor's programmes.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><Award size={24} strokeWidth={1.5} /></span>
                <strong>Diploma Pathway</strong>
                <p>Diploma holders can progress to a related bachelor's degree with credit transfers for relevant units.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><Award size={24} strokeWidth={1.5} /></span>
                <strong>Mature Age Entry</strong>
                <p>Applicants aged 21+ without standard qualifications can sit the mature age entry examination.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><Award size={24} strokeWidth={1.5} /></span>
                <strong>Foundation Certificate</strong>
                <p>Our Higher Education Certificate prepares students without standard entry for university study.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.study} overlay={0.88}  videos={videosFor('study')} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Ready to start?</div>
          <h2>Apply for undergraduate study.</h2>
          <p>Applications are now open for all intakes — January, May, and August.</p>
        </div>
        <button className="button button-light" onClick={openApply}>Apply now <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
