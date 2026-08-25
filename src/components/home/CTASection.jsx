import React from 'react';
import Button from '../common/Button';

export default function CTASection({ onOpenChapterFinder, onNavigate, onOpenApply }) {
  return (
    <section className="cta-full-section" aria-label="Join Call to Action">
      <div className="cta-background-image-wrap">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=85"
          alt="International business leaders gathering"
          className="img-cover cta-bg-img"
          loading="lazy"
        />
        <div className="cta-overlay" />
      </div>

      <div className="container cta-container">
        <div className="cta-content-box">
          <span className="eyebrow eyebrow-light">START YOUR JOURNEY</span>
          <h2 className="cta-heading">
            Your Next Opportunity Could Start With a Conversation
          </h2>
          <p className="cta-text">
            Join a global community of ambitious professionals who believe that business grows through trusted relationships, shared integrity, and mutual commitment.
          </p>

          <div className="cta-buttons-group">
            <Button
              variant="primary"
              className="cta-btn-main"
              onClick={onOpenChapterFinder}
            >
              FIND A COMMUNITY
            </Button>
            <Button
              variant="secondary-light"
              className="cta-btn-sub"
              onClick={onOpenApply || (() => onNavigate('/membership'))}
            >
              BECOME A MEMBER
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
