/**
 * Unified gallery media — photos + TikTok videos for AVIU site.
 * Ordered for display: campus life → academics → graduation → admissions marketing.
 */

export type GalleryPhoto = {
  id: string;
  type: 'photo';
  src: string;
  title: string;
  category: 'campus' | 'academic' | 'graduation' | 'events' | 'community';
  alt: string;
};

export type GalleryTikTok = {
  id: string;
  type: 'tiktok';
  videoId: string;
  cite: string;
  author: string;
  title: string;
  category: 'campus' | 'academic' | 'graduation' | 'events' | 'community' | 'admissions';
  caption?: string;
};

export type GalleryItem = GalleryPhoto | GalleryTikTok;

export const galleryPhotos: GalleryPhoto[] = [
  { id: 'ph-01', type: 'photo', src: '/images/campus-aviu-students-1.jpg', title: 'Students on campus', category: 'campus', alt: 'AVIU students on campus' },
  { id: 'ph-02', type: 'photo', src: '/images/campus-aviu-event-1.jpg', title: 'Campus event', category: 'events', alt: 'Campus event at AVIU' },
  { id: 'ph-03', type: 'photo', src: '/images/campus-aviu-students-2.jpg', title: 'Student community', category: 'campus', alt: 'Students together on campus' },
  { id: 'ph-04', type: 'photo', src: '/images/campus-aviu-event-2.jpg', title: 'University gathering', category: 'events', alt: 'University gathering' },
  { id: 'ph-05', type: 'photo', src: '/images/campus-aviu-extra.jpg', title: 'Campus activities', category: 'campus', alt: 'Campus activities' },
  { id: 'ph-06', type: 'photo', src: '/images/campus-aviu-students-3.jpg', title: 'Learning community', category: 'campus', alt: 'AVIU learning community' },
  { id: 'ph-07', type: 'photo', src: '/images/university-gate.jpg', title: 'University gate', category: 'campus', alt: 'Avance International University gate' },
  { id: 'ph-08', type: 'photo', src: '/images/campus-aerial.jpg', title: 'Campus aerial view', category: 'campus', alt: 'Aerial view of campus' },
  { id: 'ph-09', type: 'photo', src: '/images/campus-building.jpg', title: 'Campus buildings', category: 'campus', alt: 'Campus buildings' },
  { id: 'ph-10', type: 'photo', src: '/images/classroom-discussion.jpg', title: 'Classroom discussion', category: 'academic', alt: 'Students in classroom discussion' },
  { id: 'ph-11', type: 'photo', src: '/images/classroom-students.jpg', title: 'In the classroom', category: 'academic', alt: 'Students in class' },
  { id: 'ph-12', type: 'photo', src: '/images/classroom-anatomy.jpg', title: 'Health sciences class', category: 'academic', alt: 'Anatomy classroom' },
  { id: 'ph-13', type: 'photo', src: '/images/lab-microscope.jpg', title: 'Science laboratory', category: 'academic', alt: 'Microscope laboratory' },
  { id: 'ph-14', type: 'photo', src: '/images/lab-pharmacy.jpg', title: 'Pharmacy lab', category: 'academic', alt: 'Pharmacy laboratory' },
  { id: 'ph-15', type: 'photo', src: '/images/lab-herbal.jpg', title: 'Herbal medicine lab', category: 'academic', alt: 'Herbal medicine lab' },
  { id: 'ph-16', type: 'photo', src: '/images/lab-equipment-visit.jpg', title: 'Lab equipment visit', category: 'academic', alt: 'Lab equipment visit' },
  { id: 'ph-17', type: 'photo', src: '/images/guest-lecture.jpg', title: 'Guest lecture', category: 'academic', alt: 'Guest lecture' },
  { id: 'ph-18', type: 'photo', src: '/images/conference-audience.jpg', title: 'Conference', category: 'events', alt: 'Conference audience' },
  { id: 'ph-19', type: 'photo', src: '/images/graduation-ceremony.jpg', title: 'Graduation ceremony', category: 'graduation', alt: 'Graduation ceremony' },
  { id: 'ph-20', type: 'photo', src: '/images/graduation-crowd.jpg', title: 'Graduation day', category: 'graduation', alt: 'Graduation crowd' },
  { id: 'ph-21', type: 'photo', src: '/images/graduates-group.jpg', title: 'Graduates group', category: 'graduation', alt: 'Group of graduates' },
  { id: 'ph-22', type: 'photo', src: '/images/graduates-laughing.jpg', title: 'Graduation joy', category: 'graduation', alt: 'Graduates celebrating' },
  { id: 'ph-23', type: 'photo', src: '/images/graduand-portrait.jpg', title: 'Graduand portrait', category: 'graduation', alt: 'Graduand portrait' },
  { id: 'ph-24', type: 'photo', src: '/images/award-ceremony.jpg', title: 'Award ceremony', category: 'events', alt: 'Award ceremony' },
  { id: 'ph-25', type: 'photo', src: '/images/board-meeting.jpg', title: 'Leadership meeting', category: 'events', alt: 'Board meeting' },
  { id: 'ph-26', type: 'photo', src: '/images/senate-meeting.jpg', title: 'Senate meeting', category: 'events', alt: 'Senate meeting' },
  { id: 'ph-27', type: 'photo', src: '/images/mou-signing.jpg', title: 'Partnership signing', category: 'events', alt: 'MoU signing' },
  { id: 'ph-28', type: 'photo', src: '/images/partnership-bathspa.jpg', title: 'International partnership', category: 'events', alt: 'Partnership event' },
  { id: 'ph-29', type: 'photo', src: '/images/staff-booth.jpg', title: 'Admissions outreach', category: 'community', alt: 'Staff booth' },
  { id: 'ph-30', type: 'photo', src: '/images/poetry-presentation.jpg', title: 'Student presentation', category: 'community', alt: 'Poetry presentation' },
  { id: 'ph-31', type: 'photo', src: '/images/medical-facility-tour.jpg', title: 'Medical facility tour', category: 'academic', alt: 'Medical facility tour' },
];

