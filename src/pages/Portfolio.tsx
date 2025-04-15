import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  return (
    <section className="h-full bg-gradient-to-r from-blue-50 to-rose-50 flex flex-col px-8 md:px-16 py-12 border-r-1 border-amber-50 overflow-hidden">
      <div className="flex items-center gap-2 bg-white px-10 py-1 rounded-full w-fit text-sm">
        <FontAwesomeIcon icon={faCube} className="text-orange-500" />
          Recent Works
      </div>
      <div className="flex flex-col gap-10 mt-10">
        <h1 className="text-4xl text-gray-900">
          Portfolio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

        </div>

      </div>
      
      
    </section>
  )
}

export default Portfolio