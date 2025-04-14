import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
	import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 

const Experience = () => {
  return (
    <section id="experience" className="relative flex flex-col min-h-screen w-full px-8 md:px-16 py-16 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      <div className="flex items-center gap-2 bg-white px-10 py-1 rounded-full w-fit text-sm">
        <FontAwesomeIcon icon={faBookOpen} className="text-orange-500" />
        Education & Experience
      </div>
			<h2 className="pt-10 text-4xl text-gray-900">
					Resume
				</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
				<div className="flex flex-col items-start rounded-lg bg-cyan-50 shadow-sm p-7">
					<div className="border border-orange-500 rounded-md py-0 px-2 text-orange-500 text-[12px]">
						2016 - 2022
					</div>
					<h3 className="text-lg font-semibold text-gray-600 mt-5">Bachelor of Science in Computer Science</h3>
					<p className="text-gray-500 text-[15px] mt-5">Relevant Courses: Data Structures, Algorithms, Database Management Systems, Software Engineering.</p>
				</div>
				<div className="flex flex-col items-start rounded-lg bg-cyan-50 shadow-sm p-7">
					<div className="border border-green-500 rounded-md py-0 px-2 text-green-500 text-[12px]">
						2022 - 2022
					</div>
					<h3 className="text-lg font-semibold text-gray-600 mt-5">Front End Developer</h3>
					<p className="text-gray-500 text-[15px] mt-5">Worked on developing user interfaces for a disease diagnosis system using React and Tailwind CSS.</p>
				</div>
				<div className="flex flex-col items-start rounded-lg bg-cyan-50 shadow-sm p-7">
					<div className="border border-red-500 rounded-md py-0 px-2 text-red-500 text-[12px]">
						2023 - 2024
					</div>
					<h3 className="text-lg font-semibold text-gray-600 mt-5">Software Engineering Certification</h3>
					<p className="text-gray-500 text-[15px] mt-5">Completed a comprehensive program focusing on software development methodologies, and server management.</p>
				</div>
				<div className="flex flex-col items-start rounded-lg bg-cyan-50 shadow-sm p-7">
					<div className="border border-cyan-500 rounded-md py-0 px-2 text-cyan-500 text-[12px]">
						2018 - Present
					</div>
					<h3 className="text-lg font-semibold text-gray-600 mt-5">WordPress Developer</h3>
					<p className="text-gray-500 text-[15px] mt-5">Worked on developing and maintaining WordPress websites for various clients.</p>
				</div>
				<div className="flex flex-col items-start rounded-lg bg-cyan-50 shadow-sm p-7">
					<div className="border border-blue-500 rounded-md py-0 px-2 text-blue-500 text-[12px]">
						2025 - 2025
					</div>
					<h3 className="text-lg font-semibold text-gray-600 mt-5">Back-End Pro-Development Certification</h3>
					<p className="text-gray-500 text-[15px] mt-5">Completed a comprehensive program focusing on back-end development, API design, and database management.</p>
				</div>
				<div className="flex flex-col items-start rounded-lg bg-cyan-50 shadow-sm p-7">
					<div className="border border-yellow-500 rounded-md py-0 px-2 text-yellow-500 text-[12px]">
						2023 - Present
					</div>
					<h3 className="text-lg font-semibold text-gray-600 mt-5">Full Stack Engineer</h3>
					<p className="text-gray-500 text-[15px] mt-5">Currently working on a full-stack web application using React, Node.js, and MongoDB.</p>
				</div>
				
			</div>

    </section>
  );
}
export default Experience;