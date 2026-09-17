import { ArrowRight, Microscope, FileText, Users } from 'lucide-react';
import { researchProjects, staffMembers } from '@/data/university';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

export function PhdOpportunities() {
  const { navigate } = useRouter();
  const academicStaff = staffMembers.filter((s) => s.category === 'Academic');
  const recruitingProjects = researchProjects.filter((p) => p.status === 'Recruiting' || p.status === 'Ongoing');

  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.research}
        eyebrow="Research"
        title={<>PhD <em>Opportunities</em></>}
        subtitle="Pursue your doctoral research at AIU. We offer PhD programmes by research across all four faculties, with opportunities for funded studentships and industry collaboration."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Research', path: '/research' }, { label: 'PhD Opportunities', path: '/research/phd-opportunities' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Available projects</div>
            <h2>Funded &amp; ongoing <em>studentships.</em></h2>
          </div>
        </div>
        <div className="research-projects-list">
          {recruitingProjects.map((project) => (
            <div className="research-project-card" key={project.title}>
              <div className="research-project-header">
                <h3>{project.title}</h3>
                <span className={`research-status status-${project.status.toLowerCase()}`}>{project.status}</span>
              </div>
              <p>{project.description}</p>
              <div className="research-project-meta">
                <span>Supervisor: {project.lead}</span>
                <span>Faculty: {project.faculty}</span>
              </div>
              <a className="text-link" style={{ marginTop: '12px' }} onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>
                Express interest <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Find a supervisor</div>
            <h2>Our <em>researchers.</em></h2>
          </div>
        </div>
        <div className="staff-grid">
          {academicStaff.map((member) => (
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
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow"><span className="eyebrow-line" /> How to apply</div>
            <h2>PhD application <em>process.</em></h2>
            <p>To apply for a PhD at AIU, you need a recognised master\'s degree in a relevant field, a 2,000-3,000 word research proposal, and the agreement of a suitable supervisor.</p>
          </div>
          <div className="col-half">
            <ul className="requirements-list">
              <li><span className="check-bullet"><FileText size={16} /></span> Identify a research area and potential supervisor</li>
              <li><span className="check-bullet"><FileText size={16} /></span> Write a research proposal (2,000-3,000 words)</li>
              <li><span className="check-bullet"><FileText size={16} /></span> Submit application with academic transcripts</li>
              <li><span className="check-bullet"><FileText size={16} /></span> Attend an interview with the proposed supervisor</li>
              <li><span className="check-bullet"><FileText size={16} /></span> Receive admission decision within 3 weeks</li>
              <li><span className="check-bullet"><FileText size={16} /></span> Register and begin your research journey</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.research} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Doctoral study</div>
          <h2>Start your PhD journey.</h2>
          <p>Contact the graduate research school to discuss your research interests.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>Get in touch <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
