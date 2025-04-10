const Services = () => {
    return (
        <section
            id="services"
            className="flex items-start justify-center w-full h-[80vh] px-8 md:px-16 bg-gradient-to-br from-purple-50 to-blue-50 overflow-clip"
        >
            <div className="flex flex-col">
                {/* Greeting Section */}
                <div className="text-lg font-semibold text-orange-500 flex items-center gap-2">
                    <span>👋</span> HELLO!
                </div>

                {/* Title Section */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    I'm <span className="text-orange-500">Kingsley</span>.
                </h1>

                {/* Description Section */}
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    I am a software engineer with experience in building modern websites and applications.  
                    I specialize in Python, React, TypeScript, and API development.
                </p>

                {/* Call-to-Action Buttons */}
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
            
        </section>
    );
};

export default Services;