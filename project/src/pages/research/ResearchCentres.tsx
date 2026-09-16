import { ArrowRight } from 'lucide-react';
import { researchCentres, researchProjects } from '@/data/university';
import { SubPageHero } from '@/components/SubPageHero';
import { videosFor } from '@/data/pageVideos';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

export function ResearchCentres() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <SubPageHero
videos={videosFor('research')}         images={pageImages.research}
        eyebrow="Research"
        title={<>Research Centres &amp; <em>Institutes</em></>}
        subtitle="Our specialised research centres and institutes bring together faculty, postgraduate students, and industry partners to address real-world challenges across technology, health, education, and business."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Research', path: '/research' }, { label: 'Centres', path: '/research/centres' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Our centres</div>
            <h2>Hubs of <em>innovation.</em></h2>
          </div>
        </div>
        <div className="library-grid">
          {researchCentres.map((centre) => (
            <article className="library-card" key={centre.name}>
              <span className="library-icon"><centre.icon size={24} strokeWidth={1.5} /></span>
              <strong>{centre.name}</strong>
              <p>{centre.description}</p>
              <a className="text-link" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>
                Contact the centre <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Active projects</div>
            <h2>Current research <em>initiatives.</em></h2>
          </div>
        </div>
        <div className="research-projects-list">
          {researchProjects.map((project) => (
            <div className="research-project-card" key={project.title}>
              <div className="research-project-header">
                <h3>{project.title}</h3>
                <span className={`research-status status-${project.status.toLowerCase()}`}>{project.status}</span>
              </div>
              <p>{project.description}</p>
              <div className="research-project-meta">
                <span>Lead: {project.lead}</span>
                <span>Faculty: {project.faculty}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.research} overlay={0.88}  videos={videosFor('research')} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Partner with us</div>
          <h2>Collaborate on research.</h2>
          <p>Industry partners, NGOs, and academic institutions can collaborate with our research centres.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>Contact us <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
