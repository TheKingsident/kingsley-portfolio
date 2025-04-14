import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
	import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 

const Experience = () => {
  return (
    <section id="experience" className="relative flex flex-col min-h-screen w-full px-8 md:px-16 py-12 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      <div className="flex items-center gap-2 bg-white px-10 py-1 rounded-full w-fit text-sm">
        <FontAwesomeIcon icon={faBookOpen} className="text-orange-500" />
        Education & Experience
        </div>
    </section>
  );
}
export default Experience;