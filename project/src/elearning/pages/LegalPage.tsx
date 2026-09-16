import { useState } from 'react';
import { Shield, FileText } from 'lucide-react';
import { UniversityLogo } from '@/elearning/components/UniversityLogo';

interface LegalPageProps {
  navigate: (path: string) => void;
}

export function LegalPage({ navigate }: LegalPageProps) {
  const [tab, setTab] = useState<'privacy' | 'terms'>('privacy');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-purple-800 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <UniversityLogo light />
          </div>
          <h1 className="text-4xl font-bold">Legal Information</h1>
          <p className="mt-4 text-lg text-slate-300">
            Your privacy and our terms of service
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-white rounded-xl p-1.5 border border-slate-200 w-fit">
          <button
            onClick={() => setTab('privacy')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              tab === 'privacy' ? 'bg-purple-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Shield className="w-4 h-4" />
            Privacy Policy
          </button>
          <button
            onClick={() => setTab('terms')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              tab === 'terms' ? 'bg-purple-600 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-4 h-4" />
            Terms of Service
          </button>
        </div>

        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200">
          {tab === 'privacy' ? (
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Privacy Policy</h2>
              <p className="text-sm text-slate-500 mb-6">Last updated: August 2026</p>

              <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
                <section>
                  <h3 className="text-base font-bold text-slate-900 mb-2">1. Introduction</h3>
                  <p>Avance International University ("we", "us", "our") is a private university licensed by the National Council for Higher Education (NCHE), Uganda, located in Nabweru, Kampala. This Privacy Policy explains how we collect, use, and protect your personal information when you use our e-learning platform.</p>
                </section>
                <section>
                  <h3 className="text-base font-bold text-slate-900 mb-2">2. Information We Collect</h3>
                  <p>We collect the following types of information:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Account information: your name, email address, and password (encrypted).</li>
                    <li>Learning data: courses you enroll in, lesson progress, and completion records.</li>
                    <li>Communication data: messages you send through our contact form.</li>
                    <li>Technical data: browser type and device information for security and analytics.</li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-base font-bold text-slate-900 mb-2">3. How We Use Your Information</h3>
                  <p>We use your information to:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Provide and manage your account and course enrollments.</li>
                    <li>Track your learning progress and issue certificates.</li>
                    <li>Respond to your inquiries and provide support.</li>
                    <li>Improve our courses and platform experience.</li>
                    <li>Comply with legal obligations under Ugandan law.</li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-base font-bold text-slate-900 mb-2">4. Data Security</h3>
                  <p>We implement industry-standard security measures to protect your personal data, including encrypted password storage, secure database access controls, and regular security audits. Your data is stored on secure servers and is accessible only to authorized personnel.</p>
                </section>
                <section>
                  <h3 className="text-base font-bold text-slate-900 mb-2">5. Your Rights</h3>
                  <p>You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at info@aviu.ac.ug.</p>
                </section>
                <section>
                  <h3 className="text-base font-bold text-slate-900 mb-2">6. Contact Us</h3>
                  <p>For privacy-related questions, email us at info@aviu.ac.ug or call +256 700 670 691.</p>
                </section>
              </div>
            </div>
          ) : (
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Terms of Service</h2>
              <p className="text-sm text-slate-500 mb-6">Last updated: August 2026</p>

              <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
                <section>
                  <h3 className="text-base font-bold text-slate-900 mb-2">1. Acceptance of Terms</h3>
                  <p>By creating an account or using the Avance International University e-learning platform, you agree to these Terms of Service. If you do not agree, please do not use the platform.</p>
                </section>
                <section>
                  <h3 className="text-base font-bold text-slate-900 mb-2">2. User Accounts</h3>
                  <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must be at least 18 years old or have parental consent to create an account.</p>
                </section>
                <section>
                  <h3 className="text-base font-bold text-slate-900 mb-2">3. Course Enrollment</h3>
                  <p>When you enroll in a paid course, you agree to pay the listed price. Prices are displayed in both USD and UGX. Once enrolled, you have lifetime access to the course materials. Refunds are available within 7 days of enrollment if you have completed less than 25% of the course.</p>
                </section>
                <section>
                  <h3 className="text-base font-bold text-slate-900 mb-2">4. Academic Integrity</h3>
                  <p>You agree to complete all coursework yourself. Sharing account credentials or allowing others to complete lessons on your behalf is prohibited and may result in account termination without refund.</p>
                </section>
                <section>
                  <h3 className="text-base font-bold text-slate-900 mb-2">5. Intellectual Property</h3>
                  <p>All course content — including videos, text, images, and materials — is the intellectual property of Avance International University and its instructors. You may not redistribute, copy, or sell course materials.</p>
                </section>
                <section>
                  <h3 className="text-base font-bold text-slate-900 mb-2">6. Certificates</h3>
                  <p>Certificates of completion are issued upon completing all lessons in a course. Certificates are accredited by the NCHE and are non-transferable.</p>
                </section>
                <section>
                  <h3 className="text-base font-bold text-slate-900 mb-2">7. Limitation of Liability</h3>
                  <p>Avance International University is not liable for any indirect, incidental, or consequential damages arising from the use of our platform. Our total liability shall not exceed the amount you paid for the course in question.</p>
                </section>
                <section>
                  <h3 className="text-base font-bold text-slate-900 mb-2">8. Governing Law</h3>
                  <p>These terms are governed by the laws of the Republic of Uganda. Any disputes shall be resolved in the courts of Uganda.</p>
                </section>
                <section>
                  <h3 className="text-base font-bold text-slate-900 mb-2">9. Contact</h3>
                  <p>For questions about these terms, contact us at info@aviu.ac.ug or +256 700 670 691.</p>
                </section>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <button onClick={() => navigate('/')} className="text-sm font-semibold text-purple-600 hover:text-purple-700">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
