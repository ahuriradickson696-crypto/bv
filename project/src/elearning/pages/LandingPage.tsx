import { useEffect, useState } from 'react';
import {
  ArrowRight, Award, Users, Globe2, BookOpen, TrendingUp,
  CheckCircle2, Quote, MapPin, ShieldCheck, Building2, ChevronDown,
} from 'lucide-react';
import { supabase } from '@/elearning/lib/supabase';
import type { CourseWithDetails, Category } from '@/elearning/lib/types';
import { CourseCard } from '@/elearning/components/CourseCard';
import { UniversityLogo } from '@/elearning/components/UniversityLogo';
import { Reveal } from '@/elearning/components/Reveal';
import { AnimatedCounter } from '@/elearning/components/AnimatedCounter';

interface LandingPageProps {
  navigate: (path: string) => void;
}

const faqPreview = [
  { q: 'How do I apply?', a: 'Click "Apply Now" to create a free account — no application fee required.' },
  { q: 'Do I get a certificate?', a: 'Yes. Complete all lessons and receive an NCHE-accredited certificate of completion.' },
  { q: 'Can I learn at my own pace?', a: 'Absolutely. All courses are self-paced with lifetime access to materials.' },
  { q: 'What does it cost?', a: 'Prices are shown in both USD and UGX. We also offer free courses and flexible payment plans.' },
];

