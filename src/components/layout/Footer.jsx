import React from 'react';
import { footerLinks } from '../../data/navigation';

function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
    </svg>
  );
}

export default function Footer({ onNavigate, onOpenChapterFinder }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main-grid">
          {/* Brand & Purpose */}
          <div className="footer-brand-col">
            <div className="navbar-brand-logo footer-brand">
              <span className="brand-icon-box">DA</span>
              <div className="brand-text-wrap">
                <span className="brand-title" style={{ color: 'var(--white)' }}>DEMO</span>
                <span className="brand-subtitle" style={{ color: 'var(--border)' }}>ASSOCIATION</span>
              </div>
            </div>
            <p className="footer-tagline">
              Building stronger businesses through stronger relationships.
            </p>
            <p className="footer-description">
              A premier international organization empowering founders, executives, and licensed professionals through structured, ethics-driven referral communities.
            </p>
          </div>

          {/* Network Links */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">NETWORK</h4>
            <ul className="footer-link-list">
              {footerLinks.network.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.label === 'Find a Chapter') {
                        onOpenChapterFinder();
                      } else {
                        onNavigate(item.path);
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">ABOUT</h4>
            <ul className="footer-link-list">
              {footerLinks.about.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.path);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">RESOURCES</h4>
            <ul className="footer-link-list">
              {footerLinks.resources.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.path);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">CONNECT</h4>
            <ul className="footer-social-list">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-link">
                  <LinkedInIcon size={18} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-social-link">
                  <FacebookIcon size={18} />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-link">
                  <InstagramIcon size={18} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-social-link">
                  <YoutubeIcon size={18} />
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {new Date().getFullYear()} DEMO ASSOCIATION. All rights reserved. Fictional prototype for demonstration.
          </div>
          <ul className="footer-legal-links">
            <li><a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
            <li><a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Use</a></li>
            <li><a href="#cookies" onClick={(e) => e.preventDefault()}>Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