/** Unique TikTok embeds (duplicate freshers id listed once). */
export const galleryTikToks: GalleryTikTok[] = [
  {
    id: 'tt-01',
    type: 'tiktok',
    videoId: '7680955793369206037',
    cite: 'https://www.tiktok.com/@avancestudentpulse/video/7680955793369206037',
    author: '@avancestudentpulse',
    title: 'Campus pulse',
    category: 'campus',
    caption: 'Student life at Avance International University',
  },
  {
    id: 'tt-02',
    type: 'tiktok',
    videoId: '7680950353059171605',
    cite: 'https://www.tiktok.com/@avancestudentpulse/video/7680950353059171605',
    author: '@avancestudentpulse',
    title: 'Student updates',
    category: 'campus',
    caption: 'AVIU campus moments',
  },
  {
    id: 'tt-03',
    type: 'tiktok',
    videoId: '7677872394085666056',
    cite: 'https://www.tiktok.com/@avancestudentpulse/video/7677872394085666056',
    author: '@avancestudentpulse',
    title: 'Avance welcomes you',
    category: 'admissions',
    caption: 'Avance welcomes you all',
  },
  {
    id: 'tt-04',
    type: 'tiktok',
    videoId: '7680938151392660757',
    cite: 'https://www.tiktok.com/@avancestudentpulse/video/7680938151392660757',
    author: '@avancestudentpulse',
    title: 'University life',
    category: 'campus',
    caption: 'Life at AVIU',
  },
  {
    id: 'tt-05',
    type: 'tiktok',
    videoId: '7554395938597457163',
    cite: 'https://www.tiktok.com/@plutv.1/video/7554395938597457163',
    author: '@plutv.1',
    title: '4th Graduation ceremony',
    category: 'graduation',
    caption: 'Enjoyment at Avance International University — 4th Graduation ceremony',
  },
  {
    id: 'tt-06',
    type: 'tiktok',
    videoId: '7665272926593240337',
    cite: 'https://www.tiktok.com/@avance.marketing/video/7665272926593240337',
    author: '@avance.marketing',
    title: 'Future teachers',
    category: 'admissions',
    caption: 'We value our future teachers — Education programmes',
  },
  {
    id: 'tt-07',
    type: 'tiktok',
    videoId: '7675662314942582033',
    cite: 'https://www.tiktok.com/@avance.marketing/video/7675662314942582033',
    author: '@avance.marketing',
    title: 'Progress to the next level',
    category: 'admissions',
    caption: 'Going from one level to another should not be difficult',
  },
  {
    id: 'tt-08',
    type: 'tiktok',
    videoId: '7675315240908721409',
    cite: 'https://www.tiktok.com/@avance.marketing/video/7675315240908721409',
    author: '@avance.marketing',
    title: 'Welcome freshers',
    category: 'admissions',
    caption: 'A special welcome to our Freshers',
  },
  {
    id: 'tt-09',
    type: 'tiktok',
    videoId: '7659478431549099265',
    cite: 'https://www.tiktok.com/@avance.marketing/video/7659478431549099265',
    author: '@avance.marketing',
    title: 'Nursing & midwifery intake',
    category: 'admissions',
    caption: 'July intake for future nurses and midwives',
  },
];

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'campus', label: 'Campus life' },
  { id: 'academic', label: 'Academics' },
  { id: 'graduation', label: 'Graduation' },
  { id: 'events', label: 'Events' },
  { id: 'admissions', label: 'Admissions & welcome' },
  { id: 'community', label: 'Community' },
] as const;

/** Ordered mixed feed for Gallery page */
export const galleryFeed: GalleryItem[] = [
  ...galleryTikToks.filter((t) => t.category === 'campus'),
  ...galleryPhotos.filter((p) => p.category === 'campus'),
  ...galleryTikToks.filter((t) => t.category === 'admissions'),
  ...galleryPhotos.filter((p) => p.category === 'academic'),
  ...galleryTikToks.filter((t) => t.category === 'graduation'),
  ...galleryPhotos.filter((p) => p.category === 'graduation'),
  ...galleryPhotos.filter((p) => p.category === 'events'),
  ...galleryPhotos.filter((p) => p.category === 'community'),
];

export function tiktoksByCategory(cat: GalleryTikTok['category']) {
  return galleryTikToks.filter((t) => t.category === cat);
}
