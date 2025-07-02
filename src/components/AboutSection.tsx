import React from 'react';

const AboutSection: React.FC = () => (
  <section className="max-w-3xl mx-auto py-8">
    <h2 className="text-3xl font-bold mb-4 border-b border-pink-400 pb-2">About Me</h2>
    <img src="/images/about.jpg" alt="About Me" className="rounded-lg mb-4 max-h-64 object-cover border-2 border-pink-400" />
    <p className="text-pink-100">
      I graduated from the University of Windsor in 2018 with my MSc., specializing in Pathfinding A.I. in Game Development. During my time at the university, I worked as a co-op student for Windsor Mold as a Junior Developer, moving on to be a Graduate Assistant to several professors while enrolled in the Graduate Program. In my spare time, I enjoy catching up on game design techniques used by industry leaders, practicing the guitar, reading fiction novels, and of course, gaming. My favorite music includes that of the Video Game Soundtrack genre, Vaporwave, Synthwave, and Classic to Alternative Rock.
    </p>
  </section>
);

export default AboutSection;
