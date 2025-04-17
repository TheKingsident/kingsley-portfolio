export interface PortfolioItem {
    id: number;
    name: string;
    photo: string;
}

import AM from "../assets/Algorithm Visualizer.png";
import Chattrix from "../assets/chattrix.png";
import IQ from "../assets/interactive-quiz.png";
import TM from "../assets/thrive-maker.png";
import GSMS from "../assets/grocery-store-management-system.png";
import MMed from "../assets/matters-medical.png";

const portfolioItemCardData: PortfolioItem[] = [
    {
        id: 0,
        name: "Algorithm Visualizer App",
        photo: AM,
    },
    {
        id: 1,
        name: "Chattrix",
        photo: Chattrix,
    },
    {
        id: 2,
        name: "Interactive Quiz",
        photo: IQ,
    },
    {
        id: 3,
        name: "Thrive Maker Website",
        photo: TM,
    },
    {
        id: 4,
        name: "Grocery Store Management System",
        photo: GSMS,
    },
    {
        id: 5,
        name: "Matters Medical Site",
        photo: MMed,
    },
];

export default portfolioItemCardData;