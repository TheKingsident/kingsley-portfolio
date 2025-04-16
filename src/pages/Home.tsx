const Home = () => {
  return (
    <section id="home" className="relative flex flex-col md:flex-row md:items-center w-full h-[80vh] px-16 bg-gradient-to-br from-white to-[#f7faff] overflow-hidden">
      {/* Floating Circles */}
      <div className="absolute w-32 h-32 bg-orange-300 rounded-full opacity-50 animate-float top-10 left-10"></div>
      <div className="absolute w-24 h-24 bg-blue-300 rounded-full opacity-50 animate-float-delayed bottom-20 right-20"></div>
      <div className="absolute w-16 h-16 bg-purple-300 rounded-full opacity-50 animate-float top-1/3 right-1/4"></div>
      <div className="absolute w-20 h-20 bg-pink-300 rounded-full opacity-50 animate-float-delayed bottom-1/4 left-1/4"></div>

      {/* Content Section */}
      <div className="text-center md:text-left w-1/2 space-y-6 z-10">
        <div className="text-lg font-semibold text-orange-500 flex items-center gap-2">
          <span>👋</span> HELLO!
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          I'm <span className="text-orange-500">Kingsley</span>.
        </h1>
        <p className="text-gray-600 text-[15px] leading-relaxed">
          I am a software engineer with experience in building modern websites and applications.  
          I specialize in Python, React, TypeScript, and API development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
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
      <div className="relative w-[300px] md:w-[450px] lg:w-[400px] max-h-[50vh] mt-12 md:mt-0">
        <div className="absolute w-[450px] h-[450px] bg-[#ffe0cc] transform -translate-x-44 rounded-full translate-y-40 animate-pulse"></div>
        <img
          src="src/assets/profile-main2.png"
          alt="Profile"
          className="relative transform -translate-x-1/3 translate-y-5"
        />
      </div>
    </section>
  );
};

export default Home;