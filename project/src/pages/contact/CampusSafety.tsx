import { ArrowRight, Shield, Phone, AlertTriangle, PackageSearch } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

const safetyServices = [
  { icon: Shield, title: '24/7 Campus Security', description: 'Our campus security team operates around the clock to ensure a safe environment for all students, staff, and visitors. Security guards patrol the campus and monitor entry points.' },
  { icon: Phone, title: 'Security Hotline', description: 'A dedicated 24/7 security hotline is available for emergencies and safety concerns. All students are encouraged to save this number.' },
  { icon: AlertTriangle, title: 'Emergency Response', description: 'AIU has an emergency response protocol covering medical emergencies, fire, security incidents, and natural disasters. Regular drills are conducted each semester.' },
  { icon: PackageSearch, title: 'Lost & Found', description: 'The security office operates a lost and found service at the main gate. Lost items can be reported and collected during office hours.' },
];

const emergencyContacts = [
  { name: 'Campus Security Hotline', number: '+256 700 670 699', hours: '24/7' },
  { name: 'Campus Health Clinic', number: '+256 700 670 698', hours: 'Mon-Fri, 8AM-5PM' },
  { name: 'Fire Emergency', number: '999', hours: '24/7' },
  { name: 'Police Emergency', number: '999', hours: '24/7' },
];

export function CampusSafety() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.contact}
        eyebrow="Contact"
        title={<>Campus Safety &amp; <em>Emergency Services</em></>}
        subtitle="The safety and wellbeing of our campus community is our top priority. Find emergency contacts, safety resources, and information about our security services."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Contact', path: '/contact' }, { label: 'Campus Safety', path: '/contact/campus-safety' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Safety services</div>
            <h2>Your safety is our <em>priority.</em></h2>
          </div>
        </div>
        <div className="library-grid">
          {safetyServices.map((s) => (
            <article className="library-card" key={s.title}>
              <span className="library-icon"><s.icon size={24} strokeWidth={1.5} /></span>
              <strong>{s.title}</strong>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Emergency contacts</div>
            <h2>Save these <em>numbers.</em></h2>
          </div>
        </div>
        <div className="contact-departments">
          {emergencyContacts.map((c) => (
            <div className="contact-dept" key={c.name}>
              <strong>{c.name}</strong>
              <span><Phone size={13} /> {c.number}</span>
              <span>Hours: {c.hours}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow"><span className="eyebrow-line" /> Incident reporting</div>
            <h2>Report an <em>incident.</em></h2>
            <p>Students and staff are encouraged to report any safety concerns, suspicious activity, or incidents to the security office. Reports can be made in person at the guard house, by phone, or through the student portal.</p>
            <p>All reports are treated confidentially and acted upon promptly. In an emergency, always call the security hotline first.</p>
          </div>
          <div className="col-half">
            <div className="library-grid">
              <div className="library-card">
                <span className="library-icon"><Shield size={24} strokeWidth={1.5} /></span>
                <strong>Personal Safety Tips</strong>
                <p>Practical guidance on staying safe on and around campus, including walking at night and securing valuables.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><AlertTriangle size={24} strokeWidth={1.5} /></span>
                <strong>Fire Safety</strong>
                <p>Fire evacuation procedures, assembly points, and extinguisher locations across campus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.contact} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Emergency</div>
          <h2>Need immediate help?</h2>
          <p>Call the campus security hotline at +256 700 670 699, available 24/7.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>Contact us <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
