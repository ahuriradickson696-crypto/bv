import { ArrowRight, FileText, Upload, CreditCard, CheckCircle2 } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';

const steps = [
  { icon: FileText, title: 'Choose your programme', description: 'Browse the Course Finder and open the full programme page for entry requirements, structure and career outcomes. Confirm the intake (January, May, August or September).' },
  { icon: FileText, title: 'Submit an online enquiry', description: 'Use Apply Now on the website. Your details are sent to admissions@aviu.ac.ug (and can connect to REDES API when configured). Include nationality and preferred programme.' },
  { icon: Upload, title: 'Send supporting documents', description: 'Email certified transcripts, ID/passport copy, photos and English test results (if required) to admissions@aviu.ac.ug or international@aviu.ac.ug.' },
  { icon: CreditCard, title: 'Follow Admissions guidance', description: 'Fees and application charges are published as Coming Soon. Admissions will confirm any payment steps and next actions for your nationality and programme.' },
  { icon: CheckCircle2, title: 'Receive your decision', description: 'Complete applications are typically reviewed within two weeks. You receive an offer letter by email. International students then proceed with visa support.' },
];

export function HowToApply() {
  const { navigate } = useRouter();
  const { openApply } = useApply();

  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.admissions}
        eyebrow="Application guide"
        title={<>How to <em>Apply</em></>}
        subtitle="Follow these five simple steps to submit your application to Avance International University. The entire process can be completed online."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Admissions', path: '/admissions' }, { label: 'How to Apply', path: '/admissions/how-to-apply' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Step by step</div>
            <h2>Your application <em>journey.</em></h2>
          </div>
        </div>
        <div className="steps-grid">
          {steps.map((step, i) => (
            <div className="step-card" key={i}>
              <span className="step-number">{i + 1}</span>
              <step.icon size={28} strokeWidth={1.5} />
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow"><span className="eyebrow-line" /> Required documents</div>
            <h2>What you need to <em>prepare.</em></h2>
            <p>Having all documents ready before you start will make the application process smoother. All documents must be clear, legible scans or photographs.</p>
          </div>
          <div className="col-half">
            <ul className="requirements-list">
              <li><span className="check-bullet"><CheckCircle2 size={16} /></span> Certified academic transcripts and certificates</li>
              <li><span className="check-bullet"><CheckCircle2 size={16} /></span> Recent passport-size photograph</li>
              <li><span className="check-bullet"><CheckCircle2 size={16} /></span> Copy of national ID or passport (international applicants)</li>
              <li><span className="check-bullet"><CheckCircle2 size={16} /></span> Proof of English proficiency (international applicants)</li>
              <li><span className="check-bullet"><CheckCircle2 size={16} /></span> Two passport-size photographs</li>
              <li><span className="check-bullet"><CheckCircle2 size={16} /></span> Application fee payment receipt</li>
              <li><span className="check-bullet"><CheckCircle2 size={16} /></span> CV/resume (postgraduate applicants only)</li>
              <li><span className="check-bullet"><CheckCircle2 size={16} /></span> Research proposal (PhD applicants only)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="collab-banner">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Need help?</div>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', margin: '16px 0 8px', color: 'var(--purple-900)', fontFamily: "'Playfair Display'", fontWeight: 500, letterSpacing: '-.03em' }}>
              Talk to our <em>admissions team.</em>
            </h2>
            <p>Our admissions office is available Monday to Friday, 8:00 AM to 5:00 PM. We are happy to guide you through the application process.</p>
          </div>
          <button className="button button-primary" onClick={openApply}>Apply now <ArrowRight size={17} /></button>
        </div>
      </section>
    </div>
  );
}
