import { useState, useMemo } from 'react';
import { ArrowRight, Clock, Search } from 'lucide-react';
import { faculties, type Programme } from '@/data/university';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';

type ProgrammeWithFaculty = Programme & { faculty: string };

export function CourseFinder() {
  const { navigate } = useRouter();
  const { openApply } = useApply();
  const allProgrammes = useMemo<ProgrammeWithFaculty[]>(
    () => faculties.flatMap((f) => f.programs.map((p) => ({ ...p, faculty: f.shortName }))),
    []
  );

  const levels = ['All', 'Certificate', 'Diploma', 'Bachelor', 'Postgraduate Diploma', 'Masters', 'PhD'];
  const facultyNames = ['All', ...faculties.map((f) => f.shortName)];

  const [query, setQuery] = useState('');
  const [level, setLevel] = useState('All');
  const [faculty, setFaculty] = useState('All');

  const filtered = allProgrammes.filter((p) => {
    const matchQuery = p.name.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase());
    const matchLevel = level === 'All' || p.level === level;
    const matchFaculty = faculty === 'All' || p.faculty === faculty;
    return matchQuery && matchLevel && matchFaculty;
  });

  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.study}
        eyebrow="Course discovery"
        title={<>Course <em>Finder</em></>}
        subtitle="Search and filter all programmes at AVIU by keyword, level, and faculty. Find the right programme for your career goals."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Study', path: '/study' }, { label: 'Course Finder', path: '/study/course-finder' }]}
      />

      <section className="section-pad">
        <div className="course-finder-controls">
          <div className="course-search-wrap">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search programmes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="course-filter-row">
            <label>
              Level
              <select value={level} onChange={(e) => setLevel(e.target.value)}>
                {levels.map((l) => <option key={l} value={l}>{l}</option>)}
              </select>
            </label>
            <label>
              Faculty
              <select value={faculty} onChange={(e) => setFaculty(e.target.value)}>
                {facultyNames.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
            </label>
          </div>
        </div>

        <div className="course-finder-results">
          <p className="results-count">{filtered.length} programme{filtered.length !== 1 ? 's' : ''} found</p>
          {filtered.length === 0 ? (
            <div className="empty-state">
              <p>No programmes match your search. Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="programme-catalogue">
              {filtered.map((p, i) => (
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
          )}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow"><span className="eyebrow-line" /> Planning tools</div>
            <h2>Downloadable <em>resources.</em></h2>
            <p>Access our prospectus, academic handbooks, and credit calculator to plan your studies. These resources provide detailed information on programme structures, course outlines, and credit requirements.</p>
          </div>
          <div className="col-half">
            <div className="library-grid">
              <div className="library-card">
                <span className="library-icon"><ArrowRight size={24} strokeWidth={1.5} /></span>
                <strong>Prospectus 2026</strong>
                <p>Full overview of all programmes, faculties, fees, and campus life. Available as PDF download.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><ArrowRight size={24} strokeWidth={1.5} /></span>
                <strong>Academic Handbooks</strong>
                <p>Detailed programme handbooks with course outlines, credit requirements, and assessment criteria.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><ArrowRight size={24} strokeWidth={1.5} /></span>
                <strong>Credit Calculator</strong>
                <p>Plan your semester by calculating credits per course and checking graduation requirements.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><ArrowRight size={24} strokeWidth={1.5} /></span>
                <strong>Exemption Criteria</strong>
                <p>Check if your prior qualifications qualify for credit exemptions toward your AVIU programme.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.study} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Found your programme?</div>
          <h2>Start your application.</h2>
          <p>Apply online or contact admissions for guidance on your chosen programme.</p>
        </div>
        <button className="button button-light" onClick={openApply}>Apply now <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
