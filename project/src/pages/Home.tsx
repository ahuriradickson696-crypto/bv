import { useState } from 'react';
import { ArrowRight, Play, Globe2, Check, Calendar, Clock, MapPin } from 'lucide-react';
import { faculties, homeStats, testimonials, universityInfo, newsItems, events, partners } from '@/data/university';
import { useRouter } from '@/router/Router';
import { useApply } from '@/components/ApplyContext';
import { Carousel, type CarouselSlide } from '@/components/Carousel';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages, allGallery } from '@/data/pageImages';
import { TikTokStrip } from '@/components/TikTokEmbed';
import { galleryTikToks } from '@/data/galleryMedia';

/** All website images for dissolving full-bleed backgrounds */
const allSiteImages = [
  ...allGallery,
  '/images/admission-poster.jpeg',
  '/images/avance-students-2.png',
  '/images/avance-students-3.png',
];

const campusImage = '/images/campus-building.jpg';
const studentsImage = '/images/classroom-students.jpg';
const seminarImage = '/images/guest-lecture.jpg';

const heroSlides: CarouselSlide[] = [
  {
    image: '/images/campus-aviu-students-1.jpg',
    label: '01 / 08',
    title: 'Where tradition meets tomorrow\'s thinking.',
    description: 'Our campus brings together students from across East Africa to learn, innovate, and grow.',
  },
  {
    image: '/images/campus-aviu-event-1.jpg',
    label: '02 / 08',
    title: 'Learn with purpose, live with intention.',
    description: 'Small class sizes, hands-on projects, and mentorship from faculty who care about your success.',
  },
  {
    image: '/images/campus-aviu-students-2.jpg',
    label: '03 / 08',
    title: 'A campus designed for discovery.',
    description: 'Modern facilities and green spaces that inspire learning and collaboration every day.',
  },
  {
    image: '/images/campus-aviu-event-2.jpg',
    label: '04 / 08',
    title: 'Graduate ready for the world.',
    description: 'Our programmes are designed to meet current and future demands of the workplace.',
  },
  {
    image: '/images/campus-aviu-extra.jpg',
    label: '05 / 08',
    title: 'Celebrate achievement together.',
    description: 'Join a proud community of graduates who are making an impact across the region.',
  },
  {
    image: '/images/lab-microscope.jpg',
    label: '06 / 08',
    title: 'Research that changes lives.',
    description: 'From integrative medicine to AI-powered agriculture, our research addresses real-world challenges.',
  },
  {
    image: '/images/classroom-discussion.jpg',
    label: '07 / 08',
    title: 'Learn by doing, grow by sharing.',
    description: 'Interactive classes and peer collaboration prepare you for the challenges of tomorrow.',
  },
  {
    image: '/images/conference-audience.jpg',
    label: '08 / 08',
    title: 'Connect with leaders and innovators.',
    description: 'Guest lectures, conferences and industry partnerships expand your horizons.',
  },
];

