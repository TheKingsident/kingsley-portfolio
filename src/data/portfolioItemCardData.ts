export interface PortfolioItem {
    id: number;
    name: string;
    photo: string;
    description?: string;
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
        description: `An app that visualizes algorithms.

        The most challenging part of this project was implementing the 
        visualization of the algorithm as it happened step by step. 
        This required careful planning and precise execution to ensure 
        that each step was displayed clearly and accurately for the user.

        I used React to build the user interface, which allowed me to 
        create dynamic and interactive components. Tailwind CSS was 
        instrumental in styling the app, enabling me to quickly prototype 
        and refine the design. Additionally, I utilized ShadCN to enhance 
        the overall aesthetic and maintain consistency across components.

        JavaScript played a crucial role in implementing the core logic 
        of the algorithm visualization. By breaking down the algorithm 
        into discrete steps and rendering each step in real-time, I was 
        able to provide users with an intuitive and educational experience.

        This project taught me the importance of balancing functionality 
        with user experience, as well as the value of leveraging modern 
        tools and frameworks to streamline development.`,
    },
    {
        id: 1,
        name: "Chattrix",
        photo: Chattrix,
        description: `Chattrix is a simple YouTube comment search app.

        This app allows users to:
        - Provide a YouTube video link.
        - Enter a word or phrase to search for in the comments.

        The app then searches through the comments and returns the results 
        that match the query.

        Technologies used in this project include:
        - C and Python for backend processing and API development.
        - TypeScript for type safety and maintainable code.
        - React for building the user interface.
        - Tailwind CSS for styling and responsive design.

        Chattrix is designed to be lightweight and efficient, offering 
        users a seamless experience when searching for specific comments 
        on YouTube videos. This project highlights the integration of 
        multiple technologies to create a functional and user-friendly 
        application.`,
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