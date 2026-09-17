import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { universityInfo } from '@/data/university';
import { useRouter } from '@/router/Router';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useApply } from '@/components/ApplyContext';

const announcements = [
  'Admissions for the January, May & August intakes are now open — apply today',
  'Four faculties. Over 30 programmes. Find your path at AVIU',
  'Merit scholarships cover 25–50% of tuition for qualifying students',
  'January 2027 intake orientation begins 10 January — welcome to AVIU',
  'Open Day for prospective students: 25 October 2026 — register now',
  'AVIU Innovation Fair 2026: 15 September — see student projects on display',
  'Annual Research Conference: 5 October — faculty and postgraduate presentations',
  'Student Startup Pitch Competition: 8 November — watch AVIU entrepreneurs shine',
  'Public Health Symposium: 15 November — tackling East African health challenges',
  'Faculty of Nursing Graduation Ceremony: 20 September',
  'Faculty of Education Graduation Ceremony: 5 December',
  '85% graduate employment rate within six months of finishing',
  '3M+ video lessons available on-demand through our e-learning platform',
  '2,500+ daily live classes with interactive participation',
  'Flexible payment plans: pay in 2–3 instalments per semester, no interest',
  'International students from across East Africa and beyond — visa support provided',
  'Minimum IELTS 6.0, TOEFL 80, or PTE 50 for international applicants',
  'Credit transfer available — up to 50% of programme credits from prior study',
  'Recognition of Prior Learning (RPL): turn work experience into academic credit',
  'On-campus halls of residence with Wi-Fi, utilities, and 24/7 security included',
  '20+ student clubs and societies — from debate to drama to football',
  'Free airport pickup for new international students on designated dates',
  'Innovation Centre with modern labs and prototyping equipment — open to all students',
  'Advanced nursing simulation lab with high-fidelity patient manikins',
  'Community Engagement Day: 12 October — giving back to Kampala',
  'Mature Age Entry Scheme available for applicants aged 21 and above',
  'Early-bird discount: 10% off tuition when you pay 30 days before the semester starts',
  '2,000+ alumni across 12 regional chapters in East Africa and beyond',
  'ASIC accredited · ISO 9001:2015 · THE Impact Rankings · Pearson Edexcel',
];

type NavGroup = {
  label: string;
  items: { label: string; path: string }[];
};

