import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { upcomingEvents } from '../../data/events';
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

export default function EventsSection({ onSelectEvent, onNavigate }) {
  return (
    <section className="section events-section" id="events">
      <div className="container">
        <div className="events-header-row">
          <SectionHeader
            eyebrow="GATHERINGS & FORUMS"
            title="What's Happening in Our Community"
            description="Join breakfast networking sessions, regional masterclasses, and international summits."
            align="left"
            className="events-header-custom"
          />
          <div className="events-header-action">
            <Button
              variant="secondary"
              onClick={() => onNavigate('/events')}
            >
              View Full Calendar
            </Button>
          </div>
        </div>

        <div className="events-grid">
          {upcomingEvents.map((event) => (
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
                    View Event Details
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
