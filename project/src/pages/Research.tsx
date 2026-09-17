import { ArrowRight, Lightbulb, Award, Users } from 'lucide-react';
import { researchAreas, researchProjects, researchCentres, universityInfo } from '@/data/university';
import { PageHero } from '@/components/PageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';
import { videosFor } from '@/data/pageVideos';

const statusColors: Record<string, string> = {
  Ongoing: 'status-ongoing',
  Completed: 'status-completed',
  Recruiting: 'status-recruiting',
};

export function Research() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <PageHero
videos={videosFor('research')}         images={pageImages.research}
        eyebrow="Discovery"
        title={<>Research at <em>Avance</em></>}
        subtitle="Avance International University is renowned for groundbreaking research across technology, medicine, and the social sciences. We engage students in research-oriented teaching across all our programmes, ensuring that learning is driven by inquiry and discovery."
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Our focus
            </div>
            <h2>
              Where discovery <em>meets impact.</em>
            </h2>
          </div>
        </div>
        <div className="research-grid">
          {researchAreas.map((area, index) => (
            <article className="research-card" key={area.title}>
              <span className="school-index">0{index + 1}</span>
              <area.icon size={28} strokeWidth={1.5} />
              <strong>{area.title}</strong>
              <p>{area.description}</p>
              <ArrowRight className="school-arrow" size={19} />
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Research centres
            </div>
            <h2>
              Where ideas <em>take shape.</em>
            </h2>
          </div>
        </div>
        <div className="library-grid">
          {researchCentres.map((centre) => (
            <article className="library-card" key={centre.name}>
              <span className="library-icon">
                <centre.icon size={24} strokeWidth={1.5} />
              </span>
              <strong>{centre.name}</strong>
              <p>{centre.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Current projects
            </div>
            <h2>
              Research in <em>action.</em>
            </h2>
          </div>
        </div>
        <div className="research-projects-list">
          {researchProjects.map((project) => (
            <article className="research-project-card" key={project.title}>
              <div className="research-project-header">
                <h3>{project.title}</h3>
                <span className={`research-status ${statusColors[project.status] || ''}`}>
                  {project.status}
                </span>
              </div>
              <p>{project.description}</p>
              <div className="research-project-meta">
                <span><Users size={13} /> {project.lead}</span>
                <span>{project.faculty}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow">
              <span className="eyebrow-line" /> Research culture
            </div>
            <h2>
              Research-oriented <em>teaching.</em>
            </h2>
            <p>
              At Avance, research is not confined to the laboratory. Every
              programme integrates research-oriented teaching, so students
              learn by doing, questioning, and discovering. Our innovation
              centre provides modern laboratories, libraries, and practical
              teaching methods.
            </p>
            <p>
              Students conduct and contribute to research with opportunities and
              assistance from a variety of university resources. We believe that
              engaging students in research from the start of their academic
              journey produces graduates who are critical thinkers and problem
              solvers.
            </p>
            <a
              className="text-link"
              onClick={(e) => {
                e.preventDefault();
                navigate('/about');
              }}
            >
              Learn about our facilities <ArrowRight size={16} />
            </a>
          </div>
          <div className="col-half">
            <div className="research-highlights">
              <div className="highlight-item">
                <Lightbulb size={22} strokeWidth={1.5} />
                <div>
                  <strong>Innovation Centre</strong>
                  <span>Fully equipped with modern laboratories and prototyping equipment</span>
                </div>
              </div>
              <div className="highlight-item">
                <Users size={22} strokeWidth={1.5} />
                <div>
                  <strong>Student Ventures</strong>
                  <span>Engaging students in business start-up projects and entrepreneurship</span>
                </div>
              </div>
              <div className="highlight-item">
                <Award size={22} strokeWidth={1.5} />
                <div>
                  <strong>3M+ Video Lessons</strong>
                  <span>Technology-enhanced learning resources for all students</span>
                </div>
              </div>
              <div className="highlight-item">
                <Lightbulb size={22} strokeWidth={1.5} />
                <div>
                  <strong>Research Repository</strong>
                  <span>Digital archive of student and faculty research outputs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Partner with us
            </div>
            <h2>
              Collaborate with <em>Avance.</em>
            </h2>
          </div>
        </div>
        <div className="collab-banner">
          <p>
            We welcome collaboration with industry partners, research
            institutions, and community organisations. Together, we can turn
            ideas into impact and create opportunities that benefit students,
            faculty, and the wider community.
          </p>
          <button className="button button-primary" onClick={() => navigate('/contact')}>
            Get in touch <ArrowRight size={17} />
          </button>
        </div>
      </section>
    </div>
  );
}
