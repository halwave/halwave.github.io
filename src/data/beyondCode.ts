// Music
import movingPictures from "/images/beyond-code/moving-pictures.jpg";
import powerWindows from "/images/beyond-code/power-windows.jpg";
import floralShoppe from "/images/beyond-code/floral-shoppe.jpg";

// Art
import artSample from "/images/about.jpg";

// Games
import generationsUltimate from "/images/beyond-code/generations-ultimate.jpg";
import xenoblade2 from "/images/beyond-code/xenoblade-2.jpg";
import finalFantasy6 from "/images/beyond-code/final-fantasy-6.jpg";
import superMarioRpg from "/images/beyond-code/super-mario-rpg.jpg";
import pokemonRuby from "/images/beyond-code/pokemon-ruby.jpg";
import fatesConquest from "/images/beyond-code/fates-conquest.jpg";
import banjoKazooie from "/images/beyond-code/banjo-kazooie.jpg";
import haloCombatEvolved from "/images/beyond-code/halo-combat-evolved.jpg";
import majorasMask from "/images/beyond-code/majoras-mask.jpg";
import residentEvil4 from "/images/beyond-code/resident-evil-4.jpg";
import sonicAdventure2 from "/images/beyond-code/sonic-adventure-2.jpg";
import superSmashBrosBrawl from "/images/beyond-code/super-smash-bros-brawl.jpg";

// Books
import nineteenEightyFour from "/images/beyond-code/1984.jpg";
import fourthWing from "/images/beyond-code/fourth-wing.jpg";
import prideAndPrejudice from "/images/beyond-code/pride-and-prejudice.jpg";
import theShining from "/images/beyond-code/the-shining.jpg";
import theStand from "/images/beyond-code/the-stand.jpg";
import readyPlayerOne from "/images/beyond-code/ready-player-one.jpg";
import lifeOfPi from "/images/beyond-code/life-of-pi.jpg";
import theHungerGames from "/images/beyond-code/the-hunger-games.jpg";
import sixOfCrows from "/images/beyond-code/six-of-crows.jpg";
import theCompletePeanuts from "/images/beyond-code/the-complete-peanuts.jpg";
import electricTaleOfPikachu from "/images/beyond-code/electric-tale-of-pikachu.jpg";

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
    category: "Music",
    description: "Various artists that help drive my work and mood.",
    items: [
      {
        title: "RUSH – Moving Pictures (1981)",
        image: movingPictures,
        description: "Definitely an all-time favourite!",
      },
      {
        title: "RUSH – Power Windows (1985)",
        image: powerWindows,
        description: "Heavy on the synths but that's why I love it.",
      },
      {
        title: "Macintosh Plus – Floral Shoppe (2011)",
        image: floralShoppe,
        description: "The gateway drug to my Vaporwave rabbit hole.",
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
        title: "Monster Hunter Generations Ultimate",
        image: generationsUltimate,
        description: "Don't ask me how many hours I have on this. Please.",
      },
      {
        title: "Xenoblade Chronicles 2",
        image: xenoblade2,
        description:
          "My favourite game of all time. There isn't a day that goes by where I don't think about this game.",
      },
      {
        title: "Fire Emblem Fates: Conquest",
        image: fatesConquest,
        description:
          "My life changed forever after I became a Fire Emblem fan, for better or for worse.",
      },
      {
        title: "Final Fantasy VI",
        image: finalFantasy6,
        description:
          "This is probably the best game on this list. If you know, you know.",
      },
      {
        title: "The Legend of Zelda: Majora's Mask",
        image: majorasMask,
        description:
          "Truly a masterpiece that is hard to put into words. You really gotta play it.",
      },
      {
        title: "Resident Evil 4",
        image: residentEvil4,
        description:
          "I adopted some of my personality from this game, it's hard to explain.",
      },

      {
        title: "Super Smash Bros. Brawl",
        image: superSmashBrosBrawl,
        description:
          "I've modded this game to hell and back. Oh, and I've played it a lot.",
      },
      {
        title: "Pokémon Ruby",
        image: pokemonRuby,
        description:
          "While it's not the first Pokemon game I've played, it's the one I've replayed the most.",
      },
      {
        title: "Halo: Combat Evolved",
        image: haloCombatEvolved,
        description:
          "It's still my favourite Halo to this day and I think it comes down to beauty in simplicity.",
      },
      {
        title: "Sonic Adventure 2",
        image: sonicAdventure2,
        description:
          "If Sonic 2 made me a Sonic fan, then SA2 made me an absolute nut.",
      },
      {
        title: "Super Mario RPG",
        image: superMarioRpg,
        description:
          "I don't think I'll ever get over this game for as long as I live.",
      },
      {
        title: "Banjo-Kazooie",
        image: banjoKazooie,
        description:
          "I still think about the timeline that could have been when Microsoft didn't buy Rare.",
      },
    ],
  },
  {
    category: "Books",
    description: "Books that I love and have inspired me.",
    items: [
      {
        title: "Six of Crows by Leigh Bardugo",
        image: sixOfCrows,
        description:
          "A suspenseful fantasy heist with memorable characters. And I love all of them.",
      },
      {
        title: "Pride and Prejudice by Jane Austen",
        image: prideAndPrejudice,
        description:
          "I bit the bullet on this out of curiosity and man it was so worth it.",
      },
      {
        title: "Fourth Wing by Rebecca Yarros",
        image: fourthWing,
        description:
          "A captivating fantasy with dragons, intrigue and romance. Oh, the romance.",
      },
      {
        title: "1984 by George Orwell",
        image: nineteenEightyFour,
        description:
          "A story in some ways, but a warning in many others. Absolutely chilling.",
      },
      {
        title: "Ready Player One by Ernest Cline",
        image: readyPlayerOne,
        description:
          "This book felt like it was made for me and I'm not the first person to say that.",
      },
      {
        title: "The Hunger Games by Suzanne Collins",
        image: theHungerGames,
        description:
          "No joke I got introduced to this series because of Minecraft.",
      },
      {
        title: "The Stand by Stephen King",
        image: theStand,
        description: "My favourite King novel and it's a hard one to top tbh.",
      },
      {
        title: "Life of Pi by Yann Martel",
        image: lifeOfPi,
        description: "I've been meaning to give this one a reread.",
      },
      {
        title: "The Shining by Stephen King",
        image: theShining,
        description: "Definitely read the book even if you've seen the movie.",
      },
      {
        title: "The Complete Peanuts by Charles M. Schulz",
        image: theCompletePeanuts,
        description:
          "A collection of the beloved comic strip that resonated with me as a kid, and even moreso  as an adult.",
      },
      {
        title: "Electric Tale of Pikachu by Toshio Miyahara",
        image: electricTaleOfPikachu,
        description: "One of my earliest introductions to manga.",
      },
    ],
  },
];

export default beyondCodeData;
