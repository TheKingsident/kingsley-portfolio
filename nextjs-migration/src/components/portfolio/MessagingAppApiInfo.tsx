import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MessagingAppInfo = () => {
  return (
    <div>
      <p className="text-gray-600 mt-5">
        I architected and built a messaging platform using Django REST Framework, showcasing enterprise-grade development practices from the ground up. This isn&apos;t just a chat app, it&apos;s a production-ready system with JWT authentication, custom permissions, advanced filtering, and a CI/CD pipeline that would fit right into any tech company&apos;s stack.
      </p>

      <p className="text-gray-600 mt-5">
        This API features UUID-based custom user models, multi-participant conversations, and a sophisticated REST API with nested routing. I implemented conversation participant-based access control, ensuring users can only access messages they&apos;re authorized to see. The API supports advanced filtering by sender, recipient, and date ranges, plus custom pagination handling up to 100 items per page while maintaining fast API performance.
      </p>

      <p className="text-gray-600 mt-5">
        However, the real magic happens behind the scenes. I built a complete DevOps ecosystem with dual CI/CD pipelines using both GitHub Actions and Jenkins. The system automatically tests across Python 3.10-3.12, runs comprehensive code quality checks with Flake8, Black, and Isort, and achieves 100% test coverage. Docker containerization supports multi-platform deployment (AMD64/ARM64), while Kubernetes configurations enable blue-green deployments with zero downtime.
      </p>

      <p className="text-gray-600 mt-5">
        The challenges though. They were intense. Designing custom middleware and authentication systems pushed my Django expertise to new heights. Building a CI/CD pipeline that seamlessly integrates security scanning with Trivy, automated testing, and multi-environment deployments was like solving a complex puzzle.
      </p>

      <p className="text-gray-600 mt-5">
        Creating Kubernetes orchestration with ingress controllers and service discovery taught me production-scale infrastructure management.
      </p>

      <h2 className=" text-gray-800 mt-5">
        Challenges Faced
      </h2>
      <p className="text-gray-600 mt-5">
        <ul className="list-disc list-inside text-gray-600 ml-5 mt-3">
            <li>Complex Permission Systems: Building participant-based access control that scales with conversation complexity.</li>
            <li>DevOps Pipeline: Orchestrating GitHub Actions, Jenkins, Docker, and Kubernetes into a seamless deployment machine.</li>
            <li>Production-Ready Architecture: Designing a system that handles real-world scale, security, and reliability requirements.</li>
        </ul>
      </p>

      {/* Button and GitHub Icon */}
      <div className="mt-8 flex items-center justify-start gap-x-4">
        {/* Button to Live Demo */}
        <a
          href="https://github.com/TheKingsident/alx-backend-python/tree/main/messaging_app"
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

export default MessagingAppInfo;