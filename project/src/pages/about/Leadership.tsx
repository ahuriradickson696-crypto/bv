import { ArrowRight } from 'lucide-react';
import { staffMembers, universityInfo } from '@/data/university';
import { SubPageHero } from '@/components/SubPageHero';
import { videosFor } from '@/data/pageVideos';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

const hierarchyLevels = [
  { id: 'gm', label: 'General Meeting of AVIU Ltd', note: 'Proprietary body' },
  { id: 'board', label: 'Board of Directors', note: 'Strategic direction' },
  { id: 'chancellor', label: 'Chancellor', note: 'Ceremonial head' },
  { id: 'council', label: 'University Council', note: 'Policy & compliance' },
  { id: 'senate', label: 'University Senate', note: 'Academic authority' },
  { id: 'faculty', label: 'Faculty / School Boards of Studies', note: 'Curriculum & delivery' },
  { id: 'dept', label: 'Departmental Boards', note: 'Teaching quality' },
];

export function Leadership() {
  const { navigate } = useRouter();
  const leadership = staffMembers.filter((s) => s.category === 'Administrative');
  const deans = staffMembers.filter((s) => s.role.includes('Dean'));

  return (
    <div className="page-content">
      <SubPageHero
videos={videosFor('about')}         images={pageImages.about}
        eyebrow="About"
        title={
          <>
            Leadership &amp; <em>Governance</em>
          </>
        }
        subtitle="Avance International University is governed through a clear structure from the General Meeting of AVIU Ltd through the Board, Council, Senate and faculty boards — ensuring academic quality and accountable leadership."
        crumbs={[
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Leadership', path: '/about/leadership' },
        ]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Governance structure
            </div>
            <h2>
              How AVIU is <em>governed.</em>
            </h2>
            <p style={{ maxWidth: 640, color: 'var(--ink-soft)', marginTop: 8 }}>
              Adapted for Avance International University along international higher-education
              governance practice. Each level has defined responsibilities for strategy, policy,
              academic standards and day-to-day quality.
            </p>
          </div>
        </div>

        <div className="org-hierarchy" style={{ maxWidth: 560, margin: '32px auto' }}>
          {hierarchyLevels.map((node, i) => (
            <div key={node.id} style={{ textAlign: 'center' }}>
              <div
                style={{
                  display: 'inline-block',
                  background: 'var(--purple-800)',
                  color: '#fff',
                  padding: '12px 28px',
                  borderRadius: 999,
                  fontWeight: 600,
                  fontSize: 14,
                  minWidth: 220,
                }}
              >
                {node.label}
                <div style={{ fontWeight: 400, fontSize: 12, opacity: 0.85, marginTop: 2 }}>
                  {node.note}
                </div>
              </div>
              {i < hierarchyLevels.length - 1 && (
                <div
                  style={{
                    width: 2,
                    height: 28,
                    background: 'var(--purple-300)',
                    margin: '0 auto',
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="governance-grid" style={{ marginTop: 40 }}>
          {universityInfo.governance.map((g) => (
            <div className="governance-card" key={g.title}>
              <strong>{g.title}</strong>
              <p>{g.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> University leadership
            </div>
            <h2>
              Our <em>leadership team.</em>
            </h2>
          </div>
        </div>
        <div className="staff-grid">
          {leadership.map((member) => (
            <article className="staff-card" key={member.name}>
              <span className="staff-avatar">{member.initials}</span>
              <strong>{member.name}</strong>
              <span className="staff-role">{member.role}</span>
              <span className="staff-qualification">{member.qualification}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Faculty deans
            </div>
            <h2>
              Academic <em>leadership.</em>
            </h2>
          </div>
        </div>
        <div className="staff-grid">
          {deans.map((member) => (
            <article className="staff-card" key={member.name}>
              <span className="staff-avatar">{member.initials}</span>
              <strong>{member.name}</strong>
              <span className="staff-role">{member.role}</span>
              <span className="staff-qualification">{member.qualification}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.about} overlay={0.88}  videos={videosFor('about')} />
        <div>
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> Our people
          </div>
          <h2>Meet the full team.</h2>
          <p>Browse the complete staff directory for faculty and administrative members.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/staff')}>
          Staff directory <ArrowRight size={17} />
        </button>
      </section>
    </div>
  );
}
