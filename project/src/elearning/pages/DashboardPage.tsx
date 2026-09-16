import { useEffect, useState } from 'react';
import {
  BookOpen, Award, TrendingUp, ChevronRight, Loader2,
  GraduationCap, PlayCircle, CheckCircle2,
} from 'lucide-react';
import { supabase } from '@/elearning/lib/supabase';
import { useAuth } from '@/elearning/lib/auth';
import type { CourseWithDetails, Enrollment, LessonProgress } from '@/elearning/lib/types';

interface DashboardPageProps {
  navigate: (path: string) => void;
}

interface EnrolledCourse extends CourseWithDetails {
  enrollment: Enrollment;
  progress: LessonProgress[];
  completed_count: number;
  progress_pct: number;
  lesson_ids: string[];
}

export function DashboardPage({ navigate }: DashboardPageProps) {
  const { user, profile, loading: authLoading } = useAuth();
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) { setLoading(false); return; }

    (async () => {
      const { data: enrollments } = await supabase
        .from('enrollments')
        .select('*, course:courses(*, instructor:profiles!instructor_id(*), category:categories(*), lessons(id, duration_minutes))')
        .eq('student_id', user.id)
        .order('enrolled_at', { ascending: false });

      const enriched = await Promise.all(
        (enrollments ?? []).map(async (enroll: Record<string, unknown>) => {
          const course = enroll.course as Record<string, unknown>;
          const courseId = course.id as string;
          const lessons = (course.lessons as Array<{ id: string; duration_minutes: number }>) ?? [];

          const { data: progress } = await supabase
            .from('lesson_progress')
            .select('*')
            .eq('student_id', user.id)
            .eq('course_id', courseId);

          const progressData = (progress ?? []) as LessonProgress[];
          const completedCount = progressData.filter((p) => p.completed).length;
          const pct = lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : 0;

          return {
            ...course,
            instructor: course.instructor as CourseWithDetails['instructor'],
            category: course.category as CourseWithDetails['category'],
            lesson_count: lessons.length,
            total_duration: lessons.reduce((s, l) => s + l.duration_minutes, 0),
            enrollment: enroll as unknown as Enrollment,
            progress: progressData,
            completed_count: completedCount,
            progress_pct: pct,
            lesson_ids: lessons.map((l) => l.id),
          } as EnrolledCourse;
        })
      );

      setEnrolledCourses(enriched);
      setLoading(false);
    })();
  }, [user]);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <GraduationCap className="w-16 h-16 text-purple-300 mb-4" />
        <h2 className="text-2xl font-bold text-slate-900">Sign in to view your dashboard</h2>
        <p className="text-slate-500 mt-2">Track your courses and learning progress here.</p>
        <button onClick={() => navigate('/signin')} className="mt-6 px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold">
          Sign In
        </button>
      </div>
    );
  }

  const totalCourses = enrolledCourses.length;
  const completedCourses = enrolledCourses.filter((c) => c.progress_pct === 100).length;
  const totalLessonsCompleted = enrolledCourses.reduce((s, c) => s + c.completed_count, 0);
  const inProgress = enrolledCourses.filter((c) => c.progress_pct > 0 && c.progress_pct < 100).length;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-white text-2xl font-bold shadow-md">
              {profile?.full_name?.charAt(0) ?? 'U'}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Welcome back, {profile?.full_name?.split(' ')[0] ?? 'Student'}</h1>
              <p className="text-slate-500 mt-1">Continue your learning journey at Avance International University</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: BookOpen, label: 'Enrolled Courses', value: totalCourses, color: 'bg-purple-50 text-purple-600' },
            { icon: PlayCircle, label: 'In Progress', value: inProgress, color: 'bg-amber-50 text-amber-600' },
            { icon: CheckCircle2, label: 'Completed', value: completedCourses, color: 'bg-green-50 text-green-600' },
            { icon: Award, label: 'Lessons Done', value: totalLessonsCompleted, color: 'bg-purple-50 text-purple-600' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-slate-200">
              <div className={`inline-flex w-10 h-10 rounded-xl ${stat.color} items-center justify-center mb-3`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enrolled Courses */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">My Courses</h2>
          <button onClick={() => navigate('/courses')} className="text-sm font-semibold text-purple-600 hover:text-purple-700">
            Browse More Courses
          </button>
        </div>

        {enrolledCourses.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900">No courses yet</h3>
            <p className="text-sm text-slate-500 mt-1">Enroll in your first course to get started</p>
            <button onClick={() => navigate('/courses')} className="mt-6 px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold">
              Explore Courses
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex gap-4 p-4">
                  <div className="shrink-0 w-28 h-28 rounded-xl overflow-hidden bg-slate-100">
                    {course.thumbnail_url ? (
                      <img src={course.thumbnail_url} alt={course.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200">
                        <BookOpen className="w-8 h-8 text-slate-400" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-sm font-bold text-slate-900 line-clamp-2">{course.title}</h3>
                      {course.progress_pct === 100 ? (
                        <span className="shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                          Completed
                        </span>
                      ) : course.progress_pct > 0 ? (
                        <span className="shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                          In Progress
                        </span>
                      ) : (
                        <span className="shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
                          Not Started
                        </span>
                      )}
                    </div>
                    {course.instructor && (
                      <p className="text-xs text-slate-500 mb-2">{course.instructor.full_name}</p>
                    )}
                    <div className="mt-auto">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-500">{course.completed_count}/{course.lesson_count} lessons</span>
                        <span className="font-semibold text-purple-600">{course.progress_pct}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-500"
                          style={{ width: `${course.progress_pct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <button
                    onClick={() => navigate(`/course/${course.slug}/lesson/${course.lesson_ids[0] ?? ''}`)}
                    className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-purple-600 hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    {course.progress_pct === 100 ? 'Review Course' : course.progress_pct > 0 ? 'Continue Learning' : 'Start Course'}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Recommended */}
        {enrolledCourses.length > 0 && (
          <div className="mt-10">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4">
                <TrendingUp className="w-10 h-10" />
                <div>
                  <h3 className="text-lg font-bold">Keep Learning</h3>
                  <p className="text-sm text-purple-100">Discover new courses to expand your skills</p>
                </div>
              </div>
              <button
                onClick={() => navigate('/courses')}
                className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-purple-600 font-semibold text-sm hover:bg-purple-50 transition-colors"
              >
                Browse Course Catalog
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
