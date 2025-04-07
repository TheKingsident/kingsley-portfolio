const About = () => {
  return (
    <section id="about" className="relative min-h-screen w-full px-8 md:px-16 py-12 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute w-40 h-40 bg-purple-200 rounded-lg opacity-50 top-1/4 left-10 transform rotate-45">
        <div className="absolute inset-0 flex flex-wrap gap-2 p-4">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-white rounded-full opacity-70"></div>
          ))}
        </div>
      </div>
      <div className="absolute w-24 h-24 bg-blue-200 opacity-50 top-1/3 left-1/4 transform rotate-45"></div>
      <div className="absolute w-32 h-32 bg-[#ffe0cc] rounded-full opacity-50 top-1/2 left-1/5 animate-float"></div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <a
            href="#who-am-i"
            className="px-4 py-2 bg-orange-500 text-white rounded-full font-semibold flex items-center gap-2"
          >
            <span>👤</span> Who am I?
          </a>
          <a
            href="#achievements"
            className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full font-semibold flex items-center gap-2"
          >
            <span>🏆</span> Achievements
          </a>
        </div>

        {/* About Me Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">About Me</h1>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="relative w-[300px] md:w-[400px]">
            <img
              src="src/assets/profile-main3.png"
              alt="Profile"
              className="w-full h-auto rounded-lg relative z-10"
            />
          </div>

          {/* Bio and Details Section */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Bio</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                I am Kingsley, web developer from USA, California. I have rich experience in web
                site design and building and customization, also I am good at WordPress. I love to
                talk with you about our unique.{' '}
                <span role="img" aria-label="smiley">
                  😊
                </span>
              </p>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 font-semibold">Age</p>
                <p className="text-gray-900">28</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Email</p>
                <p className="text-gray-900">hello@example.com</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Residence</p>
                <p className="text-gray-900">USA</p>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Phone</p>
                <p className="text-gray-900">+1-202-555-0135</p>
              </div>
            </div>

            {/* Download CV Button */}
            <a
              href="#download-cv"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition"
            >
              Download CV
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 16v-8m0 0l-4 4m4-4l4 4"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Fun Facts Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-16">Fun Facts</h2>
      </div>
    </section>
  );
};

export default About;