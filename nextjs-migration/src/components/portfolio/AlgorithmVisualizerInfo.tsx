import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AlgorithmVisualizerInfo = () => {
  return (
    <div>
      <p className="text-gray-600 mt-5">
        The Algorithm Visualizer is a web application that helps users understand and visualize various algorithms in computer science. It provides an interactive platform to explore algorithms such as sorting, searching, and graph traversal.
      </p>

      <p className="text-gray-600 mt-5">
        Users can select different algorithms and observe how the algorithms work step-by-step. This tool is designed to enhance learning and comprehension of complex algorithms through visual representation.
      </p>

      <p className="text-gray-600 mt-5">
        The most challenging part of this project was implementing the visualization of the algorithm as it happened step by step. This required careful planning and precise execution to ensure that each step was displayed clearly and accurately for the user.
      </p>
      <p className="text-gray-600 mt-5">
        I used React to build the user interface, which allowed me to create dynamic and interactive components. Tailwind CSS was instrumental in styling the app, enabling me to quickly prototype and refine the design.
      </p>
      <p className="text-gray-600 mt-5">
        Additionally, I utilized ShadCN to enhance the overall aesthetic and maintain consistency across components. JavaScript played a crucial role in implementing the core logic of the algorithm visualization.
      </p>
      <p className="text-gray-600 mt-5">
        By breaking down the algorithm into discrete steps and rendering each step in real-time, I was able to provide users with an intuitive and educational experience. This project taught me the importance of balancing functionality with user experience, as well as the value of leveraging modern tools and frameworks to streamline development.
      </p>

      {/* Button and GitHub Icon */}
      <div className="mt-8 flex items-center justify-start gap-x-4">
        {/* Button to Live Demo */}
        <a
          href="https://algorithm-visualizer-five-pi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-orange-300/50 text-orange-500 font-medium rounded-2xl shadow-sm hover:text-orange-500 hover:scale-95 transition-transform duration-200"
        >
          <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
          View Live Demo
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/TheKingsident/algorithm-visualizer"
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

export default AlgorithmVisualizerInfo;