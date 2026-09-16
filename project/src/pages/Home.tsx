import { useEffect, useState } from 'react';
import { ArrowRight, Globe2, Check, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { faculties, homeStats, testimonials, universityInfo, newsItems, events, partners } from '@/data/university';
import { useRouter } from '@/router/Router';
import { useApply } from '@/components/ApplyContext';
import { allGallery } from '@/data/pageImages';
import { AVIU_VIDEOS, youtubeBgSrc } from '@/data/pageVideos';

/** Home shows only 2 videos: university campus + graduation / ceremony */
const HOME_VIDEOS = [
  {
    id: AVIU_VIDEOS.facilities,
    title: 'University campus & facilities',
    blurb: 'Tour Avance International University — facilities and campus life',
  },
  {
    id: AVIU_VIDEOS.installation,
    title: 'Graduation & university ceremony',
    blurb: 'Formal university ceremony — leadership and celebration at AVIU',
  },
];

/** Ads: photos + short messages (image-led, as discussed) */
const AD_SLIDES = [
  {
    image: '/images/graduation-ceremony.jpg',
    eyebrow: 'Graduation · 25 September',
    title: 'Celebrate every year',
    text: 'University-wide graduation on 25 September — all faculties.',
  },
  {
    image: '/images/graduates-group.jpg',
    eyebrow: 'Our graduands',
    title: 'Proud AVIU graduates',
    text: 'Join a community of alumni making an impact across the region.',
  },
  {
    image: '/images/campus-building.jpg',
    eyebrow: 'Campus',
    title: 'Nabweru · Wakiso',
    text: 'Modern teaching spaces on our university campus.',
  },
  {
    image: '/images/campus-aviu-students-1.jpg',
    eyebrow: 'Admissions open',
    title: 'January · May · August · September',
    text: '25 NCHE-accredited bachelor programmes. Apply today.',
  },
  {
    image: '/images/graduation-crowd.jpg',
    eyebrow: 'Ceremony',
    title: 'Families welcome',
    text: 'Graduation day is for students, families and guests.',
  },
  {
    image: '/images/university-gate.jpg',
    eyebrow: 'Visit us',
    title: 'Experience AVIU',
    text: '+256 700 670 691 · admissions@aviu.ac.ug',
  },
];

function ytEmbed(id: string) {
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=1&modestbranding=1&rel=0&playsinline=1`;
}

export function Home() {
  const { navigate } = useRouter();
  const { openApply } = useApply();
  const [adIndex, setAdIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const photos = allGallery.length ? allGallery : AD_SLIDES.map((a) => a.image);

  useEffect(() => {
    const a = window.setInterval(() => setAdIndex((i) => (i + 1) % AD_SLIDES.length), 6000);
    const p = window.setInterval(() => setPhotoIndex((i) => (i + 1) % photos.length), 4500);
    return () => {
      window.clearInterval(a);
      window.clearInterval(p);
    };
  }, [photos.length]);

  const ad = AD_SLIDES[adIndex];

  return (
    <div className="page-content home-premium home-lively">
      {/* ===== SPLIT HERO — white + purple, lively ===== */}
      <section className="split-hero split-hero-light" aria-label="Avance International University">
        <div className="split-hero-main split-hero-main-light">
          <div className="split-hero-main-inner">
            <p className="split-eyebrow split-eyebrow-dark">
              <span className="split-eyebrow-line" />
              Avance International University · Nabweru, Uganda
            </p>
            <h1 className="split-title split-title-dark">
              Enhancing <em>innovations.</em>
              <br />
              Building futures.
            </h1>
            <p className="split-lead split-lead-dark">
              A modern private university with <strong>25 NCHE-accredited</strong> bachelor programmes.
              International students welcome. Graduation every <strong>25 September</strong>.
            </p>

            <div className="split-actions">
              <button type="button" className="btn-premium" onClick={openApply}>
                Apply now <ArrowRight size={18} />
              </button>
              <button
                type="button"
                className="btn-premium-outline"
                onClick={() => navigate('/study/course-finder')}
              >
                Browse programmes
              </button>
              <button
                type="button"
                className="btn-premium-outline"
                onClick={() => navigate('/admissions/international')}
              >
                <Globe2 size={16} /> International
              </button>
            </div>

            <div className="split-stats split-stats-light">
              {homeStats.map((s) => (
                <div key={s.label} className="split-stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            <div className="split-social split-social-dark">
              <span className="split-social-label">Follow AVIU</span>
              <a href="https://x.com/AvanceIU_uganda" target="_blank" rel="noopener noreferrer" className="split-social-link">
                X · @AvanceIU_uganda
              </a>
              <a href="https://www.tiktok.com/@avance_iu_uganda" target="_blank" rel="noopener noreferrer" className="split-social-link">
                TikTok · @avance_iu_uganda
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — photo ads (all graduation / campus images cycle) */}
        <aside className="split-hero-ads" aria-label="University highlights">
          {AD_SLIDES.map((slide, i) => (
            <div
              key={slide.title}
              className={`split-ad-slide ${i === adIndex ? 'is-active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
          <div className="split-ad-overlay split-ad-overlay-strong" />
          <div className="split-ad-content">
            <p className="split-ad-eyebrow">{ad.eyebrow}</p>
            <h2 className="split-ad-title">{ad.title}</h2>
            <p className="split-ad-text">{ad.text}</p>
            <div className="split-ad-dots" role="tablist">
              {AD_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === adIndex}
                  className={i === adIndex ? 'is-active' : ''}
                  onClick={() => setAdIndex(i)}
                  aria-label={`Ad ${i + 1}`}
                />
              ))}
            </div>
            <button type="button" className="btn-ad-cta" onClick={openApply}>
              Start application <ArrowRight size={16} />
            </button>
          </div>
        </aside>
      </section>

      {/* ===== FULL PHOTO SLIDER — all campus images ===== */}
      <section className="home-photo-strip" aria-label="Campus photo slider">
        <div className="home-photo-strip-head">
          <div className="eyebrow">
            <span className="eyebrow-line" /> Campus gallery
          </div>
          <h2>
            Life at <em>AVIU</em> — all photos
          </h2>
        </div>
        <div className="home-photo-stage">
          {photos.map((src, i) => (
            <div
              key={src + i}
              className={`home-photo-slide ${i === photoIndex ? 'is-active' : ''}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          <div className="home-photo-stage-overlay" />
          <div className="home-photo-stage-label">
            {photoIndex + 1} / {photos.length}
          </div>
        </div>
        <div className="home-photo-thumbs">
          {photos.map((src, i) => (
            <button
              key={src + 't' + i}
              type="button"
              className={i === photoIndex ? 'is-active' : ''}
              style={{ backgroundImage: `url(${src})` }}
              onClick={() => setPhotoIndex(i)}
              aria-label={`Photo ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ===== 2 VIDEOS ONLY: university + graduation/ceremony ===== */}
      <section className="home-two-videos section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Watch
            </div>
            <h2>
              University &amp; <em>graduation</em>
            </h2>
            <p className="section-lead">Two featured videos — campus life and formal ceremony.</p>
          </div>
        </div>
        <div className="home-two-videos-grid">
          {HOME_VIDEOS.map((v) => (
            <div key={v.id} className="home-video-card home-video-card-lg">
              <div className="home-video-frame">
                <iframe
                  src={ytEmbed(v.id)}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              </div>
              <div className="home-video-meta">
                <div>
                  <strong>{v.title}</strong>
                  <span>{v.blurb}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Faculties */}
      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Academics
            </div>
            <h2>
              Faculties built for <em>impact.</em>
            </h2>
          </div>
          <button type="button" className="button button-outline" onClick={() => navigate('/study')}>
            All programmes <ArrowRight size={16} />
          </button>
        </div>
        <div className="faculty-grid premium-faculty-grid">
          {faculties.map((f, index) => (
            <article
              key={f.id}
              className="faculty-card glass-card"
              onClick={() => navigate('/study/course-finder')}
            >
              <span className="school-index">0{index + 1}</span>
              <f.icon size={28} strokeWidth={1.5} />
              <strong>{f.name}</strong>
              <p>{f.description}</p>
              <span className="faculty-level">{f.level}</span>
            </article>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="section-pad">
        <div className="two-col premium-two-col">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Why Avance
            </div>
            <h2>
              Clear standards. <em>Real opportunity.</em>
            </h2>
            <ul className="check-list">
              <li>
                <Check size={16} /> 25 NCHE-accredited bachelor programmes
              </li>
              <li>
                <Check size={16} /> English medium of instruction
              </li>
              <li>
                <Check size={16} /> Intakes: January, May, August, September
              </li>
              <li>
                <Check size={16} /> Graduation every 25 September
              </li>
              <li>
                <Check size={16} /> International admissions support
              </li>
            </ul>
            <button type="button" className="button" onClick={() => navigate('/admissions')} style={{ marginTop: 20 }}>
              Admissions <ArrowRight size={16} />
            </button>
          </div>
          <div className="premium-image-stack">
            <img src="/images/graduates-laughing.jpg" alt="AVIU graduates" />
            <img src="/images/campus-aviu-students-2.jpg" alt="Students on campus" />
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Campus pulse
            </div>
            <h2>
              News &amp; <em>events.</em>
            </h2>
          </div>
        </div>
        <div className="home-news-grid">
          {newsItems.slice(0, 3).map((n) => (
            <article key={n.id} className="glass-card news-card-home" onClick={() => navigate('/news')}>
              <time>{n.date}</time>
              <h3>{n.title}</h3>
              <p>{n.summary}</p>
            </article>
          ))}
          {events.slice(0, 2).map((e) => (
            <article key={e.id} className="glass-card news-card-home" onClick={() => navigate('/events')}>
              <time>
                <Calendar size={14} /> {e.date}
              </time>
              <h3>{e.title}</h3>
              <p>
                <MapPin size={14} /> {e.location || 'AVIU Campus'}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Partnerships
            </div>
            <h2>
              Trusted <em>connections.</em>
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

      {testimonials?.length > 0 && (
        <section className="section-pad alt-bg">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" /> Voices
              </div>
              <h2>
                From our <em>community.</em>
              </h2>
            </div>
          </div>
          <div className="testimonial-grid">
            {testimonials.slice(0, 3).map((t) => (
              <blockquote key={t.name} className="glass-card testimonial-card">
                <p>“{t.quote}”</p>
                <footer>
                  <strong>{t.name}</strong>
                  <span>{t.program}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      <section className="cta-section premium-cta">
        <div
          className="premium-cta-bg"
          style={{ backgroundImage: 'url(/images/graduation-ceremony.jpg)' }}
        />
        <div className="premium-cta-overlay" />
        <div className="premium-cta-inner">
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> Your next chapter
          </div>
          <h2>Make your move.</h2>
          <p>
            Join {universityInfo.name}. Admissions is ready to guide you — locally and internationally.
          </p>
          <div className="split-actions" style={{ justifyContent: 'center' }}>
            <button type="button" className="btn-premium light" onClick={openApply}>
              Start your application <ArrowRight size={17} />
            </button>
            <button type="button" className="btn-premium-ghost light" onClick={() => navigate('/contact')}>
              Contact us
            </button>
          </div>
          <div className="home-video-social" style={{ justifyContent: 'center', marginTop: 20 }}>
            <a href="https://x.com/AvanceIU_uganda" target="_blank" rel="noopener noreferrer">
              @AvanceIU_uganda <ExternalLink size={14} />
            </a>
            <a href="https://www.tiktok.com/@avance_iu_uganda" target="_blank" rel="noopener noreferrer">
              @avance_iu_uganda <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
