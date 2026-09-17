import { useState } from 'react';
import { ArrowRight, Check, FileText, ClipboardList, UserCheck, ChevronDown } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { admissionFAQs } from '@/data/university';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { videosFor } from '@/data/pageVideos';
import { useApply } from '@/components/ApplyContext';
import { TikTokStrip } from '@/components/TikTokEmbed';
import { tiktoksByCategory } from '@/data/galleryMedia';

const steps = [
  {
    icon: FileText,
    title: 'Submit your application',
    description:
      'Complete the online application form with your personal details, academic history, and chosen programme. Applications can also be submitted in person at the admissions office.',
  },
  {
    icon: ClipboardList,
    title: 'Provide supporting documents',
    description:
      'Submit your academic transcripts, identification documents, and any required recommendation letters. Ensure all documents are certified copies.',
  },
  {
    icon: UserCheck,
    title: 'Receive your decision',
    description:
      'Our admissions team reviews your application and notifies you of the decision within two weeks. Early applications are encouraged.',
  },
];

const requirements = [
  'Completed online or paper application form',
  'Certified academic transcripts and certificates',
  'Copy of national ID or valid passport',
  'Two passport-size photographs',
  'Personal statement (for postgraduate applicants)',
  'Application fee payment receipt',
  'Two letters of recommendation (postgraduate programmes)',
  'Proof of English proficiency (international applicants)',
  'Curriculum vitae (for postgraduate applicants, where requested)',
  'Research proposal (only if applying to a research pathway when available)',
];

const tuitionComingSoon = true;

const intakes = [
  { name: 'January Intake', period: 'January - April', applications: 'October - December', status: 'Open Now' },
  { name: 'May Intake', period: 'May - August', applications: 'February - April', status: 'Open Now' },
  { name: 'August Intake', period: 'August - November', applications: 'May - July', status: 'Open Now' },
];

export function Admissions() {
  const { openApply } = useApply();
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <div className="page-content">
      <PageHero
videos={videosFor('admissions')}         images={pageImages.admissions}
        eyebrow="Join AVIU"
        title={<>Begin your <em>application.</em></>}
        subtitle="We welcome students from all backgrounds. Our admissions process is straightforward, transparent, and designed to help you find the right fit. We offer three intakes per year: January, May, and August."
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> How to apply
            </div>
            <h2>
              Three simple <em>steps.</em>
            </h2>
          </div>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={step.title}>
              <span className="step-number">0{index + 1}</span>
              <step.icon size={28} strokeWidth={1.5} />
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Intake schedule
            </div>
            <h2>
              Three intakes <em>per year.</em>
            </h2>
          </div>
        </div>
        <div className="intake-grid">
          {intakes.map((intake) => (
            <div className={`intake-card ${intake.status === 'Open Now' ? 'intake-active' : ''}`} key={intake.name}>
              <strong>{intake.name}</strong>
              <span>{intake.period}</span>
              <p>Applications: {intake.applications}</p>
              <span className={`intake-status ${intake.status === 'Open Now' ? 'status-open' : 'status-closed'}`}>
                {intake.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow">
              <span className="eyebrow-line" /> What you need
            </div>
            <h2>
              Entry <em>requirements.</em>
            </h2>
            <p>
              Please ensure you have the following documents ready before
              beginning your application. Incomplete applications may delay the
              review process. Requirements may vary by programme level.
            </p>
          </div>
          <div className="col-half">
            <ul className="requirements-list">
              {requirements.map((req) => (
                <li key={req}>
                  <span className="programme-bullet">
                    <Check size={13} />
                  </span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Tuition &amp; fees
            </div>
            <h2>
              Fee schedule <em>coming soon.</em>
            </h2>
            <p style={{ color: 'var(--ink-soft)', maxWidth: 640, marginTop: 12, lineHeight: 1.7 }}>
              Detailed tuition, payment plans and any bursary information will be published here once
              confirmed by the University. Contact admissions@aviu.ac.ug or +256 700 670 691 for the
              latest guidance for your programme and intake.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Questions?
            </div>
            <h2>
              Frequently asked <em>questions.</em>
            </h2>
          </div>
        </div>
        <div className="faq-list">
          {admissionFAQs.map((faq, index) => (
            <div className={`faq-item ${openFAQ === index ? 'faq-open' : ''}`} key={index}>
              <button
                className="faq-question"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span>{faq.question}</span>
                <ChevronDown size={18} className={`faq-chevron ${openFAQ === index ? 'faq-chevron-open' : ''}`} />
              </button>
              {openFAQ === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <TikTokStrip
        items={tiktoksByCategory('admissions')}
        title={<>Welcome &amp; <em>admissions</em> videos.</>}
        subtitle="Freshers welcome, education pathways, nursing intakes — from @avance.marketing and student pulse."
      />

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.admissions} overlay={0.88}  videos={videosFor('admissions')} />
        <div>
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> Take the first step
          </div>
          <h2>Apply today.</h2>
          <p>Applications are now open for all intakes — January, May, and August.</p>
        </div>
        <button className="button button-light" onClick={openApply}>
          Start application <ArrowRight size={17} />
        </button>
      </section>
    </div>
  );
}
