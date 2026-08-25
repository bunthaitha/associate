import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { memberStories } from '../../data/testimonials';
import { Quote } from 'lucide-react';

export default function MemberStories({ onNavigate }) {
  return (
    <section className="section member-stories-section section-bg-light" id="stories">
      <div className="container">
        <SectionHeader
          eyebrow="COMMUNITY VOICES"
          title="Real People. Real Connections."
          description="Hear how entrepreneurs and seasoned leaders around the globe build resilient referral pipelines through trusted peer relationships."
          align="center"
        />

        <div className="stories-grid">
          {memberStories.map((story) => (
            <article key={story.id} className="story-card">
              <div className="story-quote-icon">
                <Quote size={28} />
              </div>
              <blockquote className="story-quote-text">
                "{story.quote}"
              </blockquote>
              
              <div className="story-stats-badge">
                <span className="story-stats-label">{story.stats}</span>
              </div>

              <div className="story-author-row">
                <img
                  src={story.image}
                  alt={story.name}
                  className="story-author-avatar"
                  loading="lazy"
                />
                <div className="story-author-details">
                  <h4 className="story-author-name">{story.name}</h4>
                  <div className="story-author-role">{story.role}, {story.company}</div>
                  <div className="story-author-location">{story.city} · {story.chapter}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
