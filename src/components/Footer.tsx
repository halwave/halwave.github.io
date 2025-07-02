import React from 'react';

const Footer: React.FC = () => (
  <footer className="mt-12 text-pink-200 text-sm text-center py-4">
    &copy; {new Date().getFullYear()} Halen Whiston. All rights reserved. <span className="ml-2">Template inspired by HTML5 UP</span>
  </footer>
);

export default Footer;
