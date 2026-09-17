import { ArrowRight } from 'lucide-react';
import { staffMembers, universityInfo } from '@/data/university';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

export function Leadership() {
  const { navigate } = useRouter();
  const leadership = staffMembers.filter((s) => s.category === 'Administrative');
  const deans = staffMembers.filter((s) => s.role.includes('Dean'));

  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="About"
        title={<>Leadership &amp; <em>Governance</em></>}
        subtitle="AIU is led by a team of experienced academics and administrators committed to our mission of enhancing innovations through quality education."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Leadership', path: '/about/leadership' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> University leadership</div>
            <h2>Our <em>leadership team.</em></h2>
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

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Faculty deans</div>
            <h2>Academic <em>leadership.</em></h2>
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

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Governance structure</div>
            <h2>How the university is <em>governed.</em></h2>
          </div>
        </div>
        <div className="governance-grid">
          {universityInfo.governance.map((g) => (
            <div className="governance-card" key={g.title}>
              <strong>{g.title}</strong>
              <p>{g.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.about} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Our people</div>
          <h2>Meet the full team.</h2>
          <p>Browse our complete staff directory for all faculty and administrative members.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/staff')}>Staff directory <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
