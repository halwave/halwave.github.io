export interface JourneyItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

import profileImg from "/images/profile.jpg";
import aboutImg from "/images/about.jpg";
import pythonImg from "/images/python.jpg";

const journeyTimeline: JourneyItem[] = [
  {
    year: "2018",
    title: "Started Computer Science Degree",
    description:
      "Began my journey in computer science at University, learning the fundamentals of programming and software engineering.",
    image: profileImg,
  },
  {
    year: "2020",
    title: "First Internship",
    description:
      "Worked as a software engineering intern, building my first real-world applications and collaborating with a team.",
    image: aboutImg,
  },
  {
    year: "2022",
    title: "Graduated & Joined Example Corp",
    description:
      "Graduated with honors and started my professional career as a Software Developer.",
    image: pythonImg,
  },
  {
    year: "2024",
    title: "Launched Portfolio Website",
    description:
      "Designed and launched my personal portfolio to showcase my projects and journey.",
    image: profileImg,
  },
];

export default journeyTimeline;
