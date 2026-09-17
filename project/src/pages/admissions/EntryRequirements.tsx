import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

const requirements = [
  { level: 'Certificate Programmes', items: ['O-Level certificate (UCE) or equivalent', 'Minimum of 3 passes at O-Level', 'Basic literacy and numeracy skills'] },
  { level: 'Diploma Programmes', items: ['O-Level certificate (UCE) with at least 3 passes', 'A-Level certificate (UACE) is an advantage', 'Relevant work experience may be considered'] },
  { level: 'Bachelor\'s Degrees', items: ['A-Level certificate (UACE) with at least 2 principal passes', 'Or an equivalent qualification from a recognised institution', 'Diploma holders may apply with credit transfer'] },
  { level: 'Postgraduate Diplomas', items: ['A recognised bachelor\'s degree', 'Relevant work experience (where applicable)', 'Professional qualifications may be considered'] },
  { level: 'Master\'s Degrees', items: ['A recognised bachelor\'s degree with at least a second class (lower)', 'Relevant work experience (preferred for MBA)', 'Two academic or professional references'] },
  { level: 'PhD Programmes', items: ['A recognised master\'s degree in a relevant field', 'A research proposal (2,000-3,000 words)', 'Identification of a potential supervisor', 'Two academic references'] },
];

const alternativeEntry = [
  { title: 'Mature Age Entry Scheme', description: 'Applicants aged 21 and above without standard qualifications can sit the mature age entry examination administered by the university.' },
  { title: 'Recognition of Prior Learning (RPL)', description: 'Work experience and informal learning can be assessed for credit towards a qualification. Contact the academic registrar for details.' },
  { title: 'Transfer Students', description: 'Students from other recognised institutions can transfer credits. A credit assessment is conducted during the application process.' },
];

export function EntryRequirements() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.admissions}
        eyebrow="Admissions"
        title={<>Entry <em>Requirements</em></>}
        subtitle="Find the academic qualifications needed for each programme level. AVIU offers multiple entry pathways to ensure education is accessible to all qualified applicants."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Admissions', path: '/admissions' }, { label: 'Entry Requirements', path: '/admissions/entry-requirements' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Qualifications</div>
            <h2>Requirements by <em>programme level.</em></h2>
          </div>
        </div>
        <div className="programme-list">
          {requirements.map((req) => (
            <div className="programme-faculty" key={req.level}>
              <div className="programme-faculty-header">
                <h3>{req.level}</h3>
              </div>
              <ul>
                {req.items.map((item, i) => (
                  <li key={i}>
                    <span className="programme-bullet"><CheckCircle2 size={14} /></span>
                    <div className="programme-list-item">
                      <span className="programme-list-name">{item}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Alternative pathways</div>
            <h2>Multiple routes to <em>admission.</em></h2>
          </div>
        </div>
        <div className="library-grid">
          {alternativeEntry.map((item) => (
            <article className="library-card" key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
              <a className="text-link" onClick={(e) => { e.preventDefault(); navigate('/admissions/credit-transfer'); }}>
                Learn more <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.admissions} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Ready?</div>
          <h2>Check your eligibility.</h2>
          <p>Contact admissions if you are unsure about your qualifications.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>Contact us <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
