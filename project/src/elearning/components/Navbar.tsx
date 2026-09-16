import { useState, useEffect, useRef } from 'react';
import { Menu, X, User, LogOut, LayoutDashboard, Search, Heart, Settings } from 'lucide-react';
import { useAuth } from '@/elearning/lib/auth';
import { supabase } from '@/elearning/lib/supabase';
import { UniversityLogo } from '@/elearning/components/UniversityLogo';
import type { CourseWithDetails } from '@/elearning/lib/types';

interface NavbarProps {
  navigate: (path: string) => void;
  currentPath: string;
}

export function Navbar({ navigate, currentPath }: NavbarProps) {
  const { user, profile, signOut } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<CourseWithDetails[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Courses', path: '/courses' },
    { label: 'Faculties', path: '/categories' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  const handleNav = (path: string) => {
    navigate(path);
    setMobileOpen(false);
    setShowResults(false);
  };

  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      const { data } = await supabase
        .from('courses')
        .select(`*, instructor:profiles!instructor_id(*), category:categories(*), lessons(id, duration_minutes)`)
        .eq('is_published', true)
        .or(`title.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`)
        .limit(5);

      const processed = (data ?? []).map((c: Record<string, unknown>) => ({
        ...c,
        instructor: c.instructor as CourseWithDetails['instructor'],
        category: c.category as CourseWithDetails['category'],
        lesson_count: (c.lessons as Array<{ id: string }>)?.length ?? 0,
        total_duration: (c.lessons as Array<{ duration_minutes: number }>)?.reduce((s, l) => s + l.duration_minutes, 0) ?? 0,
      })) as CourseWithDetails[];
      setSearchResults(processed);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => handleNav('/')} className="flex items-center gap-2 group shrink-0">
            <UniversityLogo />
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Global search */}
            <div className="relative" ref={searchRef}>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setShowResults(true); }}
                onFocus={() => setShowResults(true)}
                placeholder="Search courses..."
                className="w-48 pl-9 pr-4 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:w-64 focus:border-transparent transition-all"
              />
              {showResults && searchQuery.trim().length >= 2 && (
                <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden min-w-[320px]">
                  {searchResults.length === 0 ? (
                    <div className="p-4 text-sm text-slate-500 text-center">No courses found</div>
                  ) : (
                    <div className="py-2">
                      {searchResults.map((course) => (
                        <button
                          key={course.id}
                          onClick={() => {
                            navigate(`/course/${course.slug}`);
                            setSearchQuery('');
                            setShowResults(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 text-left transition-colors"
                        >
                          <div className="shrink-0 w-10 h-10 rounded-lg overflow-hidden bg-slate-100">
                            {course.thumbnail_url ? (
                              <img src={course.thumbnail_url} alt="" className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200">
                                <Search className="w-4 h-4 text-slate-400" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-slate-900 truncate">{course.title}</div>
                            <div className="text-xs text-slate-500 truncate">{course.category?.name}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {user ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleNav('/dashboard')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive('/dashboard') ? 'text-purple-600 bg-purple-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  title="Dashboard"
                >
                  <LayoutDashboard className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleNav('/wishlist')}
                  className={`p-2 rounded-lg transition-colors ${
                    isActive('/wishlist') ? 'text-red-500 bg-red-50' : 'text-slate-600 hover:text-red-500 hover:bg-red-50'
                  }`}
                  title="Wishlist"
                >
                  <Heart className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleNav('/profile')}
                  className={`p-2 rounded-lg transition-colors ${
                    isActive('/profile') ? 'text-purple-600 bg-purple-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  title="Profile Settings"
                >
                  <Settings className="w-5 h-5" />
                </button>
                <button
                  onClick={signOut}
                  className="p-2 rounded-lg text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                  title="Sign out"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => handleNav('/signin')}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  <User className="w-4 h-4" />
                  Sign In
                </button>
                <button
                  onClick={() => handleNav('/signup')}
                  className="px-5 py-2 rounded-lg text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 shadow-sm hover:shadow-md transition-all"
                >
                  Apply Now
                </button>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 space-y-1">
            {/* Mobile search */}
            <div className="relative mb-3 px-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setShowResults(true); }}
                placeholder="Search courses..."
                className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {showResults && searchQuery.trim().length >= 2 && searchResults.length > 0 && (
                <div className="mt-2 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                  {searchResults.map((course) => (
                    <button
                      key={course.id}
                      onClick={() => {
                        navigate(`/course/${course.slug}`);
                        setSearchQuery('');
                        setShowResults(false);
                        setMobileOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 text-left"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-lg overflow-hidden bg-slate-100">
                        {course.thumbnail_url ? (
                          <img src={course.thumbnail_url} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200">
                            <Search className="w-4 h-4 text-slate-400" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-slate-900 truncate">{course.title}</div>
                        <div className="text-xs text-slate-500 truncate">{course.category?.name}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('/faq')}
              className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100"
            >
              FAQ
            </button>
            <div className="pt-3 border-t border-slate-200 space-y-1">
              {user ? (
                <>
                  <button
                    onClick={() => handleNav('/dashboard')}
                    className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 flex items-center gap-2"
                  >
                    <LayoutDashboard className="w-4 h-4" /> Dashboard
                  </button>
                  <button
                    onClick={() => handleNav('/wishlist')}
                    className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 flex items-center gap-2"
                  >
                    <Heart className="w-4 h-4" /> Wishlist
                  </button>
                  <button
                    onClick={() => handleNav('/profile')}
                    className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 flex items-center gap-2"
                  >
                    <Settings className="w-4 h-4" /> Profile Settings
                  </button>
                  <button
                    onClick={() => { signOut(); setMobileOpen(false); }}
                    className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleNav('/signin')}
                    className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => handleNav('/signup')}
                    className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-purple-600"
                  >
                    Apply Now
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
