import React from 'react';
import Section from '../components/Section';
import { skills } from '../data/skills';

const SkillsSection: React.FC = () => (
  <Section title="Technical Skills">
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
  </Section>
);

export default SkillsSection;
