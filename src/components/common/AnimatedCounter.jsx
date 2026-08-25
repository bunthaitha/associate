import React, { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ value, prefix = '', suffix = '', duration = 1800, formatted }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    const el = elementRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const end = typeof value === 'number' ? value : parseInt(value, 10);
    if (isNaN(end)) return;

    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * end);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [hasAnimated, value, duration]);

  const displayString = () => {
    if (!hasAnimated) {
      return `${prefix}0${suffix}`;
    }
    if (formatted && count === value) {
      return `${prefix}${formatted}`;
    }
    return `${prefix}${count.toLocaleString()}${suffix}`;
  };

  return (
    <span ref={elementRef} className="animated-counter-value">
      {displayString()}
    </span>
  );
}
