import { useEffect, useState, useMemo } from 'react';
import { Search, SlidersHorizontal, BookOpen } from 'lucide-react';
import { supabase } from '@/elearning/lib/supabase';
import type { CourseWithDetails, Category } from '@/elearning/lib/types';
import { CourseCard } from '@/elearning/components/CourseCard';

interface CatalogPageProps {
  navigate: (path: string) => void;
  initialCategory?: string;
}

export function CatalogPage({ navigate, initialCategory }: CatalogPageProps) {
  const [courses, setCourses] = useState<CourseWithDetails[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory ?? 'all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');

  useEffect(() => {
    (async () => {
      const [{ data: coursesData }, { data: cats }] = await Promise.all([
        supabase
          .from('courses')
          .select(`
            *,
            instructor:profiles!instructor_id(*),
            category:categories(*),
            lessons(id, duration_minutes)
          `)
          .eq('is_published', true)
          .order('created_at', { ascending: false }),
        supabase.from('categories').select('*').order('name'),
      ]);

      const processed = (coursesData ?? []).map((c: Record<string, unknown>) => ({
        ...c,
        instructor: c.instructor as CourseWithDetails['instructor'],
        category: c.category as CourseWithDetails['category'],
        lesson_count: (c.lessons as Array<{ id: string }>)?.length ?? 0,
        total_duration: (c.lessons as Array<{ duration_minutes: number }>)?.reduce((s, l) => s + l.duration_minutes, 0) ?? 0,
      })) as CourseWithDetails[];

      setCourses(processed);
      setCategories((cats ?? []) as Category[]);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (initialCategory) setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filtered = useMemo(() => {
    let result = [...courses];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== 'all') {
      result = result.filter((c) => c.category?.slug === selectedCategory);
    }

    if (selectedLevel !== 'all') {
      result = result.filter((c) => c.level === selectedLevel);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'title':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    }

    return result;
  }, [courses, search, selectedCategory, selectedLevel, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-bold text-slate-900">Course Catalog</h1>
          <p className="mt-2 text-slate-500">Discover {courses.length} courses across {categories.length} faculties at Avance International University</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-[260px_1fr] gap-8">
          {/* Sidebar filters */}
          <aside className="space-y-6">
            {/* Search */}
            <div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search courses..."
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Faculties
              </h3>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === 'all' ? 'bg-purple-50 text-purple-600' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  All Faculties
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === cat.slug ? 'bg-purple-50 text-purple-600' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Level */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-4">Level</h3>
              <div className="space-y-1">
                {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                      selectedLevel === level ? 'bg-purple-50 text-purple-600' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {level === 'all' ? 'All Levels' : level}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div>
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-slate-600">
                Showing <span className="font-semibold text-slate-900">{filtered.length}</span> course{filtered.length !== 1 ? 's' : ''}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="newest">Newest First</option>
                <option value="title">Title A-Z</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Grid */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-200 animate-pulse">
                    <div className="h-48 bg-slate-200" />
                    <div className="p-5 space-y-3">
                      <div className="h-4 bg-slate-200 rounded w-1/3" />
                      <div className="h-5 bg-slate-200 rounded w-3/4" />
                      <div className="h-4 bg-slate-200 rounded w-full" />
                      <div className="h-4 bg-slate-200 rounded w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
                <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900">No courses found</h3>
                <p className="text-sm text-slate-500 mt-1">Try adjusting your filters or search query</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((course) => (
                  <CourseCard key={course.id} course={course} navigate={navigate} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
