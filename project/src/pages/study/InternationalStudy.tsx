import { ArrowRight, Globe2, GraduationCap, FileText, Plane } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';

const pathwayProgrammes = [
  { icon: GraduationCap, title: 'International Foundation Year (IFY)', description: 'A one-year preparatory programme for international students whose qualifications do not meet direct entry requirements. Builds academic English, study skills, and subject knowledge.' },
  { icon: FileText, title: 'Pre-Sessional English', description: 'Intensive English language preparation courses for students who need to meet English proficiency requirements before beginning their degree programme.' },
  { icon: GraduationCap, title: 'Pre-Master\'s Bridging Programme', description: 'A bridging programme for students who hold a bachelor\'s degree but need additional preparation before starting a master\'s degree at AIU.' },
];

const exchangeInfo = [
  { icon: Plane, title: 'Inbound Exchange', description: 'Students from our partner universities abroad can spend a semester or year at AIU. We provide orientation, accommodation support, and a dedicated academic advisor.' },
  { icon: Globe2, title: 'Outbound Exchange', description: 'AIU students can study at partner universities across East Africa and beyond. Exchange credits count toward your AIU degree. Applications open each semester.' },
];

export function InternationalStudy() {
  const { navigate } = useRouter();
  const { openApply } = useApply();

  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.study}
        eyebrow="International"
        title={<>International <em>Study Options</em></>}
        subtitle="AIU welcomes students from across East Africa and the world. Explore study abroad opportunities, exchange programmes, and pathway courses designed for international applicants."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Study', path: '/study' }, { label: 'International', path: '/study/international' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Study abroad</div>
            <h2>Exchange <em>programmes.</em></h2>
          </div>
        </div>
        <div className="library-grid">
          {exchangeInfo.map((item) => (
            <article className="library-card" key={item.title}>
              <span className="library-icon"><item.icon size={24} strokeWidth={1.5} /></span>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
              <a className="text-link" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>
                Learn more <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Pathway programmes</div>
            <h2>Prepare for <em>degree study.</em></h2>
          </div>
        </div>
        <div className="library-grid">
          {pathwayProgrammes.map((item) => (
            <article className="library-card" key={item.title}>
              <span className="library-icon"><item.icon size={24} strokeWidth={1.5} /></span>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow"><span className="eyebrow-line" /> International admissions</div>
            <h2>How to <em>apply.</em></h2>
            <p>International applicants should submit certified academic transcripts, proof of English proficiency (IELTS, TOEFL, or PTE), a copy of their passport, and a completed application form. The international office provides support throughout the process.</p>
            <p>Once admitted, we assist with visa letters, pre-departure briefings, and arrival orientation. Our international student support team is available to help with accommodation, immigration, and settling into life in Uganda.</p>
            <a className="text-link" onClick={(e) => { e.preventDefault(); navigate('/admissions/international'); }}>
              International admissions guide <ArrowRight size={16} />
            </a>
          </div>
          <div className="col-half">
            <div className="library-grid">
              <div className="library-card">
                <span className="library-icon"><Globe2 size={24} strokeWidth={1.5} /></span>
                <strong>Country-Specific Requirements</strong>
                <p>Check entry requirements for your country. We accept a wide range of international qualifications.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><FileText size={24} strokeWidth={1.5} /></span>
                <strong>English Proficiency</strong>
                <p>Minimum IELTS 6.0, TOEFL 80, or PTE 50. Waivers available for native speakers and certain qualifications.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><Plane size={24} strokeWidth={1.5} /></span>
                <strong>Visa Support</strong>
                <p>We provide acceptance letters and guidance for your student visa application. Contact our international office.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><Globe2 size={24} strokeWidth={1.5} /></span>
                <strong>Living in Uganda</strong>
                <p>Our pre-departure guide covers accommodation near Nabweru campus, cost of living, healthcare, and culture in the Wakiso / Kampala area.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.study} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Study abroad</div>
          <h2>Join our international community.</h2>
          <p>Students from across the region choose AIU for quality education in a welcoming environment.</p>
        </div>
        <button className="button button-light" onClick={openApply}>Apply now <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
