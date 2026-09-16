import { useEffect, useState } from 'react';
import {
  User, Mail, Lock, Loader2, CheckCircle2, AlertCircle,
  Camera, Save, Award, Heart, LayoutDashboard, ChevronRight,
} from 'lucide-react';
import { supabase } from '@/elearning/lib/supabase';
import { useAuth } from '@/elearning/lib/auth';
import type { Certificate, Wishlist, CourseWithDetails } from '@/elearning/lib/types';

interface ProfilePageProps {
  navigate: (path: string) => void;
}

export function ProfilePage({ navigate }: ProfilePageProps) {
  const { user, profile, loading: authLoading } = useAuth();
  const [fullName, setFullName] = useState('');
  const [savingName, setSavingName] = useState(false);
  const [nameMsg, setNameMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [savingPassword, setSavingPassword] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [wishlistCourses, setWishlistCourses] = useState<CourseWithDetails[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (profile?.full_name) setFullName(profile.full_name);
  }, [profile]);

  useEffect(() => {
    if (!user) { setLoadingData(false); return; }

    (async () => {
      const [{ data: certs }, { data: wishes }] = await Promise.all([
        supabase
          .from('certificates')
          .select('*, course:courses(*, instructor:profiles!instructor_id(*), category:categories(*), lessons(id, duration_minutes))')
          .eq('student_id', user.id)
          .order('issued_at', { ascending: false }),
        supabase
          .from('wishlists')
          .select('course:courses(*, instructor:profiles!instructor_id(*), category:categories(*), lessons(id, duration_minutes))')
          .eq('student_id', user.id)
          .order('created_at', { ascending: false }),
      ]);

      setCertificates((certs ?? []) as unknown as Certificate[]);

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
      setWishlistCourses(processed);
      setLoadingData(false);
    })();
  }, [user]);

  async function handleSaveName() {
    if (!user || !fullName.trim()) return;
    setSavingName(true);
    setNameMsg(null);

    const { error } = await supabase
      .from('profiles')
      .update({ full_name: fullName.trim() })
      .eq('id', user.id);

    if (error) {
      setNameMsg({ type: 'error', text: 'Could not update your name. Please try again.' });
    } else {
      setNameMsg({ type: 'success', text: 'Your name has been updated.' });
    }
    setSavingName(false);
  }

  async function handleChangePassword() {
    if (newPassword.length < 6) {
      setPasswordMsg({ type: 'error', text: 'Password must be at least 6 characters.' });
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordMsg({ type: 'error', text: 'Passwords do not match.' });
      return;
    }

    setSavingPassword(true);
    setPasswordMsg(null);

    const { error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
      setPasswordMsg({ type: 'error', text: error.message });
    } else {
      setPasswordMsg({ type: 'success', text: 'Your password has been changed.' });
      setNewPassword('');
      setConfirmPassword('');
    }
    setSavingPassword(false);
  }

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <User className="w-16 h-16 text-purple-300 mb-4" />
        <h2 className="text-2xl font-bold text-slate-900">Sign in to view your profile</h2>
        <p className="text-slate-500 mt-2">Manage your account and settings here.</p>
        <button onClick={() => navigate('/signin')} className="mt-6 px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold">
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-white text-3xl font-bold shadow-md">
              {profile?.full_name?.charAt(0) ?? 'U'}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{profile?.full_name ?? 'My Profile'}</h1>
              <p className="text-slate-500 mt-1 flex items-center gap-1.5">
                <Mail className="w-4 h-4" />
                {user.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Quick links */}
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-white rounded-2xl p-5 border border-slate-200 hover:shadow-md transition-shadow text-left"
          >
            <LayoutDashboard className="w-6 h-6 text-purple-600 mb-2" />
            <div className="text-sm font-semibold text-slate-900">Dashboard</div>
            <div className="text-xs text-slate-500 mt-0.5">Your courses</div>
          </button>
          <div className="bg-white rounded-2xl p-5 border border-slate-200">
            <Award className="w-6 h-6 text-amber-500 mb-2" />
            <div className="text-sm font-semibold text-slate-900">{certificates.length} Certificates</div>
            <div className="text-xs text-slate-500 mt-0.5">Earned achievements</div>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-200">
            <Heart className="w-6 h-6 text-red-500 mb-2" />
            <div className="text-sm font-semibold text-slate-900">{wishlistCourses.length} Saved</div>
            <div className="text-xs text-slate-500 mt-0.5">Wishlist courses</div>
          </div>
        </div>

        {/* Edit name */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-purple-600" />
            Personal Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
              <input
                type="email"
                value={user.email ?? ''}
                disabled
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-500 cursor-not-allowed"
              />
              <p className="text-xs text-slate-400 mt-1">Email cannot be changed</p>
            </div>
            {nameMsg && (
              <div className={`flex items-center gap-2 text-sm ${nameMsg.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {nameMsg.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                {nameMsg.text}
              </div>
            )}
            <button
              onClick={handleSaveName}
              disabled={savingName || !fullName.trim()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 text-white font-semibold text-sm hover:bg-purple-700 disabled:opacity-60 transition-colors"
            >
              {savingName ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              Save Changes
            </button>
          </div>
        </div>

        {/* Change password */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-purple-600" />
            Change Password
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="At least 6 characters"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            {passwordMsg && (
              <div className={`flex items-center gap-2 text-sm ${passwordMsg.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {passwordMsg.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                {passwordMsg.text}
              </div>
            )}
            <button
              onClick={handleChangePassword}
              disabled={savingPassword || !newPassword || !confirmPassword}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 disabled:opacity-60 transition-colors"
            >
              {savingPassword ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
              Update Password
            </button>
          </div>
        </div>

        {/* Certificates */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            My Certificates
          </h2>
          {loadingData ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-6 h-6 text-purple-600 animate-spin" />
            </div>
          ) : certificates.length === 0 ? (
            <div className="text-center py-8">
              <Award className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-sm text-slate-500">Complete a course to earn your first certificate.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {certificates.map((cert) => {
                const course = cert.course as unknown as CourseWithDetails;
                return (
                  <div key={cert.id} className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-purple-200 transition-colors">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                      <Award className="w-6 h-6 text-amber-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-slate-900 truncate">{course?.title ?? 'Course'}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Issued {new Date(cert.issued_at).toLocaleDateString()} · #{cert.certificate_number}</p>
                    </div>
                    <button
                      onClick={() => navigate(`/certificate/${cert.id}`)}
                      className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-purple-600 hover:text-purple-700"
                    >
                      View
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Wishlist */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            Saved Courses
          </h2>
          {loadingData ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-6 h-6 text-purple-600 animate-spin" />
            </div>
          ) : wishlistCourses.length === 0 ? (
            <div className="text-center py-8">
              <Heart className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-sm text-slate-500">Bookmark courses to save them for later.</p>
              <button onClick={() => navigate('/courses')} className="mt-4 text-sm font-semibold text-purple-600 hover:text-purple-700">
                Browse Courses
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {wishlistCourses.map((course) => (
                <button
                  key={course.id}
                  onClick={() => navigate(`/course/${course.slug}`)}
                  className="flex gap-3 p-3 rounded-xl border border-slate-200 hover:border-purple-200 hover:shadow-sm transition-all text-left"
                >
                  <div className="shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-slate-100">
                    {course.thumbnail_url ? (
                      <img src={course.thumbnail_url} alt={course.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200">
                        <Camera className="w-5 h-5 text-slate-400" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-slate-900 line-clamp-1">{course.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{course.instructor?.full_name}</p>
                    <p className="text-xs font-bold text-purple-600 mt-1">{course.price === 0 ? 'Free' : `$${course.price}`}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
