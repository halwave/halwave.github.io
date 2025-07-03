import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => (
  <section className={`py-12 ${className}`} aria-label={title}>
    <div className="mx-auto w-full max-w-3xl px-2 sm:px-4">
      <h2 className="text-3xl font-bold mb-6 border-b border-pink-400 pb-2 text-center">{title}</h2>
      {children}
    </div>
  </section>
);

export default Section;
