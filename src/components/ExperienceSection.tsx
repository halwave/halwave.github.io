import React from 'react';

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
  <section className="max-w-3xl mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-4 border-b border-pink-400 pb-2">Professional Experience</h2>
    <div className="space-y-4">
      {experiences.map((exp) => (
        <div key={exp.role + exp.company} className="bg-purple-800 bg-opacity-60 rounded-lg p-4">
          <h3 className="font-bold text-lg">{exp.role} at {exp.company}</h3>
          <p className="text-sm">{exp.years}</p>
          <ul className="list-disc ml-6 mt-2 text-pink-200">
            {exp.details.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
