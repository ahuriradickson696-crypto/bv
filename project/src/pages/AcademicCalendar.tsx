import { Calendar, BookOpen, FileText, Users } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { pageImages } from '@/data/pageImages';

const calendarItems = [
  { period: 'January 2026', title: 'January intake orientation', detail: 'Welcome and orientation for January intake students, including international arrivals.', icon: BookOpen },
  { period: '8–14 February 2026', title: 'End of normal registration', detail: 'Late registration procedures apply after this week. Confirm with Academic Registrar.', icon: FileText },
  { period: '22–28 February 2026', title: 'Cultural Gala / AVIU Cultural Day & CAT 2', detail: 'Cultural Day celebrations and Continuous Assessment Tests (CAT 2).', icon: Users },
  { period: 'May 2026', title: 'May intake orientation', detail: 'Welcome and orientation for May intake students (local and international).', icon: BookOpen },
  { period: 'August 2026', title: 'August / September intake applications', detail: 'Admissions open for all 25 NCHE-accredited bachelor programmes. Apply via admissions@aviu.ac.ug.', icon: Calendar },
  { period: '15 September 2026', title: 'AVIU Innovation Fair', detail: 'Student and faculty project showcase at the Innovation Centre.', icon: Users },
  { period: '25 September (every year)', title: 'AVIU Annual Graduation Ceremony', detail: 'University-wide graduation for all faculties and schools. Graduands, families and international guests welcome.', icon: Calendar },
  { period: '5 October 2026', title: 'Annual Research Conference', detail: 'Faculty and student research presentations.', icon: BookOpen },
  { period: '25 October 2026', title: 'Open Day', detail: 'Campus tours and programme advice for prospective and international students.', icon: Users },
  { period: 'Ongoing', title: 'Library hours', detail: 'Mon–Fri 8:00 AM–10:00 PM · Sat 9:00 AM–6:00 PM · E-Library 24/7.', icon: BookOpen },
];

export function AcademicCalendar() {
  return (
    <div className="page-content">
      <PageHero
        images={pageImages.home}
        eyebrow="Academic year"
        title={<>Academic <em>Calendar</em></>}
        subtitle="Key dates for registration, assessments, cultural events, and intakes at Avance International University. Always confirm with the Academic Registrar for official deadlines."
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> 2026 key dates
            </div>
            <h2>
              Plan your <em>semester.</em>
            </h2>
          </div>
        </div>
        <div className="calendar-list">
          {calendarItems.map((item) => {
            const Icon = item.icon;
            return (
              <div className="calendar-item" key={item.period + item.title}>
                <span className="calendar-icon">
                  <Icon size={20} />
                </span>
                <div>
                  <span className="calendar-period">{item.period}</span>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="tuition-note" style={{ marginTop: 32 }}>
          Dates may be updated by the university. For the latest official calendar, contact the Academic Registrar or check notices on campus and the student portal.
        </p>
      </section>
    </div>
  );
}
