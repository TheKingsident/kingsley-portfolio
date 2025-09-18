import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { 
  faGamepad, 
  faGlobe, 
  faCode, 
  faBuilding, 
  faPalette, 
  faMusic, 
  faAppleAlt, 
  faGraduationCap, 
  faPen, 
  faWrench, 
  faHeart 
} from '@fortawesome/free-solid-svg-icons';

export interface FunFact {
  id: number;
  icon: IconDefinition;
  title: string;
  description: string;
}

export const funFactsData: FunFact[] = [
  {
    id: 1,
    icon: faGamepad,
    title: "Gamer",
    description: "Always talking about Apex Legends and mobile games like Blood Strike, PUBG Mobile, Delta Force Mobile, and Farlight 84. Posts gameplay clips on WhatsApp status because those wins are serious business!"
  },
  {
    id: 2,
    icon: faGlobe,
    title: "Explorer",
    description: "Dreams big about life adventures. Thinks about moving to Scandinavia or Japan one day, always curious about what life would be like in new, comfortable, safe environments."
  },
  {
    id: 3,
    icon: faCode,
    title: "Project Builder",
    description: "Always building something real. From Chattrix (YouTube comments tool with C + Flask backend) to real estate solutions and Stripe + Django integrations. Side projects that actually become reality."
  },
  {
    id: 4,
    icon: faBuilding,
    title: "Startup Founder",
    description: "Not just coding for fun — founded Blue Wave Horizon with serious long-term vision. Building something sustainable, not just another short-lived idea."
  },
  {
    id: 5,
    icon: faPalette,
    title: "Creative Coder",
    description: "Not just about making things work — making them beautiful too. Recreated the Riono portfolio design in React with Vite and Tailwind just to nail the aesthetic."
  },
  {
    id: 6,
    icon: faMusic,
    title: "Musician in Progress",
    description: "Picked up guitar again after a 4-year break. Admits barre chords still give him trouble, but genuinely enjoying the journey of getting those music fingers back."
  },
  {
    id: 7,
    icon: faAppleAlt,
    title: "Health Explorer",
    description: "Smoothie master with custom recipes. Avocado, banana, pawpaw, pineapple — really pays attention to what goes into his body and perfecting those blends."
  },
  {
    id: 8,
    icon: faGraduationCap,
    title: "Scholarship Hunter",
    description: "Always seeking growth opportunities. Applied to international scholarships like Swedish Global Professionals and DI Qatar. Genuinely committed to learning and stretching himself."
  },
  {
    id: 9,
    icon: faPen,
    title: "Wordsmith",
    description: "Natural with words. Whether writing professional bios, profiles, or casual posts, has a way of making the tone fit perfectly. Masters the art of authentic communication."
  },
  {
    id: 10,
    icon: faWrench,
    title: "Problem Solver",
    description: "That friend who'll figure it out. Git issues? C debugging? OBS audio problems? Will tinker and dig until it's fixed. Actually enjoys the challenge of troubleshooting."
  },
  {
    id: 11,
    icon: faHeart,
    title: "Hopeless Romantic",
    description: "Got a soft side too — genuinely loves love. Sees connection and story as something worth celebrating, like living out his own novel sometimes."
  }
];