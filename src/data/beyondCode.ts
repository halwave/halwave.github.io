// Music
import movingPictures from '/images/beyond-code/moving-pictures.jpg';
import floralShoppe from '/images/beyond-code/floral-shoppe.jpg';
import yesDaDaDa from '/images/beyond-code/yes-da-da-da.jpg';
import minecraftVolumeAlpha from '/images/beyond-code/minecraft-volume-alpha.jpg';
import autoheartPunch from '/images/beyond-code/autoheart-punch.jpg';
import rollingStonesGreatestHits from '/images/beyond-code/rolling-stones-greatest-hits.jpg';
import theWall from '/images/beyond-code/the-wall.jpg';
import deathcabPlans from '/images/beyond-code/deathcab-plans.jpg';

// Games
import generationsUltimate from '/images/beyond-code/generations-ultimate.jpg';
import xenoblade2 from '/images/beyond-code/xenoblade-2.jpg';
import finalFantasy6 from '/images/beyond-code/final-fantasy-6.jpg';
import superMarioRpg from '/images/beyond-code/super-mario-rpg.jpg';
import fatesConquest from '/images/beyond-code/fates-conquest.jpg';
import haloCombatEvolved from '/images/beyond-code/halo-combat-evolved.jpg';
import residentEvil4 from '/images/beyond-code/resident-evil-4.jpg';

// Books
import nineteenEightyFour from '/images/beyond-code/1984.jpg';
import fourthWing from '/images/beyond-code/fourth-wing.jpg';
import prideAndPrejudice from '/images/beyond-code/pride-and-prejudice.jpg';
import theStand from '/images/beyond-code/the-stand.jpg';
import readyPlayerOne from '/images/beyond-code/ready-player-one.jpg';
import sixOfCrows from '/images/beyond-code/six-of-crows.jpg';
import theCompletePeanuts from '/images/beyond-code/the-complete-peanuts.jpg';
import electricTaleOfPikachu from '/images/beyond-code/electric-tale-of-pikachu.jpg';

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

const beyondCodeData: BeyondCodeCategory[] = [
  {
    category: 'Music',
    description: 'Various artists that help drive my work and mood.',
    items: [
      {
        title: 'Windows 96 – Yes Da Da Da (2024)',
        image: yesDaDaDa,
        description: 'Great music for focusing.',
      },
      {
        title: 'Autoheart – Punch (2013)',
        image: autoheartPunch,
        description: 'An awesome album that I discovered fairly late.',
      },
      {
        title: 'The Rolling Stones – Greatest Hits (2012)',
        image: rollingStonesGreatestHits,
        description: "Sometimes you just can't beat the classics.",
      },
      {
        title: 'Death Cab for Cutie – Plans (2005)',
        image: deathcabPlans,
        description: 'An album that resonates with me on many levels.',
      },
      {
        title: 'Macintosh Plus – Floral Shoppe (2011)',
        image: floralShoppe,
        description: 'The gateway to my vaporwave rabbit hole.',
      },
      {
        title: 'Minecraft – Volume Alpha (2011)',
        image: minecraftVolumeAlpha,
        description: 'The entire OST still inspires me.',
      },
      {
        title: 'RUSH – Moving Pictures (1981)',
        image: movingPictures,
        description: 'Definitely an all-time favourite!',
      },
      {
        title: 'Pink Floyd – The Wall (1979)',
        image: theWall,
        description: 'A masterpiece of rock music.',
      },
    ],
  },
  {
    category: 'Books',
    description: 'Books that I love and have inspired me.',
    items: [
      {
        title: 'Six of Crows by Leigh Bardugo',
        image: sixOfCrows,
        description:
          'A fantasy heist with a cast I love. Gritty, clever, and full of heart.',
      },
      {
        title: 'Pride and Prejudice by Jane Austen',
        image: prideAndPrejudice,
        description:
          'Tried it out of curiosity—totally worth it. Witty and timeless.',
      },
      {
        title: 'Fourth Wing by Rebecca Yarros',
        image: fourthWing,
        description: 'Dragons, intrigue, and romance. I was hooked.',
      },
      {
        title: '1984 by George Orwell',
        image: nineteenEightyFour,
        description: 'A story, a warning, and absolutely chilling.',
      },
      {
        title: 'Ready Player One by Ernest Cline',
        image: readyPlayerOne,
        description:
          "This book felt like it was made for me—and I'm not alone in that.",
      },
      {
        title: 'The Stand by Stephen King',
        image: theStand,
        description: 'My favourite King novel. Hard to top.',
      },
      {
        title: 'The Complete Peanuts by Charles M. Schulz',
        image: theCompletePeanuts,
        description: 'Beloved as a kid, even more as an adult. Pure comfort.',
      },
      {
        title: 'Electric Tale of Pikachu by Toshio Miyahara',
        image: electricTaleOfPikachu,
        description: 'One of my first manga.',
      },
    ],
  },
  {
    category: 'Games',
    description: 'Games that shaped my creativity and problem-solving.',
    items: [
      {
        title: 'Monster Hunter Generations Ultimate',
        image: generationsUltimate,
        description: "Don't ask me how many hours I have on this. Please.",
      },
      {
        title: 'Xenoblade Chronicles 2',
        image: xenoblade2,
        description:
          "There isn't a day that goes by where I don't think about this one.",
      },
      {
        title: 'Fire Emblem Fates: Conquest',
        image: fatesConquest,
        description:
          'My life changed forever after I became a Fire Emblem fan, for better or for worse.',
      },
      {
        title: 'Final Fantasy VI',
        image: finalFantasy6,
        description:
          'This is probably the best game on this list. If you know, you know.',
      },
      {
        title: 'Resident Evil 4',
        image: residentEvil4,
        description:
          "I adopted some of my personality from this game—it's hard to explain.",
      },
      {
        title: 'Halo: Combat Evolved',
        image: haloCombatEvolved,
        description: 'There is a beauty in simplicity.',
      },
      {
        title: 'Super Mario RPG',
        image: superMarioRpg,
        description:
          "I don't think I'll ever get over this game for as long as I live.",
      },
    ],
  },
  {
    category: 'Art',
    description:
      "I create digital and traditional art as a personal passion. If you'd like to see samples of my work, please contact me and I'll be happy to share them privately.",
    items: [],
  },
];

export default beyondCodeData;
