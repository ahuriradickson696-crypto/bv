import { useState } from 'react';
import { PageHero } from '@/components/PageHero';
import { staffMembers } from '@/data/university';
import { pageImages } from '@/data/pageImages';

export function Staff() {
  const [filter, setFilter] = useState<'All' | 'Academic' | 'Administrative'>('All');

  const filtered =
    filter === 'All'
      ? staffMembers
      : staffMembers.filter((s) => s.category === filter);

  const academicCount = staffMembers.filter((s) => s.category === 'Academic').length;
  const adminCount = staffMembers.filter((s) => s.category === 'Administrative').length;

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.staff}
        eyebrow="Our people"
        title={<>Meet our <em>staff</em></>}
        subtitle="Our dedicated team of academic and administrative professionals is committed to delivering quality education and supporting every student's journey at Avance International University. With over 100 faculty members across four faculties, we bring together expertise from leading institutions."
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Directory
            </div>
            <h2>
              Faculty &amp; <em>Administration.</em>
            </h2>
          </div>
        </div>
        <div className="staff-stats-row">
          <div className="staff-stat">
            <strong>{staffMembers.length}</strong>
            <span>Featured staff</span>
          </div>
          <div className="staff-stat">
            <strong>{academicCount}</strong>
            <span>Academic staff</span>
          </div>
          <div className="staff-stat">
            <strong>{adminCount}</strong>
            <span>Administrative staff</span>
          </div>
          <div className="staff-stat">
            <strong>4</strong>
            <span>Faculties</span>
          </div>
        </div>
        <div className="news-filters">
          {(['All', 'Academic', 'Administrative'] as const).map((cat) => (
            <button
              key={cat}
              className={`filter-chip ${filter === cat ? 'chip-active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat} Staff
            </button>
          ))}
        </div>
        <div className="staff-grid">
          {filtered.map((member) => (
            <article className="staff-card" key={member.name}>
              <span className="staff-avatar">{member.initials}</span>
              <strong>{member.name}</strong>
              <span className="staff-role">{member.role}</span>
              <span className="staff-qualification">{member.qualification}</span>
              <span className="staff-category">{member.category}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Leadership
            </div>
            <h2>
              Our <em>governance.</em>
            </h2>
          </div>
        </div>
        <div className="two-col-layout">
          <div className="col-half">
            <p>
              Avance International University is led by a team of experienced
              academics and administrators who are committed to the institution's
              mission of enhancing innovations through quality education.
            </p>
            <p>
              Our leadership team brings together expertise from leading
              institutions across Uganda, East Africa, and the world. They are
              responsible for the strategic direction, academic standards, and
              day-to-day operations of the university.
            </p>
          </div>
          <div className="col-half">
            <div className="leadership-list">
              {staffMembers.filter((s) => s.category === 'Administrative').slice(0, 6).map((member) => (
                <div className="leadership-item" key={member.name}>
                  <span className="staff-avatar small">{member.initials}</span>
                  <div>
                    <strong>{member.name}</strong>
                    <span>{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
