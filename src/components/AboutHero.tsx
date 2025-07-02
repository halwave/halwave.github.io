import React from 'react';
import profileImg from '/images/profile.jpg';

const AboutHero: React.FC = () => (
  <section className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 mt-4">
    <img
      src={profileImg}
      alt="Profile"
      className="w-28 h-28 rounded-full border-4 border-pink-400 shadow-lg object-cover"
    />
    <div className="text-center sm:text-left max-w-xl">
      <h2 className="text-2xl font-bold text-pink-200 mb-2">Hi, I'm Halen</h2>
      <p className="text-pink-100 text-base">
        Canadian Software Developer and retro enthusiast. I enjoy building for the web and exploring how code, art, and music interact in creative projects.
      </p>
    </div>
  </section>
);

export default AboutHero;
