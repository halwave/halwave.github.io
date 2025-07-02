import React from 'react';
import journeyTimeline from '../data/journeyTimeline';

function StarPatternBackground({ count = 60 }: { count?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <svg width="100%" height="100%" className="w-full h-full" style={{ position: 'absolute', top: 0, left: 0 }}>
        {Array.from({ length: count }).map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 100 + '%'}
            cy={Math.random() * 100 + '%'}
            r={Math.random() * 1.5 + 0.5}
            fill="#fff8"
          />
        ))}
      </svg>
    </div>
  );
}

const JourneyPage: React.FC = () => (
  <section className="relative z-10 max-w-3xl mx-auto px-4 py-12 min-h-screen w-full bg-gradient-to-br from-[#1a0033] via-[#2d006e] to-[#3a006e] text-white font-mono overflow-hidden rounded-3xl shadow-2xl border-2 border-pink-400/80">
    <StarPatternBackground />
    <h2 className="text-3xl font-bold mb-8 border-b border-pink-400 pb-2 text-center">My Journey</h2>
    <div className="relative border-l-2 border-pink-400 ml-4">
      {journeyTimeline.map((item, idx) => (
        <div
          key={item.year + item.title}
          className={`mb-16 ml-6 flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
        >
          <div className="absolute w-3 h-3 bg-pink-400 rounded-full -left-1.5 mt-2.5 z-10"></div>
          <img src={item.image} alt={item.title} className="w-16 h-16 rounded-full border-2 border-pink-400 shadow-lg mx-4" />
          <div className="bg-purple-900 bg-opacity-70 rounded-xl p-6 shadow-lg max-w-md">
            <h3 className="font-bold text-lg text-pink-200">{item.year} – {item.title}</h3>
            <p className="text-pink-100 mt-1">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default JourneyPage;
