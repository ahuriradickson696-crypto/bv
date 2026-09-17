import { ArrowRight, BookOpen, FileText, Microscope } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { videosFor } from '@/data/pageVideos';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

const publications = [
  { title: 'Efficacy of Traditional Herbal Medicine in Treating Malaria: A Comparative Study', author: 'Dr. Robert Kato et al.', journal: 'East African Medical Journal, 2025', type: 'Journal Article' },
  { title: 'AI-Powered Crop Disease Detection: A Mobile Solution for Smallholder Farmers', author: 'Dr. Samuel Wamala et al.', journal: 'Journal of African Computing Research, 2025', type: 'Conference Paper' },
  { title: 'Inclusive Education Practices in Ugandan Primary Schools: A Two-Year Study', author: 'Dr. Esther Namaganda et al.', journal: 'International Journal of Inclusive Education, 2024', type: 'Journal Article' },
  { title: 'Simulation-Based Learning and Clinical Competence in Nursing Education', author: 'Prof. Janet Amongi et al.', journal: 'Journal of Nursing Education, 2024', type: 'Journal Article' },
  { title: 'Digital Financial Inclusion and Mobile Money Adoption in East Africa', author: 'Prof. David Ssali et al.', journal: 'African Journal of Business Management, 2025', type: 'Working Paper' },
  { title: 'Community Health Outreach: Measuring Impact in Urban Kampala', author: 'Dr. Alice Nabwire et al.', journal: 'Uganda Public Health Review, 2025', type: 'Journal Article' },
  { title: 'Entrepreneurship Education and Student Startup Success', author: 'Prof. David Ssali et al.', journal: 'Journal of Entrepreneurship Education, 2024', type: 'Journal Article' },
  { title: 'Technology-Enhanced Learning in Ugandan Higher Education', author: 'Dr. Samuel Wamala et al.', journal: 'Journal of Educational Technology, 2023', type: 'Journal Article' },
];

export function Publications() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <SubPageHero
videos={videosFor('research')}         images={pageImages.research}
        eyebrow="Research"
        title={<>Publications &amp; <em>Repository</em></>}
        subtitle="Explore the research output of AVIU faculty and postgraduate students. Our institutional repository provides open access to theses, dissertations, journal articles, and conference papers."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Research', path: '/research' }, { label: 'Publications', path: '/research/publications' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Recent publications</div>
            <h2>Faculty <em>research output.</em></h2>
          </div>
        </div>
        <div className="research-projects-list">
          {publications.map((pub, i) => (
            <div className="research-project-card" key={i}>
              <div className="research-project-header">
                <h3 style={{ fontSize: '15px' }}>{pub.title}</h3>
                <span className="research-status status-completed">{pub.type}</span>
              </div>
              <p style={{ fontSize: '12px' }}>{pub.author}</p>
              <div className="research-project-meta">
                <span><BookOpen size={13} /> {pub.journal}</span>
              </div>
              <a className="text-link" style={{ marginTop: '8px' }} onClick={(e) => { e.preventDefault(); }}>
                View in repository <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Research resources</div>
            <h2>Access our <em>repository.</em></h2>
          </div>
        </div>
        <div className="library-grid">
          <div className="library-card">
            <span className="library-icon"><Microscope size={24} strokeWidth={1.5} /></span>
            <strong>Open Access Repository</strong>
            <p>Browse all AVIU research outputs including theses, dissertations, and published papers. Free and open to all.</p>
          </div>
          <div className="library-card">
            <span className="library-icon"><FileText size={24} strokeWidth={1.5} /></span>
            <strong>Annual Research Report</strong>
            <p>Our yearly report summarising research grants, publications, and impact across all faculties.</p>
          </div>
          <div className="library-card">
            <span className="library-icon"><BookOpen size={24} strokeWidth={1.5} /></span>
            <strong>Faculty Journals</strong>
            <p>AVIU-affiliated academic journals published in partnership with regional research bodies.</p>
          </div>
          <div className="library-card">
            <span className="library-icon"><FileText size={24} strokeWidth={1.5} /></span>
            <strong>Research Ethics</strong>
            <p>Information on our Institutional Review Board, research integrity standards, and data management policies.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.research} overlay={0.88}  videos={videosFor('research')} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Research</div>
          <h2>Explore our research.</h2>
          <p>Visit the repository or contact us for collaboration opportunities.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>Contact us <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
