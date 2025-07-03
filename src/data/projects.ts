export interface Project {
  title: string;
  image: string;
  link?: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Feliciabot",
    image: "/images/projects/feliciabot.jpg",
    link: "https://github.com/hamdong/Feliciabot",
    description:
      "A Discord bot written in C# that's been my main app since 2017. Packed with games, utilities, and even music playback.",
  },
  {
    title: "Florabot",
    image: "/images/projects/florabot.jpg",
    description:
      "A Python Discord bot for Fire Emblem Heroes—lookup stats, skills, and more in seconds.",
  },
  {
    title: "MissileDefense.io",
    image: "/images/projects/missiledefense.jpg",
    link: "https://github.com/hwhiston/MissileDefense.io",
    description:
      "Retro missile defense game built with Phaser 3. Defend your tank against endless waves of missiles.",
  },
  {
    title: "Pathfinding Application",
    image: "/images/projects/pathfinding.jpg",
    description:
      ".NET app visualizing A*, Dijkstra, and more—core of my master's thesis on pathfinding AI.",
  },
  {
    title: "Skeleton Key",
    image: "/images/projects/skeletonkey.jpg",
    description:
      "3D Unity puzzle game: find all key pieces and escape before the NPC catches you.",
  },
  {
    title: "Python Tutorial for Beginners",
    image: "/images/projects/python.jpg",
    link: "https://github.com/hwhiston/PythonTutorialForBeginners",
    description:
      "Beginner-friendly Python docs for tutoring first-year CS students.",
  },
  {
    title: "My Smash News",
    image: "/images/projects/smash.png",
    description:
      "A PHP/MySQL news site for the Smash Bros. community, with user-submitted articles and a clean, responsive design.",
  },
  {
    title: "Spherule",
    image: "/images/projects/spherule.jpg",
    link: "https://github.com/hwhiston/Spherule",
    description:
      "Physics puzzle game in Unity: launch spheres, clear the board, and build combos.",
  },
  {
    title: "Sword Runner",
    image: "/images/projects/unity.png",
    description:
      "2D endless runner in Unity. Jump obstacles, collect coins, and keep running!",
  },
  {
    title: "Simple Chat",
    image: "/images/projects/simplechat.jpg",
    description: "A simple peer-to-peer chat app using Websockets.",
  },
  {
    title: "My Website (old)",
    image: "/images/projects/oldwebsite.jpg",
    description: "My original static portfolio—vanilla HTML, CSS, and JS.",
  },
  {
    title: "My Resume (old)",
    image: "/images/projects/myresume.jpg",
    description: "My first online resume, hosted on the university network.",
  },
];

export default projects;
