import React from 'react';

const skills = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'C#', 'HTML', 'CSS/Sass']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Redux']
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Jest', 'Linux', 'Docker']
  },
  {
    category: 'Other',
    items: ['Agile/Scrum', 'CI/CD', 'REST APIs', 'Unit Testing', 'Responsive Design']
  }
];

const SkillsSection: React.FC = () => (
  <section className="py-12">
    <div className="mx-auto w-full max-w-3xl px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <h2 className="text-3xl font-bold mb-6 border-b border-pink-400 pb-2 text-center">Technical Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
        {skills.map((skill) => (
          <div key={skill.category} className="bg-[#2d006e]/80 rounded-2xl shadow p-6 border border-pink-400">
            <h3 className="font-semibold text-pink-200 mb-2 text-lg text-center">{skill.category}</h3>
            <ul className="flex flex-wrap gap-2 justify-center">
              {skill.items.map((item) => (
                <li key={item} className="bg-pink-700/30 text-pink-100 px-3 py-1 rounded-full text-sm font-mono border border-pink-300/40">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
