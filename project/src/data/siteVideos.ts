/**
 * Every official YouTube video used on the AVIU website.
 * Single source for Gallery + floating player.
 */
export type SiteVideo = {
  id: string;
  title: string;
  group: 'campus' | 'leadership' | 'ceremony' | 'academic' | 'media';
};

export const ALL_SITE_VIDEOS: SiteVideo[] = [
  { id: 'XPQdBYI9vcU', title: 'Bishop Ssebagala Installation', group: 'ceremony' },
  { id: 'qqWsn74VlT0', title: 'VC on uniqueness of Avance', group: 'leadership' },
  { id: 'cQWuuKjoh44', title: 'Campus facilities & discussion', group: 'campus' },
  { id: 'aTqd3eX377U', title: 'Faculty & programme highlights', group: 'academic' },
  { id: 'gOdpEUC96vY', title: 'University media update', group: 'media' },
  { id: '7bcnZQhDfzM', title: 'Campus video 1', group: 'campus' },
  { id: 'AS6sHqFZek4', title: 'Campus video 2', group: 'campus' },
  { id: '-Z3M-jtCSDU', title: 'Campus video 3', group: 'campus' },
];

export const ALL_VIDEO_IDS = ALL_SITE_VIDEOS.map((v) => v.id);

export function ytPlayerSrc(id: string, opts?: { mute?: boolean; controls?: boolean }) {
  const mute = opts?.mute === false ? 0 : 1;
  const controls = opts?.controls === false ? 0 : 1;
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=${mute}&loop=1&playlist=${id}&controls=${controls}&modestbranding=1&rel=0&playsinline=1`;
}
