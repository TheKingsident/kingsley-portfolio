import kingsley from "../assets/profile-main2.png";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center w-full min-h-screen px-4 md:px-16 py-10 bg-gradient-to-br from-[#e6f0fa] to-[#f9e6f0] overflow-hidden"
    >
      {/* Floating Circles */}
      <div className="absolute w-32 h-32 bg-orange-300 rounded-full opacity-50 animate-float top-10 left-10"></div>
      <div className="absolute w-24 h-24 bg-blue-300 rounded-full opacity-50 animate-float-delayed bottom-20 right-20"></div>
      <div className="absolute w-16 h-16 bg-purple-300 rounded-full opacity-50 animate-float top-1/3 right-1/2"></div>
      <div className="absolute w-20 h-20 bg-pink-300 rounded-full opacity-50 animate-float-delayed bottom-1/4 left-1/4"></div>



      {/* Content Section */}
      <div className="relative z-10 w-full md:w-1/2 text-left space-y-6 mb-10 md:mb-0">
        <div className="flex items-center gap-2">
          <span className="text-2xl">👋</span>
          <span className="text-lg font-semibold text-orange-500">HELLO!</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
          I'm <span className="text-gray-900">Kingsley</span>.
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
          I am a software engineer with experience in building modern websites and applications. I specialize in Python, React, TypeScript, and API development.
        </p>
        <div className="flex flex-row gap-4 mt-6">
          <a
            href="#contact"
            className="px-6 py-3 bg-orange-100 text-orange-500 rounded-full font-semibold hover:bg-orange-300 hover:text-white transition-all"
          >
            Hire Me
          </a>
          <a
            href="#works"
            className="px-6 py-3 text-gray-700 font-semibold hover:text-orange-500 transition-all flex items-center gap-2"
          >
            View Works <span>→</span>
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative">
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#ffe0cc] rounded-full -translate-y-10 md:-translate-y-20 animate-pulse"></div>
          <img
            src={kingsley}
            alt="Kingsley Usa software engineer"
            className="relative z-10 w-[250px] md:w-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;