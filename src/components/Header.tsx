import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'About', to: '/' },
  { name: 'Resume', to: '/resume' },
  { name: 'Projects', to: '/projects' },
  { name: 'My Journey', to: '/journey' },
  { name: 'Beyond Code', to: '/beyond-code' },
];

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <header className="py-8 flex flex-col items-center w-full" aria-label="Site navigation">
      <h1 className="text-4xl font-extrabold text-pink-400 drop-shadow mb-2 tracking-tight text-center">
        hwhiston
      </h1>
      <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-2 w-full max-w-xs sm:max-w-2xl px-1">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`text-lg font-semibold px-3 py-1 rounded transition-colors duration-200 hover:bg-pink-600/30 hover:text-pink-200 ${location.pathname === link.to ? 'bg-pink-600/40 text-pink-100' : 'text-pink-300'}`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
