import { useState } from 'react';
import { ArrowRight, Check, Clock } from 'lucide-react';
import { faculties, type Faculty, type Programme } from '@/data/university';
import { PageHero } from '@/components/PageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';

const levelFilters = ['All', 'Certificate', 'Diploma', 'Bachelor', 'Postgraduate Diploma', 'Masters', 'PhD'] as const;

export function Study() {
  const { navigate } = useRouter();
  const { openApply } = useApply();
  const [activeFaculty, setActiveFaculty] = useState<Faculty | null>(null);
  const [levelFilter, setLevelFilter] = useState<string>('All');

  const allProgrammes = faculties.flatMap((f) =>
    f.programs.map((p) => ({ ...p, facultyName: f.shortName, facultyId: f.id }))
  );

  const filteredProgrammes =
    levelFilter === 'All'
      ? allProgrammes
      : allProgrammes.filter((p) => p.level === levelFilter);

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.study}
        eyebrow="Academics"
        title={<>Study at <em>Avance</em></>}
        subtitle="From education to alternative medicine, our programmes combine research-oriented teaching with hands-on practice to prepare you for the world of work. We offer Certificate, Diploma, Bachelor, Postgraduate Diploma, and Masters level qualifications across four faculties."
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Our Faculties
            </div>
            <h2>
              Four faculties. <em>Endless possibility.</em>
            </h2>
          </div>
        </div>
        <div className="faculty-grid">
          {faculties.map((faculty, index) => (
            <article
              className="faculty-card"
              key={faculty.id}
              onClick={() => setActiveFaculty(faculty)}
            >
              <span className="school-index">0{index + 1}</span>
              <faculty.icon size={28} strokeWidth={1.5} />
              <strong>{faculty.name}</strong>
              <p>{faculty.description}</p>
              <div className="faculty-meta">
                <span className="faculty-level">{faculty.level}</span>
                <span className="faculty-count">{faculty.programs.length} programmes</span>
              </div>
              <ArrowRight className="school-arrow" size={19} />
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> All Programmes
            </div>
            <h2>
              Browse our <em>full catalogue.</em>
            </h2>
          </div>
        </div>
        <div className="news-filters">
          {levelFilters.map((level) => (
            <button
              key={level}
              className={`filter-chip ${levelFilter === level ? 'chip-active' : ''}`}
              onClick={() => setLevelFilter(level)}
            >
              {level}
            </button>
          ))}
        </div>
        <div className="programme-catalogue">
          {filteredProgrammes.map((prog, index) => (
            <article className="programme-row" key={`${prog.name}-${index}`}>
              <div className="programme-row-main">
                <strong>{prog.name}</strong>
                <span className="programme-faculty-tag">{prog.facultyName}</span>
              </div>
              <p className="programme-desc">{prog.description}</p>
              <div className="programme-row-meta">
                <span className="programme-level-tag">{prog.level}</span>
                <span className="programme-duration"><Clock size={12} /> {prog.duration}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Programme Details
            </div>
            <h2>
              Explore by <em>faculty.</em>
            </h2>
          </div>
        </div>
        <div className="programme-list">
          {faculties.map((faculty) => (
            <div className="programme-faculty" key={faculty.id}>
              <div className="programme-faculty-header">
                <faculty.icon size={20} strokeWidth={1.5} />
                <h3>{faculty.name}</h3>
              </div>
              <p className="faculty-long-desc">{faculty.longDescription}</p>
              <ul>
                {faculty.programs.map((program) => (
                  <li key={program.name}>
                    <span className="programme-bullet">
                      <Check size={13} />
                    </span>
                    <div className="programme-list-item">
                      <span className="programme-list-name">{program.name}</span>
                      <span className="programme-list-meta">{program.level} · {program.duration}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.study} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> Ready to apply?
          </div>
          <h2>Start your journey.</h2>
          <p>Applications are now open for all intakes — January, May, and August.</p>
        </div>
        <button className="button button-light" onClick={openApply}>
          Apply now <ArrowRight size={17} />
        </button>
      </section>

      {activeFaculty && (
        <div className="modal-backdrop" onClick={() => setActiveFaculty(null)}>
          <div className="inquiry-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setActiveFaculty(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <activeFaculty.icon size={32} strokeWidth={1.5} />
            <h3>{activeFaculty.name}</h3>
            <p className="modal-desc">{activeFaculty.longDescription}</p>
            <div className="modal-programmes">
              <strong>Programmes offered:</strong>
              <ul>
                {activeFaculty.programs.map((p) => (
                  <li key={p.name}>
                    <Check size={14} /> {p.name} <span className="modal-prog-meta">— {p.level}, {p.duration}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="button button-primary"
              onClick={() => {
                setActiveFaculty(null);
                openApply();
              }}
            >
              Apply to this faculty <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
