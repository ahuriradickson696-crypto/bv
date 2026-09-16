import { ArrowRight, MapPin, ParkingCircle, Bus } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { videosFor } from '@/data/pageVideos';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

export function Campus() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <SubPageHero
videos={videosFor('about')}         images={pageImages.about}
        eyebrow="About"
        title={<>Campus &amp; <em>Visitor Info</em></>}
        subtitle="Our main campus is located in Kampala, Uganda. Find directions, parking information, and transit options to help you plan your visit."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Campus', path: '/about/campus' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Main campus</div>
            <h2>Avance <em>campus.</em></h2>
          </div>
        </div>
        <div className="two-col-layout">
          <div className="col-half">
            <p>The AVIU main campus is situated in Kampala, Uganda's capital and largest city. The campus houses all four faculties, the library, innovation centre, nursing simulation lab, lecture halls, sports grounds, and administrative offices.</p>
            <p>Our campus is designed to support a vibrant student community with modern learning facilities, green spaces, and social areas. We continue to invest in new buildings and infrastructure to enhance the student experience.</p>
            <div className="contact-info" style={{ marginTop: '24px' }}>
              <div className="contact-item">
                <span className="contact-icon"><MapPin size={18} /></span>
                <div>
                  <strong>Address</strong>
                  <span>Avance International University, Kampala, Uganda</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-half">
            <div className="library-grid">
              <div className="library-card">
                <span className="library-icon"><ParkingCircle size={24} strokeWidth={1.5} /></span>
                <strong>Parking</strong>
                <p>Visitor parking is available near the main entrance. Parking permits can be obtained from the security office at the gate.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><Bus size={24} strokeWidth={1.5} /></span>
                <strong>Public Transit</strong>
                <p>The campus is accessible by public transport (matatu and boda boda). The nearest taxi park is a short walk from campus.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><MapPin size={24} strokeWidth={1.5} /></span>
                <strong>Directions</strong>
                <p>Download our campus map and directions guide (PDF) for detailed navigation to and around campus.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><MapPin size={24} strokeWidth={1.5} /></span>
                <strong>Satellite Campuses</strong>
                <p>AVIU is expanding with regional study centres across Uganda. Contact us for locations near you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.about} overlay={0.88}  videos={videosFor('about')} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Visit us</div>
          <h2>Plan your campus visit.</h2>
          <p>Book a guided tour or attend our next open day.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/admissions/campus-visits')}>Book a visit <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
