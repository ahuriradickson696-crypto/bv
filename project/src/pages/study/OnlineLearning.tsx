import { ArrowRight, Monitor, BriefcaseBusiness, GraduationCap, Clock } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { videosFor } from '@/data/pageVideos';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

const onlineOptions = [
  { icon: Monitor, title: 'Online Bachelor\'s Degrees', description: 'Complete your entire bachelor\'s degree online with the same curriculum and accreditation as our on-campus programmes. Ideal for working professionals and remote learners.' },
  { icon: Monitor, title: 'Online Master\'s Degrees', description: 'Pursue your MBA or master\'s degree fully online with flexible scheduling. Access recorded lectures, live virtual classes, and digital library resources 24/7.' },
  { icon: BriefcaseBusiness, title: 'Executive Education', description: 'Short certification courses designed for senior professionals. Topics include leadership, project management, digital transformation, and public health leadership.' },
  { icon: BriefcaseBusiness, title: 'Corporate Training', description: 'Custom workshops and training programmes delivered to organisations. We tailor content to your industry needs and can deliver on-site or online.' },
  { icon: GraduationCap, title: 'Short Certification Courses', description: 'Focused courses from 3 months to 1 year in IT, business, health, and education. Build specific skills quickly with industry-recognised certification.' },
  { icon: GraduationCap, title: 'Lifelong Learning & Auditing', description: 'Audit university courses for personal enrichment without earning formal credit. Perfect for curious learners and retired professionals.' },
];

const platformFeatures = [
  '3M+ video lessons available on-demand',
  '2,500+ daily live classes with interactive participation',
  'Virtual classroom with real-time collaboration tools',
  'Digital library and journal database access 24/7',
  'Online assignment submission and grading portal',
  'Discussion forums and peer collaboration spaces',
  'Mobile-friendly learning management system',
  'Technical support available during extended hours',
];

export function OnlineLearning() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <SubPageHero
videos={videosFor('study')}         images={pageImages.study}
        eyebrow="Flexible learning"
        title={<>Online &amp; <em>Continuing Education</em></>}
        subtitle="Study on your schedule with our flexible online, part-time, and continuing education options. Whether you are a working professional, a remote learner, or seeking to upskill, we have a pathway for you."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Study', path: '/study' }, { label: 'Online Learning', path: '/study/online' }]}
      />

      <section className="section-pad" style={{ paddingBottom: 0 }}>
        <div className="elearn-banner">
          <div>
            <h3>Flexible online learning</h3>
            <p>
              Access live classes, video lessons, assignments, and your student dashboard on any device — including your phone.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Learning options</div>
            <h2>Flexible pathways for <em>every learner.</em></h2>
          </div>
        </div>
        <div className="library-grid">
          {onlineOptions.map((opt) => (
            <article className="library-card" key={opt.title}>
              <span className="library-icon"><opt.icon size={24} strokeWidth={1.5} /></span>
              <strong>{opt.title}</strong>
              <p>{opt.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow"><span className="eyebrow-line" /> Online learning</div>
            <h2>Our virtual <em>classroom.</em></h2>
            <p>AVIU's technology-enhanced learning platform brings the classroom to you. With over 3 million video lessons and 2,500+ daily live classes, our e-learning system is designed for engagement, accessibility, and academic rigour.</p>
            <p>Students need a reliable internet connection, a computer or tablet, and a quiet study space. Our IT helpdesk provides onboarding support for all new online learners.</p>
            <a className="text-link" onClick={(e) => { e.preventDefault(); navigate('/library'); }}>
              Explore library resources <ArrowRight size={16} />
            </a>
          </div>
          <div className="col-half">
            <div className="highlight-list">
              {platformFeatures.map((feature, i) => (
                <div className="highlight-item" key={i}>
                  <span className="check-bullet"><ArrowRight size={14} /></span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Study modes</div>
            <h2>Choose your <em>schedule.</em></h2>
          </div>
        </div>
        <div className="staff-stats-row">
          <div className="staff-stat">
            <strong>Full-Time</strong>
            <span>Day classes, 3-4 years</span>
          </div>
          <div className="staff-stat">
            <strong>Part-Time</strong>
            <span>Evening &amp; weekend</span>
          </div>
          <div className="staff-stat">
            <strong>Online</strong>
            <span>Fully remote</span>
          </div>
          <div className="staff-stat">
            <strong>Blended</strong>
            <span>Online + on-campus</span>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.study} overlay={0.88}  videos={videosFor('study')} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Start learning</div>
          <h2>Find your flexible pathway.</h2>
          <p>Browse our online programmes or contact us to discuss your options.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>Get in touch <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
