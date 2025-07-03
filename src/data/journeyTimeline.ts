export interface JourneyItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

import visualBasicLogo from "/images/journey/visual-basic-logo.jpg";
import uwindsorLogo from "/images/journey/uwindsor-logo.jpg";
import windsorMoldLogo from "/images/journey/windsor-mold-logo.jpg";
import unityLogo from "/images/journey/unity-logo.jpg";
import scribendiLogo from "/images/journey/scribendi-logo.jpg";
import rocketLogo from "/images/journey/rocket-logo.jpg";
import viteLogo from "/images/journey/vite-logo.jpg";

const journeyTimeline: JourneyItem[] = [
  {
    year: "2007",
    title: "First Steps in Computer Science",
    description:
      "Took my first computer science course in high school, learning Visual Basic and discovering a passion for programming and techology.",
    image: visualBasicLogo,
  },
  {
    year: "2010",
    title: "Started University – Game Development Focus",
    description:
      "Began my Honours BSc in Computer Science (Game Development) at the University of Windsor, inspired by a love of games, music, and creative writing.",
    image: uwindsorLogo,
  },
  {
    year: "2012",
    title: "Expanding Skills & Co-op Experience",
    description:
      "Learned Java and C#, and completed my first co-op placement at Windsor Mold Group, developing internal tools and automation with Excel VBA and C# for the Tooling Division.",
    image: uwindsorLogo,
  },
  {
    year: "2013",
    title: "Industry Experience & Personal Growth",
    description:
      "Focused on co-op work, gaining valuable real-world experience and building confidence as a developer.",
    image: windsorMoldLogo,
  },
  {
    year: "2014",
    title: "Game Development & Competitive Gaming",
    description:
      "Worked with the Unity game engine and continued to develop programming skills. Became involved in competitive gaming and started attending local tournaments.",
    image: unityLogo,
  },
  {
    year: "2016",
    title: "Graduation & New Horizons",
    description:
      "Completed my undergraduate degree and was accepted into the MSc in Computer Science program at the University of Windsor, specializing in pathfinding AI. Embraced new academic challenges and supported fellow graduate students.",
    image: uwindsorLogo,
  },
  {
    year: "2018",
    title: "MSc Graduation & First Full-Time Role",
    description:
      "Graduated and joined Scribendi as a Front-End Developer, supporting a global team of editors with web application development. Purchased my first car and began building financial independence.",
    image: scribendiLogo,
  },
  {
    year: "2020",
    title: "New Beginnings at Rocket Innovation Studio & Home Ownership",
    description:
      "Started at Rocket Innovation Studio as an Associate Software Developer. Adapted to remote work during the pandemic and achieved a major milestone by purchasing my first condo in Windsor.",
    image: rocketLogo,
  },
  {
    year: "2021–2024",
    title: "Growth at Rocket – Projects & Leadership",
    description:
      "Promoted to Software Developer. Contributed to projects for Edison Financial, Rocket Mortgage, and RocketPro, working with technologies like Angular, React, C#, Salesforce, and modern CMS platforms.",
    image: rocketLogo,
  },
  {
    year: "2024",
    title: "Portfolio Launch & Looking Forward",
    description:
      "Launched my personal portfolio website to showcase my journey, projects, and growth as a developer. Continuing to learn, create, and support others in the tech community.",
    image: viteLogo,
  },
];

export default journeyTimeline;
