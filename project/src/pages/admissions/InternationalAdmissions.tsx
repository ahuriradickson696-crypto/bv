import { ArrowRight, Globe2, FileText, Plane, MapPin } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { videosFor } from '@/data/pageVideos';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';

const visaSteps = [
  { step: '1', title: 'Receive Offer Letter', description: 'Once admitted, AVIU issues an official acceptance letter required for your visa application.' },
  { step: '2', title: 'Gather Documents', description: 'Prepare your passport, acceptance letter, proof of funds, health insurance, and passport photos.' },
  { step: '3', title: 'Apply for Student Visa', description: 'Submit your visa application at the Ugandan embassy or consulate in your country.' },
  { step: '4', title: 'Pre-Departure Briefing', description: 'Attend our online pre-departure briefing covering travel, accommodation, and arrival logistics.' },
  { step: '5', title: 'Arrival & Orientation', description: 'Arrive on campus, register with the international office, and attend orientation week.' },
];

const englishTests = [
  { test: 'IELTS Academic', score: 'Minimum 6.0 overall' },
  { test: 'TOEFL iBT', score: 'Minimum 80' },
  { test: 'PTE Academic', score: 'Minimum 50' },
  { test: 'Cambridge CAE', score: 'Grade C or above' },
];

export function InternationalAdmissions() {
  const { navigate } = useRouter();
  const { openApply } = useApply();

  return (
    <div className="page-content">
      <SubPageHero
videos={videosFor('admissions')}         images={pageImages.admissions}
        eyebrow="International applicants"
        title={<>International <em>Admissions</em></>}
        subtitle="AVIU welcomes students from across East Africa and beyond. This guide covers everything international applicants need — from entry requirements to visa support and arrival orientation."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Admissions', path: '/admissions' }, { label: 'International', path: '/admissions/international' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Country requirements</div>
            <h2>Entry requirements by <em>country.</em></h2>
          </div>
        </div>
        <div className="two-col-layout">
          <div className="col-half">
            <p>AVIU accepts a wide range of international qualifications. Below are common equivalencies. If your qualification is not listed, contact the international office for an individual assessment.</p>
          </div>
          <div className="col-half">
            <div className="calendar-key-dates">
              <div className="calendar-date-row"><span>Kenya KCSE</span><strong>Mean grade C+ (plus)</strong></div>
              <div className="calendar-date-row"><span>Tanzania ACSEE</span><strong>2 principal passes</strong></div>
              <div className="calendar-date-row"><span>Rwanda A-Level</span><strong>2 principal passes</strong></div>
              <div className="calendar-date-row"><span>South Sudan</span><strong>SSCE + foundation year</strong></div>
              <div className="calendar-date-row"><span>West Africa (WASSCE)</span><strong>3 credits including English</strong></div>
              <div className="calendar-date-row"><span>India (CBSE/ISC)</span><strong>65% aggregate in 12th</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> English proficiency</div>
            <h2>Language <em>requirements.</em></h2>
          </div>
        </div>
        <div className="staff-stats-row">
          {englishTests.map((t) => (
            <div className="staff-stat" key={t.test}>
              <strong style={{ fontSize: '16px' }}>{t.test}</strong>
              <span>{t.score}</span>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: '20px', color: 'var(--ink-muted)', fontSize: '13px' }}>
          Waivers available for native English speakers and holders of qualifications taught in English.
        </p>
      </section>

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Visa &amp; immigration</div>
            <h2>Student visa <em>process.</em></h2>
          </div>
        </div>
        <div className="steps-grid">
          {visaSteps.map((s) => (
            <div className="step-card" key={s.step}>
              <span className="step-number">{s.step}</span>
              <strong>{s.title}</strong>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow"><span className="eyebrow-line" /> Living in Uganda</div>
            <h2>What to <em>expect.</em></h2>
            <p>Kampala is a vibrant, affordable city with a warm climate and welcoming culture. International students can expect a cost of living of approximately USD 400-600 per month including accommodation, food, and transport.</p>
            <p>Our international office provides a pre-departure guide, arrival pickup service, and ongoing support throughout your studies.</p>
            <a className="text-link" onClick={(e) => { e.preventDefault(); navigate('/student-life/accommodation'); }}>
              Explore accommodation <ArrowRight size={16} />
            </a>
          </div>
          <div className="col-half">
            <div className="library-grid">
              <div className="library-card">
                <span className="library-icon"><Globe2 size={24} strokeWidth={1.5} /></span>
                <strong>Pre-Departure Guide</strong>
                <p>Everything you need to know before travelling to Uganda.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><MapPin size={24} strokeWidth={1.5} /></span>
                <strong>Arrival Pickup</strong>
                <p>Free airport pickup for new international students on designated dates.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><Plane size={24} strokeWidth={1.5} /></span>
                <strong>Orientation Week</strong>
                <p>Mandatory orientation covering campus, immigration, and student life.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><FileText size={24} strokeWidth={1.5} /></span>
                <strong>Visa Renewal</strong>
                <p>The international office assists with student visa renewals each year.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Documents checklist</div>
            <h2>What international applicants should <em>prepare.</em></h2>
          </div>
        </div>
        <ul className="requirements-list">
          <li><span className="check-bullet"><FileText size={16} /></span> Certified copies of secondary school certificates and transcripts (with English translation if needed)</li>
          <li><span className="check-bullet"><FileText size={16} /></span> Valid passport (minimum 6 months validity beyond intended stay)</li>
          <li><span className="check-bullet"><FileText size={16} /></span> English proficiency evidence (IELTS / TOEFL / PTE) or waiver request if prior study was in English</li>
          <li><span className="check-bullet"><FileText size={16} /></span> Passport-size photographs</li>
          <li><span className="check-bullet"><FileText size={16} /></span> Personal statement (recommended)</li>
          <li><span className="check-bullet"><FileText size={16} /></span> After offer: proof of funds and medical insurance for visa application</li>
        </ul>
        <p style={{ marginTop: 20, color: 'var(--ink-muted)', fontSize: 14 }}>
          Email international@aviu.ac.ug or admissions@aviu.ac.ug with scanned documents after submitting the online enquiry. Fees information is Coming Soon — request a quote for your programme and nationality.
        </p>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.admissions} overlay={0.88}  videos={videosFor('admissions')} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> International applicants</div>
          <h2>Start your journey.</h2>
          <p>Apply today and join our growing international community.</p>
        </div>
        <button className="button button-light" onClick={openApply}>Apply now <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
