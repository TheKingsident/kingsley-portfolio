import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <section id="about" className="relative flex flex-col min-h-screen w-full px-8 md:px-16 py-12 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      <div className="flex items-center gap-2 bg-white px-10 py-1 rounded-full w-fit text-sm">
        <FontAwesomeIcon icon={faUser} className="text-orange-500" />
        Who am I?
      </div>
      <div className="flex flex-col gap-10">
        <h2 className="pt-10 text-4xl text-gray-900">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-start gap-10 ">
          {/* Image Section */}
          <div className="w-[300px] relative mx-auto">
            <img
              src="src/assets/profile-main4.jpg"
              alt="Kingsley Usa"
              className="rounded-xl object-cover"
            />
            
          </div>

          {/* Bio + Details Section */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Bio Card */}
            <div className="bg-white bg-opacity-60 backdrop-blur-md p-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Bio</h2>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                Hello! I'm Kingsley Usa, and if there's one thing that gets me buzzing, it's crafting elegant and powerful software. Think of me as 
                a digital architect with a serious soft spot for clean code and innovative solutions. My playground? Modern web 
                technologies like React, TypeScript, and Node.js – I love building things that work beautifully.
              </p>
              <p className="text-gray-500 leading-relaxed text-[15px] mt-4">  
                That passion spilled over into founding Blue Wave Horizon, where we're all about creating tech that 
                empowers freelancers, startups, and small businesses. For me, it's not just about lines of code; it's about 
                building digital products that truly make a difference.
              </p>
              <p className="text-gray-500 leading-relaxed text-[15px] mt-4">
                Right now, my focus is on launching a game-changing house-hunting platform in Nigeria – imagine 
                simplifying property searches and transactions!
              </p>
              <p className="text-gray-500 leading-relaxed text-[15px] mt-4">
                With nearly a decade under my belt in the web development world, I've independently built and launched 
                multiple web applications, each a testament to my hands-on approach. And speaking of impact, 
                I once helped a client skyrocket their website health from 86% to a near-perfect 99% through some serious 
                SEO magic. Ultimately, I'm driven by a desire to build tech that not only functions flawlessly but also 
                solves real-world problems with a touch of ingenuity.
              </p>
            </div>

            {/* Personal Details */}




            <div className="grid grid-cols-2 md:grid-cols-4 text-sm bg-white bg-opacity-60 backdrop-blur-md p-4 rounded-xl shadow gap-y-20">
              <div className="space-y-6">
                <p className="text-gray-900">Age</p>
                <p className="text-gray-900">Residence</p>
              </div>
              <div className="space-y-6">
                <p className="text-gray-500">30</p>
                <p className="text-gray-500">Sweden</p>
              </div>
              <div className="space-y-6">
                <p className="text-gray-900">Email</p>
                <p className="text-gray-900">Phone</p>
              </div>
              <div className="space-y-6">
                <p className="text-gray-500">hello@kingsleyusa.dev</p>
                <p className="text-gray-500">+234-1234-5678</p>
              </div>
            </div>

            {/* Download CV Button */}
            <div>
              <a
                href="/path-to-cv.pdf"
                className="inline-block px-6 py-3 bg-orange-200 text-orange-700 font-semibold rounded-2xl shadow hover:bg-orange-300 transition"
                download
              >
                Download CV <span className="ml-2">⬇️</span>
              </a>
            </div>
          </div>
        </div>
      </div>
  
      

      <div className="flex items-center gap-2 bg-white px-10 py-1 rounded-full w-fit text-sm mt-20">
        <FontAwesomeIcon icon={faMedal} className="text-orange-500" />
        Achievements
      </div>

      <div className="flex flex-col gap-10">
      <h2 className="pt-10 text-4xl text-gray-900">
          Fun Facts
        </h2>
      </div>
      
      
      
    </section>
  );
};

export default About;