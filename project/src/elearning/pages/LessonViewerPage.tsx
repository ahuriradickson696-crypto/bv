import { useEffect, useState } from 'react';
import {
  ArrowLeft, ArrowRight, CheckCircle2, Circle, Clock, BookOpen,
  ChevronLeft, ChevronRight, Loader2, Menu, X, Award,
} from 'lucide-react';
import { supabase } from '@/elearning/lib/supabase';
import { useAuth } from '@/elearning/lib/auth';
import type { CourseWithDetails, Lesson } from '@/elearning/lib/types';

interface LessonViewerPageProps {
  navigate: (path: string) => void;
  courseSlug: string;
  lessonId: string;
}

export function LessonViewerPage({ navigate, courseSlug, lessonId }: LessonViewerPageProps) {
  const { user } = useAuth();
  const [course, setCourse] = useState<CourseWithDetails | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    (async () => {
      if (!user) { setLoading(false); return; }

      const { data: courseData } = await supabase
        .from('courses')
        .select(`*, category:categories(*)`)
        .eq('slug', courseSlug)
        .maybeSingle();

      if (!courseData) { setLoading(false); return; }
      setCourse(courseData as CourseWithDetails);

      const { data: enroll } = await supabase
        .from('enrollments')
        .select('id')
        .eq('student_id', user.id)
        .eq('course_id', courseData.id)
        .maybeSingle();

      if (!enroll) { setLoading(false); return; }

      const { data: lessonsData } = await supabase
        .from('lessons')
        .select('*')
        .eq('course_id', courseData.id)
        .order('lesson_order', { ascending: true });
      setLessons((lessonsData ?? []) as Lesson[]);

      const { data: progress } = await supabase
        .from('lesson_progress')
        .select('lesson_id, completed')
        .eq('student_id', user.id)
        .eq('course_id', courseData.id);
      setCompletedLessons(new Set(
        (progress ?? []).filter((p: { completed: boolean }) => p.completed).map((p: { lesson_id: string }) => p.lesson_id)
      ));

      setLoading(false);
    })();
  }, [courseSlug, user]);

  useEffect(() => {
    if (lessons.length > 0) {
      const lesson = lessons.find((l) => l.id === lessonId) ?? null;
      setCurrentLesson(lesson);

      if (lesson && user && course) {
        supabase
          .from('lesson_progress')
          .upsert({
            student_id: user.id,
            lesson_id: lesson.id,
            course_id: course.id,
            last_viewed_at: new Date().toISOString(),
          }, { onConflict: 'student_id,lesson_id' })
          .then(() => {});
      }
    }
  }, [lessonId, lessons, user, course]);

  async function toggleComplete() {
    if (!currentLesson || !user || !course) return;
    const isCompleted = completedLessons.has(currentLesson.id);
    const newCompleted = new Set(completedLessons);

    if (isCompleted) {
      newCompleted.delete(currentLesson.id);
    } else {
      newCompleted.add(currentLesson.id);
    }
    setCompletedLessons(newCompleted);

    await supabase
      .from('lesson_progress')
      .upsert({
        student_id: user.id,
        lesson_id: currentLesson.id,
        course_id: course.id,
        completed: !isCompleted,
        completed_at: !isCompleted ? new Date().toISOString() : null,
        last_viewed_at: new Date().toISOString(),
      }, { onConflict: 'student_id,lesson_id' });

    // Auto-generate certificate when all lessons are completed
    if (!isCompleted && newCompleted.size === lessons.length && lessons.length > 0) {
      const certNumber = `AIU-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
      await supabase
        .from('certificates')
        .upsert({
          student_id: user.id,
          course_id: course.id,
          certificate_number: certNumber,
        }, { onConflict: 'student_id,course_id' });
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
      </div>
    );
  }

  if (!course || !currentLesson) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <h2 className="text-2xl font-bold text-slate-900">Lesson not available</h2>
        <p className="text-slate-500 mt-2">You may need to enroll in this course first.</p>
        <button onClick={() => navigate(`/course/${courseSlug}`)} className="mt-6 px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold">
          Back to Course
        </button>
      </div>
    );
  }

  const currentIdx = lessons.findIndex((l) => l.id === currentLesson.id);
  const prevLesson = currentIdx > 0 ? lessons[currentIdx - 1] : null;
  const nextLesson = currentIdx < lessons.length - 1 ? lessons[currentIdx + 1] : null;
  const progressPct = Math.round((completedLessons.size / lessons.length) * 100);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className={`lg:w-80 lg:shrink-0 bg-white border-r border-slate-200 flex flex-col ${
        sidebarOpen ? 'fixed inset-0 z-50 lg:relative' : 'hidden lg:flex'
      }`}>
        <div className="p-4 border-b border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => navigate(`/course/${courseSlug}`)}
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Course Details
            </button>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-1 text-slate-500">
              <X className="w-5 h-5" />
            </button>
          </div>
          <h2 className="text-sm font-bold text-slate-900 line-clamp-2">{course.title}</h2>
          <div className="mt-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-500">{completedLessons.size}/{lessons.length} completed</span>
              <span className="font-semibold text-purple-600">{progressPct}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-500" style={{ width: `${progressPct}%` }} />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {lessons.map((lesson, idx) => {
            const isCompleted = completedLessons.has(lesson.id);
            const isCurrent = lesson.id === currentLesson.id;
            return (
              <button
                key={lesson.id}
                onClick={() => {
                  navigate(`/course/${courseSlug}/lesson/${lesson.id}`);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-start gap-3 p-3 rounded-lg text-left transition-colors ${
                  isCurrent ? 'bg-purple-50 border border-purple-200' : 'hover:bg-slate-100'
                }`}
              >
                <div className="shrink-0 mt-0.5">
                  {isCompleted ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : isCurrent ? (
                    <Circle className="w-5 h-5 text-purple-500 fill-purple-100" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-300" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-xs font-medium ${isCurrent ? 'text-purple-600' : 'text-slate-400'}`}>Lesson {idx + 1}</div>
                  <div className={`text-sm font-medium line-clamp-2 ${isCurrent ? 'text-purple-900' : 'text-slate-700'}`}>
                    {lesson.title}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                    <Clock className="w-3 h-3" />
                    {lesson.duration_minutes}m
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <div className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-slate-600">
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1 min-w-0">
            <div className="text-xs text-slate-400">Lesson {currentIdx + 1} of {lessons.length}</div>
            <h1 className="text-base font-bold text-slate-900 truncate">{currentLesson.title}</h1>
          </div>
          <button
            onClick={toggleComplete}
            className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
              completedLessons.has(currentLesson.id)
                ? 'bg-green-50 text-green-700 hover:bg-green-100'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            {completedLessons.has(currentLesson.id) ? (
              <><CheckCircle2 className="w-4 h-4" /> Completed</>
            ) : (
              'Mark Complete'
            )}
          </button>
        </div>

        {/* Lesson content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
            {currentLesson.video_url && (
              <div className="mb-6 aspect-video rounded-2xl overflow-hidden bg-slate-900">
                <video src={currentLesson.video_url} controls className="w-full h-full" />
              </div>
            )}

            <p className="text-lg text-slate-600 leading-relaxed mb-8">{currentLesson.description}</p>

            <div className="prose prose-slate max-w-none">
              {currentLesson.content?.split('\n\n').map((para, i) => (
                <p key={i} className="text-slate-700 leading-relaxed mb-4 whitespace-pre-wrap">{para}</p>
              ))}
            </div>

            {/* Lesson meta */}
            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500 pb-6 border-b border-slate-200">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {currentLesson.duration_minutes} minutes
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                Lesson {currentIdx + 1}
              </span>
            </div>

            {/* Navigation */}
            <div className="mt-6 flex items-center justify-between gap-4">
              <button
                onClick={() => prevLesson && navigate(`/course/${courseSlug}/lesson/${prevLesson.id}`)}
                disabled={!prevLesson}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <button
                onClick={() => nextLesson && navigate(`/course/${courseSlug}/lesson/${nextLesson.id}`)}
                disabled={!nextLesson}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next Lesson
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Course complete message */}
            {progressPct === 100 && (
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 text-center">
                <Award className="w-12 h-12 text-amber-500 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-900">Congratulations!</h3>
                <p className="text-sm text-slate-600 mt-1">You have completed all lessons in this course. Your certificate has been generated automatically.</p>
                <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-purple-600 text-white font-semibold text-sm hover:bg-purple-700"
                  >
                    Back to Dashboard
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigate('/profile')}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-amber-300 text-amber-700 font-semibold text-sm hover:bg-amber-50"
                  >
                    <Award className="w-4 h-4" />
                    View Certificate
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
