import React, { useState, useMemo } from 'react';
import { upcomingEvents } from '../data/events';
import { MapPin, Clock, Users, ArrowRight, Calendar, Filter } from 'lucide-react';
import Button from '../components/common/Button';

export default function Events({ onSelectEvent }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  // Additional events for full catalog
  const allEvents = useMemo(() => [
    ...upcomingEvents,
    {
      id: 'evt-04',
      day: '18',
      month: 'NOV',
      year: '2026',
      category: 'BUSINESS NETWORKING',
      title: 'Transatlantic Founders Breakfast Roundtable',
      location: 'New York, USA',
      venue: 'The Harvard Club, Manhattan',
      time: '07:30 AM – 09:30 AM EST',
      attendees: '120 Leaders',
      description: 'Explore joint ventures between US and European tech, real estate, and financial consultancy founders with structured high-speed introductions.',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
      type: 'In-Person'
    },
    {
      id: 'evt-05',
      day: '02',
      month: 'DEC',
      year: '2026',
      category: 'WORKSHOPS',
      title: 'Commercial Referral Optimization Workshop',
      location: 'Dubai & Online',
      venue: 'Address Downtown & Virtual Link',
      time: '03:00 PM – 06:00 PM GST',
      attendees: '250+ Participants',
      description: 'Learn the exact linguistic frameworks and client discovery questions that reveal multi-million dollar referral possibilities.',
      image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80',
      type: 'In-Person & Virtual'
    },
    {
      id: 'evt-06',
      day: '14',
      month: 'DEC',
      year: '2026',
      category: 'GLOBAL SUMMIT',
      title: 'Asia-Pacific Chapter Presidents Assembly',
      location: 'Tokyo, Japan',
      venue: 'Palace Hotel Tokyo',
      time: '2-Day Conference',
      attendees: '400+ Chapter Officers',
      description: 'Annual gathering of regional chapter directors, governance chairs, and leadership teams to review performance and share best practices.',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
      type: 'In-Person'
    }
  ], []);

  const categories = ['ALL', 'BUSINESS NETWORKING', 'EXECUTIVE MASTERCLASS', 'GLOBAL SUMMIT', 'WORKSHOPS'];

  const filteredEvents = useMemo(() => {
    if (selectedCategory === 'ALL') return allEvents;
    return allEvents.filter((e) => e.category === selectedCategory);
  }, [selectedCategory, allEvents]);

  return (
    <div className="page-content page-events">
      <section className="page-hero-banner">
        <div className="container">
          <span className="eyebrow">GLOBAL CALENDAR</span>
          <h1 className="page-hero-title">Upcoming Networking Gatherings & Summits</h1>
          <p className="page-hero-sub">
            Engage with leading entrepreneurs, participate in high-trust business roundtables, and attend executive masterclasses across our worldwide network.
          </p>
        </div>
      </section>

      <section className="section events-catalog-section">
        <div className="container">
          {/* Filter Bar */}
          <div className="events-filter-bar">
            <div className="filter-label-wrap">
              <Filter size={16} />
              <span>Filter by Event Type:</span>
            </div>
            <div className="filter-pills-row">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-pill-btn ${selectedCategory === cat ? 'is-active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="events-grid">
            {filteredEvents.map((event) => (
              <article key={event.id} className="event-card">
                <div className="event-media-wrap">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="img-cover event-card-img"
                    loading="lazy"
                  />
                  <div className="event-date-badge">
                    <span className="date-day">{event.day}</span>
                    <span className="date-month">{event.month}</span>
                  </div>
                  <div className="event-type-badge">{event.type}</div>
                </div>

                <div className="event-card-body">
                  <span className="event-category-tag">{event.category}</span>
                  <h3 className="event-card-title">{event.title}</h3>

                  <div className="event-meta-info">
                    <div className="event-meta-item">
                      <MapPin size={15} />
                      <span>{event.location}</span>
                    </div>
                    <div className="event-meta-item">
                      <Clock size={15} />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <p className="event-card-desc">{event.description}</p>

                  <div className="event-card-footer">
                    <Button
                      variant="text"
                      onClick={() => onSelectEvent(event)}
                      icon={ArrowRight}
                    >
                      View Event & RSVP
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
