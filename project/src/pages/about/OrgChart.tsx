import { ArrowRight } from 'lucide-react';
import { staffMembers, universityInfo } from '@/data/university';
import { SubPageHero } from '@/components/SubPageHero';
import { videosFor } from '@/data/pageVideos';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

export function OrgChart() {
  const { navigate } = useRouter();

  const vc = staffMembers.find((s) => s.role === 'Vice Chancellor')!;
  const dvc = staffMembers.find((s) => s.role.includes('Deputy Vice Chancellor'))!;
  const secretary = staffMembers.find((s) => s.role === 'University Secretary')!;
  const registrar = staffMembers.find((s) => s.role === 'Academic Registrar')!;
  const deans = staffMembers.filter((s) => s.role.includes('Dean'));

  return (
    <div className="page-content">
      <SubPageHero
videos={videosFor('about')}         images={pageImages.about}
        eyebrow="About"
        title={<>University <em>Organisation</em></>}
        subtitle="Explore the leadership structure and governance hierarchy of Avance International University. From the Chancellor to faculty deans, see how our institution is organised."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Organisation', path: '/about/organisation' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Leadership hierarchy</div>
            <h2>Our <em>organisation chart.</em></h2>
          </div>
        </div>

        <div className="org-chart">
          <div className="org-level">
            <div className="org-node org-node-top">
              <span className="org-avatar">{vc.initials}</span>
              <strong>{vc.name}</strong>
              <span>{vc.role}</span>
              <small>{vc.qualification}</small>
            </div>
          </div>

          <div className="org-connector" />

          <div className="org-level">
            <div className="org-node">
              <span className="org-avatar">{dvc.initials}</span>
              <strong>{dvc.name}</strong>
              <span>{dvc.role}</span>
              <small>{dvc.qualification}</small>
            </div>
            <div className="org-node">
              <span className="org-avatar">{secretary.initials}</span>
              <strong>{secretary.name}</strong>
              <span>{secretary.role}</span>
              <small>{secretary.qualification}</small>
            </div>
            <div className="org-node">
              <span className="org-avatar">{registrar.initials}</span>
              <strong>{registrar.name}</strong>
              <span>{registrar.role}</span>
              <small>{registrar.qualification}</small>
            </div>
          </div>

          <div className="org-connector" />

          <div className="org-children-row">
            {deans.map((dean) => (
              <div className="org-node" key={dean.name}>
                <span className="org-avatar">{dean.initials}</span>
                <strong>{dean.name}</strong>
                <span>{dean.role}</span>
                <small>{dean.qualification}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Governance bodies</div>
            <h2>How we are <em>governed.</em></h2>
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
        <BackgroundCarousel images={pageImages.about} overlay={0.88}  videos={videosFor('about')} />
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
