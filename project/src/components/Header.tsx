import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { universityInfo } from '@/data/university';
import { useRouter } from '@/router/Router';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useApply } from '@/components/ApplyContext';

const announcements = [
  { text: 'Applications open — January, May, August & September intakes', image: '/images/admission-poster.jpeg' },
  { text: 'Graduation Day: 25 September every year — all faculties', image: '/images/graduation-ceremony.jpg' },
  { text: '25 NCHE-accredited bachelor programmes · Nabweru, Wakiso', image: '/images/campus-building.jpg' },
  { text: 'International students welcome — visa guidance available', image: '/images/campus-aviu-students-1.jpg' },
  { text: 'Nursing & health pathways — contact Admissions for current intake', image: '/images/medical-facility-tour.jpg' },
  { text: 'Education programmes for future teachers — school practice included', image: '/images/classroom-students.jpg' },
  { text: 'Visit campus: Nabweru, Wakiso · +256 700 670 691', image: '/images/university-gate.jpg' },
  { text: 'Campus life & student community at AVIU', image: '/images/campus-aviu-event-1.jpg' },
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
      { label: 'Online learning info', path: '/study/online' },
      { label: 'International Study', path: '/study/international' },
      { label: 'Course Finder', path: '/study/course-finder' },
      { label: 'Fees (Coming Soon)', path: '/fees' },
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
      { label: 'PhD (Coming Soon)', path: '/research/phd-opportunities' },
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
  const goHome = () => navigate('/');
  const isHome = path === '/' || path === '';

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
      <div
        className="announcement announcement-full"
        key={announcementIndex}
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(20,9,42,0.88) 0%, rgba(45,20,84,0.75) 45%, rgba(20,9,42,0.85) 100%), url(${announcements[announcementIndex].image})`,
        }}
      >
        <span className="announcement-date">{currentDate}</span>
        <span className="announcement-text announcement-text-strong">{announcements[announcementIndex].text}</span>
        <div className="announcement-actions">
          {!isHome && (
            <button type="button" className="announcement-home-btn" onClick={goHome} aria-label="Go to home page">
              Home
            </button>
          )}
          <button type="button" className="announcement-apply-btn" onClick={openApply}>Apply now</button>
        </div>
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
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
          <div className="nav-logo-bg" aria-hidden="true">
            <img src="/images/aviu-logo-full.png" alt="" />
          </div>
          <div className="nav-mobile-panel">
            <div className="nav-mobile-brand">
              <img src="/images/aviu-logo.png" alt="" width={48} height={48} />
              <div>
                <strong>AVANCE</strong>
                <small>International University</small>
              </div>
            </div>
          <button type="button" className="nav-home-item" onClick={() => go('/')} style={{ fontWeight: 700, marginRight: 8 }}>Home</button>
          {navGroups.map((group) => (
            <div
              className="nav-group"
              key={group.label}
              onMouseEnter={() => {
                if (window.matchMedia('(min-width: 701px)').matches) setOpenDropdown(group.label);
              }}
            >
              <a
                href={group.items[0].path}
                className={isActive(group) ? 'nav-active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const isNarrow = window.matchMedia('(max-width: 900px)').matches;
                  if (group.items.length > 1 && isNarrow) {
                    setOpenDropdown(openDropdown === group.label ? null : group.label);
                  } else if (group.items.length > 1 && !isNarrow) {
                    // desktop: navigate to overview (first item)
                    setMenuOpen(false);
                    go(group.items[0].path);
                  } else {
                    setMenuOpen(false);
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
                      href={item.path}
                      className={path === item.path ? 'dropdown-active' : ''}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setMenuOpen(false);
                        setOpenDropdown(null);
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
          <button className="nav-apply mobile-apply" onClick={openApply}>
            Apply to AVIU
          </button>
          </div>
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
