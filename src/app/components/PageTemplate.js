// src/app/components/PageTemplate.js
'use client';

import StaticContainer from './StaticContainer';

/**
 * PageTemplate
 * A reusable layout wrapper for static pages.
 *
 * Props:
 * - description?: string Optional descriptor rendered above the title.
 * - title?: string       Title rendered as an <h1>.
 * - children: ReactNode  Content of the page.
 */
export default function PageTemplate({ title, description, children }) {
  return (
    <section className="bg-black text-white py-12 pb-20">
      <StaticContainer>
        {description && <p className="text-lg text-gray-600 mb-2">{description}</p>}
        {title && <h1 className="text-4xl font-bold mb-4">{title}</h1>}
        <div className="space-y-6">
          {children}
        </div>
      </StaticContainer>
    </section>
  );
}