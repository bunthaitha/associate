import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import { ShieldCheck, HeartHandshake, Globe2, Target, Award, Users } from 'lucide-react';

export default function About({ onOpenChapterFinder, onNavigate }) {
  const leadership = [
    {
      name: 'Alexander Sterling',
      role: 'Global Founder & Chairman',
      bio: 'Former chamber of commerce director with 28 years advocating relationship-driven enterprise trade.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Claire Van Der Bilt',
      role: 'Chief Operations & Chapter Director',
      bio: 'Oversees chapter governance, international expansion standards, and member ethics across 75+ countries.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Dr. Kenzo Mori',
      role: 'Director of Professional Development',
      bio: 'Executive coach specializing in strategic referral psychology and cross-border commercial alliances.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Nadia Benali',
      role: 'Head of Global Communities (EMEA)',
      bio: 'Passionate connector linking European and Middle Eastern entrepreneurial networks to emerging trade hubs.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const values = [
    {
      icon: HeartHandshake,
      title: 'Relationship-First Growth',
      description: 'We believe genuine business growth is rooted in reciprocal trust, mutual care, and personal accountability.'
    },
    {
      icon: ShieldCheck,
      title: 'Uncompromised Integrity',
      description: 'Members pledge adherence to professional licensing standards, transparent commercial practices, and strict ethics.'
    },
    {
      icon: Target,
      title: 'Qualified Value Exchange',
      description: 'We prioritize warm, qualified introductions over volume, ensuring members receive actionable, high-probability referrals.'
    },
    {
      icon: Globe2,
      title: 'Global Inclusivity',
      description: 'A welcoming, diverse community bringing together entrepreneurs of all backgrounds, industries, and experience levels.'
    }
  ];

  return (
    <div className="page-content page-about">
      {/* Page Header Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <span className="eyebrow">ABOUT OUR ORGANIZATION</span>
          <h1 className="page-hero-title">Connecting Leaders. Building Legacies.</h1>
          <p className="page-hero-sub">
            DEMO ASSOCIATION is a premier international membership organization dedicated to cultivating long-term commercial success through trusted professional relationships.
          </p>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="section about-story-section" id="mission">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-media">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                alt="Executive board members collaborating"
                className="img-cover about-story-img"
              />
            </div>
            <div className="about-story-content">
              <span className="eyebrow">OUR MISSION</span>
              <h2>Building an International Table Where Business Owners Flourish</h2>
              <p>
                Founded on the premise that the best business opportunities are born out of genuine human connection, DEMO ASSOCIATION has evolved from a single breakfast table into a worldwide fraternity of over 250,000 vetted professionals.
              </p>
              <p>
                In an era dominated by cold digital noise and automated outreach, we champion the enduring power of the handshake, structured peer accountability, and category exclusivity.
              </p>
              <div style={{ marginTop: '24px' }}>
                <Button variant="primary" onClick={onOpenChapterFinder}>
                  Visit a Chapter Near You
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section values-section section-bg-light" id="community">
        <div className="container">
          <SectionHeader
            eyebrow="CORE PRINCIPLES"
            title="The Values That Guide Our Community"
            description="Our chapters operate under an unwavering code of conduct and dedication to mutual uplift."
            align="center"
          />

          <div className="values-grid">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="value-card">
                  <div className="value-icon-box">
                    <Icon size={26} />
                  </div>
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-desc">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Executive Leadership Section */}
      <section className="section leadership-section" id="leadership">
        <div className="container">
          <SectionHeader
            eyebrow="STEWARDSHIP"
            title="Global Executive Leadership"
            description="Meet the seasoned practitioners and governance leaders steering our international federation."
            align="center"
          />

          <div className="leadership-grid">
            {leadership.map((leader, i) => (
              <div key={i} className="leader-card">
                <div className="leader-image-wrap">
                  <img src={leader.image} alt={leader.name} className="img-cover leader-img" loading="lazy" />
                </div>
                <div className="leader-body">
                  <h3 className="leader-name">{leader.name}</h3>
                  <div className="leader-role">{leader.role}</div>
                  <p className="leader-bio">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
