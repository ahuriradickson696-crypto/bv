import { useState } from 'react';
import { X } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { pageImages, allGallery } from '@/data/pageImages';

const labels: Record<string, string> = {
  'campus-aviu-students-1.jpg': 'Campus life — students',
  'campus-aviu-event-1.jpg': 'Campus event',
  'campus-aviu-students-2.jpg': 'Students on campus',
  'campus-aviu-event-2.jpg': 'University event',
  'campus-aviu-extra.jpg': 'Campus activities',
  'campus-aviu-students-3.jpg': 'Student community',
  'university-gate.jpg': 'University gate',
  'campus-aerial.jpg': 'Campus aerial view',
  'campus-building.jpg': 'Campus buildings',
  'award-ceremony.jpg': 'Award ceremony',
  'award-ceremony copy.jpg': 'Recognition event',
  'board-meeting.jpg': 'Board meeting',
  'classroom-anatomy.jpg': 'Anatomy classroom',
  'classroom-discussion.jpg': 'Classroom discussion',
  'classroom-students.jpg': 'Students in class',
  'conference-audience.jpg': 'Conference',
  'graduand-portrait.jpg': 'Graduand',
  'graduates-group.jpg': 'Graduates group',
  'graduates-laughing.jpg': 'Graduation celebrations',
  'graduation-ceremony.jpg': 'Graduation ceremony',
  'graduation-crowd.jpg': 'Graduation crowd',
  'guest-lecture.jpg': 'Guest lecture',
  'lab-equipment-visit.jpg': 'Lab equipment visit',
  'lab-herbal.jpg': 'Herbal medicine lab',
  'lab-microscope.jpg': 'Microscope lab',
  'lab-pharmacy.jpg': 'Pharmacy lab',
  'medical-facility-tour.jpg': 'Medical facility tour',
  'mou-signing.jpg': 'MoU signing',
  'partnership-bathspa.jpg': 'Partnership event',
  'poetry-presentation.jpg': 'Poetry presentation',
  'senate-meeting.jpg': 'Senate meeting',
  'staff-booth.jpg': 'Staff booth',
};

function getLabel(src: string) {
  const name = src.split('/').pop() || '';
  return labels[name] || name.replace(/\.[^.]+$/, '').replace(/-/g, ' ');
}

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.gallery.slice(0, 6)}
        eyebrow="Campus gallery"
        title={<>Life at <em>Avance</em></>}
        subtitle="Explore our campus, classrooms, labs, graduations, and student life through photos from Avance International University."
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Photo gallery
            </div>
            <h2>
              Moments from <em>Nabweru campus.</em>
            </h2>
          </div>
        </div>
        <div className="gallery-grid">
          {allGallery.map((src) => (
            <button
              key={src}
              type="button"
              className="gallery-item"
              onClick={() => setLightbox(src)}
              aria-label={getLabel(src)}
            >
              <img src={src} alt={getLabel(src)} loading="lazy" />
              <span className="gallery-caption">{getLabel(src)}</span>
            </button>
          ))}
        </div>
      </section>

      {lightbox && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button type="button" className="gallery-lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
            <X size={24} />
          </button>
          <img src={lightbox} alt={getLabel(lightbox)} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
