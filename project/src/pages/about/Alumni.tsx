import { ArrowRight, Users, GraduationCap, Gift, FileText } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { videosFor } from '@/data/pageVideos';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

const alumniServices = [
  { icon: Users, title: 'Alumni Association', description: 'Join our growing alumni network with chapters across East Africa. Connect with fellow graduates, attend events, and mentor current students.' },
  { icon: FileText, title: 'Transcripts & Verification', description: 'Request official transcripts, degree verification, and replacement certificates through the academic registrar\'s office.' },
  { icon: GraduationCap, title: 'Alumni Benefits', description: 'Access library resources, career services, continuing education discounts, and networking events exclusively for AVIU alumni.' },
  { icon: Gift, title: 'Give to AVIU', description: 'Support scholarships, research, and campus development through the AVIU Foundation. Every contribution makes a difference.' },
];

export function Alumni() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <SubPageHero
videos={videosFor('about')}         images={pageImages.about}
        eyebrow="About"
        title={<>Alumni &amp; <em>Donor Relations</em></>}
        subtitle="Once a student, always part of the AVIU family. Our alumni community spans across East Africa and beyond, contributing to their communities and professions."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Alumni', path: '/about/alumni' }]}
      />

      <section className="section-pad">
        <div className="staff-stats-row">
          <div className="staff-stat">
            <strong>2,000+</strong>
            <span>Alumni worldwide</span>
          </div>
          <div className="staff-stat">
            <strong>12</strong>
            <span>Regional chapters</span>
          </div>
          <div className="staff-stat">
            <strong>85%</strong>
            <span>Graduate employment</span>
          </div>
          <div className="staff-stat">
            <strong>50+</strong>
            <span>Alumni mentors</span>
          </div>
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Alumni services</div>
            <h2>Stay <em>connected.</em></h2>
          </div>
        </div>
        <div className="library-grid">
          {alumniServices.map((s) => (
            <article className="library-card" key={s.title}>
              <span className="library-icon"><s.icon size={24} strokeWidth={1.5} /></span>
              <strong>{s.title}</strong>
              <p>{s.description}</p>
              <a className="text-link" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>
                Learn more <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow"><span className="eyebrow-line" /> Giving</div>
            <h2>Support the next <em>generation.</em></h2>
            <p>Your generosity helps fund scholarships, research grants, and campus improvements that benefit current and future students. The AVIU Foundation manages all donations and ensures they are directed where they are needed most.</p>
            <p>Whether you give to the general fund, a specific scholarship, or a building project, your contribution has a lasting impact on the AVIU community.</p>
          </div>
          <div className="col-half">
            <div className="library-grid">
              <div className="library-card">
                <span className="library-icon"><Gift size={24} strokeWidth={1.5} /></span>
                <strong>Scholarship Fund</strong>
                <p>Support deserving students who cannot afford tuition.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><Gift size={24} strokeWidth={1.5} /></span>
                <strong>Research Endowment</strong>
                <p>Fund faculty research and doctoral studentships.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><Gift size={24} strokeWidth={1.5} /></span>
                <strong>Infrastructure Projects</strong>
                <p>Help build new labs, classrooms, and student spaces.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><Gift size={24} strokeWidth={1.5} /></span>
                <strong>General Fund</strong>
                <p>Unrestricted giving directed to the university's greatest needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.about} overlay={0.88}  videos={videosFor('about')} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Alumni</div>
          <h2>Join the alumni network.</h2>
          <p>Update your details and get connected with the AVIU alumni community.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>Get in touch <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
