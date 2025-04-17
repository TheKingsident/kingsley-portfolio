export interface PortfolioItem {
    id: number;
    name: string;
    photo: string;
}

import AM from "../assets/AV.png";
import Chattrix from "../assets/Chattrix.png";
import IQ from "../assets/IQ.png";
import TM from "../assets/TM.png";
import GSMS from "../assets/GSMS.png";
import MMed from "../assets/MMed.png";

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