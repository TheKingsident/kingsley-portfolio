import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <section id="about" className="relative flex flex-col min-h-screen w-full px-8 md:px-16 py-12 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      <div className="flex items-center gap-2 bg-white px-10 py-1 rounded-full w-fit text-sm">
        <FontAwesomeIcon icon={faUser} className="text-orange-500" />
        Who am I?
      </div>
      <div className="pt-10 text-5xl">
        About Me
      </div>
      <div className="flex items-center gap-20 py-16">
        <div className="relative w-[400px] h-[600px]">
          <img
          src="src/assets/profile-main4.jpg"
          alt="Kingsley Usa"
          className="w-full h-auto rounded-lg relative"
          />

        </div>
        

      </div>
      <div>
        Achievements
      </div>
      <div>
        Fun Facts
      </div>
      
      
    </section>
  );
};

export default About;