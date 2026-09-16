import { useEffect, useState } from 'react';
import { Heart, Loader2, BookOpen } from 'lucide-react';
import { supabase } from '@/elearning/lib/supabase';
import { useAuth } from '@/elearning/lib/auth';
import type { CourseWithDetails } from '@/elearning/lib/types';
import { CourseCard } from '@/elearning/components/CourseCard';

interface WishlistPageProps {
  navigate: (path: string) => void;
}

export function WishlistPage({ navigate }: WishlistPageProps) {
  const { user, loading: authLoading } = useAuth();
  const [courses, setCourses] = useState<CourseWithDetails[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) { setLoading(false); return; }

    (async () => {
      const { data: wishes } = await supabase
        .from('wishlists')
        .select('course:courses(*, instructor:profiles!instructor_id(*), category:categories(*), lessons(id, duration_minutes))')
        .eq('student_id', user.id)
        .order('created_at', { ascending: false });

      const processed = (wishes ?? []).map((w: Record<string, unknown>) => {
        const c = w.course as Record<string, unknown>;
        return {
          ...c,
          instructor: c.instructor as CourseWithDetails['instructor'],
          category: c.category as CourseWithDetails['category'],
          lesson_count: (c.lessons as Array<{ id: string }>)?.length ?? 0,
          total_duration: (c.lessons as Array<{ duration_minutes: number }>)?.reduce((s, l) => s + l.duration_minutes, 0) ?? 0,
        } as CourseWithDetails;
      });
      setCourses(processed);
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
        <Heart className="w-16 h-16 text-purple-300 mb-4" />
        <h2 className="text-2xl font-bold text-slate-900">Sign in to view your wishlist</h2>
        <p className="text-slate-500 mt-2">Save courses you're interested in for later.</p>
        <button onClick={() => navigate('/signin')} className="mt-6 px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold">
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
            <Heart className="w-8 h-8 text-red-500" />
            My Wishlist
          </h1>
          <p className="mt-2 text-slate-500">{courses.length} saved course{courses.length !== 1 ? 's' : ''}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {courses.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900">Your wishlist is empty</h3>
            <p className="text-sm text-slate-500 mt-1">Browse courses and tap the heart icon to save them.</p>
            <button onClick={() => navigate('/courses')} className="mt-6 px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold">
              Explore Courses
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} navigate={navigate} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
