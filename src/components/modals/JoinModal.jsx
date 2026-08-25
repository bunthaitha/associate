import React, { useState } from 'react';
import Modal from '../common/Modal';
import { CheckCircle2, ShieldCheck, UserCheck } from 'lucide-react';
import Button from '../common/Button';

export default function JoinModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    industryCategory: 'Commercial Law',
    city: '',
    experienceYears: '5-10 years'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Apply for Chapter Membership" maxWidth="600px">
      {submitted ? (
        <div className="application-success-box">
          <div className="visit-success-icon-box">
            <CheckCircle2 size={44} className="text-primary" />
          </div>
          <h3>Application Received</h3>
          <p className="visit-success-desc">
            Thank you, <strong>{formData.fullName}</strong>. Your membership inquiry for the <strong>{formData.industryCategory}</strong> category seat has been forwarded to the local Membership Committee in {formData.city || 'your region'}.
          </p>
          <div className="application-timeline-card">
            <div className="timeline-step">
              <span className="step-num">1</span>
              <span>Category exclusivity conflict review</span>
            </div>
            <div className="timeline-step">
              <span className="step-num">2</span>
              <span>1-on-1 interview with Chapter Membership Director</span>
            </div>
            <div className="timeline-step">
              <span className="step-num">3</span>
              <span>Guest chapter visit and peer reference verification</span>
            </div>
          </div>
          <div style={{ marginTop: '24px' }}>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="join-application-form">
          <p className="form-intro-note">
            Each chapter admits <strong>only one professional per business specialty</strong> to ensure category exclusivity and zero internal competition.
          </p>

          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                required
                className="form-input"
                placeholder="e.g. Jonathan Vance"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Business Email *</label>
              <input
                type="email"
                required
                className="form-input"
                placeholder="e.g. jvance@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label">Company Name *</label>
              <input
                type="text"
                required
                className="form-input"
                placeholder="e.g. Vance Capital Advisory"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone / WhatsApp *</label>
              <input
                type="tel"
                required
                className="form-input"
                placeholder="+1 / +44 / +855..."
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label">Primary Business Category *</label>
              <select
                className="form-input form-select"
                value={formData.industryCategory}
                onChange={(e) => setFormData({ ...formData, industryCategory: e.target.value })}
              >
                <option value="Commercial Law">Commercial Law & Legal</option>
                <option value="Accounting & Audit">Accounting & Tax Advisory</option>
                <option value="Commercial Real Estate">Commercial Real Estate</option>
                <option value="Supply Chain & Logistics">Supply Chain & Logistics</option>
                <option value="Marketing & Brand Strategy">Marketing & Brand Strategy</option>
                <option value="Financial Planning & Wealth">Financial Planning & Wealth</option>
                <option value="Architectural & Construction">Architectural & Construction</option>
                <option value="Management Consulting">Management Consulting</option>
                <option value="Other Business Specialization">Other Business Specialization</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">City / Target Location *</label>
              <input
                type="text"
                required
                className="form-input"
                placeholder="e.g. London, Phnom Penh, Singapore"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
            </div>
          </div>

          <div className="form-agreement">
            <ShieldCheck size={18} className="form-shield-icon" />
            <span className="text-small">
              By submitting, you affirm that your enterprise operates in compliance with professional licensing and high ethical business conduct.
            </span>
          </div>

          <div className="form-submit-row">
            <Button type="submit" variant="primary" className="btn-block">
              Submit Membership Application
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
