import { ArrowRight, Check, Target, Eye } from 'lucide-react';
import { universityInfo, stats, homeStats, campusFacilities } from '@/data/university';
import { PageHero } from '@/components/PageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

const campusImage = '/images/campus-building.jpg';

export function About() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.about}
        eyebrow="Our story"
        title={<>About <em>Avance</em></>}
        subtitle="A private institution in Uganda committed to enhancing innovations through hands-on, research-oriented education. We identify, analyse, and focus on each student's strengths, shaping them to thrive in today's competitive world of work."
      />

      <section className="section-pad">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow">
              <span className="eyebrow-line" /> Who we are
            </div>
            <h2>
              Enhancing <em>innovations.</em>
            </h2>
            <p>{universityInfo.description}</p>
            <p>
              Our academic programmes are designed to meet current and future
              public demands. We offer undergraduate and postgraduate
              programmes across four faculties, with a fully equipped
              innovation centre at the heart of our campus.
            </p>
            <a
              className="text-link"
              onClick={(e) => {
                e.preventDefault();
                navigate('/study');
              }}
            >
              Explore our programmes <ArrowRight size={16} />
            </a>
          </div>
          <div className="col-half">
            <div className="about-image-wrap">
              <img src={campusImage} alt="Avance campus" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="mission-vision-grid">
          <div className="mission-card">
            <span className="mission-icon"><Target size={24} strokeWidth={1.5} /></span>
            <div className="eyebrow"><span className="eyebrow-line" /> Our Mission</div>
            <p>{universityInfo.mission}</p>
          </div>
          <div className="mission-card">
            <span className="mission-icon"><Eye size={24} strokeWidth={1.5} /></span>
            <div className="eyebrow"><span className="eyebrow-line" /> Our Vision</div>
            <p>{universityInfo.vision}</p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Our journey
            </div>
            <h2>
              A history of <em>growth.</em>
            </h2>
          </div>
        </div>
        <div className="timeline">
          {universityInfo.history.map((item, index) => (
            <div className="timeline-item" key={item.year}>
              <div className="timeline-marker">
                <span className="timeline-year">{item.year}</span>
                {index < universityInfo.history.length - 1 && <span className="timeline-line" />}
              </div>
              <div className="timeline-content">
                <p>{item.event}</p>
              </div>
            </div>
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
              Our campus in <em>focus.</em>
            </h2>
          </div>
        </div>
        <div className="stats-strip">
          <BackgroundCarousel images={pageImages.about} overlay={0.9} />
          {homeStats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <stat.icon size={22} strokeWidth={1.5} />
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> What sets us apart
            </div>
            <h2>
              The Avance <em>advantage.</em>
            </h2>
          </div>
        </div>
        <div className="features-grid">
          {universityInfo.features.map((feature) => (
            <div className="feature-item" key={feature}>
              <span className="feature-check">
                <Check size={16} />
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Core values
            </div>
            <h2>
              What we <em>stand for.</em>
            </h2>
          </div>
        </div>
        <div className="values-grid">
          {universityInfo.coreValues.map((value, index) => (
            <div className="value-card" key={value}>
              <span className="value-number">0{index + 1}</span>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Governance
            </div>
            <h2>
              How we are <em>governed.</em>
            </h2>
          </div>
        </div>
        <div className="governance-grid">
          {universityInfo.governance.map((item) => (
            <div className="governance-card" key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Campus facilities
            </div>
            <h2>
              Where learning <em>happens.</em>
            </h2>
          </div>
        </div>
        <div className="library-grid">
          {campusFacilities.map((facility) => (
            <article className="library-card" key={facility.name}>
              <span className="library-icon">
                <facility.icon size={24} strokeWidth={1.5} />
              </span>
              <strong>{facility.name}</strong>
              <p>{facility.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Recognition
            </div>
            <h2>
              Accredited &amp; <em>recognised.</em>
            </h2>
          </div>
        </div>
        <div className="accreditation-grid">
          {universityInfo.accreditations.map((acc) => (
            <div className="accreditation-card" key={acc.name}>
              <strong>{acc.name}</strong>
              <span>{acc.detail}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.about} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> Visit us
          </div>
          <h2>Come and see.</h2>
          <p>Experience the Avance campus and meet our community in person.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>
          Contact us <ArrowRight size={17} />
        </button>
      </section>
    </div>
  );
}
