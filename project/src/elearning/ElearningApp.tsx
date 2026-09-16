import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { AuthProvider } from '@/elearning/lib/auth';
import { Navbar } from '@/elearning/components/Navbar';
import { Footer } from '@/elearning/components/Footer';
import { ScrollToTop } from '@/elearning/components/ScrollToTop';
import { LandingPage } from '@/elearning/pages/LandingPage';
import { CatalogPage } from '@/elearning/pages/CatalogPage';
import { CourseDetailPage } from '@/elearning/pages/CourseDetailPage';
import { LessonViewerPage } from '@/elearning/pages/LessonViewerPage';
import { DashboardPage } from '@/elearning/pages/DashboardPage';
import { AuthPage } from '@/elearning/pages/AuthPage';
import { CategoriesPage } from '@/elearning/pages/CategoriesPage';
import { AboutPage } from '@/elearning/pages/AboutPage';
import { ContactPage } from '@/elearning/pages/ContactPage';
import { FAQPage } from '@/elearning/pages/FAQPage';
import { LegalPage } from '@/elearning/pages/LegalPage';
import { ProfilePage } from '@/elearning/pages/ProfilePage';
import { CertificatePage } from '@/elearning/pages/CertificatePage';
import { WishlistPage } from '@/elearning/pages/WishlistPage';
import { UniversityLogo } from '@/elearning/components/UniversityLogo';
import { useRouter } from '@/router/Router';

const PREFIX = '/elearning';

function stripPrefix(path: string): string {
  if (path === PREFIX || path === PREFIX + '/') return '/';
  if (path.startsWith(PREFIX + '/')) return path.slice(PREFIX.length) || '/';
  return path;
}

function withPrefix(to: string): string {
  if (!to || to === '/') return PREFIX;
  const p = to.startsWith('/') ? to : '/' + to;
  if (p.startsWith(PREFIX)) return p;
  return PREFIX + p;
}

function NotFoundPage({ navigate }: { navigate: (path: string) => void }) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 px-4">
      <div className="text-center">
        <div className="text-8xl font-bold text-purple-100">404</div>
        <h2 className="text-2xl font-bold text-slate-900 mt-4">Page Not Found</h2>
        <p className="text-slate-500 mt-2 max-w-md">
          This e-learning page does not exist.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
          >
            E-Learning Home
          </button>
          <button
            type="button"
            onClick={() => navigate('/courses')}
            className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-white transition-colors"
          >
            Browse Courses
          </button>
        </div>
        <div className="mt-10 flex justify-center opacity-50">
          <UniversityLogo />
        </div>
      </div>
    </div>
  );
}

function ElearningRoutes() {
  const { path: fullPath, navigate: mainNavigate } = useRouter();
  const path = stripPrefix(fullPath);

  const navigate = (to: string) => {
    mainNavigate(withPrefix(to));
  };

  const parsed = useMemo(() => {
    const [p, queryString] = path.split('?');
    return { path: p || '/', query: new URLSearchParams(queryString || '') };
  }, [path]);

  const isLessonViewer = /^\/course\/[^/]+\/lesson\/[^/]+/.test(parsed.path);
  const isCertificate = parsed.path.startsWith('/certificate/');

  let page: ReactNode;
  let showNavbar = true;
  let showFooter = true;

  if (parsed.path === '/' || parsed.path === '') {
    page = <LandingPage navigate={navigate} />;
  } else if (parsed.path === '/courses') {
    page = <CatalogPage navigate={navigate} />;
  } else if (parsed.path === '/categories') {
    page = <CategoriesPage navigate={navigate} />;
  } else if (parsed.path === '/about') {
    page = <AboutPage navigate={navigate} />;
  } else if (parsed.path === '/contact') {
    page = <ContactPage navigate={navigate} />;
  } else if (parsed.path === '/faq') {
    page = <FAQPage navigate={navigate} />;
  } else if (parsed.path === '/privacy' || parsed.path === '/terms') {
    page = <LegalPage navigate={navigate} />;
  } else if (parsed.path === '/dashboard') {
    page = <DashboardPage navigate={navigate} />;
  } else if (parsed.path === '/profile') {
    page = <ProfilePage navigate={navigate} />;
  } else if (parsed.path === '/wishlist') {
    page = <WishlistPage navigate={navigate} />;
  } else if (parsed.path === '/signin') {
    page = <AuthPage navigate={navigate} mode="signin" />;
  } else if (parsed.path === '/signup') {
    page = <AuthPage navigate={navigate} mode="signup" />;
  } else if (isCertificate) {
    const certId = parsed.path.split('/')[2];
    page = <CertificatePage navigate={navigate} certificateId={certId} />;
    showFooter = false;
  } else if (isLessonViewer) {
    const parts = parsed.path.split('/');
    const slug = parts[2];
    const lessonId = parts[4];
    page = <LessonViewerPage navigate={navigate} courseSlug={slug} lessonId={lessonId} />;
    showNavbar = false;
    showFooter = false;
  } else if (parsed.path.startsWith('/course/')) {
    const slug = parsed.path.split('/')[2];
    page = <CourseDetailPage navigate={navigate} slug={slug} />;
  } else {
    page = <NotFoundPage navigate={navigate} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white elearning-root">
      <div className="bg-purple-900 text-white text-center text-xs py-2 px-3">
        <button
          type="button"
          className="underline opacity-90 hover:opacity-100"
          onClick={() => mainNavigate('/')}
        >
          ← Back to AVIU main website
        </button>
        <span className="mx-2 opacity-50">|</span>
        <span>E-Learning Portal (inside AVIU)</span>
      </div>
      {showNavbar && <Navbar navigate={navigate} currentPath={parsed.path} />}
      <main className="flex-1">{page}</main>
      {showFooter && <Footer navigate={navigate} />}
      <ScrollToTop />
    </div>
  );
}

export function ElearningApp() {
  return (
    <AuthProvider>
      <ElearningRoutes />
    </AuthProvider>
  );
}
