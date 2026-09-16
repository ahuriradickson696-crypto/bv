import { useEffect, useState } from 'react';
import {
  ArrowLeft, Clock, BookOpen, CheckCircle2, Circle, PlayCircle,
  Lock, User, Award, ChevronRight, Loader2, Home, FolderOpen,
  Heart, Star, Users, Send, Trash2,
} from 'lucide-react';
import { supabase } from '@/elearning/lib/supabase';
import { useAuth } from '@/elearning/lib/auth';
import type { CourseWithDetails, Lesson, Enrollment, CourseReview, Profile } from '@/elearning/lib/types';
import { formatPrice } from '@/elearning/lib/format';
import { CourseCard } from '@/elearning/components/CourseCard';
import { StarRating } from '@/elearning/components/StarRating';

interface CourseDetailPageProps {
  navigate: (path: string) => void;
  slug: string;
}

const levelStyles: Record<string, string> = {
  beginner: 'bg-green-100 text-green-700',
  intermediate: 'bg-amber-100 text-amber-700',
  advanced: 'bg-red-100 text-red-700',
};

export function CourseDetailPage({ navigate, slug }: CourseDetailPageProps) {
  const { user } = useAuth();
  const [course, setCourse] = useState<CourseWithDetails | null>(null);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [enrollment, setEnrollment] = useState<Enrollment | null>(null);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [relatedCourses, setRelatedCourses] = useState<CourseWithDetails[]>([]);

  // Reviews
  const [reviews, setReviews] = useState<CourseReview[]>([]);
  const [avgRating, setAvgRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [userReview, setUserReview] = useState<CourseReview | null>(null);
  const [newRating, setNewRating] = useState(0);
  const [newReviewText, setNewReviewText] = useState('');
  const [submittingReview, setSubmittingReview] = useState(false);

  // Wishlist
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Enrollment count
  const [enrollmentCount, setEnrollmentCount] = useState(0);

  useEffect(() => {
    (async () => {
      const { data: courseData } = await supabase
        .from('courses')
        .select(`
          *,
          instructor:profiles!instructor_id(*),
          category:categories(*),
          lessons(id, duration_minutes)
        `)
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();

      if (!courseData) {
        setLoading(false);
        return;
      }

      const processed = {
        ...courseData,
        instructor: courseData.instructor as CourseWithDetails['instructor'],
        category: courseData.category as CourseWithDetails['category'],
        lesson_count: (courseData.lessons as Array<{ id: string }>)?.length ?? 0,
        total_duration: (courseData.lessons as Array<{ duration_minutes: number }>)?.reduce((s, l) => s + l.duration_minutes, 0) ?? 0,
      } as CourseWithDetails;
      setCourse(processed);

      const { data: lessonsData } = await supabase
        .from('lessons')
        .select('*')
        .eq('course_id', courseData.id)
        .order('lesson_order', { ascending: true });

      setLessons((lessonsData ?? []) as Lesson[]);

      // Enrollment count
      const { count } = await supabase
        .from('enrollments')
        .select('*', { count: 'exact', head: true })
        .eq('course_id', courseData.id);
      setEnrollmentCount(count ?? 0);

      // Reviews
      const { data: reviewsData } = await supabase
        .from('course_reviews')
        .select('*, student:profiles!student_id(*)')
        .eq('course_id', courseData.id)
        .order('created_at', { ascending: false });

      const reviewsList = (reviewsData ?? []).map((r: Record<string, unknown>) => ({
        ...r,
        student: r.student as Profile | null,
      })) as CourseReview[];
      setReviews(reviewsList);

      if (reviewsList.length > 0) {
        const avg = reviewsList.reduce((s, r) => s + r.rating, 0) / reviewsList.length;
        setAvgRating(Math.round(avg * 10) / 10);
        setReviewCount(reviewsList.length);
      }

      if (user) {
        const { data: enroll } = await supabase
          .from('enrollments')
          .select('*')
          .eq('student_id', user.id)
          .eq('course_id', courseData.id)
          .maybeSingle();
        setEnrollment(enroll as Enrollment | null);

        if (enroll) {
          const { data: progress } = await supabase
            .from('lesson_progress')
            .select('lesson_id, completed')
            .eq('student_id', user.id)
            .eq('course_id', courseData.id)
            .eq('completed', true);
          setCompletedLessons(new Set((progress ?? []).map((p: { lesson_id: string }) => p.lesson_id)));

          // Check for existing review
          const { data: existingReview } = await supabase
            .from('course_reviews')
            .select('*')
            .eq('student_id', user.id)
            .eq('course_id', courseData.id)
            .maybeSingle();
          if (existingReview) {
            setUserReview(existingReview as CourseReview);
            setNewRating((existingReview as CourseReview).rating);
            setNewReviewText((existingReview as CourseReview).review_text ?? '');
          }
        }

        // Check wishlist
        const { data: wish } = await supabase
          .from('wishlists')
          .select('id')
          .eq('student_id', user.id)
          .eq('course_id', courseData.id)
          .maybeSingle();
        setIsWishlisted(!!wish);
      }

      if (courseData.category_id) {
        const { data: related } = await supabase
          .from('courses')
          .select(`*, instructor:profiles!instructor_id(*), category:categories(*), lessons(id, duration_minutes)`)
          .eq('is_published', true)
          .eq('category_id', courseData.category_id)
          .neq('id', courseData.id)
          .limit(3);
        const processedRelated = (related ?? []).map((c: Record<string, unknown>) => ({
          ...c,
          instructor: c.instructor as CourseWithDetails['instructor'],
          category: c.category as CourseWithDetails['category'],
          lesson_count: (c.lessons as Array<{ id: string }>)?.length ?? 0,
          total_duration: (c.lessons as Array<{ duration_minutes: number }>)?.reduce((s, l) => s + l.duration_minutes, 0) ?? 0,
        })) as CourseWithDetails[];
        setRelatedCourses(processedRelated);
      }

      setLoading(false);
    })();
  }, [slug, user]);

  async function handleEnroll() {
    if (!user || !course) return;
    setEnrolling(true);
    const { data } = await supabase
      .from('enrollments')
      .insert({ student_id: user.id, course_id: course.id })
      .select()
      .maybeSingle();
    if (data) {
      setEnrollment(data as Enrollment);
      setEnrollmentCount((c) => c + 1);
      navigate(`/course/${course.slug}/lesson/${lessons[0]?.id ?? ''}`);
    }
    setEnrolling(false);
  }

  async function toggleWishlist() {
    if (!user || !course) return;
    if (isWishlisted) {
      await supabase
        .from('wishlists')
        .delete()
        .eq('student_id', user.id)
        .eq('course_id', course.id);
      setIsWishlisted(false);
    } else {
      await supabase
        .from('wishlists')
        .insert({ student_id: user.id, course_id: course.id });
      setIsWishlisted(true);
    }
  }

  async function submitReview() {
    if (!user || !course || newRating === 0) return;
    setSubmittingReview(true);

    if (userReview) {
      const { data } = await supabase
        .from('course_reviews')
        .update({ rating: newRating, review_text: newReviewText.trim() || null })
        .eq('id', userReview.id)
        .select('*, student:profiles!student_id(*)')
        .maybeSingle();

      if (data) {
        const updated = { ...data, student: (data as Record<string, unknown>).student as Profile | null } as CourseReview;
        setUserReview(updated);
        setReviews((prev) => prev.map((r) => (r.id === updated.id ? updated : r)));
      }
    } else {
      const { data } = await supabase
        .from('course_reviews')
        .insert({
          student_id: user.id,
          course_id: course.id,
          rating: newRating,
          review_text: newReviewText.trim() || null,
        })
        .select('*, student:profiles!student_id(*)')
        .maybeSingle();

      if (data) {
        const newRev = { ...data, student: (data as Record<string, unknown>).student as Profile | null } as CourseReview;
        setUserReview(newRev);
        setReviews((prev) => [newRev, ...prev]);
      }
    }

    // Recalculate average
    const updatedReviews = userReview
      ? reviews.map((r) => (r.id === userReview.id ? { ...r, rating: newRating, review_text: newReviewText.trim() || null } : r))
      : [{ rating: newRating } as CourseReview, ...reviews];
    const avg = updatedReviews.reduce((s, r) => s + r.rating, 0) / updatedReviews.length;
    setAvgRating(Math.round(avg * 10) / 10);
    setReviewCount(updatedReviews.length);

    setSubmittingReview(false);
  }

  async function deleteReview() {
    if (!userReview || !course) return;
    await supabase
      .from('course_reviews')
      .delete()
      .eq('id', userReview.id);

    const remaining = reviews.filter((r) => r.id !== userReview.id);
    setReviews(remaining);
    setUserReview(null);
    setNewRating(0);
    setNewReviewText('');
    setReviewCount(remaining.length);
    setAvgRating(remaining.length > 0 ? Math.round((remaining.reduce((s, r) => s + r.rating, 0) / remaining.length) * 10) / 10 : 0);
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <h2 className="text-2xl font-bold text-slate-900">Course not found</h2>
        <p className="text-slate-500 mt-2">The course you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/courses')} className="mt-6 px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold">
          Browse Courses
        </button>
      </div>
    );
  }

  const totalLessons = lessons.length;
  const completedCount = completedLessons.size;
  const progressPct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
  const isCompleted = progressPct === 100;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-slate-400 mb-6">
            <button onClick={() => navigate('/')} className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              Home
            </button>
            <ChevronRight className="w-3 h-3" />
            <button onClick={() => navigate('/courses')} className="hover:text-white transition-colors">
              Courses
            </button>
            {course.category && (
              <>
                <ChevronRight className="w-3 h-3" />
                <button onClick={() => course.category && navigate(`/courses?category=${course.category.slug}`)} className="hover:text-white transition-colors">
                  {course.category?.name}
                </button>
              </>
            )}
          </nav>

          <button
            onClick={() => navigate('/courses')}
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </button>

          <div className="grid lg:grid-cols-[1fr_400px] gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {course.category && (
                  <span className="text-sm font-medium text-purple-400">{course.category.name}</span>
                )}
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${levelStyles[course.level]}`}>
                  {course.level}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">{course.title}</h1>
              <p className="mt-4 text-slate-300 text-lg leading-relaxed">{course.description}</p>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-400">
                {course.instructor && (
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-white text-xs font-semibold">
                      {course.instructor.full_name.charAt(0)}
                    </div>
                    <span>{course.instructor.full_name}</span>
                  </div>
                )}
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  {totalLessons} lessons
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {course.total_duration} minutes
                </span>
                {enrollmentCount > 0 && (
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    {enrollmentCount} enrolled
                  </span>
                )}
                {reviewCount > 0 && (
                  <span className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    {avgRating} ({reviewCount})
                  </span>
                )}
              </div>
            </div>

            {/* Enroll card */}
            <div className="bg-white rounded-2xl p-6 text-slate-900 shadow-xl self-start">
              {course.thumbnail_url && (
                <img src={course.thumbnail_url} alt={course.title} className="w-full h-40 object-cover rounded-xl mb-5" />
              )}
              <div className="flex items-center justify-between mb-1">
                <div className="text-2xl font-bold text-slate-900">{formatPrice(course.price)}</div>
                {user && (
                  <button
                    onClick={toggleWishlist}
                    className={`p-2 rounded-lg transition-colors ${isWishlisted ? 'text-red-500 bg-red-50' : 'text-slate-400 hover:text-red-500 hover:bg-red-50'}`}
                    title={isWishlisted ? 'Remove from wishlist' : 'Save for later'}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500' : ''}`} />
                  </button>
                )}
              </div>
              <p className="text-sm text-slate-500 mb-5">One-time payment, lifetime access</p>

              {enrollment ? (
                <>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-600">Your Progress</span>
                      <span className="font-semibold text-slate-900">{progressPct}%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-slate-200 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-500"
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => navigate(`/course/${course.slug}/lesson/${lessons.find(l => !completedLessons.has(l.id))?.id ?? lessons[0]?.id}`)}
                    className="w-full py-3.5 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <PlayCircle className="w-5 h-5" />
                    {isCompleted ? 'Review Course' : completedCount > 0 ? 'Continue Learning' : 'Start Learning'}
                  </button>
                </>
              ) : user ? (
                <button
                  onClick={handleEnroll}
                  disabled={enrolling}
                  className="w-full py-3.5 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
                >
                  {enrolling ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Enroll Now</>}
                </button>
              ) : (
                <button
                  onClick={() => navigate('/signin')}
                  className="w-full py-3.5 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
                >
                  Sign In to Enroll
                </button>
              )}

              <div className="mt-5 pt-5 border-t border-slate-100 space-y-2.5">
                {[
                  'Lifetime access to all lessons',
                  'Learn at your own pace',
                  'Certificate of completion',
                  'Access on any device',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Course Curriculum</h2>
            <div className="space-y-3">
              {lessons.map((lesson, idx) => {
                const isLessonCompleted = completedLessons.has(lesson.id);
                const canAccess = enrollment != null;
                return (
                  <button
                    key={lesson.id}
                    onClick={() => canAccess
                      ? navigate(`/course/${course.slug}/lesson/${lesson.id}`)
                      : null
                    }
                    disabled={!canAccess}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                      canAccess
                        ? 'bg-white border-slate-200 hover:border-purple-300 hover:shadow-md cursor-pointer'
                        : 'bg-slate-50 border-slate-200 cursor-not-allowed opacity-75'
                    }`}
                  >
                    <div className="shrink-0">
                      {canAccess ? (
                        isLessonCompleted ? (
                          <CheckCircle2 className="w-6 h-6 text-green-500" />
                        ) : (
                          <Circle className="w-6 h-6 text-slate-300" />
                        )
                      ) : (
                        <Lock className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-medium text-slate-400">Lesson {idx + 1}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-slate-900 truncate">{lesson.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{lesson.description}</p>
                    </div>
                    <div className="shrink-0 flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {lesson.duration_minutes}m
                      {canAccess && <ChevronRight className="w-4 h-4" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Reviews Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Student Reviews</h2>

              {/* Rating summary */}
              {reviewCount > 0 ? (
                <div className="flex items-center gap-6 mb-6 bg-white rounded-2xl p-6 border border-slate-200">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-slate-900">{avgRating}</div>
                    <StarRating rating={avgRating} size={18} />
                    <div className="text-xs text-slate-500 mt-1">{reviewCount} review{reviewCount !== 1 ? 's' : ''}</div>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    {[5, 4, 3, 2, 1].map((star) => {
                      const count = reviews.filter((r) => r.rating === star).length;
                      const pct = reviewCount > 0 ? (count / reviewCount) * 100 : 0;
                      return (
                        <div key={star} className="flex items-center gap-2 text-xs">
                          <span className="w-8 text-slate-500 flex items-center gap-0.5">
                            {star} <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          </span>
                          <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
                            <div className="h-full bg-amber-400 rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="w-8 text-right text-slate-500">{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-6 border border-slate-200 mb-6">
                  <div className="flex items-center gap-3 text-slate-500">
                    <Star className="w-6 h-6 text-slate-300" />
                    <p className="text-sm">No reviews yet. Be the first to review this course!</p>
                  </div>
                </div>
              )}

              {/* Write review form */}
              {enrollment && user && (
                <div className="bg-white rounded-2xl p-6 border border-slate-200 mb-6">
                  <h3 className="text-sm font-bold text-slate-900 mb-4">
                    {userReview ? 'Edit Your Review' : 'Write a Review'}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Your Rating</label>
                      <StarRating rating={newRating} size={28} interactive onChange={setNewRating} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Your Review (optional)</label>
                      <textarea
                        value={newReviewText}
                        onChange={(e) => setNewReviewText(e.target.value)}
                        rows={3}
                        placeholder="Share your experience with this course..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={submitReview}
                        disabled={submittingReview || newRating === 0}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 text-white font-semibold text-sm hover:bg-purple-700 disabled:opacity-60 transition-colors"
                      >
                        {submittingReview ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                        {userReview ? 'Update Review' : 'Submit Review'}
                      </button>
                      {userReview && (
                        <button
                          onClick={deleteReview}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-red-600 font-semibold text-sm hover:bg-red-50 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Review list */}
              {reviews.length > 0 && (
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-2xl p-5 border border-slate-200">
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-white text-sm font-semibold">
                          {review.student?.full_name?.charAt(0) ?? 'S'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <div>
                              <span className="text-sm font-semibold text-slate-900">
                                {review.student?.full_name ?? 'Student'}
                              </span>
                              {review.student_id === user?.id && (
                                <span className="ml-2 text-xs text-purple-600 font-medium">You</span>
                              )}
                            </div>
                            <span className="text-xs text-slate-400">
                              {new Date(review.created_at).toLocaleDateString()}
                            </span>
                          </div>
                          <StarRating rating={review.rating} size={14} />
                          {review.review_text && (
                            <p className="text-sm text-slate-600 mt-2 leading-relaxed">{review.review_text}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {!enrollment && user && (
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
                  <p className="text-sm text-slate-500">Enroll in this course to leave a review.</p>
                </div>
              )}
            </div>
          </div>

          {/* Instructor sidebar */}
          <aside className="space-y-6">
            {course.instructor && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Your Instructor</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-white text-xl font-semibold">
                    {course.instructor.full_name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{course.instructor.full_name}</div>
                    <div className="text-xs text-slate-500">Faculty Member</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Award className="w-4 h-4 text-purple-500" />
                  Expert in {course.category?.name ?? 'this field'}
                </div>
              </div>
            )}

            {/* Certificate teaser */}
            {isCompleted && (
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 text-white">
                <Award className="w-8 h-8 mb-3" />
                <h3 className="font-bold text-lg">Course Completed!</h3>
                <p className="text-sm text-amber-100 mt-1 mb-4">
                  You've finished all lessons. View your certificate of completion.
                </p>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="w-full py-2.5 rounded-xl bg-white text-amber-600 font-semibold text-sm hover:bg-amber-50 transition-colors"
                >
                  Go to Dashboard
                </button>
              </div>
            )}

            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 text-white">
              <User className="w-8 h-8 mb-3" />
              <h3 className="font-bold text-lg">Ready to Learn?</h3>
              <p className="text-sm text-purple-100 mt-1 mb-4">
                {enrollment
                  ? 'You are enrolled. Start your next lesson now.'
                  : 'Enroll today and get instant access to all course materials.'}
              </p>
              {enrollment ? (
                <button
                  onClick={() => navigate(`/course/${course.slug}/lesson/${lessons[0]?.id}`)}
                  className="w-full py-2.5 rounded-xl bg-white text-purple-600 font-semibold text-sm hover:bg-purple-50 transition-colors"
                >
                  Go to Lessons
                </button>
              ) : user ? (
                <button
                  onClick={handleEnroll}
                  disabled={enrolling}
                  className="w-full py-2.5 rounded-xl bg-white text-purple-600 font-semibold text-sm hover:bg-purple-50 transition-colors"
                >
                  {enrolling ? 'Enrolling...' : 'Enroll Now'}
                </button>
              ) : (
                <button
                  onClick={() => navigate('/signup')}
                  className="w-full py-2.5 rounded-xl bg-white text-purple-600 font-semibold text-sm hover:bg-purple-50 transition-colors"
                >
                  Create Account
                </button>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <div className="bg-white border-t border-slate-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-6">
              <FolderOpen className="w-5 h-5 text-purple-600" />
              <h2 className="text-xl font-bold text-slate-900">Related Courses</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCourses.map((rc) => (
                <CourseCard key={rc.id} course={rc} navigate={navigate} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
