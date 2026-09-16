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
export const defaultPageVideos = [
  AVIU_VIDEOS.facilities,
  AVIU_VIDEOS.mediaUpdate,
  AVIU_VIDEOS.vcMessage,
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
  home: homeSlideVideos,
  about: [AVIU_VIDEOS.installation, AVIU_VIDEOS.vcMessage, AVIU_VIDEOS.mediaUpdate],
  leadership: [AVIU_VIDEOS.installation, AVIU_VIDEOS.vcMessage],
  study: [AVIU_VIDEOS.faculty, AVIU_VIDEOS.facilities, AVIU_VIDEOS.vcMessage],
  admissions: [AVIU_VIDEOS.facilities, AVIU_VIDEOS.faculty, AVIU_VIDEOS.mediaUpdate],
  international: [AVIU_VIDEOS.vcMessage, AVIU_VIDEOS.facilities],
  studentlife: [AVIU_VIDEOS.facilities, AVIU_VIDEOS.mediaUpdate],
  events: [AVIU_VIDEOS.installation, AVIU_VIDEOS.mediaUpdate, AVIU_VIDEOS.facilities],
  news: [AVIU_VIDEOS.mediaUpdate, AVIU_VIDEOS.installation],
  research: [AVIU_VIDEOS.vcMessage, AVIU_VIDEOS.faculty],
  staff: [AVIU_VIDEOS.vcMessage, AVIU_VIDEOS.faculty],
  library: [AVIU_VIDEOS.facilities],
  gallery: homeSlideVideos,
  contact: [AVIU_VIDEOS.mediaUpdate, AVIU_VIDEOS.facilities],
  fees: [AVIU_VIDEOS.facilities],
  campus: [AVIU_VIDEOS.facilities, AVIU_VIDEOS.mediaUpdate],
};

export function videosFor(key: string): string[] {
  return pageVideos[key] || defaultPageVideos;
}

export function youtubeBgSrc(id: string) {
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&playsinline=1&showinfo=0`;
}
