import { Calendar, BookOpen, FileText, Users } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { pageImages } from '@/data/pageImages';

const calendarItems = [
  { period: '8–14 February 2026', title: 'End of normal registration', detail: 'Late registration surcharge applies after this week.', icon: FileText },
  { period: '15–21 February 2026', title: 'Tuition payment reminder', detail: 'Memo from the Bursar on full tuition payment and extra 50% fees where applicable.', icon: FileText },
  { period: '22–28 February 2026', title: 'Cultural Gala / AVIU Cultural Day & CAT 2', detail: 'Cultural Day celebrations and Continuous Assessment Tests (CAT 2).', icon: Users },
  { period: '1–7 March 2026', title: 'Tours & associations', detail: 'Campus tours and student association activities.', icon: Users },
  { period: 'May 2026', title: 'May intake orientation', detail: 'Welcome and orientation for May intake students.', icon: BookOpen },
  { period: 'August 2026', title: 'August 2026 intake open', detail: 'Admissions open for Certificate, Diploma, Bachelor and Postgraduate programmes. Half bursary available until end of August.', icon: Calendar },
  { period: 'September 2026', title: 'September intake applications', detail: 'Applications for September intake across all faculties and schools.', icon: Calendar },
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
