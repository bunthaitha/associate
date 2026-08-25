import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { chaptersDirectory } from '../../data/chapters';
import { Globe, MapPin } from 'lucide-react';
import Button from '../common/Button';

export default function GlobalCommunity({ onOpenChapterFinder, onNavigate }) {
  const primaryHubs = [
    { city: 'London', country: 'United Kingdom', members: '14 Chapters' },
    { city: 'Singapore', country: 'Singapore', members: '18 Chapters' },
    { city: 'New York', country: 'United States', members: '24 Chapters' },
    { city: 'Phnom Penh', country: 'Cambodia', members: '8 Chapters' },
    { city: 'Dubai', country: 'UAE', members: '12 Chapters' },
    { city: 'Sydney', country: 'Australia', members: '10 Chapters' },
    { city: 'Frankfurt', country: 'Germany', members: '9 Chapters' },
    { city: 'Tokyo', country: 'Japan', members: '15 Chapters' }
  ];

  return (
    <section className="section global-community-section section-bg-dark" id="community">
      <div className="container">
        <SectionHeader
          eyebrow="INTERNATIONAL REACH"
          title="One Community. Many Markets."
          description="Connect with professionals across cities, industries, and countries while maintaining deep, high-trust local relationships."
          align="center"
          light
        />

        {/* Global Hubs Grid */}
        <div className="global-hubs-grid">
          {primaryHubs.map((hub, idx) => (
            <div key={idx} className="hub-card" onClick={onOpenChapterFinder} role="button" tabIndex={0}>
              <div className="hub-icon-wrap">
                <MapPin size={18} />
              </div>
              <div className="hub-info">
                <h4 className="hub-city">{hub.city}</h4>
                <span className="hub-country">{hub.country}</span>
                <span className="hub-chapters-count">{hub.members}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Map Accent / Banner */}
        <div className="global-map-banner">
          <div className="global-map-content">
            <div className="global-map-stats">
              <div className="map-stat-col">
                <span className="map-stat-number">75+</span>
                <span className="map-stat-label">Nations Represented</span>
              </div>
              <div className="map-stat-col">
                <span className="map-stat-number">12,000+</span>
                <span className="map-stat-label">Active Chapters</span>
              </div>
              <div className="map-stat-col">
                <span className="map-stat-number">100%</span>
                <span className="map-stat-label">Category Exclusivity</span>
              </div>
            </div>
            <div className="global-map-action">
              <Button
                variant="primary"
                onClick={onOpenChapterFinder}
              >
                Locate Chapters Worldwide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
