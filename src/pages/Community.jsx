import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import MemberStories from '../components/home/MemberStories';
import NewsSection from '../components/home/NewsSection';
import GlobalCommunity from '../components/home/GlobalCommunity';
import Button from '../components/common/Button';
import { Quote, TrendingUp, Handshake, Users } from 'lucide-react';

export default function Community({ onOpenChapterFinder, onNavigate, onOpenApply }) {
  const connectionStories = [
    {
      title: 'How a London Legal Firm & a Singapore Logistics Group Closed $3.4M in Joint Ventures',
      tags: ['Cross-Border Alliance', 'Maritime Trade'],
      summary: 'When member Elena Rostova needed Asian freight regulatory counsel, an introduction through the global network connected her with Grace Tan’s Singapore chapter within 24 hours.',
      impact: '$3.4M Transaction Value'
    },
    {
      title: 'Scaling from a 3-Person Boutique to Regional Architecture Leader via Category Referral Exclusivity',
      tags: ['Commercial Design', 'Local Chapter Impact'],
      summary: 'Principal Architect Marcus Vance leveraged his chapter’s exclusive seat to build continuous relationships with top tier general contractors, commercial lenders, and developers.',
      impact: '14 Flagship Projects'
    },
    {
      title: 'Building a Multi-Country Supply Network in the Heart of Southeast Asia',
      tags: ['Logistics', 'ASEAN Expansion'],
      summary: 'Sokha Rithy used bilateral chapter visits across Phnom Penh, Bangkok, and Singapore to establish verified cold chain storage hubs for agricultural exporters.',
      impact: '4 International Port Hubs'
    }
  ];

  return (
    <div className="page-content page-community">
      <section className="page-hero-banner">
        <div className="container">
          <span className="eyebrow">OUR COMMUNITY</span>
          <h1 className="page-hero-title">Real People. Real Connections.</h1>
          <p className="page-hero-sub">
            Explore the authentic commercial journeys and collaborative milestones of business leaders worldwide within the DEMO ASSOCIATION.
          </p>
        </div>
      </section>

      {/* Member Testimonials */}
      <MemberStories onNavigate={onNavigate} />

      {/* Featured Case Studies / Connection Stories */}
      <section className="section connection-studies-section" id="connections">
        <div className="container">
          <SectionHeader
            eyebrow="COMMERCIAL CASE STUDIES"
            title="Partnership Milestones Across Continents"
            description="Concrete examples of how structured referral networking converts into tangible bottom-line growth."
            align="center"
          />

          <div className="case-studies-grid">
            {connectionStories.map((item, idx) => (
              <div key={idx} className="case-study-card">
                <div className="case-study-tags">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="case-tag-badge">{tag}</span>
                  ))}
                </div>
                <h3 className="case-study-title">{item.title}</h3>
                <p className="case-study-summary">{item.summary}</p>
                <div className="case-study-impact-box">
                  <TrendingUp size={18} className="text-primary" />
                  <span><strong>Impact:</strong> {item.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Community Visualization */}
      <GlobalCommunity onOpenChapterFinder={onOpenChapterFinder} onNavigate={onNavigate} />

      {/* Thought Leadership & News */}
      <NewsSection onNavigate={onNavigate} />
    </div>
  );
}
