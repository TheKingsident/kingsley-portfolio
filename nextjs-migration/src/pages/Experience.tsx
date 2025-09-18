import { faBookOpen, faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { educationData, professionalExperienceData } from "../data/experienceData";
import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className="relative flex flex-col w-full px-8 md:px-16 py-16 overflow-hidden">
      {/* Education Section */}
      <div className="flex items-center gap-2 bg-white px-10 py-1 font-body rounded-full w-fit text-sm">
        <FontAwesomeIcon icon={faGraduationCap} className="text-orange-500" />
        Education & Certifications
      </div>

      <div className="flex flex-col gap-10 mt-10">
        <h2 className="text-4xl text-gray-900 font-heading">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {educationData.map((item, index) => (
            <ExperienceCard key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Professional Experience Section */}
      <div className="flex items-center gap-2 bg-white px-10 py-1 font-body rounded-full w-fit text-sm mt-20">
        <FontAwesomeIcon icon={faBriefcase} className="text-orange-500" />
        Professional Journey
      </div>

      <div className="flex flex-col gap-10 mt-10">
        <h2 className="text-4xl text-gray-900 font-heading">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {professionalExperienceData.map((item, index) => (
            <ExperienceCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
