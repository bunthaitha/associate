import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import HowItWorks from '../components/home/HowItWorks';
import NetworkingFormats from '../components/home/NetworkingFormats';
import Button from '../components/common/Button';
import { Lock, Shuffle, CheckCircle, Award, Users2, Shield } from 'lucide-react';

export default function Networking({ onOpenChapterFinder, onNavigate }) {
  const referralRules = [
    {
      icon: Lock,
      title: 'One Seat Per Profession',
      description: 'Once you are accepted as your chapter’s commercial litigation attorney or real estate advisor, no direct competitor can join your group.'
    },
    {
      icon: Shield,
      title: 'Vetted Quality Introductions',
      description: 'Members never pass cold contact lists. Every referral represents a live prospect who is explicitly expecting your call.'
    },
    {
      icon: Users2,
      title: 'Reciprocal 1-to-1 Deep Dives',
      description: 'Structured weekly 45-minute bilateral meetings allow members to learn the exact ideal client profile of fellow chapter peers.'
    },
    {
      icon: Award,
      title: 'Transparent Referral Tracking',
      description: 'Chapters monitor thank-you-for-closed-business milestones, cultivating high accountability and celebrate collective commercial wins.'
    }
  ];

  return (
    <div className="page-content page-networking">
      <section className="page-hero-banner">
        <div className="container">
          <span className="eyebrow">OUR METHODOLOGY</span>
          <h1 className="page-hero-title">A Structured System for Qualified Referrals</h1>
          <p className="page-hero-sub">
            Discover why unstructured mixer events fail, and how our disciplined, relationship-first framework reliably delivers closed business for members.
          </p>
        </div>
      </section>

      {/* How It Works Flow */}
      <HowItWorks />

      {/* The Referral Architecture */}
      <section className="section referral-rules-section section-bg-light" id="referrals">
        <div className="container">
          <SectionHeader
            eyebrow="THE ARCHITECTURE"
            title="Why Our Networking Framework Produces Results"
            description="Built on clear rules of engagement that protect member credibility and accelerate commercial trust."
            align="center"
          />

          <div className="values-grid">
            {referralRules.map((rule, idx) => {
              const Icon = rule.icon;
              return (
                <div key={idx} className="value-card">
                  <div className="value-icon-box">
                    <Icon size={26} />
                  </div>
                  <h3 className="value-title">{rule.title}</h3>
                  <p className="value-desc">{rule.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Networking Formats */}
      <NetworkingFormats onNavigate={onNavigate} onOpenChapterFinder={onOpenChapterFinder} />

      {/* Typical Meeting Agenda */}
      <section className="section meeting-agenda-section" id="agenda">
        <div className="container">
          <div className="agenda-split-grid">
            <div className="agenda-text-col">
              <span className="eyebrow">THE 90-MINUTE CADENCE</span>
              <h2>Inside a Weekly Chapter Meeting</h2>
              <p>
                Every minute of our chapter session is orchestrated to maximize business visibility and meaningful engagement without wasting valuable executive time.
              </p>
              
              <ul className="agenda-steps-list">
                <li>
                  <span className="agenda-time">07:00 AM</span>
                  <div>
                    <strong>Open Networking & Continental Breakfast</strong>
                    <p>Informal greetings, guest welcomes, and bilateral conversations.</p>
                  </div>
                </li>
                <li>
                  <span className="agenda-time">07:20 AM</span>
                  <div>
                    <strong>President Opening & Leadership Report</strong>
                    <p>Chapter performance overview and new business acknowledgments.</p>
                  </div>
                </li>
                <li>
                  <span className="agenda-time">07:35 AM</span>
                  <div>
                    <strong>Member 60-Second Specific Ask Pitches</strong>
                    <p>Each member articulates their target introduction for the week.</p>
                  </div>
                </li>
                <li>
                  <span className="agenda-time">08:05 AM</span>
                  <div>
                    <strong>Keynote Member Feature Presentation</strong>
                    <p>Deep-dive showcase of one member’s business, solutions, and case studies.</p>
                  </div>
                </li>
                <li>
                  <span className="agenda-time">08:20 AM</span>
                  <div>
                    <strong>The Referral Passing & Testimonial Round</strong>
                    <p>The core climax: members publicly pass warm introductions and express gratitude for closed revenue.</p>
                  </div>
                </li>
              </ul>

              <div style={{ marginTop: '32px' }}>
                <Button variant="primary" onClick={onOpenChapterFinder}>
                  Experience a Meeting as a Guest
                </Button>
              </div>
            </div>

            <div className="agenda-media-col">
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=900&q=80"
                alt="Business executives in a structured morning meeting"
                className="img-cover agenda-side-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
