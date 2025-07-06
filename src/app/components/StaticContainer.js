// src/app/components/StaticContainer.js
'use client';

/**
 * StaticContainer
 * A layout wrapper for static pages to enforce consistent width,
 * centering, and horizontal padding.
 *
 * Props:
 * - children: ReactNode   The page content to wrap
 * - className?: string    Optional additional Tailwind classes
 */
export default function StaticContainer({ children, className = '' }) {
  return (
    <div className={`max-w-4xl mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
}
