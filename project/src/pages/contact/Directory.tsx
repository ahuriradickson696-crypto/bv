import { useState } from 'react';
import { Search, ArrowRight, Mail, Phone } from 'lucide-react';
import { staffMembers, universityInfo } from '@/data/university';
import { SubPageHero } from '@/components/SubPageHero';
import { videosFor } from '@/data/pageVideos';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

const departments = [
  { name: 'Admissions Office', email: 'admissions@aviu.ac.ug', phone: '+256 700 670 691' },
  { name: 'Academic Registrar', email: 'registrar@aviu.ac.ug', phone: '+256 766 751 763' },
  { name: 'Bursar\'s Office', email: 'bursar@aviu.ac.ug', phone: '+256 700 670 692' },
  { name: 'Library Services', email: 'library@aviu.ac.ug', phone: '+256 700 670 693' },
  { name: 'International Office', email: 'international@aviu.ac.ug', phone: '+256 700 670 694' },
  { name: 'Student Services', email: 'studentservices@aviu.ac.ug', phone: '+256 700 670 695' },
  { name: 'HR Department', email: 'hr@aviu.ac.ug', phone: '+256 700 670 696' },
  { name: 'ICT Helpdesk', email: 'helpdesk@aviu.ac.ug', phone: '+256 700 670 697' },
];

export function Directory() {
  const { navigate } = useRouter();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<'All' | 'Academic' | 'Administrative'>('All');

  const filteredStaff = staffMembers.filter((s) => {
    const matchQuery = s.name.toLowerCase().includes(query.toLowerCase()) || s.role.toLowerCase().includes(query.toLowerCase());
    const matchFilter = filter === 'All' || s.category === filter;
    return matchQuery && matchFilter;
  });

  return (
    <div className="page-content">
      <SubPageHero
videos={videosFor('study')}         images={pageImages.contact}
        eyebrow="Contact"
        title={<>Staff &amp; Department <em>Directory</em></>}
        subtitle="Find contact information for faculty, administrative staff, and university departments. Search by name or filter by category."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Contact', path: '/contact' }, { label: 'Directory', path: '/contact/directory' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Staff search</div>
            <h2>Find a <em>person.</em></h2>
          </div>
        </div>
        <div className="course-finder-controls">
          <div className="course-search-wrap">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search staff by name or role..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="course-filter-row">
            <label>
              Category
              <select value={filter} onChange={(e) => setFilter(e.target.value as 'All' | 'Academic' | 'Administrative')}>
                <option value="All">All Staff</option>
                <option value="Academic">Academic</option>
                <option value="Administrative">Administrative</option>
              </select>
            </label>
          </div>
        </div>
        <p className="results-count">{filteredStaff.length} staff member{filteredStaff.length !== 1 ? 's' : ''} found</p>
        <div className="staff-grid">
          {filteredStaff.map((member) => (
            <article className="staff-card" key={member.name}>
              <span className="staff-avatar">{member.initials}</span>
              <strong>{member.name}</strong>
              <span className="staff-role">{member.role}</span>
              <span className="staff-qualification">{member.qualification}</span>
              <span className="staff-category">{member.category}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Department contacts</div>
            <h2>University <em>departments.</em></h2>
          </div>
        </div>
        <div className="contact-departments">
          {departments.map((dept) => (
            <div className="contact-dept" key={dept.name}>
              <strong>{dept.name}</strong>
              <span><Mail size={13} /> {dept.email}</span>
              <span><Phone size={13} /> {dept.phone}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.contact} overlay={0.88}  videos={videosFor('study')} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Need help?</div>
          <h2>Can't find who you need?</h2>
          <p>Send a general enquiry and we will route it to the right department.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>Contact us <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
