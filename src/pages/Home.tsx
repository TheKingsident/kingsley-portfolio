import kingsley from "../assets/profile-main2.png";

interface HomeProps {
  setActiveSection: (section: string) => void;
}

const Home = ({ setActiveSection }: HomeProps) => {
  return (
    <section
      id="home"
      className="relative flex flex-row items-center justify-center w-full min-h-screen lg:min-h-fit fluid-px py-10 overflow-visible"
    >
      {/* Floating Circles */}
      <div className="absolute w-32 h-32 bg-orange-300 rounded-full opacity-50 animate-float top-10 left-10"></div>
      <div className="absolute w-24 h-24 bg-blue-300 rounded-full opacity-50 animate-float-delayed bottom-20 right-20"></div>
      <div className="absolute w-16 h-16 bg-purple-300 rounded-full opacity-50 animate-float top-1/3 right-1/2"></div>
      <div className="absolute w-20 h-20 bg-pink-300 rounded-full opacity-50 animate-float-delayed bottom-1/4 left-1/4"></div>



      {/* Content Section */}
      <div className="flex-[2] relative z-20 w-full max-w-1/2 text-left space-y-6 mb-10 md:mb-0">
        <div className="flex items-center gap-2">
          <span className="text-5xl">👋</span>
          <span className="text-2xl font-medium font-body text-orange-500">HELLO!</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-medium font-heading text-gray-900">
          I'm <span className="text-orange-500">Kingsley</span>.
        </h1>
        <p className="text-gray-600 text-base font-body md:text-lg leading-relaxed max-w-md">
          I am a software engineer with experience in building modern websites and applications. I specialize in Python, React, TypeScript, and API development.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <button
            onClick={() => setActiveSection("contact")}
            className="w-fit px-6 py-3 bg-orange-300/50 text-orange-500 font-medium font-body rounded-2xl shadow-sm hover:text-orange-500 hover:scale-95 transition-transform duration-200"
          >
            Hire Me
          </button>
          <button
            onClick={() => setActiveSection("portfolio")}
            className="px-6 py-3 text-gray-700 font-semibold font-body bg-transparent hover:text-orange-500 transition-all flex items-center gap-2"
          >
            View Works <span>→</span>
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative z-10 w-full lg:w-1/2 flex justify-center md:justify-end overflow-visible">
        <div className="relative">
          <div className="absolute w-full aspect-square min-w-[290px] min-h-[290px] max-w-[450px] max-h-[450px] bg-[#ffe0cc] rounded-full animate-pulse -translate-x-[20px] lg:-translate-x-[10px] translate-y-10 lg:translate-y-[170px]"></div>
          <img
            src={kingsley}
            alt="Kingsley Usa software engineer"
            className="relative z-10 w-full min-w-[250px] max-w-[400px] object-cover lg:translate-y-[110px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;