export function Home() {
  const { navigate } = useRouter();
  const { openApply } = useApply();
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const t = testimonials[testimonialIndex];
  const latestNews = newsItems.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);

  return (
    <div className="page-content">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" /> {universityInfo.tagline}
          </div>
          <h1>
            Enhancing<br /><em>innovations.</em>
          </h1>
          <p className="hero-text">
            At Avance International University we identify, analyse, and focus on
            each student's strengths, shaping them to thrive in today's
            competitive world of work.
          </p>
          <div className="hero-buttons">
            <button className="button button-primary" onClick={() => navigate('/study')}>
              Find your programme <ArrowRight size={17} />
            </button>
            <a
              className="watch-link"
              onClick={(e) => {
                e.preventDefault();
                navigate('/about');
              }}
            >
              <span className="play">
                <Play size={13} fill="currentColor" />
              </span>
              See AVIU in action
            </a>
          </div>
          <div className="hero-note">
            <div className="avatar-stack">
              <span>KW</span>
              <span>NM</span>
              <span>NJ</span>
            </div>
            <span>
              Join 2,000+ students<br />
              across all faculties
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap">
            <Carousel slides={heroSlides} autoPlay={true} interval={5000} />
          </div>
          <div className="floating-card">
            <span className="card-icon">
              <Globe2 size={19} />
            </span>
            <div>
              <strong>2K+</strong>
              <span>
                students<br />enrolled
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        {homeStats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <stat.icon size={22} strokeWidth={1.5} />
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="experience-section section-pad" id="experience">
        <div className="section-intro">
          <div className="eyebrow">
            <span className="eyebrow-line" /> The Avance difference
          </div>
          <h2>
            Learn with purpose.<br /><em>Live with intention.</em>
          </h2>
          <p>
            University is more than a qualification. It is the people you meet,
            the questions you ask, and the confidence you build to make a
            meaningful difference.
          </p>
          <a
            className="text-link"
            onClick={(e) => {
              e.preventDefault();
              navigate('/about');
            }}
          >
            Discover the AVIU experience <ArrowRight size={16} />
          </a>
        </div>
        <div className="feature-grid">
          <article className="feature-card feature-large">
            <img src={studentsImage} alt="Students collaborating in a library" />
            <div className="feature-overlay">
              <span>01 / 03</span>
              <strong>
                Ideas grow<br />better together.
              </strong>
            </div>
          </article>
          <article className="feature-card feature-tall">
            <img src={seminarImage} alt="Students discussing ideas" />
            <div className="feature-overlay">
              <span>02 / 03</span>
              <strong>
                Find your<br />people.
              </strong>
            </div>
          </article>
          <div className="feature-stat">
            <span className="stat-mark">✦</span>
            <strong>3M+</strong>
            <p>video lessons available to every student on demand.</p>
            <a
              onClick={(e) => {
                e.preventDefault();
                navigate('/study');
              }}
            >
              Explore academics <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="schools-section section-pad" id="study">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Explore your future
            </div>
            <h2>
              Find your <em>direction.</em>
            </h2>
          </div>
          <a
            className="text-link"
            onClick={(e) => {
              e.preventDefault();
              navigate('/study');
            }}
          >
            View all programmes <ArrowRight size={16} />
          </a>
        </div>
        <div className="school-grid">
          {faculties.map(({ id, name, icon: Icon, programs }, index) => (
            <a
              className="school-card"
              key={id}
              onClick={(e) => {
                e.preventDefault();
                navigate('/study');
              }}
            >
              <span className="school-index">0{index + 1}</span>
              <Icon size={24} strokeWidth={1.5} />
              <strong>{name}</strong>
              <span className="school-count">{programs.length} programmes</span>
              <ArrowRight className="school-arrow" size={19} />
            </a>
          ))}
        </div>
      </section>

      <section className="quote-section" id="campus-life">
        <div className="quote-image">
          <img src={campusImage} alt="Avance students on campus" />
        </div>
        <div className="quote-copy">
          <BackgroundCarousel images={allSiteImages} interval={4500} overlay={0.82} />
          <span className="quote-mark">"</span>
          <blockquote>{t.quote}</blockquote>
          <div className="quote-person">
            <span className="person-initials">{t.initials}</span>
            <div>
              <strong>{t.name}</strong>
              <small>{t.program}</small>
            </div>
          </div>
          <div className="quote-controls">
            <span>
              0{testimonialIndex + 1} <i /> 0{testimonials.length}
            </span>
            <div>
              <button
                aria-label="Previous"
                onClick={() =>
                  setTestimonialIndex((i) =>
                    i === 0 ? testimonials.length - 1 : i - 1
                  )
                }
              >
                <ArrowRight size={17} className="arrow-back" />
              </button>
              <button
                aria-label="Next"
                onClick={() =>
                  setTestimonialIndex((i) => (i + 1) % testimonials.length)
                }
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section section-pad">
        <div className="section-heading centered">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Why Avance
            </div>
            <h2>
              An education built on <em>innovation.</em>
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
              <span className="eyebrow-line" /> Latest news
            </div>
            <h2>
              What's happening at <em>AVIU.</em>
            </h2>
          </div>
          <a
            className="text-link"
            onClick={(e) => {
              e.preventDefault();
              navigate('/news');
            }}
          >
            All news <ArrowRight size={16} />
          </a>
        </div>
        <div className="news-grid">
          {latestNews.map((item) => (
            <article className="news-card" key={item.id} onClick={() => navigate('/news')}>
              <div className="news-meta">
                <span className="news-category">{item.category}</span>
                <span className="news-date"><Calendar size={12} /> {item.date}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <a className="text-link" onClick={(e) => { e.preventDefault(); navigate('/news'); }}>
                Read more <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Upcoming events
            </div>
            <h2>
              Mark your <em>calendar.</em>
            </h2>
          </div>
          <a
            className="text-link"
            onClick={(e) => {
              e.preventDefault();
              navigate('/events');
            }}
          >
            All events <ArrowRight size={16} />
          </a>
        </div>
        <div className="events-list">
          {upcomingEvents.map((event) => (
            <article className="event-card" key={event.id} onClick={() => navigate('/events')}>
              <div className="event-date">
                <strong>{event.day}</strong>
                <span>{event.month}</span>
              </div>
              <div className="event-body">
                <span className="news-category">{event.category}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="event-meta">
                  <span><Clock size={13} /> {event.time}</span>
                  <span><MapPin size={13} /> {event.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading centered">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Our partners
            </div>
            <h2>
              Together we <em>do more.</em>
            </h2>
          </div>
        </div>
        <div className="partners-grid">
          {partners.map((partner) => (
            <div className="partner-card partner-card-media" key={partner.name}>
              <div className="partner-img-wrap">
                <img src={partner.image} alt={partner.name} loading="lazy" />
              </div>
              <strong>{partner.name}</strong>
              <span>{partner.type}</span>
              <p className="partner-desc">{partner.description}</p>
            </div>
          ))}
        </div>
      </section>

      

      {/* Full-bleed Ad section — ALL website images as BG, dissolve/crossfade per image */}
      <section className="ad-page-section" aria-label="Admissions promotion">
        <BackgroundCarousel images={allSiteImages} interval={4500} overlay={0.78} />
        <div className="ad-page-content">
          <div className="ad-text-line ad-text-1 eyebrow eyebrow-light">
            <span className="eyebrow-line" /> Apply now
          </div>
          <h2 className="ad-text-line ad-text-2">
            Your place at <em>AVIU</em> starts here.
          </h2>
          <p className="ad-text-line ad-text-3">
            Applications open for January, May, August &amp; September intakes.
            25 NCHE-accredited programmes · Nabweru, Wakiso · Uganda.
          </p>
          <div className="ad-page-actions ad-text-line ad-text-4">
            <button className="button button-light" onClick={openApply}>
              Start your application <ArrowRight size={17} />
            </button>
            <button className="button button-outline-light" onClick={() => navigate('/admissions')}>
              Admissions info
            </button>
          </div>
          <div className="ad-page-handles ad-text-line ad-text-5">
            <span>Follow us</span>
            <a href="https://x.com/AvanceIU_uganda" target="_blank" rel="noopener noreferrer">
              X @AvanceIU_uganda
            </a>
            <a href="https://www.tiktok.com/@avance_iu_uganda" target="_blank" rel="noopener noreferrer">
              TikTok @avance_iu_uganda
            </a>
          </div>
        </div>
      </section>

      <TikTokStrip
        items={galleryTikToks.filter((t) => ['campus', 'admissions', 'graduation'].includes(t.category)).slice(0, 4)}
        title={<>Campus life on <em>TikTok.</em></>}
        subtitle="Watch student pulse, welcomes and graduation moments — @avance_iu_uganda"
      />

      <section className="cta-section">
        <BackgroundCarousel images={allSiteImages} interval={5000} overlay={0.85} />
        <div>
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> Your next chapter starts here
          </div>
          <h2>Make your move.</h2>
          <p>
            Ready to find out what you can become? Our admissions team is here to
            help you take the first step.
          </p>
        </div>
        <button className="button button-light" onClick={openApply}>
          Start your application <ArrowRight size={17} />
        </button>
      </section>
    </div>
  );
}
