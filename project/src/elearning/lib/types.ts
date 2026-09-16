export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Profile {
  id: string;
  full_name: string;
  avatar_url: string | null;
  role: 'student' | 'instructor';
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  created_at: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  instructor_id: string | null;
  category_id: string | null;
  level: CourseLevel;
  price: number;
  thumbnail_url: string | null;
  is_published: boolean;
  created_at: string;
}

export interface CourseWithDetails extends Course {
  instructor?: Profile | null;
  category?: Category | null;
  lesson_count?: number;
  total_duration?: number;
}

export interface Lesson {
  id: string;
  course_id: string;
  title: string;
  description: string | null;
  content: string | null;
  video_url: string | null;
  duration_minutes: number;
  lesson_order: number;
  created_at: string;
}

export interface Enrollment {
  id: string;
  student_id: string;
  course_id: string;
  enrolled_at: string;
}

export interface LessonProgress {
  id: string;
  student_id: string;
  lesson_id: string;
  course_id: string;
  completed: boolean;
  completed_at: string | null;
  last_viewed_at: string;
}

export interface CourseReview {
  id: string;
  course_id: string;
  student_id: string;
  rating: number;
  review_text: string | null;
  created_at: string;
  student?: Profile | null;
}

export interface Wishlist {
  id: string;
  student_id: string;
  course_id: string;
  created_at: string;
}

export interface Certificate {
  id: string;
  student_id: string;
  course_id: string;
  certificate_number: string;
  issued_at: string;
  course?: CourseWithDetails | null;
}
