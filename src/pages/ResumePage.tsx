import React from 'react';
import { education, awards, experience, skills } from '../data/resume';
import Section from '../components/Section';

const ResumePage: React.FC = () => (
  <Section title="Resume">
    <p className="text-pink-100 text-center max-w-2xl mx-auto mb-8">
      Here you can find my notable skills, experience, and achievements.
    </p>
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-pink-200 mb-4 border-b border-pink-400 pb-1">Technical Skills</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-8">
        {skills.map((skill) => (
          <div key={skill.category} className="bg-[#2d006e]/80 rounded-2xl shadow p-6 border border-pink-400">
            <h4 className="font-semibold text-pink-200 mb-2 text-lg text-center">{skill.category}</h4>
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
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-pink-200 mb-4 border-b border-pink-400 pb-1">Professional Experience</h3>
      <div className="space-y-4">
        {experience.map((exp) => (
          <div key={exp.role + exp.company} className="bg-purple-800 bg-opacity-60 rounded-lg p-4 border border-pink-400">
            <h4 className="font-bold text-lg">{exp.role} at {exp.company}</h4>
            <p className="text-sm">{exp.years}</p>
            <ul className="list-disc ml-6 mt-2 text-pink-200">
              {exp.details.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-pink-200 mb-4 border-b border-pink-400 pb-1">Education</h3>
      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.degree + edu.school} className="bg-purple-800 bg-opacity-60 rounded-lg p-4 border border-pink-400">
            <h4 className="font-bold text-lg">{edu.degree}</h4>
            <p className="text-sm">{edu.school} | {edu.years}</p>
            <ul className="list-disc ml-6 mt-2 text-pink-200">
              {edu.details.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-pink-200 mb-4 border-b border-pink-400 pb-1">Awards & Certificates</h3>
      <div className="space-y-4">
        {awards.map((award) => (
          <div key={award.title + award.year} className="bg-purple-800 bg-opacity-60 rounded-lg p-4 border border-pink-400">
            <h4 className="font-bold text-lg">{award.title} <span className="text-xs text-pink-100">({award.year})</span></h4>
            <p className="text-pink-100 text-sm mt-1">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default ResumePage;
