import { useState, useMemo } from 'react';
import { ArrowRight, Clock, Search, Download, FileSpreadsheet } from 'lucide-react';
import { faculties, accreditedProgrammes, programmeSlug } from '@/data/university';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';

export function CourseFinder() {
  const { navigate } = useRouter();
  const { openApply } = useApply();

  const facultyNames = ['All', ...faculties.map((f) => f.shortName)];
  const disciplines = ['All', ...Array.from(new Set(accreditedProgrammes.map((p) => p.tierDiscipline))).sort()];

  const [query, setQuery] = useState('');
  const [faculty, setFaculty] = useState('All');
  const [discipline, setDiscipline] = useState('All');

  const facultyIdByShort: Record<string, string> = useMemo(() => {
    const m: Record<string, string> = {};
    faculties.forEach((f) => {
      m[f.shortName] = f.id;
    });
    return m;
  }, []);

  const filtered = accreditedProgrammes.filter((p) => {
    const q = query.toLowerCase();
    const matchQuery =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tierDiscipline.toLowerCase().includes(q);
    const matchFaculty =
      faculty === 'All' || p.facultyId === facultyIdByShort[faculty];
    const matchDiscipline = discipline === 'All' || p.tierDiscipline === discipline;
    return matchQuery && matchFaculty && matchDiscipline;
  });

  const downloadCsv = () => {
    const headers = [
      'No.',
      'Programme',
      'Level',
      'Tier Discipline',
      'Duration',
      'Last Accreditation',
      'Due for Review',
      'Review Year',
      'District',
      'Description',
    ];
    const rows = filtered.map((p) =>
      [
        p.no,
        `"${p.name.replace(/"/g, '""')}"`,
        p.level,
        `"${p.tierDiscipline}"`,
        p.duration,
        p.lastAccreditation,
        p.dueForReview,
        p.reviewYear,
        p.district,
        `"${p.description.replace(/"/g, '""')}"`,
      ].join(',')
    );
    const csv = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'AVIU-NCHE-Accredited-Programmes.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadJson = () => {
    const blob = new Blob([JSON.stringify(filtered, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'AVIU-NCHE-Accredited-Programmes.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.study}
        eyebrow="Accredited programmes"
        title={
          <>
            Course <em>Finder</em>
          </>
        }
        subtitle="Search all 25 NCHE-accredited bachelor programmes at Avance International University. Filter by faculty or discipline and download the catalogue (CSV / JSON)."
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'Study', path: '/study' },
          { label: 'Course Finder', path: '/study/course-finder' },
        ]}
      />

      <section className="section-pad">
        <div className="course-finder-controls">
          <div className="course-search-wrap">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search by programme name or keyword…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="course-filter-row">
            <label>
              Faculty
              <select value={faculty} onChange={(e) => setFaculty(e.target.value)}>
                {facultyNames.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Discipline
              <select value={discipline} onChange={(e) => setDiscipline(e.target.value)}>
                {disciplines.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </label>
            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end', flexWrap: 'wrap' }}>
              <button type="button" className="button button-outline" onClick={downloadCsv}>
                <Download size={16} /> CSV
              </button>
              <button type="button" className="button button-outline" onClick={downloadJson}>
                <FileSpreadsheet size={16} /> JSON
              </button>
            </div>
          </div>
        </div>

        <div className="course-finder-results">
          <p className="results-count">
            {filtered.length} accredited programme{filtered.length !== 1 ? 's' : ''} shown
          </p>
          {filtered.length === 0 ? (
            <div className="empty-state">
              <p>No programmes match your search. Try adjusting filters or clearing the keyword.</p>
            </div>
          ) : (
            <div className="programme-catalogue">
              {filtered.map((p) => (
                <div className="programme-row" key={p.no}>
                  <div className="programme-row-main">
                    <span className="programme-faculty-tag">{p.tierDiscipline}</span>
                    <strong
                      style={{ cursor: 'pointer' }}
                      onClick={() => navigate(`/study/programme/${programmeSlug(p.name)}`)}
                    >
                      {p.no}. {p.name}
                    </strong>
                  </div>
                  <p className="programme-desc">{p.description}</p>
                  <div className="programme-row-meta">
                    <span className="programme-level-tag">{p.level}</span>
                    <span className="programme-duration">
                      <Clock size={13} /> {p.duration}
                    </span>
                    <span style={{ fontSize: 12, color: 'var(--ink-muted)' }}>
                      Accredited {p.lastAccreditation} · Review {p.reviewYear}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: 16, marginTop: 10, flexWrap: 'wrap' }}>
                    <button
                      className="text-link"
                      onClick={() => navigate(`/study/programme/${programmeSlug(p.name)}`)}
                    >
                      View full details <ArrowRight size={15} />
                    </button>
                    <button className="text-link" onClick={() => openApply()}>
                      Apply <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.study} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> International & local applicants
          </div>
          <h2>Ready to apply?</h2>
          <p>
            Enquiries go to admissions@aviu.ac.ug. Fees and bursaries details are Coming Soon —
            ask Admissions for the latest guidance for your nationality.
          </p>
        </div>
        <button className="button button-light" onClick={() => openApply()}>
          Apply now <ArrowRight size={17} />
        </button>
      </section>
    </div>
  );
}
