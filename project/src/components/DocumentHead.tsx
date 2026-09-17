import { useEffect } from 'react';
import { useRouter } from '@/router/Router';

const titles: Record<string, string> = {
  '/': 'Avance International University — Enhancing Innovations',
  '/study': 'Study Programmes | AVIU',
  '/study/undergraduate': 'Undergraduate Study | AVIU',
  '/study/postgraduate': 'Postgraduate Study | AVIU',
  '/study/online': 'Online Learning | AVIU',
  '/study/international': 'International Study | AVIU',
  '/study/course-finder': 'Course Finder — 25 NCHE Programmes | AVIU',
  '/admissions': 'Admissions | AVIU',
  '/admissions/how-to-apply': 'How to Apply | AVIU',
  '/admissions/entry-requirements': 'Entry Requirements | AVIU',
  '/admissions/international': 'International Admissions | AVIU',
  '/admissions/credit-transfer': 'Credit Transfer | AVIU',
  '/admissions/scholarships': 'Scholarships (Coming Soon) | AVIU',
  '/admissions/campus-visits': 'Campus Visits | AVIU',
  '/research': 'Research | AVIU',
  '/research/phd-opportunities': 'PhD Opportunities (Coming Soon) | AVIU',
  '/student-life': 'Student Life | AVIU',
  '/about': 'About AVIU',
  '/about/leadership': 'Leadership & Governance | AVIU',
  '/about/campus': 'Campus | AVIU',
  '/about/alumni': 'Alumni | AVIU',
  '/fees': 'Fees (Coming Soon) | AVIU',
  '/contact': 'Contact | AVIU',
  '/news': 'News | AVIU',
  '/events': 'Events | AVIU',
  '/gallery': 'Gallery | AVIU',
  '/library': 'Library | AVIU',
  '/staff': 'Staff Directory | AVIU',
  '/academic-calendar': 'Academic Calendar | AVIU',
  '/downloads': 'Downloads | AVIU',
  '/privacy': 'Privacy Policy | AVIU',
  '/terms': 'Terms of Use | AVIU',
  '/cookies': 'Cookie Policy | AVIU',
  '/accessibility': 'Accessibility Statement | AVIU',
};

const descriptions: Record<string, string> = {
  '/': 'Avance International University (AVIU) — 25 NCHE-accredited bachelor programmes in Education, Business, Computing, Nursing and Social Sciences. Nabweru, Uganda. International students welcome.',
  '/study/course-finder': 'Search and download all 25 NCHE-accredited programmes at Avance International University. Filter by faculty and discipline.',
  '/admissions/international': 'International admissions at AVIU: entry requirements, English tests, visa steps, airport pickup and orientation for students from outside Uganda.',
  '/fees': 'Tuition fees and bursaries information is Coming Soon. Contact admissions@aviu.ac.ug for current guidance.',
};

export function DocumentHead() {
  const { path } = useRouter();

  useEffect(() => {
    const base = 'Avance International University — Enhancing Innovations';
    if (path.startsWith('/study/programme/')) return; // handled by ProgrammeDetail
    document.title = titles[path] || base;

    const content =
      descriptions[path] ||
      'Avance International University (AVIU) is a private NCHE-accredited university in Uganda offering bachelor programmes for local and international students.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);

    // Open Graph basics
    const setOg = (property: string, value: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };
    setOg('og:title', document.title);
    setOg('og:description', content);
    setOg('og:type', 'website');
    setOg('og:site_name', 'Avance International University');
  }, [path]);

  return null;
}
