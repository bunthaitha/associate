import React, { useState } from 'react';
import Modal from '../common/Modal';
import { Calendar, MapPin, Clock, Users, CheckCircle2, Ticket } from 'lucide-react';
import Button from '../common/Button';

export default function EventDetailsModal({ event, isOpen, onClose }) {
  const [rsvpDone, setRsvpDone] = useState(false);
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');

  if (!event) return null;

  const handleRSVP = (e) => {
    e.preventDefault();
    setRsvpDone(true);
  };

  const handleClose = () => {
    setRsvpDone(false);
    setAttendeeName('');
    setAttendeeEmail('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={event.title} maxWidth="680px">
      {rsvpDone ? (
        <div className="event-rsvp-success">
          <div className="visit-success-icon-box">
            <CheckCircle2 size={44} className="text-primary" />
          </div>
          <h3>Registration Confirmed!</h3>
          <p className="visit-success-desc">
            We look forward to welcoming you, <strong>{attendeeName}</strong>. A confirmation calendar invite and security access pass have been dispatched to <strong>{attendeeEmail}</strong>.
          </p>
          <div className="event-rsvp-summary-card">
            <div><strong>Event:</strong> {event.title}</div>
            <div><strong>Date & Time:</strong> {event.day} {event.month} {event.year} ({event.time})</div>
            <div><strong>Venue:</strong> {event.venue}, {event.location}</div>
          </div>
          <div style={{ marginTop: '24px' }}>
            <Button variant="primary" onClick={handleClose}>
              Done
            </Button>
          </div>
        </div>
      ) : (
        <div className="event-modal-content">
          <div className="event-modal-media">
            <img src={event.image} alt={event.title} className="img-cover event-modal-img" />
            <div className="event-modal-tag">{event.category}</div>
          </div>

          <div className="event-modal-meta-grid">
            <div className="modal-meta-cell">
              <Calendar size={16} />
              <span>{event.day} {event.month} {event.year}</span>
            </div>
            <div className="modal-meta-cell">
              <Clock size={16} />
              <span>{event.time}</span>
            </div>
            <div className="modal-meta-cell">
              <MapPin size={16} />
              <span>{event.venue}, {event.location}</span>
            </div>
            <div className="modal-meta-cell">
              <Users size={16} />
              <span>Capacity: {event.attendees}</span>
            </div>
          </div>

          <div className="event-modal-description">
            <h4>About This Gathering</h4>
            <p>{event.description}</p>
          </div>

          <div className="event-rsvp-form-container">
            <h4>Reserve Guest Seat</h4>
            <form onSubmit={handleRSVP} className="event-rsvp-form">
              <div className="form-grid-2">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  className="form-input"
                  value={attendeeName}
                  onChange={(e) => setAttendeeName(e.target.value)}
                />
                <input
                  type="email"
                  required
                  placeholder="Business Email"
                  className="form-input"
                  value={attendeeEmail}
                  onChange={(e) => setAttendeeEmail(e.target.value)}
                />
              </div>
              <Button type="submit" variant="primary" className="btn-block" icon={Ticket}>
                Confirm Guest Reservation
              </Button>
            </form>
          </div>
        </div>
      )}
    </Modal>
  );
}
