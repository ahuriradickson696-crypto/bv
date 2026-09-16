import { useEffect, useState } from 'react';
import { Award, Download, Loader2, ArrowLeft, GraduationCap } from 'lucide-react';
import { supabase } from '@/elearning/lib/supabase';
import { useAuth } from '@/elearning/lib/auth';
import type { Certificate, CourseWithDetails, Profile } from '@/elearning/lib/types';

interface CertificatePageProps {
  navigate: (path: string) => void;
  certificateId: string;
}

export function CertificatePage({ navigate, certificateId }: CertificatePageProps) {
  const { user, profile, loading: authLoading } = useAuth();
  const [cert, setCert] = useState<Certificate | null>(null);
  const [course, setCourse] = useState<CourseWithDetails | null>(null);
  const [instructor, setInstructor] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (!user) { setLoading(false); return; }

      const { data } = await supabase
        .from('certificates')
        .select('*, course:courses(*, instructor:profiles!instructor_id(*), category:categories(*), lessons(id, duration_minutes))')
        .eq('id', certificateId)
        .maybeSingle();

      if (data) {
        setCert(data as unknown as Certificate);
        const c = data.course as Record<string, unknown>;
        const processed = {
          ...c,
          instructor: c.instructor as CourseWithDetails['instructor'],
          category: c.category as CourseWithDetails['category'],
          lesson_count: (c.lessons as Array<{ id: string }>)?.length ?? 0,
          total_duration: (c.lessons as Array<{ duration_minutes: number }>)?.reduce((s, l) => s + l.duration_minutes, 0) ?? 0,
        } as CourseWithDetails;
        setCourse(processed);
        setInstructor(c.instructor as Profile | null);
      }
      setLoading(false);
    })();
  }, [certificateId, user]);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
      </div>
    );
  }

  if (!cert || !course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <Award className="w-16 h-16 text-slate-300 mb-4" />
        <h2 className="text-2xl font-bold text-slate-900">Certificate not found</h2>
        <p className="text-slate-500 mt-2">This certificate may not exist or you may not have access.</p>
        <button onClick={() => navigate('/dashboard')} className="mt-6 px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold">
          Back to Dashboard
        </button>
      </div>
    );
  }

  const issuedDate = new Date(cert.issued_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  function handlePrint() {
    window.print();
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Top bar (not printed) */}
      <div className="bg-white border-b border-slate-200 print:hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/dashboard')}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 text-white font-semibold text-sm hover:bg-purple-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download / Print
          </button>
        </div>
      </div>

      {/* Certificate */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Decorative top bar */}
          <div className="h-2 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700" />

          {/* Certificate body */}
          <div className="p-8 sm:p-12 lg:p-16 text-center relative">
            {/* Corner decorations */}
            <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-purple-200 rounded-tl-xl print:border-purple-300" />
            <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-purple-200 rounded-tr-xl print:border-purple-300" />
            <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-purple-200 rounded-bl-xl print:border-purple-300" />
            <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-purple-200 rounded-br-xl print:border-purple-300" />

            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-8 h-8" />
              </div>
            </div>

            <p className="text-sm font-semibold tracking-widest text-purple-600 uppercase">Certificate of Completion</p>

            <div className="mt-8 mb-2 text-slate-400 text-sm">This certifies that</div>

            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              {profile?.full_name ?? 'Student'}
            </h1>

            <div className="w-32 h-0.5 bg-purple-300 mx-auto my-6" />

            <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              has successfully completed all lessons and requirements for the course
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 mt-4 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              {course.title}
            </h2>

            {course.category && (
              <p className="text-sm text-slate-500">{course.category.name}</p>
            )}

            {/* Meta row */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Issued On</div>
                <div className="text-sm font-semibold text-slate-700 mt-1">{issuedDate}</div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-slate-200" />
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Certificate ID</div>
                <div className="text-sm font-semibold text-slate-700 mt-1 font-mono">{cert.certificate_number}</div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-slate-200" />
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Lessons Completed</div>
                <div className="text-sm font-semibold text-slate-700 mt-1">{course.lesson_count} of {course.lesson_count}</div>
              </div>
            </div>

            {/* Signatures */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20">
              <div className="text-center">
                <div className="w-40 border-b border-slate-300 pb-1 mb-1" style={{ fontFamily: 'Brush Script MT, cursive', fontSize: '1.5rem' }}>
                  {instructor?.full_name ?? 'Faculty'}
                </div>
                <div className="text-xs text-slate-500">{instructor?.full_name ?? 'Instructor'}</div>
                <div className="text-xs text-slate-400">Instructor</div>
              </div>
              <div className="text-center">
                <div className="w-40 border-b border-slate-300 pb-1 mb-1" style={{ fontFamily: 'Brush Script MT, cursive', fontSize: '1.5rem' }}>
                  Avance University
                </div>
                <div className="text-xs text-slate-500">Avance International University</div>
                <div className="text-xs text-slate-400">Academic Office</div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-6 border-t border-slate-100">
              <p className="text-xs text-slate-400">
                This certificate can be verified at Avance International University · Certificate ID: {cert.certificate_number}
              </p>
            </div>
          </div>
        </div>

        {/* Print-only notice */}
        <p className="text-center text-sm text-slate-500 mt-6 print:hidden">
          Click "Download / Print" above and choose "Save as PDF" to keep a copy.
        </p>
      </div>
    </div>
  );
}
