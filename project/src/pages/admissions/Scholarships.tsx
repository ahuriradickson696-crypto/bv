import { ArrowRight, Award, HeartHandshake, BriefcaseBusiness } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

const scholarships = [
  { icon: Award, title: 'Merit-Based Scholarships', description: 'Awarded to students with outstanding academic performance. Covers 25-50% of tuition for the duration of the programme, subject to maintaining a minimum GPA.', eligibility: 'A-Level aggregate of 15 points or better, or equivalent at diploma/master\'s level.' },
  { icon: HeartHandshake, title: 'Need-Based Bursaries', description: 'Financial assistance for students from disadvantaged backgrounds. Covers 20-40% of tuition based on assessed financial need.', eligibility: 'Demonstrated financial need, academic potential, and Ugandan or East African residency.' },
  { icon: BriefcaseBusiness, title: 'Faculty-Specific Grants', description: 'Research and project grants available within specific faculties. Includes the Innovation Grant for tech students and the Community Health Grant for nursing students.', eligibility: 'Enrolled in the relevant faculty with a approved research or project proposal.' },
  { icon: Award, title: 'Early-Bird Discount', description: 'A 10% tuition discount for students who complete full payment at least 30 days before the start of the semester.', eligibility: 'Available to all students who pay early.' },
  { icon: HeartHandshake, title: 'Government Sponsorship', description: 'AVIU participates in the government sponsorship scheme for qualifying Ugandan students. Contact the admissions office for details.', eligibility: 'Ugandan nationals who meet government sponsorship criteria.' },
  { icon: BriefcaseBusiness, title: 'Employer Sponsorship', description: 'Many employers sponsor staff development at AVIU. We provide invoice-based billing and progress reports to sponsoring organisations.', eligibility: 'Employees of partner organisations with management approval.' },
];

export function Scholarships() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.admissions}
        eyebrow="Financial support"
        title={<>Scholarships &amp; <em>Financial Aid</em></>}
        subtitle="AVIU is committed to making education affordable. We offer a range of scholarships, bursaries, and financial aid options to help qualifying students fund their studies."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Admissions', path: '/admissions' }, { label: 'Scholarships', path: '/admissions/scholarships' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Funding options</div>
            <h2>Investing in your <em>future.</em></h2>
          </div>
        </div>
        <div className="library-grid">
          {scholarships.map((s) => (
            <article className="library-card" key={s.title}>
              <span className="library-icon"><s.icon size={24} strokeWidth={1.5} /></span>
              <strong>{s.title}</strong>
              <p>{s.description}</p>
              <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid var(--border)' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--purple-600)' }}>Eligibility</span>
                <p style={{ fontSize: '12px', marginTop: '4px' }}>{s.eligibility}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow"><span className="eyebrow-line" /> Payment plans</div>
            <h2>Flexible <em>payment.</em></h2>
            <p>Even without a scholarship, AVIU offers flexible payment plans. Tuition can be paid in two or three instalments per semester. The bursar\'s office works with students to arrange manageable payment schedules.</p>
            <p>Sponsorship and employer-funded tuition arrangements are also available. Contact the bursar for corporate billing options.</p>
          </div>
          <div className="col-half">
            <div className="library-grid">
              <div className="library-card">
                <span className="library-icon"><BriefcaseBusiness size={24} strokeWidth={1.5} /></span>
                <strong>Installment Plans</strong>
                <p>Pay in 2-3 instalments per semester with no interest.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><BriefcaseBusiness size={24} strokeWidth={1.5} /></span>
                <strong>Employer Billing</strong>
                <p>Direct invoicing to sponsoring companies and organisations.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><BriefcaseBusiness size={24} strokeWidth={1.5} /></span>
                <strong>Work-Study</strong>
                <p>On-campus employment to offset tuition costs.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><BriefcaseBusiness size={24} strokeWidth={1.5} /></span>
                <strong>Emergency Fund</strong>
                <p>Short-term financial assistance for students facing unexpected hardship.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.admissions} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Apply for aid</div>
          <h2>Explore your funding options.</h2>
          <p>Contact the admissions office to discuss scholarships and financial aid.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>Get in touch <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
