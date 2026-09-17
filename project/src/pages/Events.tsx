import { useState } from 'react';
import { ArrowRight, Clock, MapPin, Calendar } from 'lucide-react';
import { events } from '@/data/university';
import { PageHero } from '@/components/PageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { videosFor } from '@/data/pageVideos';
import { TikTokStrip } from '@/components/TikTokEmbed';
import { tiktoksByCategory } from '@/data/galleryMedia';

export function Events() {
  const { navigate } = useRouter();
  const categories = ['All', ...Array.from(new Set(events.map((e) => e.category)))];
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All' ? events : events.filter((e) => e.category === filter);

  const upcomingCount = events.length;

  return (
    <div className="page-content">
      <PageHero
videos={videosFor('events')}         images={pageImages.events}
        eyebrow="What's on"
        title={<>Events at <em>Avance</em></>}
        subtitle="From conferences and graduation ceremonies to community outreach and innovation fairs, there is always something happening on campus. Many of our events are open to the public — we would love to see you there."
      />

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
        </div>
        <div className="staff-stats-row">
          <div className="staff-stat">
            <strong>{upcomingCount}</strong>
            <span>Upcoming events</span>
          </div>
          <div className="staff-stat">
            <strong>{new Set(events.map((e) => e.category)).size}</strong>
            <span>Categories</span>
          </div>
          <div className="staff-stat">
            <strong>3</strong>
            <span>Intakes per year</span>
          </div>
          <div className="staff-stat">
            <strong>4</strong>
            <span>Faculties</span>
          </div>
        </div>
        <div className="news-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-chip ${filter === cat ? 'chip-active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="events-list">
          {filtered.map((event) => (
            <article className="event-card" key={event.id}>
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
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Academic calendar
            </div>
            <h2>
              Key dates to <em>remember.</em>
            </h2>
          </div>
        </div>
        <div className="two-col-layout">
          <div className="col-half">
            <p>
              Avance International University operates on a three-intake
              system, with semesters running from January to April, May to
              August, and August to November. Key dates include registration
              periods, examination weeks, graduation ceremonies, and community
              engagement days.
            </p>
            <p>
              Students are encouraged to familiarise themselves with the academic
              calendar to plan their studies effectively. Late registration
              incurs a surcharge, so early planning is recommended.
            </p>
          </div>
          <div className="col-half">
            <div className="calendar-key-dates">
              <div className="calendar-date-row">
                <span><Calendar size={14} /> Registration Opens</span>
                <strong>2 weeks before intake</strong>
              </div>
              <div className="calendar-date-row">
                <span><Calendar size={14} /> Late Registration Closes</span>
                <strong>End of Week 2</strong>
              </div>
              <div className="calendar-date-row">
                <span><Calendar size={14} /> Mid-Semester Tests</span>
                <strong>Week 7</strong>
              </div>
              <div className="calendar-date-row">
                <span><Calendar size={14} /> Final Examinations</span>
                <strong>Week 14-16</strong>
              </div>
              <div className="calendar-date-row">
                <span><Calendar size={14} /> Graduation</span>
                <strong>End of Semester</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TikTokStrip
        items={tiktoksByCategory('graduation')}
        title={<>Graduation on <em>video.</em></>}
        subtitle="Relive the 4th Graduation ceremony and celebration moments."
      />

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.events} overlay={0.88}  videos={videosFor('events')} />
        <div>
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> Want to attend?
          </div>
          <h2>Join us on campus.</h2>
          <p>Many of our events are open to the public. Contact us to learn more.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>
          Get in touch <ArrowRight size={17} />
        </button>
      </section>
    </div>
  );
}
