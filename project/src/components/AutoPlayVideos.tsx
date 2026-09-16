const videoIds = [
  '7bcnZQhDfzM',
  'AS6sHqFZek4',
  '-Z3M-jtCSDU',
];

export function AutoPlayVideos() {
  return (
    <section className="autoplay-videos-section" aria-label="Campus videos">
      <div className="autoplay-videos-inner">
        {videoIds.map((id) => (
          <div className="autoplay-video-wrap" key={id}>
            <iframe
              src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&playsinline=1`}
              title="AVIU campus video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
