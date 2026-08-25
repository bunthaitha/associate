import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

export default function GlobalNetworkIntro({ onNavigate, onOpenChapterFinder }) {
  return (
    <section className="section global-network-overview-section">
      <div className="container">
        <div className="network-overview-layout">
          <div className="network-overview-content">
            <span className="eyebrow">GLOBAL ECOSYSTEM</span>
            <h2 className="overview-headline">
              A Global Community Built Around Local Relationships
            </h2>
            <p className="overview-subtext">
              While our reach spans over 75 countries, the foundation of every success story happens locally. In intimate weekly chapter meetings, vetted business owners and practitioners meet to share insights, refer clients, and build enduring commercial alliances.
            </p>

            <div className="overview-pillars-list">
              <div className="pillar-item">
                <span className="pillar-dot" />
                <div>
                  <h4 className="pillar-title">Autonomous Local Chapters</h4>
                  <p className="pillar-desc">Weekly structured gatherings where members represent their exclusive industry category.</p>
                </div>
              </div>

              <div className="pillar-item">
                <span className="pillar-dot" />
                <div>
                  <h4 className="pillar-title">Qualified Warm Introductions</h4>
                  <p className="pillar-desc">Exchange business referrals that carry the weight of personal trust and reputation.</p>
                </div>
              </div>

              <div className="pillar-item">
                <span className="pillar-dot" />
                <div>
                  <h4 className="pillar-title">Seamless International Corridors</h4>
                  <p className="pillar-desc">Tap into fellow chapters across Europe, Asia Pacific, the Americas, and the Middle East.</p>
                </div>
              </div>
            </div>

            <div className="overview-actions">
              <Button variant="primary" onClick={onOpenChapterFinder}>
                Find a Local Chapter
              </Button>
              <Button variant="secondary" onClick={() => onNavigate('/about')}>
                Our Story & Vision
              </Button>
            </div>
          </div>

          <div className="network-overview-visual">
            <div className="collage-grid">
              <div className="collage-item collage-item-large">
                <img
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80"
                  alt="Business community roundtable"
                  className="img-cover"
                  loading="lazy"
                />
              </div>
              <div className="collage-item collage-item-small">
                <img
                  src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=600&q=80"
                  alt="Professional handshake and introduction"
                  className="img-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
