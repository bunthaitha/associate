import React from 'react';

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className = ''
}) {
  return (
    <div className={`section-header text-${align} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="section-title">
          {title}
        </h2>
      )}
      {description && (
        <p className="section-desc">
          {description}
        </p>
      )}
    </div>
  );
}
