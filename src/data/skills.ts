export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C#", "HTML", "CSS/Sass"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Redux"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Figma", "Jest", "Linux", "Docker"],
  },
  {
    category: "Other",
    items: [
      "Agile/Scrum",
      "CI/CD",
      "REST APIs",
      "Unit Testing",
      "Responsive Design",
    ],
  },
];
