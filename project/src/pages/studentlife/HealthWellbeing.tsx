import { ArrowRight, HeartPulse, Brain, Accessibility, Stethoscope } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

const services = [
  { icon: Stethoscope, title: 'Campus Health Clinic', description: 'Our on-campus health clinic provides primary healthcare, immunisations, and referrals. Staffed by a qualified nurse and visiting doctor. Open Monday to Friday, 8:00 AM to 5:00 PM.' },
  { icon: Brain, title: 'Counselling & Mental Health', description: 'Confidential one-on-one counselling, stress management workshops, and mental health support. Our counsellors are available by appointment and for crisis support.' },
  { icon: Accessibility, title: 'Disability & Accessibility', description: 'Academic accommodations, assistive technology, wheelchair-accessible facilities, and individualised support plans for students with disabilities.' },
  { icon: HeartPulse, title: 'Wellness Programmes', description: 'Regular wellness activities including yoga, fitness classes, mental health awareness campaigns, and nutrition workshops throughout the academic year.' },
];

export function HealthWellbeing() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.studentlife}
        eyebrow="Student life"
        title={<>Health &amp; <em>Wellbeing</em></>}
        subtitle="Your physical and mental wellbeing are priorities at AIU. We provide comprehensive health services, counselling, accessibility support, and wellness programmes to help you thrive."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Student Life', path: '/student-life' }, { label: 'Health & Wellbeing', path: '/student-life/health' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Our services</div>
            <h2>Caring for our <em>students.</em></h2>
          </div>
        </div>
        <div className="library-grid">
          {services.map((s) => (
            <article className="library-card" key={s.title}>
              <span className="library-icon"><s.icon size={24} strokeWidth={1.5} /></span>
              <strong>{s.title}</strong>
              <p>{s.description}</p>
              <a className="text-link" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>
                Book an appointment <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow"><span className="eyebrow-line" /> Health insurance</div>
            <h2>Stay <em>covered.</em></h2>
            <p>All enrolled students are required to have health insurance. AIU offers an affordable student health insurance plan that covers clinic visits, emergency care, and hospitalisation.</p>
            <p>International students must show proof of health insurance as part of their visa requirements. Our international office can assist with enrolment.</p>
          </div>
          <div className="col-half">
            <div className="library-grid">
              <div className="library-card">
                <span className="library-icon"><Stethoscope size={24} strokeWidth={1.5} /></span>
                <strong>Emergency Response</strong>
                <p>24/7 emergency contact number for medical emergencies on campus.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><Brain size={24} strokeWidth={1.5} /></span>
                <strong>Confidential Support</strong>
                <p>All counselling sessions are strictly confidential. No information is shared without consent.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><Accessibility size={24} strokeWidth={1.5} /></span>
                <strong>Accessibility Plans</strong>
                <p>Individualised support plans for students with physical, sensory, or learning disabilities.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><HeartPulse size={24} strokeWidth={1.5} /></span>
                <strong>Immunisations</strong>
                <p>The campus clinic provides routine immunisations and flu shots for enrolled students.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.studentlife} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Support</div>
          <h2>Reach out for support.</h2>
          <p>Our health and wellbeing team is here to help. All enquiries are treated confidentially.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>Contact us <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
