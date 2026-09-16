import { useEffect, useState } from 'react';
import { BookOpen, ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '@/elearning/lib/supabase';
import type { Category } from '@/elearning/lib/types';

interface CategoriesPageProps {
  navigate: (path: string) => void;
}

export function CategoriesPage({ navigate }: CategoriesPageProps) {
  const [categories, setCategories] = useState<(Category & { course_count: number })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data: cats } = await supabase.from('categories').select('*').order('name');
      const categoriesData = (cats ?? []) as Category[];

      const enriched = await Promise.all(
        categoriesData.map(async (cat) => {
          const { count } = await supabase
            .from('courses')
            .select('*', { count: 'exact', head: true })
            .eq('category_id', cat.id)
            .eq('is_published', true);
          return { ...cat, course_count: count ?? 0 };
        })
      );

      setCategories(enriched);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-bold text-slate-900">Our Faculties</h1>
          <p className="mt-2 text-slate-500">Explore our {categories.length} faculties and find your path at Avance International University</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/courses?category=${cat.slug}`)}
              className="group text-left bg-white rounded-2xl p-6 border border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 items-center justify-center group-hover:from-purple-100 group-hover:to-purple-200 transition-colors">
                  <BookOpen className="w-7 h-7 text-purple-600" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
                  {cat.course_count} course{cat.course_count !== 1 ? 's' : ''}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-2">
                {cat.name}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">{cat.description}</p>
              <div className="inline-flex items-center gap-1 text-sm font-semibold text-purple-600 group-hover:gap-2 transition-all">
                Explore Courses
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
