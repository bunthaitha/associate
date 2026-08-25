import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

export default function IntroSection({ onNavigate }) {
  return (
    <section className="section intro-section">
      <div className="container">
        <div className="intro-grid">
          {/* Left Column: Heading */}
          <div className="intro-heading-col">
            <span className="eyebrow">OUR PHILOSOPHY</span>
            <h2 className="intro-title">
              Business grows through relationships
            </h2>
          </div>

          {/* Right Column: Narrative & Action */}
          <div className="intro-text-col">
            <p className="intro-paragraph">
              The strongest opportunities often begin with a conversation. Our network brings together ambitious professionals who believe trusted relationships, shared knowledge, and meaningful introductions can create long-term, compounding business growth.
            </p>
            <div className="intro-cta-wrapper">
              <Button
                variant="text"
                onClick={() => onNavigate('/networking')}
                icon={ArrowRight}
              >
                Discover How It Works
              </Button>
            </div>
          </div>
        </div>

        {/* Large Editorial Image */}
        <div className="intro-editorial-media">
          <div className="editorial-image-frame">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=85"
              alt="Business professionals engaging in collaborative discussion"
              className="img-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
