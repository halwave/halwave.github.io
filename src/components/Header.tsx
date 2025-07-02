import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'My Journey', to: '/journey' },
  // Add more pages here as needed
];

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <header className="py-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-pink-400 drop-shadow mb-2 tracking-tight text-center">
        hwhiston
      </h1>
      <nav className="flex gap-6 mt-2">
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
