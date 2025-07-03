import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="relative min-h-screen w-full bg-gradient-to-br from-[#2d006e] via-pink-600 to-[#ff5fd8] text-white font-mono overflow-hidden px-4">
    <Header />
    <main className="relative z-10" aria-label="Main content">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
