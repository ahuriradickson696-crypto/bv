import { useState } from 'react';
import { ArrowRight, Calendar, X } from 'lucide-react';
import { newsItems, type NewsItem } from '@/data/university';
import { PageHero } from '@/components/PageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';

export function News() {
  const { navigate } = useRouter();
  const { openApply } = useApply();
  const categories = ['All', ...Array.from(new Set(newsItems.map((n) => n.category)))];
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<NewsItem | null>(null);

  const filtered =
    filter === 'All' ? newsItems : newsItems.filter((n) => n.category === filter);

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.news}
        eyebrow="News & stories"
        title={<>What's happening at <em>Avance</em></>}
        subtitle="Stay up to date with the latest announcements, events, and stories from across our campus. From research breakthroughs to student achievements, there is always something happening at Avance International University."
      />

      <section className="section-pad">
        <div className="news-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-chip ${filter === cat ? 'chip-active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="news-grid">
          {filtered.map((item) => (
            <article className="news-card news-card-clickable" key={item.id} onClick={() => setSelected(item)}>
              <div className="news-meta">
                <span className="news-category">{item.category}</span>
                <span className="news-date">
                  <Calendar size={12} /> {item.date}
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <a className="text-link" onClick={(e) => { e.stopPropagation(); setSelected(item); }}>
                Read more <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.news} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> Stay informed
          </div>
          <h2>Never miss a story.</h2>
          <p>Follow us on social media or check back regularly for the latest updates.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>
          Get in touch <ArrowRight size={17} />
        </button>
      </section>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="inquiry-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close">
              <X size={18} />
            </button>
            <span className="news-category">{selected.category}</span>
            <span className="news-date" style={{ marginTop: '8px' }}>
              <Calendar size={12} /> {selected.date}
            </span>
            <h3 style={{ marginTop: '16px' }}>{selected.title}</h3>
            <p className="modal-desc">{selected.fullContent}</p>
            <button className="button button-primary" onClick={() => { setSelected(null); openApply(); }}>
              Apply now <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
