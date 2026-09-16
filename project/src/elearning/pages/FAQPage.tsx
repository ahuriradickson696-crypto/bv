import { useState } from 'react';
import { ChevronDown, HelpCircle, Mail } from 'lucide-react';
import { UniversityLogo } from '@/elearning/components/UniversityLogo';
import { Reveal } from '@/elearning/components/Reveal';

interface FAQPageProps {
  navigate: (path: string) => void;
}

interface FAQItem {
  question: string;
  answer: string;
}

const faqCategories: { title: string; items: FAQItem[] }[] = [
  {
    title: 'Admissions & Enrollment',
    items: [
      { question: 'How do I apply to Avance International University?', answer: 'Click "Apply Now" anywhere on the site to create a free account. Once registered, you can browse our course catalog and enroll in any course that interests you. There is no application fee.' },
      { question: 'Do I need prior qualifications to enroll in courses?', answer: 'Our courses range from beginner to advanced levels. Beginner courses have no prerequisites. Intermediate and advanced courses may recommend prior knowledge, which is noted on each course detail page.' },
      { question: 'Is there an application fee?', answer: 'No. Creating an account and browsing courses is completely free. You only pay when you choose to enroll in a paid course. We also offer free courses.' },
    ],
  },
  {
    title: 'Courses & Learning',
    items: [
      { question: 'How long do I have access to a course?', answer: 'Once enrolled, you have lifetime access to all course materials. You can learn at your own pace and revisit lessons any time.' },
      { question: 'Can I learn at my own pace?', answer: 'Absolutely. All courses are self-paced. There are no deadlines — you progress through lessons as quickly or as slowly as you like.' },
      { question: 'Do I get a certificate after completing a course?', answer: 'Yes. Upon completing all lessons in a course, you will receive a certificate of completion from Avance International University, accredited by the NCHE.' },
      { question: 'Can I access courses on my phone?', answer: 'Yes. Our learning platform is fully responsive and works on any device — desktop, tablet, or smartphone.' },
    ],
  },
  {
    title: 'Payments',
    items: [
      { question: 'What payment methods do you accept?', answer: 'We accept payments in both US Dollars (USD) and Ugandan Shillings (UGX). Course prices are displayed in both currencies for your convenience.' },
      { question: 'Are there any free courses?', answer: 'Yes. We offer a selection of free courses. You can find them by browsing the catalog — free courses are marked accordingly.' },
      { question: 'Do you offer payment plans?', answer: 'Yes, we offer flexible payment plans for longer programs. Contact our admissions office for details on installment options.' },
    ],
  },
  {
    title: 'Account & Technical',
    items: [
      { question: 'I forgot my password. How do I reset it?', answer: 'On the sign-in page, click "Forgot password?" and enter your email address. You will receive a link to reset your password.' },
      { question: 'How do I track my progress?', answer: 'Your dashboard shows all enrolled courses with progress bars indicating how many lessons you have completed. Each course detail page also shows your current progress.' },
      { question: 'Can I change my account email?', answer: 'Yes. Contact our support team at info@aviu.ac.ug and they will help you update your account email.' },
    ],
  },
];

export function FAQPage({ navigate }: FAQPageProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const allItems = faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.title }))
  );

  const getItemId = (catTitle: string, q: string) => `${catTitle}-${q}`;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-purple-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <UniversityLogo light />
          </div>
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-slate-300">
            Everything you need to know about studying at Avance International University
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {faqCategories.map((category, catIdx) => (
          <Reveal key={category.title} delay={catIdx * 100} className="mb-10">
            <h2 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-purple-600" />
              {category.title}
            </h2>
            <div className="space-y-3">
              {category.items.map((item) => {
                const id = getItemId(category.title, item.question);
                const isOpen = openId === id;
                return (
                  <div key={id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <button
                      onClick={() => setOpenId(isOpen ? null : id)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-sm font-semibold text-slate-900 pr-4">{item.question}</span>
                      <ChevronDown
                        className={`shrink-0 w-5 h-5 text-slate-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        ))}

        {/* Still have questions */}
        <Reveal delay={200}>
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-center text-white">
            <Mail className="w-10 h-10 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Still Have Questions?</h3>
            <p className="text-sm text-purple-100 mt-2 mb-6">
              Our team is ready to help with any other questions you may have.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-purple-600 font-semibold hover:bg-purple-50 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
