import { PortfolioItem } from "../data/portfolioItemCardData";

interface Props {
    item: PortfolioItem;
    onClose: () => void;
}

const ItemDetailsPopUp: React.FC<Props> = ({ item, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/20 z-50 animate-fade-in overflow-y-auto">
            <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
                &times;
            </button>
            <div className="flex items-center justify-center min-h-full py-10">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-[800px] mx-auto">
                    <img
                        src={item.photo}
                        alt={item.name}
                        className="w-full h-auto rounded-lg mb-4"
                    />
                    <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                    <p className="text-sm text-gray-700">{item.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailsPopUp;