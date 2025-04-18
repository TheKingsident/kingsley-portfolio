import kingsley from "../assets/profile-main2.png";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center  w-full min-h-screen md:h-[80vh] px-6 sm:px-10 md:px-16 bg-gradient-to-br from-white to-[#f7faff] overflow-hidden"
    >
      {/* Floating Circles */}
      <div className="absolute w-32 h-32 bg-orange-300 rounded-full opacity-50 animate-float top-10 left-10"></div>
      <div className="absolute w-24 h-24 bg-blue-300 rounded-full opacity-50 animate-float-delayed bottom-20 right-20"></div>
      <div className="absolute w-16 h-16 bg-purple-300 rounded-full opacity-50 animate-float top-1/3 right-1/2"></div>
      <div className="absolute w-20 h-20 bg-pink-300 rounded-full opacity-50 animate-float-delayed bottom-1/4 left-1/4"></div>

      {/* Content Section */}
      <div className="relative z-10 w-full md:w-1/2 text-left md:text-left space-y-6 py-16">
        <div className="text-lg font-semibold text-orange-500 flex items-center gap-2 justify-start">
          <span>👋</span> HELLO!
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          I'm <span className="text-orange-500">Kingsley</span>.
        </h1>
        <p className="text-gray-600 text-[15px] leading-relaxed px-2 md:px-0">
          I am a software engineer with experience in building modern websites and applications.  
          I specialize in Python, React, TypeScript, and API development.
        </p>
        <div className="flex flex-row gap-4 mt-4 justify-start">
          <a
            href="#contact"
            className="px-6 py-3 bg-orange-100 text-orange-500 rounded-xl font-semibold shadow hover:bg-orange-300 hover:text-white transition-all self-start w-[120px] flex justify-center items-center"
          >
            Hire Me
          </a>
          <a
            href="#works"
            className="px-6 py-3 border-2 border-orange-200 text-orange-500 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition self-start"
          >
            View Works →
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="absolute right-0 bottom-0 w-[350px] h-[350px] md:static md:w-[400px] md:h-auto lg:w-[450px]"
      >
        <div
          className="absolute bg-[#ffe0cc] w-full h-full rounded-full translate-y-40 md:translate-y-0 translate-x-1/4 md:translate-x-0 animate-pulse"
        ></div>
        <img
          src={kingsley}
          alt="Kingsley Usa software engineer"
          className="relative z-10 w-full translate-x-1/4 md:translate-x-0 translate-y-5 md:translate-y-0"
        />
      </div>
    </section>
  );
};

export default Home;
