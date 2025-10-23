import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NexusApiInfo = () => {
  return (
    <div>
      <p className="text-gray-600 mt-5">
        Built using Django REST Framework and Python, this Nexus API is a full-featured movie recommendation interface that pulls from over 4,800 movies in real-time using the TMDb API. But Nexus isn’t just another movie database sitting on the web — it’s a production-ready system with smart trending algorithms, secure user authentication, favorites management, and Redis caching so fast it delivers responses in under 200ms.
      </p>

      <p className="text-gray-600 mt-5">
        At its core, Nexus runs on a solid PostgreSQL database with 7 connected models, handling everything from user profiles to complex movie-genre relationships. To make the platform feel alive, I implemented asynchronous task processing with Celery, which sends email notifications the moment users register or tweak their preferences — no lag, no waiting. The API itself exposes over 20 well-documented endpoints for search, filtering, trending analytics, and user management, all automatically documented using Swagger.
      </p>

      <p className="text-gray-600 mt-5">
        Where I tried to make Nexus really shines, though, is under the hood. I designed a trending algorithm that doesn’t just count votes — it studies patterns: recency, engagement, and momentum. It’s like giving the system a sense of taste — understanding what’s genuinely popular right now, not just what’s been clicked the most. The multi-factor scoring approach combines release dates, vote averages, and popularity trends to surface recommendations that actually feel relevant.
      </p>

      <p className="text-gray-600 mt-5">
        Deployment was its own adventure. I architected everything on the Railway cloud platform — configuring PostgreSQL, Redis, and Celery services, all wired together through automated CI/CD pipelines. Nexus pulls data from 40 pages of TMDb content across 6 categories, gracefully handling rate limits, retries, and errors like a system ready for real-world traffic.
      </p>

      <h2 className=" text-gray-800 mt-5">
        Challenges Faced
      </h2>
      <p className="text-gray-600 mt-5">
        <ul className="list-disc list-inside text-gray-600 ml-5 mt-3">
            <li>Database Schema Optimization: Designing 7 interconnected models with efficient many-to-many relationships while keeping queries fast felt like solving a massive jigsaw puzzle.</li>
            <li>Platform Integration: Getting Django, PostgreSQL, Redis, and Celery all running smoothly on Railway took plenty of research, trial, and late-night testing.</li>
            <li>API Design: Finding the right balance between flexibility and simplicity in my endpoint design forced me to think deeply about user experience and REST principles.</li>
            <li>External API Management: Integrating TMDb’s rate-limited API while keeping data consistent meant planning clever caching and batch fetching strategies that wouldn’t break under load.</li>
        </ul>
      </p>

      {/* Button and GitHub Icon */}
      <div className="mt-8 flex items-center justify-start gap-x-4">
        {/* Button to Live Demo */}
        <a
          href="https://github.com/TheKingsident/nexus"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-orange-300/50 text-orange-500 font-medium rounded-2xl shadow-sm hover:text-orange-500 hover:scale-95 transition-transform duration-200"
        >
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          View Repo
        </a>
      </div>
    </div>
  );
};

export default NexusApiInfo;