import React from 'react';

const Header: React.FC = () => (
  <header className="flex flex-col items-center py-12">
    <img
      src="/src/assets/profile.jpg"
      alt="Profile"
      className="w-32 h-32 rounded-full border-4 border-pink-400 shadow-lg mb-4"
    />
    <h1 className="text-5xl font-extrabold tracking-widest drop-shadow-lg mb-2">
      Halen Whiston
    </h1>
    <p className="text-xl font-semibold mb-2">Software Developer</p>
    <p className="text-pink-200">Desktop / Web / Cloud / Game / Mobile</p>
    <div className="flex gap-4 mt-4">
      <a href="https://github.com/hwhiston" className="hover:text-pink-300" aria-label="Github">Github</a>
      <a href="mailto:halenw24@gmail.com" className="hover:text-pink-300" aria-label="Email">Email</a>
    </div>
  </header>
);

export default Header;
