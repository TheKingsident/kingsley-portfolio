export interface ExperienceItem {
    dateRange: string;
    title: string;
    description: string;
    color: string; // tailwind color class e.g. "orange", "green"
  }
  
  const experienceData: ExperienceItem[] = [
    {
      dateRange: "2016 - 2022",
      title: "Bachelor of Science in Computer Science",
      description: "Relevant Courses: Data Structures, Algorithms, Database Management Systems, Software Engineering.",
      color: "orange",
    },
    {
      dateRange: "2022 - 2022",
      title: "Front End Developer",
      description: "Worked on developing user interfaces for a disease diagnosis system using React and Tailwind CSS.",
      color: "green",
    },
    {
      dateRange: "2023 - 2024",
      title: "Software Engineering Certification",
      description: "Completed a comprehensive program focusing on software development methodologies, and server management.",
      color: "red",
    },
    {
      dateRange: "2018 - Present",
      title: "WordPress Developer",
      description: "Worked on developing and maintaining WordPress websites for various clients.",
      color: "cyan",
    },
    {
      dateRange: "2025 - 2025",
      title: "Back-End Pro-Development Certification",
      description: "Completed a comprehensive program focusing on back-end development, API design, and database management.",
      color: "blue",
    },
    {
      dateRange: "2023 - Present",
      title: "Full Stack Engineer",
      description: "Currently working on a full-stack web application using React, Node.js, and MongoDB.",
      color: "yellow",
    },
  ];
  
  export default experienceData;
// This file contains the experience data for the Experience section of the portfolio.
// Each experience item includes a date range, title, description, and a color class for styling.
// The experienceData array can be imported and used in the Experience component to render the experience section dynamically.
// The color property is used to apply different colors to the experience items based on their category or significance.
// The experienceData array can be easily extended or modified to include more experiences or change existing ones.
// The data structure allows for easy mapping and rendering in the Experience component.
// The experienceData array can be used in conjunction with a mapping function to dynamically generate the experience items in the UI.
// The experienceData array is structured to be easily readable and maintainable, making it simple to update or add new experiences.  