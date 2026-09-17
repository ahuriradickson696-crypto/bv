import { ArrowRight, Clock, Globe2, MapPin, Award, BookOpen, Briefcase } from 'lucide-react';
import { getProgrammeBySlug, faculties, universityInfo } from '@/data/university';
import { SubPageHero } from '@/components/SubPageHero';
import { videosFor } from '@/data/pageVideos';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';
import { useEffect } from 'react';

export function ProgrammeDetail() {
  const { path, navigate } = useRouter();
  const { openApply } = useApply();
  const slug = path.replace(/^\/study\/programme\//, '').replace(/\/$/, '');
  const programme = getProgrammeBySlug(slug);
  const faculty = programme ? faculties.find((f) => f.id === programme.facultyId) : null;

  useEffect(() => {
    if (programme) {
      document.title = `${programme.name} | Avance International University`;
      const desc = programme.overview || programme.description;
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', desc.slice(0, 160));
    }
    return () => {
      document.title = 'Avance International University — Enhancing Innovations';
    };
  }, [programme]);

  if (!programme) {
    return (
      <div className="page-content">
        <section className="section-pad" style={{ textAlign: 'center' }}>
          <h2>Programme not found</h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: 24 }}>
            This programme may have moved. Browse all NCHE-accredited programmes instead.
          </p>
          <button className="button" onClick={() => navigate('/study/course-finder')}>
            Course Finder <ArrowRight size={16} />
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="page-content">
      <SubPageHero
videos={videosFor('study')}         images={pageImages.study}
        eyebrow={faculty?.name || 'Programme'}
        title={<>{programme.name}</>}
        subtitle={programme.description}
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Study', path: '/study' },
          { label: 'Course Finder', path: '/study/course-finder' },
          { label: programme.name, path: path },
        ]}
      />

      <section className="section-pad">
        <div className="two-col-layout" style={{ alignItems: 'flex-start', gap: 40 }}>
          <div style={{ flex: 1.4 }}>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Overview
            </div>
            <h2>
              About this <em>programme.</em>
            </h2>
            <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7, marginTop: 12 }}>{programme.overview}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 24 }}>
              <span className="programme-level-tag">{programme.level}</span>
              <span className="programme-duration">
                <Clock size={14} /> {programme.duration}
              </span>
              <span className="programme-faculty-tag">{programme.tierDiscipline}</span>
            </div>

            <div style={{ marginTop: 28, fontSize: 14, color: 'var(--ink-muted)' }}>
              <p>
                <Award size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> NCHE
                accredited programme
              </p>
              <p>
                <MapPin size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />{' '}
                {programme.campus} · {programme.district}
              </p>
              <p>
                <Globe2 size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Mode:{' '}
                {programme.mode} · Language: {programme.language}
              </p>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              background: 'var(--bg-alt)',
              borderRadius: 16,
              padding: 24,
              border: '1px solid var(--border)',
            }}
          >
            <strong style={{ display: 'block', marginBottom: 12 }}>Ready to apply?</strong>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', marginBottom: 16 }}>
              Enquiries go to {universityInfo.admissionsEmail || 'admissions@aviu.ac.ug'}. Fees and
              bursaries details are Coming Soon — ask Admissions for current guidance.
            </p>
            <button className="button" style={{ width: '100%' }} onClick={() => openApply()}>
              Apply for this programme <ArrowRight size={16} />
            </button>
            <button
              className="button button-outline"
              style={{ width: '100%', marginTop: 10 }}
              onClick={() => navigate('/admissions/international')}
            >
              International applicants
            </button>
          </div>
        </div>
      </section>

      {programme.entryRequirements?.length > 0 && (
        <section className="section-pad alt-bg">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" /> Entry
              </div>
              <h2>
                Entry <em>requirements.</em>
              </h2>
            </div>
          </div>
          <ul className="requirements-list">
            {programme.entryRequirements.map((r, i) => (
              <li key={i}>
                <span className="check-bullet">
                  <BookOpen size={16} />
                </span>
                {r}
              </li>
            ))}
          </ul>
        </section>
      )}

      {programme.yearStructure?.length > 0 && (
        <section className="section-pad">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" /> Curriculum
              </div>
              <h2>
                Programme <em>structure.</em>
              </h2>
              <p style={{ color: 'var(--ink-soft)', marginTop: 8 }}>
                Indicative modules. Exact unit titles may be updated by Senate; confirm with the
                Faculty at registration.
              </p>
            </div>
          </div>
          <div className="library-grid">
            {programme.yearStructure.map((y) => (
              <article className="library-card" key={y.year}>
                <strong>{y.year}</strong>
                <ul style={{ marginTop: 12, paddingLeft: 18, color: 'var(--ink-soft)', fontSize: 14 }}>
                  {y.modules.map((m) => (
                    <li key={m} style={{ marginBottom: 6 }}>
                      {m}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      )}

      {programme.careerOutcomes?.length > 0 && (
        <section className="section-pad alt-bg">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" /> Careers
              </div>
              <h2>
                Career <em>outcomes.</em>
              </h2>
            </div>
          </div>
          <div className="school-grid">
            {programme.careerOutcomes.map((c) => (
              <div className="school-card" key={c} style={{ cursor: 'default' }}>
                <Briefcase size={22} strokeWidth={1.5} />
                <strong style={{ fontSize: 15 }}>{c}</strong>
              </div>
            ))}
          </div>
        </section>
      )}

      {programme.internationalNotes && (
        <section className="section-pad">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" /> International students
              </div>
              <h2>
                For applicants from <em>outside Uganda.</em>
              </h2>
            </div>
          </div>
          <p style={{ maxWidth: 720, color: 'var(--ink-soft)', lineHeight: 1.7 }}>
            {programme.internationalNotes}
          </p>
          <p style={{ marginTop: 16, fontSize: 14, color: 'var(--ink-muted)' }}>
            Contact {universityInfo.internationalEmail || 'international@aviu.ac.ug'} for visa,
            airport pickup and orientation support after you receive an offer.
          </p>
        </section>
      )}

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.study} overlay={0.88}  videos={videosFor('study')} />
        <div>
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> Next step
          </div>
          <h2>Start your application.</h2>
          <p>Submit an enquiry for {programme.name}. Admissions responds within 2–5 working days.</p>
        </div>
        <button className="button button-light" onClick={() => openApply()}>
          Apply now <ArrowRight size={17} />
        </button>
      </section>
    </div>
  );
}
