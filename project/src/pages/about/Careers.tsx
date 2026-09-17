import { ArrowRight, BriefcaseBusiness, Users, Heart } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

const vacancies = [
  { title: 'Lecturer, Computer Science / ICT', type: 'Academic', department: 'Faculty of Business and Computer Science', deadline: '30 Sep 2026' },
  { title: 'Lecturer, Nursing & Midwifery', type: 'Academic', department: 'School of Nursing & Midwifery', deadline: '15 Oct 2026' },
  { title: 'Senior Lecturer, Allied Health', type: 'Academic', department: 'School of Allied Health Sciences', deadline: '30 Oct 2026' },
  { title: 'Lecturer, Law', type: 'Academic', department: 'School of Law', deadline: '30 Oct 2026' },
  { title: 'Vocational Skills Instructor', type: 'Academic', department: 'School of Vocational Studies', deadline: '20 Sep 2026' },
  { title: 'Research Associate, Innovation Centre', type: 'Academic', department: 'Centre for Innovation & Technology', deadline: '20 Sep 2026' },
  { title: 'Admissions Officer', type: 'Administrative', department: 'Office of the Academic Registrar', deadline: '10 Oct 2026' },
  { title: 'IT Support Technician', type: 'Administrative', department: 'ICT Services', deadline: '05 Oct 2026' },
];

const benefits = [
  { icon: Heart, title: 'Health & Wellbeing', description: 'Comprehensive health insurance, counselling services, and wellness programmes for all staff.' },
  { icon: Users, title: 'Professional Development', description: 'Conference funding, research grants, and opportunities for further study and sabbatical leave.' },
  { icon: BriefcaseBusiness, title: 'Pension & Savings', description: 'Contributory pension scheme and staff savings programmes for long-term financial security.' },
  { icon: Heart, title: 'Work-Life Balance', description: 'Flexible working arrangements, generous leave entitlements, and family-friendly policies.' },
];

export function Careers() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="About"
        title={<>Careers at <em>AVIU</em></>}
        subtitle="Join our community of educators, researchers, and professionals dedicated to enhancing innovations through quality education. AVIU offers a rewarding work environment with opportunities for growth and impact."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Careers', path: '/about/careers' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Current vacancies</div>
            <h2>Open <em>positions.</em></h2>
          </div>
        </div>
        <div className="research-projects-list">
          {vacancies.map((v) => (
            <div className="research-project-card" key={v.title}>
              <div className="research-project-header">
                <h3 style={{ fontSize: '16px' }}>{v.title}</h3>
                <span className={`research-status ${v.type === 'Academic' ? 'status-ongoing' : 'status-completed'}`}>{v.type}</span>
              </div>
              <div className="research-project-meta">
                <span>Department: {v.department}</span>
                <span>Deadline: {v.deadline}</span>
              </div>
              <a className="text-link" style={{ marginTop: '10px' }} onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>
                Apply for this role <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Why work here</div>
            <h2>Working at <em>AVIU.</em></h2>
          </div>
        </div>
        <div className="library-grid">
          {benefits.map((b) => (
            <article className="library-card" key={b.title}>
              <span className="library-icon"><b.icon size={24} strokeWidth={1.5} /></span>
              <strong>{b.title}</strong>
              <p>{b.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.about} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Careers</div>
          <h2>Join our team.</h2>
          <p>Send your CV and cover letter to the HR office to apply for any vacancy.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>Contact HR <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
