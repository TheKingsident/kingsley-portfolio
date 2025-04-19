import { PortfolioItem } from "../data/portfolioItemCardData";

interface Props {
    item: PortfolioItem;
    onClose: () => void;
}

const ItemDetailsPopUp: React.FC<Props> = ({ item, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 animate-fade-in">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96 transition-opacity duration-300">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
                    &times;
                </button>
                <img src={item.photo} alt={item.name} className="w-full h-auto rounded-lg mb-4" />
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p>{item.description}</p>
            </div>
        </div>
    );
};

export default ItemDetailsPopUp;