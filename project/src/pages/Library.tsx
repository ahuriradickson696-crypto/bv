import { ArrowRight, Clock } from 'lucide-react';
import { libraryResources, stats, libraryHours } from '@/data/university';
import { PageHero } from '@/components/PageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';

export function Library() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.library}
        eyebrow="Knowledge hub"
        title={<>University <em>Library</em></>}
        subtitle="Our library and information resources provide students and faculty with access to a wealth of digital and physical materials, supporting research and learning across all faculties. The Department of Library and Information Resources is at the heart of our academic community."
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Resources
            </div>
            <h2>
              Explore our <em>collections.</em>
            </h2>
          </div>
        </div>
        <div className="library-grid">
          {libraryResources.map((resource) => (
            <article className="library-card" key={resource.title}>
              <span className="library-icon">
                <resource.icon size={24} strokeWidth={1.5} />
              </span>
              <strong>{resource.title}</strong>
              <p>{resource.description}</p>
              <a className="text-link" onClick={(e) => e.preventDefault()}>
                Access resource <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> By the numbers
            </div>
            <h2>
              Learning at <em>scale.</em>
            </h2>
          </div>
        </div>
        <div className="stats-strip">
          <BackgroundCarousel images={pageImages.library} overlay={0.9} />
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <stat.icon size={22} strokeWidth={1.5} />
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow">
              <span className="eyebrow-line" /> Opening hours
            </div>
            <h2>
              When we are <em>open.</em>
            </h2>
            <p>
              Our physical library is open throughout the week with extended
              hours during examination periods. The E-Library and online
              resources are available 24/7 to all registered students.
            </p>
            <p>
              The library is staffed by qualified professionals who can assist
              with research queries, database access, and information literacy
              training. Visit us or reach out online.
            </p>
          </div>
          <div className="col-half">
            <div className="library-hours-list">
              {libraryHours.map((item) => (
                <div className="library-hours-row" key={item.day}>
                  <span><Clock size={14} /> {item.day}</span>
                  <strong>{item.hours}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="collab-banner">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Need help?
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', margin: '16px 0 8px', color: 'var(--purple-900)', fontFamily: "'Playfair Display'", fontWeight: 500, letterSpacing: '-.03em' }}>
              Ask a <em>librarian.</em>
            </h2>
            <p>
              Our library staff are available to help you find resources, access
              databases, and develop your research skills. Whether you need help
              finding a specific journal or want to improve your research
              techniques, we are here to support your academic journey.
            </p>
          </div>
          <button className="button button-primary" onClick={() => navigate('/contact')}>
            Contact library <ArrowRight size={17} />
          </button>
        </div>
      </section>
    </div>
  );
}
