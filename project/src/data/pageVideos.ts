/**
 * Official AVIU YouTube IDs — muted autoplay backgrounds per section.
 * Sources provided by the University media team.
 */
export const AVIU_VIDEOS = {
  installation: 'XPQdBYI9vcU', // Bishop Ssebagala Installation
  vcMessage: 'qqWsn74VlT0', // VC Dr. Kato — uniqueness of Avance
  facilities: 'cQWuuKjoh44', // Full campus facilities & discussion
  faculty: 'aTqd3eX377U', // Faculty & programme highlights
  mediaUpdate: 'gOdpEUC96vY', // University media update
} as const;

/** Default rotation for general pages */
/** Graduation/ceremony + campus environment — backgrounds on all pages */
export const defaultPageVideos = [
  AVIU_VIDEOS.installation, // ceremony / graduation
  AVIU_VIDEOS.facilities,   // campus environment
];

/** Home hero / ad slides — one video per slide */
export const homeSlideVideos = [
  AVIU_VIDEOS.installation,
  AVIU_VIDEOS.vcMessage,
  AVIU_VIDEOS.facilities,
  AVIU_VIDEOS.faculty,
  AVIU_VIDEOS.mediaUpdate,
];

/**
 * Map route-ish keys to the videos that should play as page backgrounds.
 */
export const pageVideos: Record<string, string[]> = {
  home: [AVIU_VIDEOS.installation, AVIU_VIDEOS.facilities],
  about: [AVIU_VIDEOS.installation, AVIU_VIDEOS.facilities],
  leadership: [AVIU_VIDEOS.installation, AVIU_VIDEOS.facilities],
  study: [AVIU_VIDEOS.installation, AVIU_VIDEOS.facilities],
  admissions: [AVIU_VIDEOS.installation, AVIU_VIDEOS.facilities],
  international: [AVIU_VIDEOS.installation, AVIU_VIDEOS.facilities],
  studentlife: [AVIU_VIDEOS.installation, AVIU_VIDEOS.facilities],
  events: [AVIU_VIDEOS.installation, AVIU_VIDEOS.facilities],
  news: [AVIU_VIDEOS.installation, AVIU_VIDEOS.facilities],
  research: [AVIU_VIDEOS.installation, AVIU_VIDEOS.facilities],
  staff: [AVIU_VIDEOS.installation, AVIU_VIDEOS.facilities],
  library: [AVIU_VIDEOS.installation, AVIU_VIDEOS.facilities],
  gallery: [AVIU_VIDEOS.installation, AVIU_VIDEOS.facilities],
  contact: [AVIU_VIDEOS.installation, AVIU_VIDEOS.facilities],
  fees: [AVIU_VIDEOS.installation, AVIU_VIDEOS.facilities],
  campus: [AVIU_VIDEOS.installation, AVIU_VIDEOS.facilities],
};

export function videosFor(key: string): string[] {
  return pageVideos[key] || defaultPageVideos;
}

export function youtubeBgSrc(id: string) {
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&playsinline=1&showinfo=0`;
}
