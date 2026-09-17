import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Check, Clock, Globe2 } from 'lucide-react';
import { universityInfo } from '@/data/university';
import { PageHero } from '@/components/PageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';

export function Contact() {
  const { navigate } = useRouter();
  const { openApply } = useApply();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.contact}
        eyebrow="Get in touch"
        title={<>Contact <em>Avance</em></>}
        subtitle="Have a question about admissions, programmes, or visiting campus? We are here to help. Reach out and our team will respond within two business days."
      />

      <section className="section-pad">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow">
              <span className="eyebrow-line" /> Reach us
            </div>
            <h2>
              We would love to <em>hear from you.</em>
            </h2>
            <p>
              Whether you are a prospective student, a partner, or simply
              curious about Avance, our team is ready to answer your questions.
              Visit our campus in Kampala or reach us through any of the
              channels below.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">
                  <Mail size={18} />
                </span>
                <div>
                  <strong>Email</strong>
                  <span>{universityInfo.email}</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <Phone size={18} />
                </span>
                <div>
                  <strong>Phone</strong>
                  <span>{universityInfo.phone}</span>
                  <span>{universityInfo.phoneAlt}</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <MapPin size={18} />
                </span>
                <div>
                  <strong>Address</strong>
                  <span>{universityInfo.address}</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <Globe2 size={18} />
                </span>
                <div>
                  <strong>Website</strong>
                  <span>{universityInfo.website}</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <Clock size={18} />
                </span>
                <div>
                  <strong>Office Hours</strong>
                  <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
                  <span>Sat: 9:00 AM - 1:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-half">
            {submitted ? (
              <div className="contact-success">
                <span className="success-icon">
                  <Check size={25} />
                </span>
                <h3>Message sent.</h3>
                <p>Thank you for reaching out. We will respond within two business days. For urgent enquiries, please call us directly.</p>
                <button
                  className="button button-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Send another <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                  Full name
                  <input required placeholder="Your name" />
                </label>
                <label>
                  Email address
                  <input required type="email" placeholder="you@example.com" />
                </label>
                <label>
                  Phone number
                  <input type="tel" placeholder="+256 ..." />
                </label>
                <label>
                  Subject
                  <select required defaultValue="">
                    <option value="" disabled>Select a topic</option>
                    <option value="admissions">Admissions enquiry</option>
                    <option value="programmes">Programme information</option>
                    <option value="fees">Fees &amp; tuition</option>
                    <option value="research">Research collaboration</option>
                    <option value="library">Library services</option>
                    <option value="events">Events</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea required rows={5} placeholder="Your message..." />
                </label>
                <button className="button button-primary" type="submit">
                  Send message <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Visit campus
            </div>
            <h2>
              Come and see <em>for yourself.</em>
            </h2>
          </div>
        </div>
        <div className="two-col-layout">
          <div className="col-half">
            <p>
              Our campus is located in Kampala, Uganda. We welcome visits from
              prospective students, families, and partners. Our open days
              provide a great opportunity to tour the campus, meet faculty, and
              learn about our programmes.
            </p>
            <p>
              To schedule a campus visit outside of our regular open days,
              please contact us using the form above or call our admissions
              office directly.
            </p>
            <button className="button button-primary" onClick={openApply}>
              Apply to AIU <ArrowRight size={17} />
            </button>
          </div>
          <div className="col-half">
            <div className="contact-departments">
              <div className="contact-dept">
                <strong>Admissions Office</strong>
                <span>admissions@aviu.ac.ug</span>
                <span>+256 700 670 691</span>
              </div>
              <div className="contact-dept">
                <strong>Academic Registrar</strong>
                <span>registrar@aviu.ac.ug</span>
                <span>+256 766 751 763</span>
              </div>
              <div className="contact-dept">
                <strong>Library Services</strong>
                <span>library@aviu.ac.ug</span>
              </div>
              <div className="contact-dept">
                <strong>Bursar's Office</strong>
                <span>bursar@aviu.ac.ug</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Find us
            </div>
            <h2>
              Nabweru <em>campus.</em>
            </h2>
          </div>
        </div>
        <p style={{ maxWidth: 560, marginBottom: 24 }}>
          1 km off Nansana–Hoima Road, Nabweru, Wakiso District, Uganda. Use the map below for directions.
        </p>
        <div className="map-embed">
          <iframe
            title="Avance International University location"
            src="https://www.google.com/maps?q=Nabweru+Wakiso+Uganda&output=embed"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
