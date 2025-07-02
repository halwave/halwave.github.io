import React from 'react';
import beyondCodeData from '../data/beyondCode';

const pageIntro = `
This page is a window into the things that inspire me, keep me curious, and fuel my creativity outside of work. Here you’ll find some of my favorite music, art, games, and books—with a few personal notes on why they matter to me.`;

const BeyondCodePage: React.FC = () => (
  <section className="py-12">
    <div className="mx-auto w-full max-w-3xl">
      <h2 className="text-3xl font-bold mb-6 border-b border-pink-400 pb-2 text-center">Beyond Code</h2>
      <p className="text-pink-100 text-center mb-10 max-w-2xl mx-auto whitespace-pre-line">{pageIntro}</p>
      <div className="flex flex-col gap-12">
        {beyondCodeData.map((section) => (
          <div key={section.category}>
            <h3 className="font-semibold text-pink-200 mb-2 text-2xl text-center">{section.category}</h3>
            {section.description && (
              <p className="text-pink-100 text-center mb-4 text-base">{section.description}</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
              {section.items.map((item) => (
                <div key={item.title} className="bg-[#2d006e]/80 rounded-2xl shadow p-4 border border-pink-400 flex flex-col items-center max-w-xs">
                  <img src={item.image} alt={item.title} className="rounded-xl mb-2 max-w-[120px] max-h-[120px] object-cover border border-pink-300 shadow" />
                  <h4 className="font-bold text-pink-200 text-center mb-1 mt-2">{item.title}</h4>
                  <p className="text-pink-100 text-xs text-center">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BeyondCodePage;
