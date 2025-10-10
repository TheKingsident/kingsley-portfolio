export interface PortfolioItem {
    id: number;
    name: string;
    photo: string;
    description?: string;
    component?: React.ReactNode;
}

import AlgorithmVisualizerInfo from "../components/portfolio/AlgorithmVisualizerInfo";
import ChattrixInfo from "../components/portfolio/ChattrixInfo";
import InteractiveQuizInfo from "../components/portfolio/InteractiveQuizInfo";
import GSMSInfo from "../components/portfolio/GSMSInfo";
import NYSCNSInfo from "@/components/portfolio/NYSCNSInfo";
import MessagingAppInfo from "@/components/portfolio/MessagingAppApiInfo";
import React from "react";

const portfolioItemCardData: PortfolioItem[] = [
    {
    id: 0,
    name: "Messaging App API with DevOps and CI/CD Pipeline",
    photo: "assets/Messaging_APP_Api.png",
    description: `I architected and built a messaging platform using Django REST Framework, showcasing enterprise-grade development practices from the ground up. This isn't just a chat app—it's a production-ready system with JWT authentication, custom permissions, advanced filtering, and a CI/CD pipeline that would fit right into any tech company's stack.

    The platform features UUID-based custom user models, multi-participant conversations, and a sophisticated REST API with nested routing. I implemented conversation participant-based access control, ensuring users can only access messages they're authorized to see. The API supports advanced filtering by sender, recipient, and date ranges, plus custom pagination handling up to 100 items per page—all while maintaining blazing-fast performance.

    But the real magic happens behind the scenes. I built a complete DevOps ecosystem with dual CI/CD pipelines using both GitHub Actions and Jenkins. The system automatically tests across Python 3.10-3.12, runs comprehensive code quality checks with Flake8, Black, and Isort, and achieves 100% test coverage. Docker containerization supports multi-platform deployment (AMD64/ARM64), while Kubernetes configurations enable blue-green deployments with zero downtime.

    The technical challenges were intense. Designing custom middleware and authentication systems pushed my Django expertise to new heights. Building a CI/CD pipeline that seamlessly integrates security scanning with Trivy, automated testing, and multi-environment deployments was like solving a complex puzzle. Creating Kubernetes orchestration with ingress controllers and service discovery taught me production-scale infrastructure management.

    Challenges Conquered:
    - Custom Authentication Architecture: Implementing JWT with SimpleJWT while maintaining backwards compatibility and security
    - Complex Permission Systems: Building participant-based access control that scales with conversation complexity
    - DevOps Pipeline Mastery: Orchestrating GitHub Actions, Jenkins, Docker, and Kubernetes into a seamless deployment machine
    - Production-Ready Architecture: Designing a system that handles real-world scale, security, and reliability requirements

    This project transformed me from a developer into a full-stack engineer who thinks about scalability, security, and maintainability from day one.`,
    component: React.createElement(MessagingAppInfo),
    },
    {
        id: 1,
        name: "NYSC Registration Notification System",
        photo: "assets/NYSC_NS.png",
        description: `A Python automation tool that monitors the NYSC (National Youth Service Corps) registration portal and sends notifications to multiple contacts when registration opens.
        The most challenging part of this project was designing a robust notification system that could reliably alert multiple users via both email and WhatsApp. Handling authentication for Zoho Mail, integrating Twilio for WhatsApp messaging, and ensuring secure management of credentials with environment variables required careful attention to detail.
        I used Python for the core logic, leveraging libraries such as requests and BeautifulSoup to scrape the NYSC portal and detect registration status. For notifications, I implemented email alerts using smtplib and Zoho SMTP, and WhatsApp alerts using the Twilio API. Contact information is managed through a CSV file, which is processed with pandas for scalability and ease of updates.
        This project taught me the importance of error handling, especially when dealing with external APIs and email servers. I also learned how to securely manage sensitive information using dotenv, and how to automate real-world notification workflows that can benefit a group of users.
        Overall, this project strengthened my skills in Python automation, third-party API integration, and secure application design.`,
        component: React.createElement(NYSCNSInfo),
    },
    {
        id: 2,
        name: "Algorithm Visualizer App",
        photo: "/assets/AV.png",
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
        component: React.createElement(AlgorithmVisualizerInfo),
    },
    {
        id: 3,
        name: "Chattrix",
        photo: "/assets/Chattrix.png",
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
        component: React.createElement(ChattrixInfo),
        
    },
    {
        id: 4,
        name: "Interactive Quiz",
        photo: "/assets/IQ.png",
        description: `I poured my Django and Python skills into building the Interactive Quiz, a vibrant web app where users can tackle quizzes, track scores, and create their own questions. It's a dynamic platform with secure user logins, custom accounts, and a RESTful API to share quiz data externally. I crafted a seamless experience where players can test their knowledge across topics, check leaderboards, and contribute to a growing question pool.
        Using Django's user model, I added custom fields for personalized accounts. The frontend, styled with Bootstrap, feels slick and works on any device. I integrated Django REST Framework to deliver secure API endpoints, ensuring only authorized users access sensitive data.
        But the journey wasn't easy. Extending the user model tested my authentication know-how. Preventing duplicate questions pushed my validation skills. Dynamic forms for question creation demanded mastery of Django's formsets. Randomizing quizzes fairly? That stretched my logic-building chops. Securing the API and designing an intuitive interface were tough but rewarding challenges.
        Challenges Faced:
        - Custom User Model Integration: Extending Django's user model while keeping authentication tight was a real puzzle.
        - Quiz Validation: Blocking duplicate questions and ensuring data integrity took serious validation work.
        - API Security: Securing endpoints for authorized access without losing usability was a balancing act.
        - User Experience: Building a responsive, intuitive interface stretched my frontend skills.`,
        component: React.createElement(InteractiveQuizInfo),
    },
    {
        id: 5,
        name: "Thrive Maker Website",
        photo: "/assets/TM.png",
    },
    {
        id: 6,
        name: "Grocery Store Management System",
        photo: "/assets/GSMS.png",
        description: `I put my Python skills to the test with a Grocery Store Management System, a sleek CLI app that simplifies store operations. As a developer, I crafted a system to handle inventory, sales, and data analysis, with role-based access for managers and cashiers.
        Managers can add or edit items and dive into detailed sales reports, while cashiers record transactions and search for details. Data lives in CSV files—groceries, transactions, and user credentials—keeping things lightweight.
        I built features like transaction searches by date or product and sales summaries for specific periods, even adding bar charts for visual insights. The modular design splits tasks into utility modules, making the code clean and maintainable. Error handling was key to tackle invalid inputs and file issues smoothly.
        Working through the CLI, users navigate text-based menus, ensuring a fast, no-frills experience perfect for small stores.
        Challenges Faced:
        - CSV Data Management: Handling CSV files for data persistence required robust file operations.
        - Role-Based Permissions: Implementing secure, role-specific access pushed my authentication skills.
        - Sales Chart Visualization: Creating bar charts for sales data tested my data visualization abilities.`,
        component: React.createElement(GSMSInfo),
    },
    {
        id: 7,
        name: "Matters Medical Site",
        photo: "/assets/MMed.png",
    },
];

export default portfolioItemCardData;