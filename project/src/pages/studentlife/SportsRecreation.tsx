import { ArrowRight, Trophy, Users, Dumbbell } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

const sportsTeams = [
  { name: 'Football (Men)', description: 'Our men\'s football team competes in the inter-university league and regional tournaments.' },
  { name: 'Football (Women)', description: 'The women\'s football team welcomes players of all skill levels and competes regionally.' },
  { name: 'Volleyball', description: 'Mixed volleyball team with regular practice sessions and inter-faculty competitions.' },
  { name: 'Basketball', description: 'Men\'s and women\'s basketball teams that compete in the city league.' },
  { name: 'Athletics', description: 'Track and field athletes representing AVIU at regional competitions.' },
  { name: 'Netball', description: 'Our netball team is one of the most active clubs on campus.' },
];

const facilities = [
  { icon: Trophy, title: 'Sports Grounds', description: 'Outdoor football pitch, volleyball court, and athletics track available for student use.' },
  { icon: Dumbbell, title: 'Fitness Centre', description: 'A modest gym facility with cardio and strength equipment, free for all enrolled students.' },
  { icon: Users, title: 'Intramural Leagues', description: 'Casual, fun-focused leagues running each semester. Sign up individually or as a team.' },
];

export function SportsRecreation() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.studentlife}
        eyebrow="Student life"
        title={<>Sports &amp; <em>Recreation</em></>}
        subtitle="Stay active, make friends, and represent AVIU. Our sports teams, fitness facilities, and intramural leagues offer something for every student, from competitive athletes to casual participants."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Student Life', path: '/student-life' }, { label: 'Sports & Recreation', path: '/student-life/sports' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Varsity teams</div>
            <h2>Compete for <em>AVIU.</em></h2>
          </div>
        </div>
        <div className="staff-grid">
          {sportsTeams.map((team) => (
            <article className="staff-card" key={team.name}>
              <span className="staff-avatar"><Trophy size={20} /></span>
              <strong>{team.name}</strong>
              <span className="staff-role">{team.description}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Facilities</div>
            <h2>Stay <em>active.</em></h2>
          </div>
        </div>
        <div className="library-grid">
          {facilities.map((f) => (
            <article className="library-card" key={f.title}>
              <span className="library-icon"><f.icon size={24} strokeWidth={1.5} /></span>
              <strong>{f.title}</strong>
              <p>{f.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="two-col-layout">
          <div className="col-half">
            <div className="eyebrow"><span className="eyebrow-line" /> Get involved</div>
            <h2>Join a <em>team.</em></h2>
            <p>Trials for varsity teams are held at the start of each semester. Intramural leagues accept registrations throughout the semester. No experience is required for intramural sports — just enthusiasm.</p>
            <p>Students can also start new clubs and societies through the student guild. If your sport is not listed, speak to the guild sports officer about starting a new club.</p>
          </div>
          <div className="col-half">
            <div className="library-grid">
              <div className="library-card">
                <span className="library-icon"><Users size={24} strokeWidth={1.5} /></span>
                <strong>Clubs &amp; Societies</strong>
                <p>From debate club to drama society, AVIU has over 20 student-run clubs and societies.</p>
              </div>
              <div className="library-card">
                <span className="library-icon"><Users size={24} strokeWidth={1.5} /></span>
                <strong>Start a Club</strong>
                <p>Have an idea for a new club? The student guild can help you get it started.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <BackgroundCarousel images={pageImages.studentlife} overlay={0.88} />
        <div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Get active</div>
          <h2>Join a team or club.</h2>
          <p>Contact the student guild to sign up for sports, clubs, or intramural leagues.</p>
        </div>
        <button className="button button-light" onClick={() => navigate('/contact')}>Get involved <ArrowRight size={17} /></button>
      </section>
    </div>
  );
}
