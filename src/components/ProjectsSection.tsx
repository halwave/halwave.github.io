import React from 'react';

export interface Project {
  title: string;
  image: string;
  link: string;
  description: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => (
  <section className="py-12">
    <div className="mx-auto w-full max-w-5xl">
      <h2 className="text-3xl font-bold mb-6 border-b border-pink-400 pb-2 text-center">Portfolio</h2>
      <p className="mb-8 text-pink-100 text-center">
        My projects vary in scope. Nevertheless, they are designed with the utmost care, creativity and functional efficiency.<br />Here you may find the github links to (most) of my projects.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 justify-items-center">
        {projects.map((proj) => (
          <div key={proj.title} className="bg-[#2d006e]/80 rounded-2xl shadow-xl p-4 flex flex-col items-center hover:scale-105 transition-transform max-w-xs min-w-[160px] m-2 border border-pink-400">
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img src={proj.image} alt={proj.title} loading="lazy" className="rounded-xl mb-2 max-w-[200px] max-h-[120px] object-cover border border-pink-300 shadow" />
              <h3 className="font-bold text-lg mb-1 text-pink-200 text-center">{proj.title}</h3>
              <p className="text-xs text-pink-100 text-center">{proj.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
