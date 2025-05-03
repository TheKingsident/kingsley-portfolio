import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import experienceData from "../data/experienceData";
import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className="relative flex flex-col h-full w-full px-8 md:px-16 py-16 overflow-hidden">
      <div className="flex items-center gap-2 bg-white px-10 py-1 font-bodyrounded-full w-fit text-sm">
        <FontAwesomeIcon icon={faBookOpen} className="text-orange-500" />
        Education & Experience
      </div>

      <h2 className="pt-10 text-4xl text-gray-900">Resume</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {experienceData.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
