import React, { useState } from 'react';
import { ChevronDown, ArrowRight, X, MapPin } from 'lucide-react';
import Button from '../common/Button';

export default function MobileMenu({ isOpen, onClose, navLinks, onNavigate, onOpenChapterFinder }) {
  const [expandedMenu, setExpandedMenu] = useState(null);

  if (!isOpen) return null;

  const toggleAccordion = (id) => {
    setExpandedMenu(expandedMenu === id ? null : id);
  };

  const handleLinkClick = (path) => {
    onNavigate(path);
    onClose();
  };

  return (
    <div className="mobile-menu-drawer-backdrop" onClick={onClose}>
      <div
        className="mobile-menu-drawer"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="mobile-menu-header">
          <div className="navbar-brand-logo">
            <span className="brand-icon-box">DA</span>
            <div className="brand-text-wrap">
              <span className="brand-title">DEMO</span>
              <span className="brand-subtitle">ASSOCIATION</span>
            </div>
          </div>
          <button
            type="button"
            className="mobile-menu-close-btn"
            onClick={onClose}
            aria-label="Close navigation"
          >
            <X size={24} />
          </button>
        </div>

        <div className="mobile-menu-body">
          <ul className="mobile-nav-list">
            {navLinks.map((item) => {
              const hasSubmenu = Boolean(item.mega);
              const isExpanded = expandedMenu === item.id;

              return (
                <li key={item.id} className="mobile-nav-item">
                  {hasSubmenu ? (
                    <div>
                      <button
                        type="button"
                        className={`mobile-nav-btn ${isExpanded ? 'active' : ''}`}
                        onClick={() => toggleAccordion(item.id)}
                        aria-expanded={isExpanded}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`mobile-chevron ${isExpanded ? 'rotated' : ''}`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="mobile-submenu">
                          {item.mega.columns.map((col, cIdx) => (
                            <div key={cIdx} className="mobile-submenu-group">
                              <span className="mobile-group-title">{col.title}</span>
                              {col.items.map((sub, sIdx) => (
                                <a
                                  key={sIdx}
                                  href={sub.path}
                                  className="mobile-submenu-link"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick(sub.path);
                                  }}
                                >
                                  <div>
                                    <div className="mobile-link-name">{sub.label}</div>
                                    <div className="mobile-link-desc">{sub.desc}</div>
                                  </div>
                                  <ArrowRight size={14} className="mobile-link-arrow" />
                                </a>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.path}
                      className="mobile-nav-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.path);
                      }}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mobile-menu-footer">
            <Button
              variant="primary"
              className="btn-block"
              onClick={() => {
                onClose();
                onOpenChapterFinder();
              }}
              icon={MapPin}
            >
              VISIT A CHAPTER
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
