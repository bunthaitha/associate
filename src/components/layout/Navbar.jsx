import React, { useState, useEffect, useRef } from 'react';
import { Menu, ChevronDown, MapPin } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import Button from '../common/Button';

export default function Navbar({ currentPath, onNavigate, onOpenChapterFinder }) {
  const [activeMega, setActiveMega] = useState(null);
  const [isPinned, setIsPinned] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimerRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveMega(null);
        setIsPinned(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveMega(null);
        setIsPinned(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnter = (item) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    if (item.mega) {
      setActiveMega(item);
    } else if (!isPinned) {
      setActiveMega(null);
    }
  };

  const handleMouseLeave = () => {
    if (!isPinned) {
      closeTimerRef.current = setTimeout(() => {
        setActiveMega(null);
      }, 200);
    }
  };

  const handleMegaMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
  };

  const handleMegaMouseLeave = () => {
    if (!isPinned) {
      closeTimerRef.current = setTimeout(() => {
        setActiveMega(null);
      }, 200);
    }
  };

  const handleNavClick = (e, item) => {
    e.preventDefault();
    if (item.mega) {
      if (activeMega?.id === item.id) {
        // Click again -> Close / unstick menu
        setActiveMega(null);
        setIsPinned(false);
      } else {
        // Click -> Open & stick menu
        setActiveMega(item);
        setIsPinned(true);
      }
    } else {
      setActiveMega(null);
      setIsPinned(false);
      if (item.path) {
        onNavigate(item.path);
      }
    }
  };

  const handleCloseMega = () => {
    setActiveMega(null);
    setIsPinned(false);
  };

  return (
    <header
      ref={headerRef}
      className={`site-navbar-header ${isScrolled ? 'is-scrolled' : ''}`}
    >
      <div className="navbar-container">
        {/* Brand Logo */}
        <a
          href="/"
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault();
            handleCloseMega();
            onNavigate('/');
          }}
          aria-label="DEMO ASSOCIATION Home"
        >
          <div className="brand-icon-box">DA</div>
          <div className="brand-text-wrap">
            <span className="brand-title">DEMO</span>
            <span className="brand-subtitle">ASSOCIATION</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="desktop-nav-list">
            {navLinks.map((item) => {
              const hasMega = Boolean(item.mega);
              const isOpen = activeMega?.id === item.id;
              const isActive =
                currentPath === item.path ||
                (item.mega && item.mega.columns.some((c) => c.items.some((i) => i.path === currentPath)));

              return (
                <li
                  key={item.id}
                  className="desktop-nav-item"
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.path || '#'}
                    className={`desktop-nav-link ${isActive ? 'active' : ''} ${isOpen ? 'is-open' : ''}`}
                    onClick={(e) => handleNavClick(e, item)}
                    aria-expanded={hasMega ? isOpen : undefined}
                    aria-haspopup={hasMega ? 'true' : undefined}
                  >
                    <span>{item.label}</span>
                    {hasMega && <ChevronDown size={14} className="nav-chevron" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Right Actions */}
        <div className="navbar-actions">
          <Button
            variant="primary"
            className="navbar-cta-btn"
            onClick={() => {
              handleCloseMega();
              onOpenChapterFinder();
            }}
            icon={MapPin}
          >
            VISIT A CHAPTER
          </Button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-hamburger-btn"
            onClick={() => {
              handleCloseMega();
              setMobileOpen(true);
            }}
            aria-label="Open mobile menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* Full-width Mega Menu Dropdown */}
      {activeMega && (
        <MegaMenu
          data={activeMega.mega}
          isOpen={Boolean(activeMega)}
          onClose={handleCloseMega}
          onMouseEnter={handleMegaMouseEnter}
          onMouseLeave={handleMegaMouseLeave}
          onNavigate={(path) => {
            handleCloseMega();
            onNavigate(path);
          }}
        />
      )}

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={navLinks}
        onNavigate={onNavigate}
        onOpenChapterFinder={onOpenChapterFinder}
      />
    </header>
  );
}
