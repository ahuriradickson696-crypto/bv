import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Send, CheckCircle2 } from 'lucide-react';
import { UniversityLogo } from '@/elearning/components/UniversityLogo';

interface FooterProps {
  navigate: (path: string) => void;
}

export function Footer({ navigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  }

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Newsletter strip */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white">Stay Updated</h3>
              <p className="text-sm text-slate-400 mt-1">Subscribe to our newsletter for course updates and university news.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-600 text-white font-semibold text-sm hover:bg-purple-700 transition-colors whitespace-nowrap"
              >
                {subscribed ? <><CheckCircle2 className="w-4 h-4" /> Subscribed</> : <>Subscribe <Send className="w-4 h-4" /></>}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <UniversityLogo light />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              A private university in Kampala, Uganda, accredited by the National Council for Higher Education. Enhancing innovations through technology-driven learning.
            </p>
            <div className="flex gap-3 mt-4">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-purple-600 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigate('/')} className="hover:text-purple-400 transition-colors">Home</button></li>
              <li><button onClick={() => navigate('/courses')} className="hover:text-purple-400 transition-colors">All Courses</button></li>
              <li><button onClick={() => navigate('/categories')} className="hover:text-purple-400 transition-colors">Faculties</button></li>
              <li><button onClick={() => navigate('/about')} className="hover:text-purple-400 transition-colors">About Us</button></li>
              <li><button onClick={() => navigate('/dashboard')} className="hover:text-purple-400 transition-colors">My Dashboard</button></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigate('/contact')} className="hover:text-purple-400 transition-colors">Contact Us</button></li>
              <li><button onClick={() => navigate('/faq')} className="hover:text-purple-400 transition-colors">FAQ</button></li>
              <li><button onClick={() => navigate('/legal/privacy')} className="hover:text-purple-400 transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => navigate('/legal/terms')} className="hover:text-purple-400 transition-colors">Terms of Service</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-purple-400 shrink-0" />
                <span>Nabweru, Kampala, Uganda</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span>info@aviu.ac.ug</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <span>+256 700 670 691</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © 2026 Avance International University. Licensed by NCHE, Uganda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
