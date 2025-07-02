import React from 'react';

const interests = [
  'Vaporwave Music',
  'Retro Video Games',
  'Synthwave Art',
  'Guitar',
];

const InterestsSection: React.FC = () => (
  <section className="max-w-2xl mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-4 border-b border-pink-400 pb-2">Personal Interests</h2>
    <div className="flex flex-wrap gap-4">
      {interests.map((interest) => (
        <span key={interest} className="bg-pink-600 px-4 py-2 rounded-full font-semibold">
          {interest}
        </span>
      ))}
    </div>
  </section>
);

export default InterestsSection;
