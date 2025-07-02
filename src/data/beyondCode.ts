export interface BeyondCodeItem {
  title: string;
  image: string;
  description: string;
}

export interface BeyondCodeCategory {
  category: string;
  description?: string;
  items: BeyondCodeItem[];
}

import albumCover from "/images/banner.jpg"; // Example image
import artSample from "/images/aboutme.jpg";
import gameCover from "/images/smash.png";

const beyondCodeData: BeyondCodeCategory[] = [
  {
    category: "Music",
    description:
      "Synthwave, retrowave, and indie bands that inspire my work and mood.",
    items: [
      {
        title: "The Midnight – Endless Summer",
        image: albumCover,
        description: "A synthwave classic and a staple in my coding playlists.",
      },
      {
        title: "Gunship – Gunship",
        image: albumCover,
        description: "Retro-futuristic vibes and cinematic soundscapes.",
      },
    ],
  },
  {
    category: "Art",
    description:
      "Some of my digital and pixel art, plus favorite inspirations.",
    items: [
      {
        title: "Pixel Portrait",
        image: artSample,
        description: "A self-portrait in pixel art style.",
      },
    ],
  },
  {
    category: "Games",
    description: "Games that shaped my creativity and problem-solving.",
    items: [
      {
        title: "Super Smash Bros.",
        image: gameCover,
        description: "Competitive, fun, and a big part of my social life.",
      },
    ],
  },
  {
    category: "Books",
    description: "Books I’m reading or that have influenced my thinking.",
    items: [
      {
        title: "Neuromancer",
        image: albumCover,
        description:
          "A cyberpunk classic that shaped my love for tech and sci-fi.",
      },
    ],
  },
];

export default beyondCodeData;
