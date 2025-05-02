import { PortfolioItem } from "../data/portfolioItemCardData";

interface Props {
    item: PortfolioItem;
    onClick: (item: PortfolioItem) => void;
}

// PortfolioItemCard component
// This component displays a portfolio item card with an image and name.
const PortfolioItemCard: React.FC<Props> = ({ item, onClick }) => {
    return (
        <div onClick={() => onClick(item)} className="flex flex-col items-start justify-center cursor-pointer">
            <div className="w-auto rounded-lg overflow-clip">
                <img
                    src={item.photo}
                    alt={item.name}
                    className="w-full transition-transform duration-300 ease-in-out hover:rotate-3 hover:scale-105"
                />
            </div>
            <h2 className="text-[16px] text-gray-600 font-medium mt-5 text-left ml-2 font-heading">{item.name}</h2>
        </div>
    );
};

export default PortfolioItemCard;