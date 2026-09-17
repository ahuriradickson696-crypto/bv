import { ArrowRight, Check, CreditCard, FileText, Percent, RotateCcw } from 'lucide-react';
import { feeStructure, feePaymentInfo } from '@/data/university';
import { PageHero } from '@/components/PageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';

const paymentIcons = [CreditCard, FileText, Percent, RotateCcw];

export function Fees() {
  const { navigate } = useRouter();
  const { openApply } = useApply();

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.fees}
        eyebrow="Tuition & costs"
        title={<>Fees &amp; <em>Payment</em></>}
        subtitle="We are committed to providing affordable, quality education. Below is our fee structure and payment information to help you plan your studies at Avance International University."
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Fee structure
            </div>
            <h2>
              Transparent <em>pricing.</em>
            </h2>
          </div>
        </div>
        <div className="tuition-table">
          <div className="tuition-row tuition-header">
            <span>Programme Type</span>
            <span>East African Students</span>
            <span>International Students</span>
            <span>Frequency</span>
          </div>
          {feeStructure.map((row) => (
            <div className="tuition-row tuition-row-4" key={row.programme}>
              <span>{row.programme}</span>
              <strong>{row.uganda}</strong>
              <strong>{row.international}</strong>
              <span>{row.perLabel}</span>
            </div>
          ))}
        </div>
        <p className="tuition-note">
          Fees are indicative and subject to annual review. Flexible payment
          plans and scholarships are available for qualifying students.
        </p>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Payment information
            </div>
            <h2>
              Everything you need to <em>know.</em>
            </h2>
          </div>
        </div>
        <div className="payment-info-grid">
          {feePaymentInfo.map((info, index) => {
            const Icon = paymentIcons[index] || FileText;
            return (
              <article className="payment-info-card" key={info.title}>
                <span className="payment-info-icon">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <strong>{info.title}</strong>
                <p>{info.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-pad">
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
          <div className="intake-card">
            <strong>January</strong>
            <span>Intake 1</span>
            <p>Applications open in October of the previous year.</p>
          </div>
          <div className="intake-card">
            <strong>May</strong>
            <span>Intake 2</span>
            <p>Applications open in February of the same year.</p>
          </div>
          <div className="intake-card intake-active">
            <strong>August</strong>
            <span>Intake 3</span>
            <p>Applications open in May. Now accepting applications for 2026.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.fees} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> Ready to apply?
          </div>
          <h2>Start your application.</h2>
          <p>Applications are now open for all intakes — January, May, and August.</p>
        </div>
        <button className="button button-light" onClick={openApply}>
          Apply now <ArrowRight size={17} />
        </button>
      </section>
    </div>
  );
}
