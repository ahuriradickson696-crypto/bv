import { ArrowRight, BriefcaseBusiness, FileText, Users, GraduationCap } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { videosFor } from '@/data/pageVideos';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

const careerServices = [
  { icon: BriefcaseBusiness, title: 'Career Guidance', description: 'One-on-one career advising sessions to help you explore career paths, set goals, and make informed decisions about your future.' },
  { icon: FileText, title: 'Resume & CV Building', description: 'Get feedback on your resume, cover letter, and LinkedIn profile. Learn how to present your skills and experience to employers.' },
  { icon: Users, title: 'Internship Placement', description: 'Access our network of partner organisations for internships and work placements. Many lead to full-time job offers after graduation.' },
  { icon: BriefcaseBusiness, title: 'On-Campus Jobs', description: 'Work-study positions across campus in the library, IT helpdesk, administration, and academic departments. Earn while you learn.' },
  { icon: GraduationCap, title: 'Graduate Recruitment', description: 'Our annual graduate recruitment fair brings employers to campus. Network with companies hiring for entry-level and graduate roles.' },
  { icon: Users, title: 'Alumni Mentorship', description: 'Connect with AVIU alumni who can provide career advice, industry insights, and networking opportunities in your field.' },
];

export function CareerServices() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <SubPageHero
videos={videosFor('studentlife')}         images={pageImages.studentlife}
        eyebrow="Student life"
        title={<>Career <em>Services</em></>}
        subtitle="From your first year to graduation and beyond, our career services team helps you build the skills, experience, and connections you need to succeed in the workplace."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Student Life', path: '/student-life' }, { label: 'Career Services', path: '/student-life/careers' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> What we offer</div>
            <h2>Your career <em>starts here.</em></h2>
          </div>
        </div>
        <div className="library-grid">
          {careerServices.map((s) => (
            <article className="library-card" key={s.title}>
              <span className="library-icon"><s.icon size={24} strokeWidth={1.5} /></span>
              <strong>{s.title}</strong>
              <p>{s.description}</p>
              <a className="text-link" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>
                Book a session <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow"><span className="eyebrow-line" /> Employer connections</div>
            <h2>Our <em>partners.</em></h2>
            <p>We maintain relationships with employers across Uganda and East Africa, including banks, hospitals, tech companies, schools, NGOs, and government agencies. These partnerships create internship and job opportunities for our students.</p>
            <p>Our annual graduate recruitment fair is the largest on-campus career event, with 30+ employers attending each year.</p>
          </div>
          <div className="col-half">
            <div className="staff-stats-row">
              <div className="staff-stat">
                <strong>30+</strong>
                <span>Employer partners</span>
              </div>
              <div className="staff-stat">
                <strong>85%</strong>
                <span>Graduate employment</span>
              </div>
              <div className="staff-stat">
                <strong>500+</strong>
                <span>Internship placements</span>
              </div>
              <div className="staff-stat">
                <strong>2,000+</strong>
                <span>Alumni network</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.studentlife} overlay={0.88}  videos={videosFor('studentlife')} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Your career</div>
          <h2>Plan your future with us.</h2>
          <p>Visit the career services office to start your career journey.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>Contact careers <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
