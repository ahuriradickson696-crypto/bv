import { Clock, BookOpen, ChevronRight } from 'lucide-react';
import type { CourseWithDetails } from '@/elearning/lib/types';
import { formatPriceShort } from '@/elearning/lib/format';

interface CourseCardProps {
  course: CourseWithDetails;
  navigate: (path: string) => void;
}

const levelStyles: Record<string, string> = {
  beginner: 'bg-green-100 text-green-700',
  intermediate: 'bg-amber-100 text-amber-700',
  advanced: 'bg-red-100 text-red-700',
};

export function CourseCard({ course, navigate }: CourseCardProps) {
  return (
    <button
      onClick={() => navigate(`/course/${course.slug}`)}
      className="group text-left bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        {course.thumbnail_url ? (
          <img
            src={course.thumbnail_url}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-200">
            <BookOpen className="w-12 h-12 text-slate-400" />
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${levelStyles[course.level] ?? 'bg-slate-100 text-slate-700'}`}>
            {course.level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {course.category && (
          <span className="text-xs font-medium text-purple-600 mb-2">{course.category.name}</span>
        )}
        <h3 className="text-base font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-1">{course.description}</p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            {course.lesson_count ?? 0} lessons
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {course.total_duration ?? 0} min
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          {course.instructor && (
            <span className="text-xs text-slate-600 truncate flex-1 mr-2">
              {course.instructor.full_name}
            </span>
          )}
          <div className="flex items-center gap-1 text-sm font-bold text-purple-600 shrink-0">
            {formatPriceShort(course.price)}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </button>
  );
}
