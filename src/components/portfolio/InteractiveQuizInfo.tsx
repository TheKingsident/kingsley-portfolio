import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InteractiveQuizInfo = () => {
  return (
    <div>
      <p className="text-gray-600 mt-5">
      I poured my Django and Python skills into building the Interactive Quiz, a vibrant web app where users can tackle quizzes, track scores, and create their own questions. It’s a dynamic platform with secure user logins, custom accounts, and a RESTful API to share quiz data externally. I crafted a seamless experience where players can test their knowledge across topics, check leaderboards, and contribute to a growing question pool.
      </p>

      <p className="text-gray-600 mt-5">
        Using Django’s user model, I added custom fields for personalized accounts. The frontend, styled with Bootstrap, feels slick and works on any device. I integrated Django REST Framework to deliver secure API endpoints, ensuring only authorized users access sensitive data.
      </p>

      <p className="text-gray-600 mt-5">
        But the journey wasn’t easy. Extending the user model tested my authentication know-how. Preventing duplicate questions pushed my validation skills. Dynamic forms for question creation demanded mastery of Django’s formsets. Randomizing quizzes fairly? That stretched my logic-building skills. Securing the API and designing an intuitive interface were tough but rewarding challenges.
      </p>
      <h2 className=" text-gray-800 mt-5">
        Challenges Faced
      </h2>
      <p className="text-gray-600 mt-5">
        <ul className="list-disc list-inside text-gray-600 ml-5 mt-3">
            <li>Custom User Model Integration: Extending Django’s user model while keeping authentication tight was a real puzzle.</li>
            <li>Quiz Validation: Blocking duplicate questions and ensuring data integrity took serious validation work.</li>
            <li>API Security: Securing endpoints for authorized access without losing usability was a balancing act.</li>
            <li>User Experience: Building a responsive, intuitive interface stretched my frontend skills.</li>
        </ul>
      </p>

      {/* Button and GitHub Icon */}
      <div className="mt-8 flex items-center justify-start gap-x-4">
        {/* Button to Live Demo */}
        <a
          href="https://github.com/TheKingsident/interactive-quiz"
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

export default InteractiveQuizInfo;