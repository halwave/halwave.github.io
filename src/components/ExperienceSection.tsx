import React from 'react';
import Section from './Section';

const experiences = [
  {
    role: 'Software Developer',
    company: 'Example Corp',
    years: '2022 - Present',
    details: [
      'Developed cool stuff',
      'Worked with modern web tech',
    ],
  },
];

const ExperienceSection: React.FC = () => (
  <Section title="Professional Experience">
    <ul className="list-disc ml-6 text-pink-100">
      {experiences.map((exp) => (
        <li key={exp.role + exp.company}>
          {exp.role} at {exp.company} ({exp.years})
          <ul className="list-disc ml-6 mt-2 text-pink-200">
            {exp.details.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </li>
      ))}
    </ul>
  </Section>
);

export default ExperienceSection;
