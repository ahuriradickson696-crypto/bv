import { ArrowRight, FileText, Upload, CreditCard, CheckCircle2 } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';

const steps = [
  { icon: FileText, title: 'Create an Account', description: 'Register on our online application portal with your email address and create a password. You will receive a confirmation email to verify your account.' },
  { icon: FileText, title: 'Complete the Application Form', description: 'Fill in your personal details, academic history, and chosen programme. You can save your progress and return to complete it later.' },
  { icon: Upload, title: 'Upload Required Documents', description: 'Submit certified academic transcripts, passport photos, a copy of your ID or passport, and any other documents required for your programme.' },
  { icon: CreditCard, title: 'Pay the Application Fee', description: 'Pay the non-refundable application fee via mobile money, bank transfer, or at the bursar\'s office. Your application is reviewed once payment is confirmed.' },
  { icon: CheckCircle2, title: 'Receive Your Decision', description: 'The admissions team reviews your application within two weeks. You will receive your admission decision via email and can track your status online.' },
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
