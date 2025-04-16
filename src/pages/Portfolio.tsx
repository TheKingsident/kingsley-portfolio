import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 to-rose-50 flex flex-col px-8 md:px-16 py-12 border-r-1 border-amber-50 overflow-hidden">
      <div className="flex items-center gap-2 bg-white px-10 py-1 rounded-full w-fit text-sm">
        <FontAwesomeIcon icon={faCube} className="text-orange-500" />
          Recent Works
      </div>
      <div className="flex flex-col gap-10 mt-10">
        <h1 className="text-4xl text-gray-900">
          Portfolio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="w-{490px} rounded-lg overflow-clip">
              <img src="src/assets/AV.png" alt="Algorithm Visualizer App"
              className="w-full transition-transform duration-300 ease-in-out hover:rotate-3 hover:scale-105" />

            </div>
            <h2 className="text-lg text-gray-600 font-medium mt-5">
              Algorithm Visualizer App
            </h2>
          </div>

          <div>
            <div className="w-{490px} rounded-lg overflow-clip">
              <img src="src/assets/Chattrix.png" alt="Chattrix"
              className="w-full transition-transform duration-300 ease-in-out hover:rotate-3 hover:scale-105" />

            </div>
            <h2 className="text-lg text-gray-600 font-medium mt-5">
              Chattrix - YouTube Comment Search App
            </h2>
          </div>

        </div>

      </div>
      
      
    </section>
  )
}

export default Portfolio