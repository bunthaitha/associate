import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function MegaMenu({ data, onNavigate, isOpen, onClose, onMouseEnter, onMouseLeave }) {
  if (!data || !isOpen) return null;

  return (
    <div
      className="mega-menu-overlay"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mega-menu-content">
        <div className="container">
          <div className="mega-menu-grid">
            {/* Columns */}
            <div className="mega-menu-columns">
              {data.columns.map((col, idx) => (
                <div key={idx} className="mega-menu-column">
                  <h4 className="mega-menu-col-title">{col.title}</h4>
                  <ul className="mega-menu-list">
                    {col.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <a
                          href={item.path}
                          className="mega-menu-link"
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigate(item.path);
                            onClose();
                          }}
                        >
                          <span className="mega-menu-link-title">{item.label}</span>
                          <span className="mega-menu-link-desc">{item.desc}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Featured Image Card on Right */}
            {data.featured && (
              <div className="mega-menu-featured">
                <div className="mega-featured-card">
                  <div className="mega-featured-image-wrapper">
                    <img
                      src={data.featured.image}
                      alt={data.featured.title}
                      className="img-cover"
                      loading="lazy"
                    />
                    <div className="mega-featured-overlay" />
                  </div>
                  <div className="mega-featured-info">
                    <span className="eyebrow eyebrow-light">FEATURED</span>
                    <h5 className="mega-featured-title">{data.featured.title}</h5>
                    <p className="mega-featured-desc">{data.featured.desc}</p>
                    <a
                      href={data.featured.path}
                      className="mega-featured-cta"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(data.featured.path);
                        onClose();
                      }}
                    >
                      {data.featured.cta} <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
