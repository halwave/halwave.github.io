import React from 'react';
import projects from '../data/projects';

const ProjectsPage: React.FC = () => (
  <section className="py-12">
    <div className="mx-auto w-full max-w-5xl px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
      <h2 className="text-3xl font-bold mb-6 border-b border-pink-400 pb-2 text-center">Projects</h2>
      <p className="mb-8 text-pink-100 text-center">
        Here are some of my favorite and most impactful projects. For more, check out my GitHub!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 justify-items-center">
        {projects.map((proj) => (
          <div key={proj.title} className="bg-[#2d006e]/80 rounded-2xl shadow-xl p-4 flex flex-col items-center hover:scale-105 transition-transform max-w-xs min-w-[220px] m-2 border border-pink-400">
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img src={proj.image} alt={proj.title} className="rounded-xl mb-2 max-w-[200px] max-h-[120px] object-cover border border-pink-300 shadow" />
              <h3 className="font-bold text-lg mb-1 text-pink-200 text-center">{proj.title}</h3>
              <p className="text-xs text-pink-100 text-center">{proj.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsPage;
