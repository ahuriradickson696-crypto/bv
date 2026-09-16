import { Globe2, Award, Users, Target, Eye, Heart, ArrowRight, BookOpen, MapPin, ShieldCheck, Lightbulb } from 'lucide-react';
import { UniversityLogo } from '@/elearning/components/UniversityLogo';

interface AboutPageProps {
  navigate: (path: string) => void;
}

export function AboutPage({ navigate }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-purple-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <UniversityLogo light />
          </div>
          <h1 className="text-4xl font-bold">About Avance International University</h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            A private university in Kampala, Uganda, licensed by the National Council for Higher Education.
            We are dedicated to enhancing innovations through technology-driven, accessible education that
            meets international standards.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-purple-200 text-sm">
            <MapPin className="w-4 h-4" />
            Nabweru, Kampala, Uganda
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <div className="inline-flex w-12 h-12 rounded-xl bg-purple-50 items-center justify-center mb-4">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To deliver innovative, technology-enhanced education that bridges the gap between theory
              and practice. We equip students with practical skills, critical thinking, and a global
              perspective to address the challenges of today and tomorrow — guided by Uganda's vision
              for a knowledge-based economy.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <div className="inline-flex w-12 h-12 rounded-xl bg-purple-50 items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To be a leading center of innovation and academic excellence in East Africa, recognized
              internationally for producing graduates who transform communities through knowledge,
              entrepreneurship, and ethical leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
            <p className="mt-3 text-slate-500">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: 'Innovation', desc: 'We foster a culture of creativity and innovation, with a fully equipped innovation centre and technology-enhanced learning.' },
              { icon: ShieldCheck, title: 'Academic Excellence', desc: 'Rigorous curriculum accredited by the NCHE, designed and taught by experienced professionals and academics.' },
              { icon: Heart, title: 'Student-Centered', desc: 'Every decision we make starts with the question: does this help our students succeed? Your growth is our priority.' },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 items-center justify-center mb-5 shadow-md">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculties */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Our Faculties & Programs</h2>
          <p className="mt-3 text-slate-500">Diverse academic programs designed for the modern world</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Faculty of Education', desc: 'Undergraduate and postgraduate programs including PGDEPM and PGDE for educational planning, management, and teaching excellence.' },
            { title: 'Faculty of Business Administration & ICT', desc: 'Programs in business management, accounting, marketing, and information communication technology for the modern enterprise.' },
            { title: 'Faculty of Alternative Medicine & Health Sciences', desc: 'Innovative programs in alternative medicine, public health, and health sciences with practical clinical training.' },
            { title: 'Bachelor of Science in Nursing', desc: 'Comprehensive nursing program with simulation labs, real clinical experience, and mentorship from experienced tutors.' },
          ].map((faculty, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-purple-200 hover:shadow-lg transition-all">
              <div className="inline-flex w-12 h-12 rounded-xl bg-purple-50 items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{faculty.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{faculty.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: BookOpen, value: '12+', label: 'Online Courses' },
            { icon: Users, value: '5,000+', label: 'Students' },
            { icon: Globe2, value: '3M+', label: 'Video Lessons' },
            { icon: Award, value: 'NCHE', label: 'Accredited' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="inline-flex w-12 h-12 rounded-xl bg-purple-50 items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Join Our Community of Innovators</h2>
          <p className="mt-4 text-purple-100 text-lg">
            Become part of Avance International University — where innovation meets opportunity.
          </p>
          <button
            onClick={() => navigate('/signup')}
            className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-purple-600 font-semibold hover:bg-purple-50 shadow-lg transition-all"
          >
            Apply Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
