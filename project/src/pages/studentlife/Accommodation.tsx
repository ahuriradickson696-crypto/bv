import { ArrowRight, Building2, Home, CheckCircle2 } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

const housingOptions = [
  { icon: Building2, title: 'On-Campus Halls of Residence', description: 'AVIU operates halls of residence on campus with furnished rooms, shared kitchens, and common areas. Priority is given to first-year and international students.', features: ['Single and shared rooms available', 'Wi-Fi and utilities included', '24/7 security', 'Walking distance to classes', 'Residential life officer support'] },
  { icon: Home, title: 'Off-Campus Private Housing', description: 'Many students live in private accommodation near campus. The student services office maintains a list of approved landlords and can assist with finding suitable housing.', features: ['Studio, 1-bedroom, and shared apartments', 'Range of budgets from budget to mid-range', '5-15 minutes walk to campus', 'Independent living with more privacy', 'Tenancy advice and support'] },
];

export function Accommodation() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.studentlife}
        eyebrow="Student life"
        title={<>Accommodation &amp; <em>Housing</em></>}
        subtitle="Finding the right place to live is an important part of your university experience. AVIU offers on-campus halls of residence and supports students in finding suitable off-campus housing."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Student Life', path: '/student-life' }, { label: 'Accommodation', path: '/student-life/accommodation' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Housing options</div>
            <h2>Where you will <em>live.</em></h2>
          </div>
        </div>
        <div className="two-col-layout">
          {housingOptions.map((opt) => (
            <div className="col-half" key={opt.title}>
              <div className="library-card" style={{ height: '100%' }}>
                <span className="library-icon"><opt.icon size={24} strokeWidth={1.5} /></span>
                <strong>{opt.title}</strong>
                <p>{opt.description}</p>
                <ul className="requirements-list" style={{ marginTop: '16px' }}>
                  {opt.features.map((f, i) => (
                    <li key={i}><span className="check-bullet"><CheckCircle2 size={16} /></span> {f}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow"><span className="eyebrow-line" /> Apply for housing</div>
            <h2>Housing <em>application.</em></h2>
            <p>On-campus housing applications open two months before each intake. Spaces are limited and allocated on a first-come, first-served basis with priority for first-year and international students.</p>
            <p>The housing fee is payable per semester and includes utilities, Wi-Fi, and security. Meal plans are available separately.</p>
            <a className="text-link" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>
              Apply for housing <ArrowRight size={16} />
            </a>
          </div>
          <div className="col-half">
            <div className="calendar-key-dates">
              <div className="calendar-date-row"><span>Housing Applications Open</span><strong>2 months before intake</strong></div>
              <div className="calendar-date-row"><span>Allocation Notification</span><strong>3 weeks before intake</strong></div>
              <div className="calendar-date-row"><span>Move-In Day</span><strong>1 week before classes</strong></div>
              <div className="calendar-date-row"><span>Housing Fee Due</span><strong>Before registration</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.studentlife} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Housing</div>
          <h2>Find your home at AVIU.</h2>
          <p>Contact student services for housing advice and applications.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>Get in touch <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
