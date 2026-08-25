import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import { Mail, Phone, MapPin, Globe, CheckCircle2, Send } from 'lucide-react';

export default function Contact({ onOpenChapterFinder }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'Visiting a Chapter',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const offices = [
    {
      city: 'London HQ',
      region: 'Europe Secretariat',
      address: '25 Berkeley Square, Mayfair, London W1J 6HN',
      phone: '+44 20 7946 0912',
      email: 'london@demoassociation.org'
    },
    {
      city: 'Singapore',
      region: 'Asia-Pacific Secretariat',
      address: '10 Collyer Quay, Ocean Financial Centre, Singapore 049315',
      phone: '+65 6789 0123',
      email: 'apac@demoassociation.org'
    },
    {
      city: 'Phnom Penh',
      region: 'Mekong Regional Office',
      address: 'Vattanac Capital Tower, Monivong Blvd, Phnom Penh',
      phone: '+855 23 999 888',
      email: 'cambodia@demoassociation.org'
    },
    {
      city: 'New York',
      region: 'Americas Secretariat',
      address: '445 Park Avenue, 9th Floor, New York, NY 10022',
      phone: '+1 212 555 0199',
      email: 'americas@demoassociation.org'
    }
  ];

  return (
    <div className="page-content page-contact">
      <section className="page-hero-banner">
        <div className="container">
          <span className="eyebrow">GET IN TOUCH</span>
          <h1 className="page-hero-title">Connect With Our Global Team</h1>
          <p className="page-hero-sub">
            Whether you wish to visit a local chapter, launch a new business community in your city, or inquire about international membership, we are here to support you.
          </p>
        </div>
      </section>

      <section className="section contact-main-section">
        <div className="container">
          <div className="contact-split-grid">
            {/* Left: Contact Form */}
            <div className="contact-form-col">
              <span className="eyebrow">SEND AN INQUIRY</span>
              <h2 style={{ marginBottom: '16px' }}>How Can We Assist Your Business?</h2>
              <p style={{ marginBottom: '32px' }}>
                Fill out the form below and a regional membership director will respond within 24 hours.
              </p>

              {submitted ? (
                <div className="contact-success-box">
                  <CheckCircle2 size={36} className="text-primary" />
                  <h3>Message Dispatched</h3>
                  <p>
                    Thank you for reaching out, <strong>{form.name}</strong>. Our Secretariat team has received your message regarding "{form.subject}" and will contact you promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-inquiry-form">
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Johnathan Doe"
                        className="form-input"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Business Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="jdoe@enterprise.com"
                        className="form-input"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Inquiry Subject *</label>
                    <select
                      className="form-input form-select"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    >
                      <option value="Visiting a Chapter">I want to visit a local chapter as a guest</option>
                      <option value="Starting a Chapter">I want to launch a new chapter in my city</option>
                      <option value="Global Sponsorship">Corporate Partnership / Global Summit Sponsorship</option>
                      <option value="Media Inquiry">Media & Press Inquiry</option>
                      <option value="General Question">General Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Please share details about your business and goals..."
                      className="form-input form-textarea"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" variant="primary" icon={Send}>
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Right: Chapter Locator Banner & Quick Links */}
            <div className="contact-info-col">
              <div className="contact-quick-finder-card">
                <span className="eyebrow eyebrow-light">LOOKING FOR LOCAL CHAPTERS?</span>
                <h3 className="finder-banner-title">Visit an Active Business Circle</h3>
                <p className="finder-banner-desc">
                  Experience a structured morning or evening meeting in your metropolitan area before submitting a formal membership application.
                </p>
                <Button
                  variant="primary"
                  onClick={onOpenChapterFinder}
                  icon={MapPin}
                >
                  Open Chapter Locator
                </Button>
              </div>

              <div className="contact-direct-channels">
                <div className="channel-box">
                  <Mail className="channel-icon" size={20} />
                  <div>
                    <strong>Global Secretariat</strong>
                    <p>secretariat@demoassociation.org</p>
                  </div>
                </div>
                <div className="channel-box">
                  <Globe className="channel-icon" size={20} />
                  <div>
                    <strong>Membership Verification</strong>
                    <p>ethics-board@demoassociation.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Secretariat Offices */}
      <section className="section offices-section section-bg-light">
        <div className="container">
          <SectionHeader
            eyebrow="GLOBAL HUBS"
            title="Secretariat & Regional Headquarters"
            description="Our coordinating offices oversee chapter standards, accreditation, and international trade conferences."
            align="center"
          />

          <div className="offices-grid">
            {offices.map((office, idx) => (
              <div key={idx} className="office-card">
                <span className="office-region">{office.region}</span>
                <h3 className="office-city">{office.city}</h3>
                <p className="office-address">
                  <MapPin size={15} /> {office.address}
                </p>
                <div className="office-contact-links">
                  <a href={`tel:${office.phone}`}><Phone size={14} /> {office.phone}</a>
                  <a href={`mailto:${office.email}`}><Mail size={14} /> {office.email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
