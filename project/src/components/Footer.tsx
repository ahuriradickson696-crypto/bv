import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Send } from 'lucide-react';
import { universityInfo } from '@/data/university';
import { useRouter } from '@/router/Router';

export function Footer() {
  const { navigate } = useRouter();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const link = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <a
            className="brand brand-footer"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            <img src="/images/aviu-logo.png" alt="Avance International University logo" />
            <span>
              <strong>AVANCE</strong>
              <small>INTERNATIONAL UNIVERSITY</small>
            </span>
          </a>
          <div className="footer-contact-info">
            <span><MapPin size={14} /> Nabweru, Wakiso District</span>
            <span><Phone size={14} /> {universityInfo.phone}</span>
            <span><Mail size={14} /> {universityInfo.email}</span>
          </div>
          <div className="footer-socials">
            <a href="https://x.com/AvanceIU_uganda" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><Twitter size={15} /></a>
            <a href="https://ug.linkedin.com/company/avance-international-university" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={15} /></a>
            <a href="https://aviu.ac.ug/" target="_blank" rel="noopener noreferrer" aria-label="Official website"><Facebook size={15} /></a>
            <a href="#/elearning" onClick={(e) => { e.preventDefault(); navigate('/elearning'); }} aria-label="E-learning"><Youtube size={15} /></a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <strong>Study</strong>
            <a onClick={link('/study')}>All Programmes</a>
            <a onClick={link('/study/undergraduate')}>Undergraduate</a>
            <a onClick={link('/study/postgraduate')}>Postgraduate</a>
            <a onClick={link('/study/online')}>Online &amp; Flexible</a>
            <a onClick={link('/study/course-finder')}>Course Finder</a>
          </div>
          <div>
            <strong>Admissions</strong>
            <a onClick={link('/admissions')}>Admissions Overview</a>
            <a onClick={link('/admissions/how-to-apply')}>How to Apply</a>
            <a onClick={link('/admissions/scholarships')}>Scholarships</a>
            <a onClick={link('/admissions/international')}>International</a>
            <a onClick={link('/fees')}>Fees &amp; Tuition</a>
          </div>
          <div>
            <strong>Research &amp; Life</strong>
            <a onClick={link('/research')}>Research</a>
            <a onClick={link('/research/phd-opportunities')}>PhD Opportunities</a>
            <a onClick={link('/student-life')}>Student Life</a>
            <a onClick={link('/student-life/accommodation')}>Accommodation</a>
            <a onClick={link('/student-life/careers')}>Career Services</a>
          </div>
          <div>
            <strong>About</strong>
            <a onClick={link('/about')}>About AVIU</a>
            <a onClick={link('/about/leadership')}>Leadership</a>
            <a onClick={link('/about/organisation')}>Organisation</a>
            <a onClick={link('/about/alumni')}>Alumni</a>
            <a onClick={link('/about/careers')}>Careers at AVIU</a>
            <a onClick={link('/gallery')}>Gallery</a>
            <a onClick={link('/academic-calendar')}>Academic Calendar</a>
            <a onClick={link('/downloads')}>Downloads</a>
            <a onClick={link('/contact')}>Contact Us</a>
          </div>
          <div>
            <strong>Newsletter</strong>
            <span style={{ fontSize: '11px', color: 'var(--purple-200)', lineHeight: 1.5 }}>
              Subscribe for news, events, and admissions updates.
            </span>
            <form className="footer-newsletter" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">
                <Send size={14} />
              </button>
            </form>
            {subscribed && (
              <span style={{ fontSize: '10px', color: 'var(--gold-light)', marginTop: '6px' }}>
                Thank you for subscribing!
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 {universityInfo.name}</span>
        <span>Nabweru, Wakiso · Uganda &nbsp; / &nbsp; {universityInfo.tagline}</span>
        <a onClick={link('/privacy')} style={{ cursor: 'pointer' }}>Privacy &amp; terms</a>
        <a href="#/elearning" onClick={(e) => { e.preventDefault(); navigate('/elearning'); }} style={{ cursor: 'pointer' }}>E-Learning</a>
      </div>
    </footer>
  );
}
