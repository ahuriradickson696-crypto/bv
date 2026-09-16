import { ArrowRight } from 'lucide-react';
import { studentLifeItems, testimonials, campusFacilities } from '@/data/university';
import { PageHero } from '@/components/PageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';
import { TikTokStrip } from '@/components/TikTokEmbed';
import { tiktoksByCategory, galleryTikToks } from '@/data/galleryMedia';

const campusImage = '/images/campus-building.jpg';
const sportsImage = '/images/graduates-laughing.jpg';

export function StudentLife() {
  const { navigate } = useRouter();
  const { openApply } = useApply();

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.studentlife}
        eyebrow="Campus experience"
        title={<>Life at <em>Avance</em></>}
        subtitle="Our goal is to provide you with resources that help enrich both the student experience and campus life here at Avance International University. From academic support to sports, innovation, and community engagement, there is something for everyone."
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> What we offer
            </div>
            <h2>
              More than just <em>a classroom.</em>
            </h2>
          </div>
        </div>
        <div className="student-life-grid">
          {studentLifeItems.map((item) => (
            <article className="student-life-card" key={item.title}>
              <item.icon size={28} strokeWidth={1.5} />
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </article>
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
              Where students <em>thrive.</em>
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
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow">
              <span className="eyebrow-line" /> Student voices
            </div>
            <h2>
              Hear from our <em>students.</em>
            </h2>
            <p>
              The best way to understand life at Avance is through the people who
              live it every day. Here is what our students have to say about
              their experience on campus.
            </p>
            <p>
              Our students come from across Uganda and the broader East African
              region, bringing diverse perspectives and experiences that enrich
              campus life for everyone. Whether through the student guild, sports
              teams, community outreach, or the innovation hub, there are
              countless ways to get involved.
            </p>
            <a
              className="text-link"
              onClick={(e) => {
                e.preventDefault();
                navigate('/admissions');
              }}
            >
              Join our community <ArrowRight size={16} />
            </a>
          </div>
          <div className="col-half">
            <div className="testimonial-list">
              {testimonials.slice(0, 4).map((t) => (
                <div className="testimonial-item" key={t.name}>
                  <span className="quote-mark-small">"</span>
                  <p>{t.quote}</p>
                  <div className="quote-person">
                    <span className="person-initials">{t.initials}</span>
                    <div>
                      <strong>{t.name}</strong>
                      <small>{t.program}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="about-image-wrap banner-image">
          <img src={sportsImage} alt="Sports and recreation at AVIU" />
        </div>
      </section>

      <section className="section-pad">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="about-image-wrap">
              <img src={campusImage} alt="Students collaborating on campus" />
            </div>
          </div>
          <div className="col-half">
            <div className="eyebrow">
              <span className="eyebrow-line" /> Community engagement
            </div>
            <h2>
              Giving back is <em>part of learning.</em>
            </h2>
            <p>
              Community engagement is a core part of the Avance experience.
              Students participate in health outreach, education support,
              environmental conservation, and other service activities that
              build civic responsibility alongside academic skills.
            </p>
            <p>
              Each semester includes dedicated community engagement days where
              students and staff work together on projects that make a real
              difference in the communities around our campus.
            </p>
            <a
              className="text-link"
              onClick={(e) => {
                e.preventDefault();
                navigate('/events');
              }}
            >
              See upcoming engagement events <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <TikTokStrip
        items={galleryTikToks.filter((x) => x.category === 'campus' || x.category === 'admissions').slice(0, 3)}
        title={<>Student life on <em>TikTok.</em></>}
        subtitle="Campus energy and welcome moments from AVIU channels."
      />

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.studentlife} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> Ready to join?
          </div>
          <h2>Experience it yourself.</h2>
          <p>Apply today and become part of the Avance community.</p>
        </div>
        <button className="button button-light" onClick={openApply}>
          Apply now <ArrowRight size={17} />
        </button>
      </section>
    </div>
  );
}
