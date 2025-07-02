import React from 'react';

const beyondCodeData = [
  {
    category: 'Music',
    items: [
      'Favorite Bands: The Midnight, Gunship, Daft Punk, TWRP',
      'Genres: Synthwave, Retrowave, Indie Rock'
    ]
  },
  {
    category: 'Art',
    items: [
      'Digital illustration (Procreate, Photoshop)',
      'Pixel art & retro game art',
      'Occasional album cover remixes'
    ]
  },
  {
    category: 'Books',
    items: [
      'Currently reading: “Neuromancer” by William Gibson',
      'Recent favorites: “The Pragmatic Programmer”, “Atomic Habits”'
    ]
  },
  {
    category: 'Other Interests',
    items: [
      'Retro gaming & emulation',
      'Synthesizers & music production',
      'Photography',
      'Travel & city exploration'
    ]
  }
];

const BeyondCodePage: React.FC = () => (
  <section className="py-12">
    <div className="mx-auto w-full max-w-3xl px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <h2 className="text-3xl font-bold mb-6 border-b border-pink-400 pb-2 text-center">Beyond Code</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
        {beyondCodeData.map((section) => (
          <div key={section.category} className="bg-[#2d006e]/80 rounded-2xl shadow p-6 border border-pink-400">
            <h3 className="font-semibold text-pink-200 mb-2 text-lg text-center">{section.category}</h3>
            <ul className="flex flex-col gap-2">
              {section.items.map((item) => (
                <li key={item} className="text-pink-100 text-sm font-mono">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BeyondCodePage;
