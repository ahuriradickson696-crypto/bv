import { ArrowRight } from 'lucide-react';
import { useRouter } from '@/router/Router';

export function NotFound() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <section className="section-pad" style={{ textAlign: 'center', paddingTop: 80, paddingBottom: 80 }}>
        <p style={{ fontSize: 64, fontWeight: 700, color: 'var(--purple-300)', margin: 0 }}>404</p>
        <h1 style={{ marginTop: 8 }}>Page not found</h1>
        <p style={{ color: 'var(--ink-soft)', maxWidth: 420, margin: '12px auto 28px' }}>
          The page you requested does not exist or has moved. Try the course finder or return home.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="button" onClick={() => navigate('/')}>
            Home <ArrowRight size={16} />
          </button>
          <button className="button button-outline" onClick={() => navigate('/study/course-finder')}>
            Course Finder
          </button>
          <button className="button button-outline" onClick={() => navigate('/contact')}>
            Contact
          </button>
        </div>
      </section>
    </div>
  );
}
