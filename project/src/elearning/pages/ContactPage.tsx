import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, AlertCircle, CheckCircle2, MessageSquare } from 'lucide-react';
import { UniversityLogo } from '@/elearning/components/UniversityLogo';
import { Reveal } from '@/elearning/components/Reveal';

interface ContactPageProps {
  navigate: (path: string) => void;
}

export function ContactPage({ navigate }: ContactPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-purple-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <UniversityLogo light />
          </div>
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="mt-4 text-lg text-slate-300">
            Have questions about admissions, courses, or anything else? We're here to help.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Contact form */}
          <Reveal>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Send Us a Message</h2>
              </div>

              {status === 'sent' && (
                <div className="mb-6 flex items-start gap-2 p-4 rounded-xl bg-green-50 border border-green-200 text-sm text-green-700">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="mt-0.5">We'll get back to you within 24–48 hours.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 flex items-start gap-2 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Admissions inquiry"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Message *</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 disabled:opacity-60 shadow-md hover:shadow-lg transition-all"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  {status !== 'sending' && <Send className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </Reveal>

          {/* Contact info */}
          <Reveal delay={150}>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 mb-5">Contact Information</h3>
                <div className="space-y-5">
                  {[
                    { icon: MapPin, label: 'Address', value: 'Nabweru, Kampala, Uganda' },
                    { icon: Mail, label: 'Email', value: 'info@aviu.ac.ug' },
                    { icon: Phone, label: 'Phone', value: '+256 700 670 691' },
                    { icon: Clock, label: 'Office Hours', value: 'Mon–Fri: 8:00 AM – 5:00 PM' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-medium">{item.label}</div>
                        <div className="text-sm font-semibold text-slate-900 mt-0.5">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Admissions Office</h3>
                <p className="text-sm text-purple-100 mb-4">
                  Looking to apply? Our admissions team is ready to guide you through the process.
                </p>
                <button
                  onClick={() => navigate('/signup')}
                  className="w-full py-2.5 rounded-xl bg-white text-purple-600 font-semibold text-sm hover:bg-purple-50 transition-colors"
                >
                  Start Your Application
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
