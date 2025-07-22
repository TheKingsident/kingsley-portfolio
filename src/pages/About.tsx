import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { ImSpinner9 } from "react-icons/im";
import { faMedal, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faReact, faNode, faJs } from "@fortawesome/free-brands-svg-icons";
import { SiDjango, SiTailwindcss, SiNextdotjs, SiGnubash } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../assets/profile-main4.jpg";
import cprogramming from "../assets/c-programming-144.svg";
import python from "../assets/python.svg";
import CardBackground from "../components/CardBackground";

const About = () => {
  return (
    <section id="about" className="relative flex flex-col w-full px-8 md:px-16 py-12 overflow-hidden">
      <div className="flex items-center gap-2 bg-white px-10 py-1 font-body rounded-full w-fit text-sm">
        <FontAwesomeIcon icon={faUser} className="text-orange-500" />
        Who am I?
      </div>
      <div className="flex flex-col gap-10 mt-10">
        <h2 className="text-4xl text-gray-900 font-heading">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-start gap-10 ">
          {/* Image Section */}
          <div className="w-[300px] relative mx-auto">
            <img
              src={profile}
              alt="Kingsley Usa"
              className="rounded-xl object-cover"
            />
            
          </div>

          {/* Bio + Details Section */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Bio Card */}
            <CardBackground>
              <h2 className="text-xl font-semibold font-heading text-gray-800 mb-2">Bio</h2>
              <p className="text-gray-500 leading-relaxed font-body text-[15px]">
                Hello! I'm Kingsley Usa, and if there's one thing that gets me buzzing, it's crafting elegant and powerful software. Think of me as 
                a digital architect with a serious soft spot for clean code and innovative solutions. My playground? Modern web 
                technologies like React, TypeScript, and Node.js – I love building things that work beautifully.
              </p>
              <p className="text-gray-500 leading-relaxed font-body text-[15px] mt-4">  
                That passion spilled over into founding Blue Wave Horizon, where we're all about creating tech that 
                empowers freelancers, startups, and small businesses. For me, it's not just about lines of code; it's about 
                building digital products that truly make a difference.
              </p>
              <p className="text-gray-500 leading-relaxed font-body text-[15px] mt-4">
                Right now, my focus is on launching a game-changing house-hunting platform in Nigeria – imagine 
                simplifying property searches and transactions!
              </p>
              <p className="text-gray-500 leading-relaxed font-body text-[15px] mt-4">
                With nearly a decade under my belt in the web development world, I've independently built and launched 
                multiple web applications, each a testament to my hands-on approach. And speaking of impact, 
                I once helped a client skyrocket their website health from 86% to a near-perfect 99% through some serious 
                SEO magic. Ultimately, I'm driven by a desire to build tech that not only functions flawlessly but also 
                solves real-world problems with a touch of ingenuity.
              </p>
            </CardBackground>

            {/* Personal Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 text-sm font-body bg-white/30 bg-opacity-60 backdrop-blur-md p-4 rounded-xl shadow-sm gap-y-20">
              <div className="space-y-6">
                <p className="text-gray-900">Age</p>
                <p className="text-gray-900">Residence</p>
              </div>
              <div className="space-y-6">
                <p className="text-gray-500">30</p>
                <p className="text-gray-500">Nigeria</p>
              </div>
              <div className="space-y-6">
                <p className="text-gray-900">Email</p>
                <p className="text-gray-900">Phone</p>
              </div>
              <div className="space-y-6">
                <p className="text-gray-500">hello@kingsleyusa.dev</p>
                <p><a href="tel:+2348066748521" className="text-gray-500 hover:text-orange-500 transition">
                  +234-806-674-8521</a>
                </p>
              </div>
            </div>

            {/* Download CV Button */}
            <div>
              <a
                href="/assets/Kingsley_Usa_CV.pdf"
                className="inline-block px-6 py-3 font-body bg-orange-200 text-orange-700 font-semibold rounded-2xl shadow hover:bg-orange-300 transition"
                download
              >
                Download CV <span className="ml-2">⬇️</span>
              </a>
            </div>
          </div>
        </div>
      </div>
  
      

      <div className="flex items-center gap-2 bg-white px-10 font-body py-1 rounded-full w-fit text-sm mt-20">
        <FontAwesomeIcon icon={faLaptopCode} className="text-orange-500" />
        Technologies I work with
      </div>

      <div className="flex flex-col gap-10">
      <h2 className="pt-10 text-4xl text-gray-900 font-heading">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 font-body">
          <div className="flex flex-col items-center">
            <img src={cprogramming} width={50} alt="C Programming" className="text-5xl text-blue-500" />
            <p className="text-gray-500">C</p> 
          </div>
          <div className="flex flex-col items-center">
            <img src={python} width={50} alt="Python" className="text-5xl text-blue-500" />
            <p className="text-gray-500">Python</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faJs} className="text-5xl text-yellow-500" />
            <p className="text-gray-500">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <BiLogoTypescript className="text-5xl text-blue-300" />
            <p className="text-gray-500">TypeScript</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faReact} className="text-5xl text-blue-500" />
            <p className="text-gray-500">React</p>
          </div>
          
          <div className="flex flex-col items-center">
            <SiDjango className="text-5xl text-gray-700" />
            <p className="text-gray-500">Django</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faNode} className="text-5xl text-green-700" />
            <p className="text-gray-500">Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <SiNextdotjs className="text-5xl text-black" />
            <p className="text-gray-500">Next.js</p>
          </div>
          <div className="flex flex-col items-center">
            <SiGnubash className="text-5xl text-gray-600" />
            <p className="text-gray-500">Bash</p>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-5xl text-cyan-400" />
            <p className="text-gray-500">Tailwind CSS</p>
          </div>
          
        </div>
      </div>

      <div className="flex items-center gap-2 bg-white px-10 py-1 font-body rounded-full w-fit text-sm mt-20">
        <FontAwesomeIcon icon={faMedal} className="text-orange-500" />
        Achievements
      </div>

      <div className="flex flex-col gap-10">
        <h2 className="pt-10 text-4xl text-gray-900 font-heading">
            Fun Facts
        </h2>
        <CardBackground className="flex flex-col justify-center items-center gap-4">
          <ImSpinner9 className="text-5xl text-orange-500 animate-spin" />
          <p className="text-gray-500">Coming soon</p>
        </CardBackground>
      </div>
      
      
      
    </section>
  );
};

export default About;