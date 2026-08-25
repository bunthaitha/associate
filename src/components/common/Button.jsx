import React from 'react';

export default function Button({
  children,
  variant = 'primary', // 'primary', 'secondary', 'secondary-light', 'text'
  onClick,
  href,
  className = '',
  type = 'button',
  icon: Icon,
  disabled = false,
  ...props
}) {
  const baseClass = variant === 'text' ? 'btn-text' : `btn btn-${variant}`;
  const combinedClass = `${baseClass} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        onClick={onClick}
        {...props}
      >
        {children}
        {Icon && <Icon size={18} />}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
      {Icon && <Icon size={18} />}
    </button>
  );
}
