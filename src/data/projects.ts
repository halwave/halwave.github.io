export interface Project {
  title: string;
  image: string;
  link?: string;
  description: string;
}

const projects: Project[] = [
  {
    title: 'Feliciabot',
    image: '/images/projects/feliciabot.jpg',
    link: 'https://github.com/hamdong/Feliciabot',
    description:
      "A Discord bot written in C# that's been my main app since 2017. Packed with games and utilities.",
  },
  {
    title: 'Florabot',
    image: '/images/projects/florabot.jpg',
    link: 'https://github.com/hamdong/Florabot',
    description:
      'A Discord bot written in Node.js, complete with music playback features.',
  },
  {
    title: 'Discord Bot Template',
    image: '/images/projects/discord.jpg',
    link: 'https://github.com/halwave/discord-bot-template',
    description:
      'A TypeScript template for building Discord bots using Discord.js and Node.js.',
  },
  {
    title: 'Pi Monitoring Dashboard',
    image: '/images/projects/pidashboard.png',
    link: 'https://github.com/hamdong/pi-monitoring-dashboard',
    description:
      'Grafana dashboard for monitoring Raspberry Pi and Docker container system stats in real-time.',
  },
  {
    title: 'Riverizons Gallery',
    image: '/images/projects/riverizons.png',
    link: 'https://github.com/halwave/riverizons-gallery',
    description:
      'A React-based online art gallery, featuring a clean, responsive design using Tailwind CSS.',
  },
  {
    title: 'Media Cleaner Plugin',
    image: '/images/projects/payload.jpg',
    link: 'https://github.com/halwave/media-cleaner-plugin',
    description:
      'A Payload CMS plugin that identifies and removes unused media files from the media library.',
  },
  {
    title: 'MissileDefense.io',
    image: '/images/projects/missiledefense.jpg',
    link: 'https://github.com/halwave/MissileDefense.io',
    description:
      'Retro missile defense game built with Phaser 3. Defend your tank against endless waves of missiles.',
  },
  {
    title: 'Pathfinding Simulator',
    image: '/images/projects/pathfinding.jpg',
    link: 'https://github.com/halwave/PathfindingSimulator',
    description:
      ".NET C# app visualizing A*, Dijkstra, and more—core of my master's thesis on pathfinding AI.",
  },
  {
    title: 'Skeleton Key',
    image: '/images/projects/skeletonkey.jpg',
    description:
      '3D Unity puzzle game: find all key pieces and escape before the NPC catches you.',
  },
  {
    title: 'Python Tutorial for Beginners',
    image: '/images/projects/python.jpg',
    link: 'https://github.com/halwave/PythonTutorialForBeginners',
    description:
      'Beginner-friendly Python docs for tutoring first-year CS students.',
  },
  {
    title: 'My Smash News',
    image: '/images/projects/smash.png',
    description:
      'A PHP/MySQL news site for the Smash Bros. community, with user-submitted articles and a clean, responsive design.',
  },
  {
    title: 'Spherule',
    image: '/images/projects/spherule.jpg',
    link: 'https://github.com/halwave/Spherule',
    description:
      'Physics puzzle game in Unity: launch spheres, clear the board, and build combos.',
  },
  {
    title: 'Sword Runner',
    image: '/images/projects/unity.png',
    description:
      '2D endless runner in Unity. Jump obstacles, collect coins, and keep running!',
  },
  {
    title: 'Simple Chat',
    image: '/images/projects/simplechat.jpg',
    description: 'A simple peer-to-peer chat app using Websockets.',
  },
  {
    title: 'My Website (old)',
    image: '/images/projects/oldwebsite.jpg',
    link: 'https://github.com/halwave/old-website',
    description: 'My original static portfolio—vanilla HTML, CSS, and JS.',
  },
  {
    title: 'My Resume (old)',
    image: '/images/projects/myresume.jpg',
    description: 'My first online resume, hosted on the university network.',
  },
];

export default projects;
