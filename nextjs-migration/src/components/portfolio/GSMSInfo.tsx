import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GSMSInfo = () => {
  return (
    <div>
      <p className="text-gray-600 mt-5">
        I put my Python skills to the test with a Grocery Store Management System, a sleek CLI app that simplifies store operations. As a developer, I crafted a system to handle inventory, sales, and data analysis, with role-based access for managers and cashiers. 
      </p>
      <p className="text-gray-600 mt-5">
        Managers can add or edit items and dive into detailed sales reports, while cashiers record transactions and search for details. Data lives in CSV files—groceries, transactions, and user credentials—keeping things lightweight.
      </p>
      <p className="text-gray-600 mt-5">
        I built features like transaction searches by date or product and sales summaries for specific periods, even adding bar charts for visual insights. The modular design splits tasks into utility modules, making the code clean and maintainable. Error handling was key to tackle invalid inputs and file issues smoothly. 
      </p>
      <p className="text-gray-600 mt-5">
        Working through the CLI, users navigate text-based menus, ensuring a fast, no-frills experience perfect for small stores.
      </p>
      <h2 className=" text-gray-800 mt-5">
        Challenges Faced
      </h2>
      <p className="text-gray-600 mt-5">
        <ul className="list-disc list-inside text-gray-600 ml-5 mt-3">
            <li>CSV Data Management: Handling CSV files for data persistence required robust file operations.</li>
            <li>Role-Based Permissions: Implementing secure, role-specific access pushed my authentication skills.</li>
            <li>Sales Chart Visualization: Creating bar charts for sales data tested my data visualization abilities.</li>
        </ul>
      </p>

      {/* Button and GitHub Icon */}
      <div className="mt-8 flex items-center justify-start gap-x-4">
        {/* Button to Live Demo */}
        <a
          href="https://github.com/TheKingsident/grocery-store-ms"
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

export default GSMSInfo;