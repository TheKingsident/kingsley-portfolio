export interface ExperienceItem {
    dateRange: string;
    title: string;
    description: string;
    color: string; // tailwind color class e.g. "orange", "green"
  }
  
  // Education and Certifications
  export const educationData: ExperienceItem[] = [
    {
      dateRange: "2016 - 2022",
      title: "Bachelor of Science in Computer Science",
      description: "University of Uyo, Nigeria. Relevant Courses: Data Structures, Algorithms, Database Management Systems, Software Engineering.",
      color: "orange",
    },
    {
      dateRange: "2023 - 2024",
      title: "Software Engineering Certification",
      description: "ALX - Completed comprehensive program focusing on software development methodologies and server management.",
      color: "red",
    },
    {
      dateRange: "2025",
      title: "ProDev Backend Certification",
      description: "ALX - Completed comprehensive program focusing on back-end development, API design, and database management.",
      color: "blue",
    },
  ];

  // Professional Experience
  export const professionalExperienceData: ExperienceItem[] = [
    // Recent Backend Development Projects
    {
      dateRange: "August 2025",
      title: "Backend Developer - Nexus Movie API",
      description: "Built Django REST API serving 4,800+ movies with Redis caching, achieving sub-200ms response times and 20+ documented endpoints.",
      color: "purple",
    },
    {
      dateRange: "July 2025",
      title: "Backend Developer - CRM System",
      description: "Built scalable CRM system using Django, GraphQL, and Celery managing 1,000+ client records with 40% processing time reduction.",
      color: "indigo",
    },
    {
      dateRange: "July 2025",
      title: "Software Developer - Messaging App",
      description: "Developed Django REST Framework messaging app with enterprise-grade architecture, JWT authentication, and CI/CD deployment.",
      color: "violet",
    },
    {
      dateRange: "June 2025",
      title: "Backend Developer - Django Middleware",
      description: "Designed custom middleware for request logging, rate limiting, and role-based permissions in Django REST API with JWT authentication.",
      color: "cyan",
    },
    {
      dateRange: "Jun-Jul 2025",
      title: "Backend Developer - ALX Travel App",
      description: "Developed Django REST API travel app handling 500+ concurrent requests with <300ms response time, integrated Celery/Redis and AWS deployment.",
      color: "teal",
    },
    {
      dateRange: "June 2025",
      title: "Python Developer - NYSC Monitor",
      description: "Built automated web scraping tool with multi-channel notifications using Python, Yagmail, and Twilio API with 24/7 monitoring.",
      color: "emerald",
    },
    
    // Full-Stack Development
    {
      dateRange: "May 2025 - Present",
      title: "Full-Stack Developer - Dwellr Platform",
      description: "Built end-to-end TypeScript application with React frontend, Express backend, and PostgreSQL database with automated document verification.",
      color: "green",
    },
    {
      dateRange: "Feb-Mar 2025",
      title: "Project Manager & Team Lead - MediSure",
      description: "Led cross-functional team of 5 to design and pitch MediSure health insurance platform, managing project planning and team coordination.",
      color: "amber",
    },
    {
      dateRange: "Apr-May 2025",
      title: "Full Stack Developer - Portfolio Site",
      description: "Developed responsive portfolio site with advanced UI/UX, custom animations, and secure contact form reducing bounce rate by 45%.",
      color: "rose",
    },
    {
      dateRange: "Nov-Dec 2024",
      title: "Full Stack Developer - Chattrix",
      description: "Built web app to fetch/filter YouTube comments using React, Flask, and YouTube Data API with C-based filtering algorithm.",
      color: "pink",
    },
    {
      dateRange: "Sep-Oct 2024",
      title: "Full Stack Developer - Algorithm Visualizer",
      description: "Implemented algorithm animations with Tailwind CSS and deployed on Vercel for interactive user learning experience.",
      color: "sky",
    },
    {
      dateRange: "August 2024",
      title: "Full Stack Developer - Interactive Quiz App",
      description: "Developed Django-based quiz application with custom user model, JWT authentication, and RESTful APIs.",
      color: "lime",
    },
    
    // WordPress & Client Work
    {
      dateRange: "2023 - Present",
      title: "Web Consultant - Thrive Maker Marketing",
      description: "Designed and developed official website for digital marketing agency, providing ongoing consulting and technical support for client websites.",
      color: "yellow",
    },
    {
      dateRange: "Oct 2024 - Present",
      title: "WordPress Developer - Matters Medical",
      description: "Built professional, responsive website for medical supplies company, handling design, graphics, and business features with ongoing maintenance.",
      color: "orange",
    },
    {
      dateRange: "2018 - 2024",
      title: "WordPress Content Specialist & Editor",
      description: "Managed and published 100+ blog articles and web pages for diverse industries, specializing in SEO optimization and client communication.",
      color: "red",
    },
    
    // Early Career
    {
      dateRange: "2018 - 2020",
      title: "Freelance Data Entry & Brand Consultant",
      description: "Provided data entry, transcription, and brand naming services for global clients via Fiverr, recognized for accuracy and timely delivery.",
      color: "gray",
    },
  ];

  // Legacy export for backward compatibility
  const experienceData: ExperienceItem[] = [...educationData, ...professionalExperienceData];
  
  export default experienceData;