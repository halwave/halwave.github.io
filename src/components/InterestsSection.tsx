import React from 'react';
import Section from './Section';

const interests = [
  'Vaporwave Music',
  'Retro Video Games',
  'Synthwave Art',
  'Guitar',
];

const InterestsSection: React.FC = () => (
  <Section title="Interests">
    <ul className="list-disc ml-6 text-pink-100">
      {interests.map((interest) => (
        <li key={interest}>{interest}</li>
      ))}
    </ul>
  </Section>
);

export default InterestsSection;
