import { Download, FileText, Image, BookOpen } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';

const resources = [
  {
    title: 'Programmes & courses flyer',
    description: 'Overview of programmes and courses available at Avance International University for the current intakes.',
    href: '/images/admission-poster.jpeg',
    type: 'Image / poster',
    icon: Image,
  },
  {
    title: 'Admission poster',
    description: 'Current intake and bursary information poster for display and sharing.',
    href: '/images/admission-poster.jpeg',
    type: 'Poster',
    icon: FileText,
  },
  {
    title: 'Apply online',
    description: 'Submit your application through our online form. The Admissions team will follow up with next steps.',
    href: '#apply',
    type: 'Application',
    icon: BookOpen,
    isApply: true,
  },
];

export function Downloads() {
  const { openApply } = useApply();

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.admissions}
        eyebrow="Resources"
        title={<>Downloads &amp; <em>Materials</em></>}
        subtitle="Download flyers, posters, and use our online application. For official prospectuses and forms, contact Admissions at Nabweru campus."
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Resources
            </div>
            <h2>
              Get the <em>materials</em> you need.
            </h2>
          </div>
        </div>
        <div className="library-grid">
          {resources.map((r) => {
            const Icon = r.icon;
            return (
              <div className="library-card" key={r.title}>
                <span className="library-icon">
                  <Icon size={22} />
                </span>
                <strong>{r.title}</strong>
                <p>{r.description}</p>
                <span className="eyebrow" style={{ marginTop: 8 }}>{r.type}</span>
                {r.isApply ? (
                  <button type="button" className="button button-primary" style={{ marginTop: 16 }} onClick={openApply}>
                    Apply now <Download size={16} />
                  </button>
                ) : (
                  <a className="button button-primary" style={{ marginTop: 16, display: 'inline-flex' }} href={r.href} download target="_blank" rel="noreferrer">
                    Download <Download size={16} />
                  </a>
                )}
              </div>
            );
          })}
        </div>
        <p className="tuition-note" style={{ marginTop: 32 }}>
          Official PDF prospectuses and application forms can also be requested from the Admissions Office: info@aviu.ac.ug · +256 700 670 691.
        </p>
      </section>
    </div>
  );
}