const navGroups: NavGroup[] = [
  {
    label: 'Study',
    items: [
      { label: 'All Programmes', path: '/study' },
      { label: 'Undergraduate', path: '/study/undergraduate' },
      { label: 'Postgraduate & Doctoral', path: '/study/postgraduate' },
      { label: 'Online & E-Learning', path: '/study/online' },
      { label: 'E-Learning Portal', path: '/elearning' },
      { label: 'International Study', path: '/study/international' },
      { label: 'Course Finder', path: '/study/course-finder' },
      { label: 'Fees & Tuition', path: '/fees' },
    ],
  },
  {
    label: 'Admissions',
    items: [
      { label: 'Admissions Overview', path: '/admissions' },
      { label: 'How to Apply', path: '/admissions/how-to-apply' },
      { label: 'Entry Requirements', path: '/admissions/entry-requirements' },
      { label: 'International Applicants', path: '/admissions/international' },
      { label: 'Credit Transfer & RPL', path: '/admissions/credit-transfer' },
      { label: 'Scholarships & Financial Aid', path: '/admissions/scholarships' },
      { label: 'Campus Visits & Open Days', path: '/admissions/campus-visits' },
    ],
  },
  {
    label: 'Research',
    items: [
      { label: 'Research Overview', path: '/research' },
      { label: 'Research Centres', path: '/research/centres' },
      { label: 'PhD Opportunities', path: '/research/phd-opportunities' },
      { label: 'Publications & Repository', path: '/research/publications' },
    ],
  },
  {
    label: 'Student Life',
    items: [
      { label: 'Student Life Overview', path: '/student-life' },
      { label: 'Accommodation & Housing', path: '/student-life/accommodation' },
      { label: 'Health & Wellbeing', path: '/student-life/health' },
      { label: 'Sports & Recreation', path: '/student-life/sports' },
      { label: 'Career Services', path: '/student-life/careers' },
      { label: 'Library', path: '/library' },
      { label: 'Events', path: '/events' },
    ],
  },
  {
    label: 'About',
    items: [
      { label: 'About AVIU', path: '/about' },
      { label: 'Leadership & Governance', path: '/about/leadership' },
      { label: 'University Organisation', path: '/about/organisation' },
      { label: 'Campus & Visitor Info', path: '/about/campus' },
      { label: 'Alumni & Donors', path: '/about/alumni' },
      { label: 'Careers at AVIU', path: '/about/careers' },
      { label: 'Staff Directory', path: '/staff' },
      { label: 'Gallery', path: '/gallery' },
      { label: 'Academic Calendar', path: '/academic-calendar' },
      { label: 'Downloads', path: '/downloads' },
      { label: 'News', path: '/news' },
    ],
  },
  {
    label: 'Contact',
    items: [
      { label: 'Contact Us', path: '/contact' },
      { label: 'Staff & Department Directory', path: '/contact/directory' },
      { label: 'Campus Safety', path: '/contact/campus-safety' },
    ],
  },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [currentDate, setCurrentDate] = useState('');
  const { path, navigate } = useRouter();
  const { openApply } = useApply();

  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    setCurrentDate(formatted);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const go = useCallback((to: string) => {
    setMenuOpen(false);
    setOpenDropdown(null);
    navigate(to);
  }, [navigate]);

  const isActive = (group: NavGroup) =>
    group.items.some((item) => path === item.path);

  return (
    <>
      <div className="announcement">
        <span className="announcement-dot" />
        <span className="announcement-date">{currentDate}</span>
        <span className="announcement-divider" />
        <span className="announcement-text" key={announcementIndex}>{announcements[announcementIndex]}</span>
        <button onClick={openApply}>Apply now</button>
      </div>
      <header
        className="header"
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <a
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            go('/');
          }}
          aria-label={`${universityInfo.name} home`}
        >
          <img src="/images/aviu-logo.png" alt="Avance International University logo" />
          <span>
            <strong>AVANCE</strong>
            <small>INTERNATIONAL UNIVERSITY</small>
          </span>
        </a>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          {navGroups.map((group) => (
            <div
              className="nav-group"
              key={group.label}
              onMouseEnter={() => {
                if (window.matchMedia('(min-width: 701px)').matches) setOpenDropdown(group.label);
              }}
            >
              <a
                className={isActive(group) ? 'nav-active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  if (group.items.length > 1 && window.matchMedia('(max-width: 700px)').matches) {
                    setOpenDropdown(openDropdown === group.label ? null : group.label);
                  } else {
                    go(group.items[0].path);
                  }
                }}
              >
                {group.label}
                {group.items.length > 1 && <ChevronDown size={13} />}
              </a>
              {group.items.length > 1 && openDropdown === group.label && (
                <div className="nav-dropdown">
                  {group.items.map((item) => (
                    <a
                      key={item.path}
                      className={path === item.path ? 'dropdown-active' : ''}
                      onClick={(e) => {
                        e.preventDefault();
                        go(item.path);
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            className="nav-apply mobile-apply"
            href="#/elearning"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', marginTop: 8 }}
          >
            E-Learning Portal
          </a>
          <button className="nav-apply mobile-apply" onClick={openApply}>
            Apply to AVIU
          </button>
        </nav>
        <div className="header-actions">
          <button
            className="icon-button"
            aria-label="Search"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search size={19} />
          </button>
          <ThemeToggle />
          <a
            className="nav-apply"
            href="#/elearning"
            onClick={(e) => { e.preventDefault(); go('/elearning'); }}
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
          >
            E-Learning
          </a>
          <button className="nav-apply" onClick={openApply}>
            Apply to AVIU
          </button>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {searchOpen && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search programmes, research, news..."
            autoFocus
          />
          <button onClick={() => setSearchOpen(false)}>Close</button>
        </div>
      )}
    </>
  );
}
