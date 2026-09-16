import { ArrowRight, MapPin, Calendar, Users, Monitor } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { videosFor } from '@/data/pageVideos';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

const visitOptions = [
  { icon: Calendar, title: 'Open Days', description: 'Our open days give prospective students and families a full campus experience. Tour facilities, meet faculty, attend sample lectures, and speak with current students. Held three times per year before each intake.' },
  { icon: MapPin, title: 'Guided Campus Tours', description: 'Book a personalised tour led by a student ambassador. Available weekdays at 10:00 AM and 2:00 PM. Includes library, labs, lecture halls, sports facilities, and the innovation centre.' },
  { icon: Monitor, title: 'Virtual Campus Tour', description: 'Can\'t visit in person? Explore our campus online with a 360-degree virtual tour. Walk through the library, innovation centre, nursing simulation lab, and lecture halls from your browser.' },
  { icon: Users, title: 'Info Sessions & Webinars', description: 'Join live online info sessions hosted by faculty and admissions staff. Learn about programmes, fees, and career outcomes. Sessions are recorded and available on demand.' },
];

export function CampusVisits() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <SubPageHero
videos={videosFor('admissions')}         images={pageImages.admissions}
        eyebrow="Experience campus"
        title={<>Campus <em>Visits</em></>}
        subtitle="The best way to know if AVIU is right for you is to visit. Join an open day, book a guided tour, or explore our campus virtually from anywhere in the world."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Admissions', path: '/admissions' }, { label: 'Campus Visits', path: '/admissions/campus-visits' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Plan your visit</div>
            <h2>Four ways to <em>experience AVIU.</em></h2>
          </div>
        </div>
        <div className="library-grid">
          {visitOptions.map((opt) => (
            <article className="library-card" key={opt.title}>
              <span className="library-icon"><opt.icon size={24} strokeWidth={1.5} /></span>
              <strong>{opt.title}</strong>
              <p>{opt.description}</p>
              <a className="text-link" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>
                Book now <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow"><span className="eyebrow-line" /> Upcoming open days</div>
            <h2>Mark your <em>calendar.</em></h2>
            <p>Open days are held before each intake. They are free to attend but registration is required. Each open day runs from 10:00 AM to 3:00 PM and includes lunch.</p>
          </div>
          <div className="col-half">
            <div className="calendar-key-dates">
              <div className="calendar-date-row"><span><Calendar size={14} /> October Open Day</span><strong>25 Oct 2026</strong></div>
              <div className="calendar-date-row"><span><Calendar size={14} /> January Open Day</span><strong>12 Dec 2026</strong></div>
              <div className="calendar-date-row"><span><Calendar size={14} /> February Open Day</span><strong>20 Feb 2027</strong></div>
              <div className="calendar-date-row"><span><Calendar size={14} /> June Open Day</span><strong>15 Jun 2027</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.admissions} overlay={0.88}  videos={videosFor('admissions')} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Visit us</div>
          <h2>Book your campus visit.</h2>
          <p>Contact us to schedule a tour or register for the next open day.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>Book a visit <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
