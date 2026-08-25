import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <section className="section newsletter-section section-bg-light" aria-label="Newsletter Subscription">
      <div className="container">
        <div className="newsletter-card-wrapper">
          <div className="newsletter-inner">
            <span className="eyebrow">COMMUNITY BRIEFING</span>
            <h2 className="newsletter-title">Stay Connected</h2>
            <p className="newsletter-desc">
              Get practical networking ideas, business insights, and community updates delivered directly to your inbox.
            </p>

            {subscribed ? (
              <div className="newsletter-success-box">
                <CheckCircle2 size={24} className="newsletter-success-icon" />
                <div>
                  <h4>Thank you for subscribing!</h4>
                  <p>You'll receive our monthly leadership digest and upcoming regional forum invitations.</p>
                </div>
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <div className="newsletter-pill-input-group">
                  <input
                    type="email"
                    className="newsletter-pill-input"
                    placeholder="Enter your business email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email address"
                  />
                  <button type="submit" className="newsletter-pill-submit-btn">
                    <span>SUBSCRIBE</span>
                    <Send size={16} />
                  </button>
                </div>
                <span className="newsletter-privacy-note">
                  No spam. Unsubscribe at any time. We protect your executive privacy.
                </span>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
