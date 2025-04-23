import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChattrixInfo = () => {
  return (
    <div>
      <p className="text-gray-600 mt-5">
        Chattrix is a simple YouTube comment search app that allows users to:
      </p>

      {/* Indented List */}
      <ul className="list-disc list-inside text-gray-600 ml-5 mt-3">
        <li>Provide a YouTube video link.</li>
        <li>Enter a word or phrase to search for in the comments.</li>
        <li>View the results that match the search query.</li>
      </ul>

      <p className="text-gray-600 mt-5">
      Technologies used in this project include:
      <ul className="list-disc list-inside text-gray-600 ml-5 mt-3">
        <li>C and Python for backend processing and API development.</li>
        <li>TypeScript for type safety and maintainable code.</li>
        <li>React for building the user interface.</li>
        <li>Tailwind CSS for styling and responsive design.</li>
      </ul>
      </p>

      <p className="text-gray-600 mt-5">
       I designed Chattrix to be lightweight and efficient, offering 
        users a seamless experience when searching for specific comments 
        on YouTube videos. This project highlights the integration of 
        multiple technologies to create a functional and user-friendly application.
      </p>
      <p className="text-gray-600 mt-5">
        The most challenging part of this project was ensuring that the 
        app could handle various YouTube video link formats and comment structures, 
        which required thorough testing and debugging.
      </p>
    
    

      {/* Button and GitHub Icon */}
      <div className="mt-8 flex items-center justify-start gap-x-4">
        {/* Button to Live Demo */}
        <a
          href="https://chattrix.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-orange-300/50 text-orange-500 font-medium rounded-2xl shadow-sm hover:text-orange-500 hover:scale-95 transition-transform duration-200"
        >
          <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
          View Live Demo
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/TheKingsident/chattrix"
          target="_blank"
          rel="noopener noreferrer"
          className="w-48 text-gray-600 hover:text-black transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default ChattrixInfo;