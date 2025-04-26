import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { PortfolioItem } from "../data/portfolioItemCardData";

interface Props {
    item: PortfolioItem;
    onClose: () => void;
}

const ItemDetailsPopUp: React.FC<Props> = ({ item, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/20 z-[100] animate-fade-in overflow-y-auto">
            <div className="flex items-center justify-center min-h-full py-10">
                <div className="bg-white/70 rounded-lg backdrop-blur-xl shadow-lg p-6 w-full max-w-[600px] mx-auto relative">
                    {/* Close Icon */}
                    <FontAwesomeIcon
                        icon={faXmark}
                        onClick={onClose}
                        className="absolute top-4 right-4 w-6 h-6 text-gray-500 hover:text-orange-500 cursor-pointer transition-colors"
                        aria-label="Close"
                    />

                    {/* Photo */}
                    <img
                        src={item.photo}
                        alt={item.name}
                        className="w-full h-auto rounded-lg mb-4 mt-8"
                    />

                    {/* Title */}
                    <h2 className="text-2xl mb-2">{item.name}</h2>
                    
                    {/* Render the component if it exists */}
                    {item.component && (
                        <div className="mt-4">
                            {item.component}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemDetailsPopUp;