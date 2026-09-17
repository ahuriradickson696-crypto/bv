import { RouterProvider, useRouter } from '@/router/Router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ApplyProvider } from '@/components/ApplyContext';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { FloatingYouTube } from '@/components/FloatingYouTube';
import { PwaInstall } from '@/components/PwaInstall';
import { DocumentHead } from '@/components/DocumentHead';
import { NotFound } from '@/pages/NotFound';
import { Terms } from '@/pages/Terms';
import { Cookies } from '@/pages/Cookies';
import { Accessibility } from '@/pages/Accessibility';
import { CookieConsent } from '@/components/CookieConsent';
import { Analytics } from '@/components/Analytics';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Home } from '@/pages/Home';
import { Study } from '@/pages/Study';
import { Admissions } from '@/pages/Admissions';
import { Research } from '@/pages/Research';
import { StudentLife } from '@/pages/StudentLife';
import { Staff } from '@/pages/Staff';
import { Library } from '@/pages/Library';
import { Fees } from '@/pages/Fees';
import { About } from '@/pages/About';
import { News } from '@/pages/News';
import { Events } from '@/pages/Events';
import { Contact } from '@/pages/Contact';

import { UndergraduateStudy } from '@/pages/study/UndergraduateStudy';
import { PostgraduateStudy } from '@/pages/study/PostgraduateStudy';
import { OnlineLearning } from '@/pages/study/OnlineLearning';
import { InternationalStudy } from '@/pages/study/InternationalStudy';
import { CourseFinder } from '@/pages/study/CourseFinder';
import { ProgrammeDetail } from '@/pages/study/ProgrammeDetail';

import { HowToApply } from '@/pages/admissions/HowToApply';
import { EntryRequirements } from '@/pages/admissions/EntryRequirements';
import { InternationalAdmissions } from '@/pages/admissions/InternationalAdmissions';
import { CreditTransfer } from '@/pages/admissions/CreditTransfer';
import { Scholarships } from '@/pages/admissions/Scholarships';
import { CampusVisits } from '@/pages/admissions/CampusVisits';

import { ResearchCentres } from '@/pages/research/ResearchCentres';
import { PhdOpportunities } from '@/pages/research/PhdOpportunities';
import { Publications } from '@/pages/research/Publications';

import { Accommodation } from '@/pages/studentlife/Accommodation';
import { HealthWellbeing } from '@/pages/studentlife/HealthWellbeing';
import { SportsRecreation } from '@/pages/studentlife/SportsRecreation';
import { CareerServices } from '@/pages/studentlife/CareerServices';

import { Leadership } from '@/pages/about/Leadership';
import { Campus } from '@/pages/about/Campus';
import { Alumni } from '@/pages/about/Alumni';
import { Careers } from '@/pages/about/Careers';
import { OrgChart } from '@/pages/about/OrgChart';

import { Directory } from '@/pages/contact/Directory';
import { CampusSafety } from '@/pages/contact/CampusSafety';
import { Gallery } from '@/pages/Gallery';
import { AcademicCalendar } from '@/pages/AcademicCalendar';
import { Privacy } from '@/pages/Privacy';
import { Downloads } from '@/pages/Downloads';
import { ElearningApp } from '@/elearning/ElearningApp';

function Routes() {
  const { path } = useRouter();

  // The e-learning portal is a self-contained app with its own nav/footer —
  // mount it directly instead of wrapping it in the main site chrome.
  if (path === '/elearning' || path.startsWith('/elearning/')) {
    return (
      <div className="site-shell" style={{ maxWidth: "100vw", overflowX: "hidden" }}>
        <DocumentHead />
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <main id="main-content">
          <ElearningApp />
        </main>
        <CookieConsent />
        <Analytics />
      </div>
    );
  }

  const renderPage = () => {
    switch (path) {
      case '/study':
        return <Study />;
      case '/study/undergraduate':
        return <UndergraduateStudy />;
      case '/study/postgraduate':
        return <PostgraduateStudy />;
      case '/study/online':
        return <OnlineLearning />;
      case '/study/international':
        return <InternationalStudy />;
      case '/study/course-finder':
        return <CourseFinder />;

      case '/admissions':
        return <Admissions />;
      case '/admissions/how-to-apply':
        return <HowToApply />;
      case '/admissions/entry-requirements':
        return <EntryRequirements />;
      case '/admissions/international':
        return <InternationalAdmissions />;
      case '/admissions/credit-transfer':
        return <CreditTransfer />;
      case '/admissions/scholarships':
        return <Scholarships />;
      case '/admissions/campus-visits':
        return <CampusVisits />;

      case '/research':
        return <Research />;
      case '/research/centres':
        return <ResearchCentres />;
      case '/research/phd-opportunities':
        return <PhdOpportunities />;
      case '/research/publications':
        return <Publications />;

      case '/student-life':
        return <StudentLife />;
      case '/student-life/accommodation':
        return <Accommodation />;
      case '/student-life/health':
        return <HealthWellbeing />;
      case '/student-life/sports':
        return <SportsRecreation />;
      case '/student-life/careers':
        return <CareerServices />;

      case '/staff':
        return <Staff />;
      case '/library':
        return <Library />;
      case '/fees':
        return <Fees />;

      case '/about':
        return <About />;
      case '/about/leadership':
        return <Leadership />;
      case '/about/campus':
        return <Campus />;
      case '/about/alumni':
        return <Alumni />;
      case '/about/careers':
        return <Careers />;
      case '/about/organisation':
        return <OrgChart />;

      case '/news':
        return <News />;
      case '/events':
        return <Events />;

      case '/contact':
        return <Contact />;
      case '/contact/directory':
        return <Directory />;
      case '/contact/campus-safety':
        return <CampusSafety />;

      case '/gallery':
        return <Gallery />;
      case '/academic-calendar':
        return <AcademicCalendar />;
      case '/privacy':
        return <Privacy />;
      case '/terms':
        return <Terms />;
      case '/cookies':
        return <Cookies />;
      case '/accessibility':
        return <Accessibility />;
      case '/downloads':
        return <Downloads />;

      default:
        if (path.startsWith('/study/programme/')) {
          return <ProgrammeDetail />;
        }
        if (path === '/') return <Home />;
        return <NotFound />;
    }
  };

  return (
    <div className="site-shell" style={{ maxWidth: "100vw", overflowX: "hidden" }}>
      <DocumentHead />
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <Header />
      <main id="main-content" style={{ minHeight: "50vh" }}>{renderPage()}</main>
      <FloatingYouTube />
      <PwaInstall />
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
      <Analytics />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider>
        <ApplyProvider>
          <Routes />
        </ApplyProvider>
      </RouterProvider>
    </ErrorBoundary>
  );
}

export default App;
