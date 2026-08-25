import React, { useState, useMemo } from 'react';
import Modal from '../common/Modal';
import { chaptersDirectory } from '../../data/chapters';
import { Search, MapPin, Calendar, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

export default function ChapterFinderModal({ isOpen, onClose, onSelectChapterForVisit }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [visitBookedChapter, setVisitBookedChapter] = useState(null);

  const regions = ['All', 'Asia Pacific', 'Europe', 'Americas', 'Middle East & Africa'];

  const filteredChapters = useMemo(() => {
    return chaptersDirectory.filter((ch) => {
      const matchesSearch =
        ch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ch.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ch.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ch.categoryOpen.some((cat) => cat.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesRegion = selectedRegion === 'All' || ch.region === selectedRegion;

      return matchesSearch && matchesRegion;
    });
  }, [searchTerm, selectedRegion]);

  const handleBookVisit = (chapter) => {
    setVisitBookedChapter(chapter);
  };

  const handleReset = () => {
    setVisitBookedChapter(null);
    setSearchTerm('');
    setSelectedRegion('All');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleReset} title="Find a Business Chapter" maxWidth="800px">
      {visitBookedChapter ? (
        <div className="chapter-visit-success">
          <div className="visit-success-icon-box">
            <CheckCircle2 size={44} className="text-primary" />
          </div>
          <h3>Guest Pass Requested!</h3>
          <p className="visit-success-desc">
            You are scheduled to visit <strong>{visitBookedChapter.name}</strong> in {visitBookedChapter.city}, {visitBookedChapter.country}.
          </p>
          <div className="visit-details-card">
            <div><strong>Meeting Cadence:</strong> {visitBookedChapter.meetingDay}</div>
            <div><strong>Venue:</strong> {visitBookedChapter.location}</div>
            <div><strong>Chapter President:</strong> {visitBookedChapter.president}</div>
          </div>
          <p className="text-small text-muted" style={{ marginTop: '16px' }}>
            The Chapter Membership Director will email you the guest agenda and dress code within 24 hours.
          </p>
          <div style={{ marginTop: '24px' }}>
            <Button variant="primary" onClick={handleReset}>
              Done
            </Button>
          </div>
        </div>
      ) : (
        <div className="chapter-finder-dialog">
          <p className="finder-intro-text">
            Search active business communities worldwide by city, country, or open industry category.
          </p>

          {/* Search & Filter Bar */}
          <div className="finder-controls-row">
            <div className="finder-search-input-wrap">
              <Search size={18} className="finder-search-icon" />
              <input
                type="text"
                placeholder="Search city, country, or open category (e.g. Phnom Penh, Legal)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="finder-search-input"
              />
            </div>

            <div className="finder-region-filters">
              {regions.map((reg) => (
                <button
                  key={reg}
                  type="button"
                  className={`region-pill-btn ${selectedRegion === reg ? 'is-active' : ''}`}
                  onClick={() => setSelectedRegion(reg)}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>

          {/* Results List */}
          <div className="finder-results-container">
            {filteredChapters.length === 0 ? (
              <div className="finder-no-results">
                <p>No chapters found matching your criteria. Try searching another city or region.</p>
              </div>
            ) : (
              <div className="chapters-card-list">
                {filteredChapters.map((chapter) => (
                  <div key={chapter.id} className="chapter-item-card">
                    <div className="chapter-item-main">
                      <div className="chapter-location-header">
                        <span className="chapter-city-badge">
                          <MapPin size={13} /> {chapter.city}, {chapter.country}
                        </span>
                        <span className="chapter-members-tag">
                          <Users size={13} /> {chapter.membersCount} Members
                        </span>
                      </div>
                      <h4 className="chapter-item-name">{chapter.name}</h4>
                      
                      <div className="chapter-meeting-time">
                        <Calendar size={14} />
                        <span>{chapter.meetingDay} — {chapter.location}</span>
                      </div>

                      <div className="chapter-open-categories">
                        <span className="open-cat-label">Actively Seeking Categories:</span>
                        <div className="open-cat-pills">
                          {chapter.categoryOpen.map((cat, idx) => (
                            <span key={idx} className="category-tag-pill">{cat}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="chapter-item-action">
                      <Button
                        variant="primary"
                        onClick={() => handleBookVisit(chapter)}
                        icon={ArrowRight}
                      >
                        Request Guest Pass
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
}