export function LandingPage({ navigate }: LandingPageProps) {
  const [featuredCourses, setFeaturedCourses] = useState<CourseWithDetails[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [stats, setStats] = useState({ courses: 0, students: 0, instructors: 0 });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    (async () => {
      const [{ data: courses }, { data: cats }] = await Promise.all([
        supabase
          .from('courses')
          .select(`*, instructor:profiles!instructor_id(*), category:categories(*), lessons(id, duration_minutes)`)
          .eq('is_published', true)
          .order('created_at', { ascending: false })
          .limit(6),
        supabase.from('categories').select('*').order('name'),
      ]);

      const processed = (courses ?? []).map((c: Record<string, unknown>) => ({
        ...c,
        instructor: c.instructor as CourseWithDetails['instructor'],
        category: c.category as CourseWithDetails['category'],
        lesson_count: (c.lessons as Array<{ id: string }>)?.length ?? 0,
        total_duration: (c.lessons as Array<{ duration_minutes: number }>)?.reduce((s, l) => s + l.duration_minutes, 0) ?? 0,
      })) as CourseWithDetails[];

      setFeaturedCourses(processed);
      setCategories((cats ?? []) as Category[]);

      const [{ count: courseCount }, { count: studentCount }, { count: instructorCount }] = await Promise.all([
        supabase.from('courses').select('*', { count: 'exact', head: true }).eq('is_published', true),
        supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('role', 'student'),
        supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('role', 'instructor'),
      ]);

      setStats({ courses: courseCount ?? 0, students: studentCount ?? 0, instructors: instructorCount ?? 0 });
    })();
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-purple-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-purple-200 text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Kampala, Uganda — Accredited by NCHE
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Enhancing<br />
                <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Innovations</span>
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-lg">
                Avance International University brings world-class, technology-driven education to Uganda and beyond. Explore courses across business, ICT, health sciences, education, and more.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button onClick={() => navigate('/courses')} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-semibold hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all">
                  Explore Courses
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button onClick={() => navigate('/signup')} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600/30 backdrop-blur-sm text-white font-semibold border border-purple-400/30 hover:bg-purple-600/50 transition-all">
                  Apply Now
                </button>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-gradient-to-br from-purple-400 to-purple-300" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((i) => (<span key={i}>★</span>))}
                  </div>
                  <p className="text-sm text-slate-400 mt-1">Trusted by students across Uganda and beyond</p>
                </div>
              </div>
            </div>

            {/* Hero visual */}
            <div className="hidden lg:block relative">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-purple-500/20 rounded-3xl blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                    <BookOpen className="w-8 h-8 text-purple-300 mb-3" />
                    <div className="text-2xl font-bold text-white"><AnimatedCounter value={stats.courses || 12} suffix="+" /></div>
                    <div className="text-sm text-slate-400">Online Courses</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                    <Award className="w-8 h-8 text-purple-300 mb-3" />
                    <div className="text-2xl font-bold text-white">Certified</div>
                    <div className="text-sm text-slate-400">NCHE Accredited</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                    <Users className="w-8 h-8 text-purple-300 mb-3" />
                    <div className="text-2xl font-bold text-white"><AnimatedCounter value={Math.max(stats.students, 5000)} suffix="+" /></div>
                    <div className="text-sm text-slate-400">Active Students</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                    <Globe2 className="w-8 h-8 text-purple-300 mb-3" />
                    <div className="text-2xl font-bold text-white">3M+</div>
                    <div className="text-sm text-slate-400">Video Lessons</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation strip */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-400 font-medium">
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-purple-400" /> NCHE Licensed</span>
            <span className="hidden sm:inline w-px h-4 bg-slate-200" />
            <span className="flex items-center gap-2"><Building2 className="w-5 h-5 text-purple-400" /> Kampala Campus</span>
            <span className="hidden sm:inline w-px h-4 bg-slate-200" />
            <span className="flex items-center gap-2"><Globe2 className="w-5 h-5 text-purple-400" /> International Standards</span>
            <span className="hidden sm:inline w-px h-4 bg-slate-200" />
            <span className="flex items-center gap-2"><Award className="w-5 h-5 text-purple-400" /> Recognized Certificates</span>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, value: stats.courses || 12, suffix: '+', label: 'Courses Available' },
              { icon: Users, value: Math.max(stats.students, 5000), suffix: '+', label: 'Students Enrolled' },
              { icon: Award, value: stats.instructors || 4, suffix: '+', label: 'Expert Faculty' },
              { icon: Globe2, value: 2500, suffix: '+', label: 'Daily Live Classes' },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 100} className="text-center">
                <div className="inline-flex w-12 h-12 rounded-xl bg-purple-50 items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Explore by Faculty</h2>
          <p className="mt-3 text-slate-500">Find the perfect course in your field of interest</p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 50}>
              <button onClick={() => navigate(`/courses?category=${cat.slug}`)} className="group bg-white rounded-2xl p-5 border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all text-center w-full">
                <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 items-center justify-center mb-3 group-hover:from-purple-100 group-hover:to-purple-200 transition-colors">
                  <BookOpen className="w-7 h-7 text-purple-600" />
                </div>
                <div className="text-sm font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">{cat.name}</div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Featured Courses</h2>
              <p className="mt-3 text-slate-500">Hand-picked courses from our top faculty</p>
            </div>
            <button onClick={() => navigate('/courses')} className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:text-purple-700">
              View All
              <ArrowRight className="w-4 h-4" />
            </button>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course, i) => (
              <Reveal key={course.id} delay={i * 100}>
                <CourseCard course={course} navigate={navigate} />
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10 sm:hidden">
            <button onClick={() => navigate('/courses')} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold">
              View All Courses
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Why Choose Avance International University?</h2>
          <p className="mt-3 text-slate-500">We are committed to your success</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Globe2, title: 'Innovation-Driven', desc: 'Our campus integrates technology-enhanced learning with an innovation centre, modern laboratories, and practical teaching methods.' },
            { icon: Award, title: 'NCHE Accredited', desc: 'Licensed by the National Council for Higher Education, Uganda. Earn recognized certificates upon course completion.' },
            { icon: TrendingUp, title: 'Career Growth', desc: 'Industry-relevant curriculum across business, ICT, health sciences, and education — designed to advance your career.' },
          ].map((feature, i) => (
            <Reveal key={i} delay={i * 120} className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 items-center justify-center mb-5 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
            <p className="mt-3 text-slate-500">Start learning in three simple steps</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              { step: '01', title: 'Create an Account', desc: 'Sign up for free and set up your learning profile in seconds.' },
              { step: '02', title: 'Choose Your Course', desc: 'Browse our catalog and enroll in courses that match your goals.' },
              { step: '03', title: 'Start Learning', desc: 'Access lessons, track progress, and earn your certificate.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 120} className="relative bg-white rounded-2xl p-8 border border-slate-200">
                <div className="text-4xl font-bold text-purple-100 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
                {i < 2 && <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-200" />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Student Success Stories</h2>
          <p className="mt-3 text-slate-500">Hear from our students in Uganda and beyond</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Kaaya Wycliffe', role: 'IT Student', text: 'Studying Information Technology has equipped me with practical skills in programming, networking, and system management. The hands-on projects have prepared me to solve real-world tech challenges.' },
            { name: 'Nakibuuka Maria Immy', role: 'Business Student', text: 'Studying Business has opened my mind to endless opportunities. The practical approach to learning, case studies, and real-world projects have prepared me to confidently step into the corporate world.' },
            { name: 'Nagawa Jamimmar', role: 'Nursing Student', text: 'From simulation labs to real clinical experience, every step of my Nursing journey has been impactful. The mentorship and guidance from our tutors inspire me to always give my best.' },
          ].map((t, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm h-full">
                <Quote className="w-8 h-8 text-purple-200 mb-4" />
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-white font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Quick Answers</h2>
            <p className="mt-3 text-slate-500">Frequently asked questions</p>
          </Reveal>
          <div className="space-y-3">
            {faqPreview.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm font-semibold text-slate-900 pr-4">{item.q}</span>
                    <ChevronDown className={`shrink-0 w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-32' : 'max-h-0'}`}>
                    <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => navigate('/faq')} className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700">
              View All FAQs
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <UniversityLogo light />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Start Your Journey?</h2>
          <p className="mt-4 text-purple-100 text-lg">
            Join thousands of students advancing their careers with Avance International University.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button onClick={() => navigate('/signup')} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-purple-600 font-semibold hover:bg-purple-50 shadow-lg transition-all">
              Create Free Account
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => navigate('/courses')} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-purple-700/30 backdrop-blur-sm text-white font-semibold border border-white/30 hover:bg-purple-700/50 transition-all">
              Browse Courses
            </button>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 justify-center text-purple-100 text-sm">
            {['No application fee', 'Access to free courses', 'Flexible payment plans'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
