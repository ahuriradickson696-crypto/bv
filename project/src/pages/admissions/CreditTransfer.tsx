import { ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

const rplInfo = [
  { title: 'Recognition of Prior Learning (RPL)', description: 'If you have work experience or informal learning that is relevant to your chosen programme, you can apply for RPL assessment. A portfolio of evidence is evaluated by faculty, and credits may be awarded.' },
  { title: 'University Transfer', description: 'Students from other recognised universities can transfer to AVIU. Credit transfer is assessed on a case-by-case basis, comparing your prior learning with our curriculum.' },
  { title: 'Advanced Standing', description: 'Diploma holders progressing to a related bachelor\'s degree may receive advanced standing, reducing the duration of their degree by up to one year.' },
];

const transferProcess = [
  'Submit your application with certified transcripts from your previous institution',
  'The academic registrar conducts a credit mapping against the AVIU curriculum',
  'Approved credits are transferred and you are placed at the appropriate level',
  'A maximum of 50% of programme credits can be transferred from another institution',
  'Credits older than 5 years may require a competency assessment',
  'The credit transfer decision is communicated within 2 weeks of application',
];

export function CreditTransfer() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.admissions}
        eyebrow="Admissions"
        title={<>Credit Transfer &amp; <em>RPL</em></>}
        subtitle="If you have prior qualifications or work experience, you may be eligible for credit transfer or recognition of prior learning, reducing the time and cost of your studies."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Admissions', path: '/admissions' }, { label: 'Credit Transfer', path: '/admissions/credit-transfer' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Transfer options</div>
            <h2>Three pathways to <em>credit recognition.</em></h2>
          </div>
        </div>
        <div className="library-grid">
          {rplInfo.map((item) => (
            <article className="library-card" key={item.title}>
              <span className="library-icon"><FileText size={24} strokeWidth={1.5} /></span>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow"><span className="eyebrow-line" /> The process</div>
            <h2>How credit transfer <em>works.</em></h2>
            <p>Our credit transfer process is designed to be transparent and efficient. The academic registrar evaluates your prior learning and communicates the outcome within two weeks.</p>
          </div>
          <div className="col-half">
            <ul className="requirements-list">
              {transferProcess.map((item, i) => (
                <li key={i}><span className="check-bullet"><CheckCircle2 size={16} /></span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.admissions} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Transfer?</div>
          <h2>Apply for credit transfer.</h2>
          <p>Submit your transcripts and application to the academic registrar.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>Contact registrar <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
