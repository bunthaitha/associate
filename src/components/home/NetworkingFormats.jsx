import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { networkingFormats } from '../../data/benefits';
import { ArrowRight } from 'lucide-react';

export default function NetworkingFormats({ onNavigate, onOpenChapterFinder }) {
  const handleFormatClick = (formatId) => {
    if (formatId === 'in-person') {
      onOpenChapterFinder();
    } else {
      onNavigate('/networking');
    }
  };

  return (
    <section className="section networking-formats-section">
      <div className="container">
        <SectionHeader
          eyebrow="FLEXIBLE ENGAGEMENT"
          title="Connect Your Way"
          description="Whether you thrive over morning coffee, prefer cross-border digital roundtables, or need a blended schedule, our chapters accommodate modern executives."
          align="center"
        />

        <div className="formats-grid">
          {networkingFormats.map((format) => (
            <div
              key={format.id}
              className="format-card"
              onClick={() => handleFormatClick(format.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleFormatClick(format.id)}
            >
              <div className="format-image-bg-wrap">
                <img
                  src={format.image}
                  alt={format.title}
                  className="img-cover format-img"
                  loading="lazy"
                />
                <div className="format-overlay" />
              </div>

              <div className="format-content-wrap">
                <div className="format-tag-pill">{format.tag}</div>
                <h3 className="format-title">{format.title}</h3>
                <p className="format-desc">{format.description}</p>
                
                <div className="format-footer-action">
                  <span className="format-cta-text">
                    Explore Format <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
