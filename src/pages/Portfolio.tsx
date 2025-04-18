import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { PortfolioItem } from '../data/portfolioItemCardData';
import portfolioItemCardData from '../data/portfolioItemCardData';
import PortfolioItemCard from '../components/PortfolioItem';
import ItemDetailsPopUp from '../components/ItemDetailsPopUp';


const Portfolio = () => {

  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedItem]);

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
          {portfolioItemCardData.map((item: PortfolioItem, index: number) => (
            <PortfolioItemCard
              key={index}
              item={item}
              onClick={setSelectedItem} />
          ))}

        </div>

      </div>

      {selectedItem && (
        <ItemDetailsPopUp
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
      
      
    </section>
  )
}

export default Portfolio