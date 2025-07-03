import React from 'react';
import Section from '../components/Section';
import profileImg from '/images/profile.jpg';

const AboutPage: React.FC = () => (
  <>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 mt-4">
      <img
        src={profileImg}
        alt="Profile"
        loading="lazy"
        className="w-28 h-28 aspect-square rounded-full border-4 border-pink-400 shadow-lg object-cover"
      />
      <div className="text-center sm:text-left max-w-xl">
        <h2 className="text-2xl font-bold text-pink-200 mb-2">Hi, I'm Halen</h2>
        <p className="text-pink-100 text-base">
          Canadian Software Developer and retro enthusiast. I enjoy building for the web and learning how code, art, and music can interact in creative projects.
        </p>
      </div>
    </div>
    <Section title="About Me">
      <img src="/images/about.jpg" alt="About Me" loading="lazy" className="rounded-lg mb-4 max-h-64 object-cover border-2 border-pink-400 mx-auto block" />
      <p className="text-pink-100">
        I earned my MSc from the University of Windsor in 2018, specializing in pathfinding AI for game development. During my studies, I gained experience as a Junior Developer at Windsor Mold and served as a Graduate Assistant to several professors. After graduating, I worked as a Front-End Developer at Scribendi in Chatham-Kent. I later moved back to Windsor to work at Rocket Innovation Studio as a Software Developer. My current focus is on web development, including web applications and cloud-based services. Outside of work, I enjoy exploring game design techniques, practicing guitar, reading fiction, and gaming. I have practiced both traditional and digital art since I was young. My musical interests include video game soundtracks, vaporwave, and alternative rock.
      </p>
    </Section>
  </>
);

export default AboutPage;
