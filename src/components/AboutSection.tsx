import React from 'react';
import Section from './Section';

const AboutSection: React.FC = () => (
  <Section title="About Me">
    <img src="/images/about.jpg" alt="About Me" loading="lazy" className="rounded-lg mb-4 max-h-64 object-cover border-2 border-pink-400 mx-auto block" />
    <p className="text-pink-100">
      I earned my MSc. from the University of Windsor in 2018, specializing in Pathfinding AI for Game Development. During my studies, I gained experience as a Junior Developer at Windsor Mold and served as a Graduate Assistant to several professors. After graduating, I worked as a Front-End Developer at Scribendi in Chatham-Kent. My current focus is on web development, including web applications and cloud-based services. Outside of work, I enjoy exploring game design techniques, practicing and playing guitar, reading fiction, and gaming. I have practiced both traditional and digital art since I was young, and my musical interests include video game soundtracks, vaporwave, and alternative rock.
    </p>
  </Section>
);

export default AboutSection;
