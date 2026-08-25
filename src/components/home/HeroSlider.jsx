import React, { useState, useEffect, useRef } from 'react';
import Button from '../common/Button';

const slides = [
  {
    id: 1,
    eyebrow: 'INTERNATIONAL BUSINESS COMMUNITY',
    title: 'BUILD CONNECTIONS. GROW TOGETHER.',
    description: 'Connect with ambitious business professionals and build relationships that create meaningful opportunities and sustainable revenue growth.',
    primaryCta: 'FIND YOUR COMMUNITY',
    secondaryCta: 'EXPLORE MEMBERSHIP',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=85',
    primaryAction: 'chapter',
    secondaryAction: '/membership'
  },
  {
    id: 2,
    eyebrow: 'VETTED BUSINESS REFERRALS',
    title: 'YOUR NETWORK CAN OPEN NEW DOORS',
    description: 'Meet trusted business owners, exchange qualified introductions and discover new commercial opportunities in an exclusive, non-competing circle.',
    primaryCta: 'JOIN THE NETWORK',
    secondaryCta: 'HOW IT WORKS',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=85',
    primaryAction: '/membership',
    secondaryAction: '/networking'
  },
  {
    id: 3,
    eyebrow: 'GLOBAL REACH · LOCAL IMPACT',
    title: 'LOCAL CONNECTIONS. GLOBAL OPPORTUNITIES.',
    description: 'Build strong relationships within your local business community while seamlessly connecting with vetted professionals in 75+ countries worldwide.',
    primaryCta: 'EXPLORE OUR COMMUNITY',
    secondaryCta: 'VIEW UPCOMING EVENTS',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=85',
    primaryAction: '/about',
    secondaryAction: '/events'
  }
];

export default function HeroSlider({ onNavigate, onOpenChapterFinder }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayTimerRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;

    autoPlayTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isPaused]);

  const handleAction = (action) => {
    if (action === 'chapter') {
      onOpenChapterFinder();
    } else {
      onNavigate(action);
    }
  };

  return (
    <section
      className="hero-slider-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Showcase"
    >
      <div className="hero-slider-container">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`hero-slide ${isActive ? 'is-active' : ''}`}
              aria-hidden={!isActive}
            >
              <div className="hero-slide-image-wrap">
                <img
                  src={slide.image}
                  alt=""
                  className="img-cover hero-slide-img"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <div className="hero-slide-overlay" />
              </div>

              <div className="container hero-content-container">
                <div className="hero-content-box">
                  <span className="hero-eyebrow">{slide.eyebrow}</span>
                  <h1 className="hero-headline">{slide.title}</h1>
                  <p className="hero-description">{slide.description}</p>
                  
                  <div className="hero-actions-row">
                    <Button
                      variant="primary"
                      className="hero-btn-primary"
                      onClick={() => handleAction(slide.primaryAction)}
                    >
                      {slide.primaryCta}
                    </Button>
                    {slide.secondaryCta && (
                      <Button
                        variant="secondary-light"
                        className="hero-btn-secondary"
                        onClick={() => handleAction(slide.secondaryAction)}
                      >
                        {slide.secondaryCta}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Minimal Accessible Pagination Controls */}
        <div className="hero-controls-bar">
          <div className="container hero-controls-container">
            <div className="hero-pagination-dots">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`hero-dot ${idx === currentSlide ? 'is-active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
