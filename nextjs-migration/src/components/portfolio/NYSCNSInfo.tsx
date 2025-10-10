import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NYSCNSInfo = () => {
  return (
    <div>
      <p className="text-gray-600 mt-5">
        Basically, I was tired of always visiting the NYSC portal to check for open registrations and I knew if it was open, there was a chance I would miss it. So I decided to created a Python automation tool that monitors the NYSC (National Youth Service Corps) registration portal and sends notifications to multiple contacts when registration opens.
      </p>

      <p className="text-gray-600 mt-5">
        I used Python for the core logic, using libraries like requests and BeautifulSoup to scrape the NYSC portal and detect registration status. For notifications, I implemented email alerts using smtplib and Zoho SMTP, and WhatsApp alerts using the Twilio API. Contact information is managed through a CSV file, which is processed with pandas for scalability and ease of updates.
      </p>

      <p className="text-gray-600 mt-5">
        I deployed the code on Render and set up a cron job to run once every two hours everyday. If registration opens, I&apos;ll receove the notofcations I&apos;d set up via email and WhatsApp message.
      </p>

      <p className="text-gray-600 mt-5">
        This project taught me the importance of error handling, especially when dealing with a site that changes periodically, external APIs and email servers. I also learned how to securely manage sensitive information using dotenv, and how to automate real-world notification workflows that can benefit a group of users.
      </p>

      <p className="text-gray-600 mt-5">
        Overall, this project strengthened my skills in Python automation, third-party API integration, and secure application design.
      </p>



      <h2 className=" text-gray-800 mt-5">
        Challenges Faced
      </h2>
      <p className="text-gray-600 mt-5">
        The most challenging part of this project was designing a notification system that could reliably alert multiple users via both email and WhatsApp. Handling authentication for Zoho Mail, integrating Twilio for WhatsApp messaging, and ensuring secure management of credentials with environment variables required careful attention to detail.
      </p>

      {/* Button and GitHub Icon */}
      <div className="mt-8 flex items-center justify-start gap-x-4">
        {/* Button to Live Demo */}
        <a
          href="https://github.com/TheKingsident/nysc-ns-lite"
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

export default NYSCNSInfo;