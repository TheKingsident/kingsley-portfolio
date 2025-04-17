import { PortfolioItem } from "../data/portfolioItemCardData";

interface Props {
    item: PortfolioItem;
}

const PortfolioItemCard: React.FC<Props> = ({ item }) => {
    return (
        <div>
            <div className="w-{490px} rounded-lg overflow-clip">
                <img
                    src={item.photo}
                    alt={item.name}
                    className="w-full transition-transform duration-300 ease-in-out hover:rotate-3 hover:scale-105"
                />
            </div>
            <h2 className="text-lg text-gray-600 font-medium mt-5">{item.name}</h2>
        </div>
    );
};

export default PortfolioItemCard;