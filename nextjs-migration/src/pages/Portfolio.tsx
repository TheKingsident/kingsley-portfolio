"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import { PortfolioItem } from '../data/portfolioItemCardData';
import portfolioItemCardData from '../data/portfolioItemCardData';
import PortfolioItemCard from '../components/PortfolioItem';
import { useModal } from '@/contexts/ModalContext';

const Portfolio: React.FC = () => {
  const { openModal } = useModal();

  const handleItemClick = (item: PortfolioItem) => {
    openModal(item);
  };

  return (
    <section className="min-h-fit flex flex-col px-8 md:px-16 py-12 border-r-1 border-amber-50 overflow-hidden">
        <div className="flex items-center gap-2 bg-white px-10 py-1 font-body rounded-full w-fit text-sm">
          <FontAwesomeIcon icon={faCube} className="text-orange-500" />
            Recent Works
        </div>
        <div className="flex flex-col gap-10 mt-10">
          <h1 className="text-4xl text-gray-900 font-heading">
            Portfolio
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {portfolioItemCardData.map((item: PortfolioItem, index: number) => (
              <PortfolioItemCard
                key={index}
                item={item}
                onClick={handleItemClick} />
            ))}
          </div>
        </div>
      </section>
  )
}

export default Portfolio