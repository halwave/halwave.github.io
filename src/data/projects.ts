import type { Project } from "../components/ProjectsSection";

const projects: Project[] = [
  {
    title: "Feliciabot",
    image: "/images/projects/feliciabot.jpg",
    link: "https://github.com/hamdong/Feliciabot",
    description:
      "My longest running pet project and my main app. This is a Discord bot written in C# that has been active since 2017. It features a variety of commands, games, and utilities. It even plays music!",
  },
  {
    title: "Florabot",
    image: "/images/projects/florabot.jpg",
    description:
      "Sister bot to Feliciabot, designed to act as a lookup tool for data from the mobile game, Fire Emblem Heroes. Written in Python, this Discord bot provides quick access to character stats, skills, and more.",
  },
  {
    title: "MissileDefense.io",
    image: "/images/projects/missiledefense.jpg",
    link: "https://github.com/hwhiston/MissileDefense.io",
    description:
      "A retro-inspired missile defense game built with the Phaser 3 framework in JavaScript. You control a lone tank defending against waves of missiles. The game features a simple yet engaging gameplay loop.",
  },
  {
    title: "Pathfinding Application",
    image: "/images/projects/pathfinding.jpg",
    description:
      ".NET app that demonstrates various pathfinding algorithms, including A* Search and Dijkstra's Algorithm. This project formed the backbone of my master's thesis, which sought to optimize solutions based on additional weighted factors.",
  },
  {
    title: "Skeleton Key",
    image: "/images/projects/skeletonkey.jpg",
    description:
      "3D puzzle game built with Unity. The player controls their character with a first-person camera. The goal is to find all pieces of the titular skeleton key to unlock and exit the door before being caught by a roaming NPC.",
  },
  {
    title: "Python Tutorial for Beginners",
    image: "/images/projects/python.jpg",
    link: "https://github.com/hwhiston/PythonTutorialForBeginners",
    description:
      "A beginner-friendly Python tutorial broken down into easy-to-digest documents. Intended for tutoring first year Computer Science students.",
  },
  {
    title: "My Smash News",
    image: "/images/projects/smash.png",
    description:
      "A news website designed to broadcast updates specific to the Super Smash Bros. community. The app is written in PHP and uses a MySQL database to store articles and user data. It features a clean, responsive design and allows users to submit their own articles.",
  },
  {
    title: "Spherule",
    image: "/images/projects/spherule.jpg",
    link: "https://github.com/hwhiston/Spherule",
    description:
      "A physics-based puzzle game built with Unity and C#. The player controls a sphere launcher and must destroy all other spheres to clear the board. The game features a text-based level generator with multiple sphere types for building combos.",
  },
  {
    title: "Sword Runner",
    image: "/images/projects/unity.png",
    description:
      "A 2D endless runner game powered by the Unity game engine. The player controls a character that runs automatically, and the player must jump over obstacles and collect coins. I unfortunately do not have a screenshot of it in action.",
  },
  {
    title: "Simple Chat",
    image: "/images/projects/simplechat.jpg",
    description:
      "A simple P2P chat app that uses Websockets for communication.",
  },
  {
    title: "My Website (old)",
    image: "/images/projects/oldwebsite.jpg",
    description:
      "My previous website written in vanilla HTML/CSS/JS. It was a simple, static site that showcased my projects and resume.",
  },
  {
    title: "My Resume (old)",
    image: "/images/projects/myresume.jpg",
    description:
      "My previous resume site that I hosted on the universities network. It was a simple, static site that showcased my resume and contact information.",
  },
];

export default projects;
