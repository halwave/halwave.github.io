import React from 'react';
import SkillsSection from '../components/SkillsSection';
import { education, awards, experience } from '../data/resume';

const ResumePage: React.FC = () => (
  <section className="py-12">
    <div className="mx-auto w-full max-w-3xl px-2 sm:px-4">
      <h2 className="text-3xl font-bold mb-6 border-b border-pink-400 pb-2 text-center">Resume</h2>
      <p className="text-pink-100 text-center max-w-2xl mx-auto mb-8">
        Here you can find my notable skills, experience, and achievements.
      </p>
      <SkillsSection />
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
    </div>
  </section>
);

export default ResumePage;
