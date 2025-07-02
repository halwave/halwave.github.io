import React from 'react';

const AboutSection: React.FC = () => (
  <section className="max-w-3xl mx-auto py-8">
    <h2 className="text-3xl font-bold mb-4 border-b border-pink-400 pb-2">About Me</h2>
    <img src="/images/about.jpg" alt="About Me" className="rounded-lg mb-4 max-h-64 object-cover border-2 border-pink-400 mx-auto block" />
    <p className="text-pink-100">
      I earned my MSc. from the University of Windsor in 2018, specializing in Pathfinding AI for Game Development. During my studies, I gained experience as a Junior Developer at Windsor Mold and served as a Graduate Assistant to several professors. After graduating, I worked as a Front-End Developer at Scribendi in Chatham-Kent. My current focus is on web development, including web applications and cloud-based services. Outside of work, I enjoy exploring game design techniques, practicing and playing guitar, reading fiction, and gaming. I have practiced both traditional and digital art since I was young, and my musical interests include video game soundtracks, vaporwave, and alternative rock.
    </p>
  </section>
);

export default AboutSection;
