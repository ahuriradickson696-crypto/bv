import { ArrowRight, Clock, Microscope } from 'lucide-react';
import { faculties } from '@/data/university';
import { SubPageHero } from '@/components/SubPageHero';
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
        images={pageImages.study}
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
        <div className="two-col-layout">
          <div className="col-half">
            <p>AIU offers PhD programmes by research across all four faculties. Doctoral candidates work under the supervision of experienced faculty members and contribute to the university's growing research output. The PhD typically takes 3-4 years of full-time study or 4-6 years part-time.</p>
            <p>Candidates are expected to produce an original thesis that makes a significant contribution to knowledge in their field. The university also supports professional doctorates (DBA, EdD) for senior practitioners.</p>
            <a className="text-link" onClick={(e) => { e.preventDefault(); navigate('/research'); }}>
              Explore research centres <ArrowRight size={16} />
            </a>
          </div>
          <div className="col-half">
            <div className="library-grid">
              <div className="library-card">
                <span className="library-icon"><Microscope size={24} strokeWidth={1.5} /></span>
                <strong>Find a Supervisor</strong>
                <p>Browse our researcher directory to find faculty members whose expertise aligns with your research interests.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><Microscope size={24} strokeWidth={1.5} /></span>
                <strong>Funded Studentships</strong>
                <p>A limited number of funded PhD positions are available each year. Check the research page for current opportunities.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><Microscope size={24} strokeWidth={1.5} /></span>
                <strong>Proposal Guidelines</strong>
                <p>Our research proposal writing guide helps you structure a compelling application for doctoral study.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><Microscope size={24} strokeWidth={1.5} /></span>
                <strong>Graduate Research School</strong>
                <p>The Doctoral College provides training, funding support, and a vibrant community for research students.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.study} overlay={0.88} />
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
