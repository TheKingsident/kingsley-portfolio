import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { PortfolioItem } from "../data/portfolioItemCardData";
import Image from "next/image";
import { useState } from "react";

interface Props {
    item: PortfolioItem;
    onClose: () => void;
}

const ItemDetailsPopUp: React.FC<Props> = ({ item, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const hasVideo = Boolean(item.videoUrl);
    const totalSlides = hasVideo ? 2 : 1;

    const nextSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const getYouTubeEmbedUrl = (url: string) => {
        const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
        const match = url.match(regex);
        return match ? `https://www.youtube.com/embed/${match[1]}` : url;
    };

    // Normalize the photo URL to ensure it starts with /
    const normalizePhotoUrl = (url: string) => {
        return url.startsWith('/') ? url : `/${url}`;
    };

    return (
        <div className="fixed inset-0 bg-black/20 z-[100] animate-fade-in overflow-y-auto">
            <div className="flex items-center justify-center min-h-full py-10">
                <div className="bg-white/70 rounded-lg backdrop-blur-xl shadow-lg p-6 w-full max-w-[600px] mx-auto relative">
                    {/* Close Icon */}
                    <FontAwesomeIcon
                        icon={faXmark}
                        onClick={onClose}
                        className="absolute top-4 right-4 w-6 h-6 text-gray-500 hover:text-orange-500 cursor-pointer transition-colors z-20"
                        aria-label="Close"
                    />

                    {/* Media Section with Navigation */}
                    <div className="relative mt-8 mb-4 group">
                        {hasVideo && (
                            <>
                                <FontAwesomeIcon
                                    icon={faCaretLeft}
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-4xl text-gray-600 hover:text-[#ff7b54] opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer"
                                    aria-label="Previous slide"
                                />
                                <FontAwesomeIcon
                                    icon={faCaretRight}
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-4xl text-gray-600 hover:text-[#ff7b54] opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer"
                                    aria-label="Next slide"
                                />
                            </>
                        )}

                        {/* Slide content */}
                        <div className="relative w-full">
                            {currentSlide === 0 ? (
                                <Image
                                    src={normalizePhotoUrl(item.photo)}
                                    alt={item.name}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto rounded-lg"
                                />
                            ) : (
                                <div className="w-full" style={{ aspectRatio: '16/9' }}>
                                    <iframe
                                        src={getYouTubeEmbedUrl(item.videoUrl!)}
                                        title={`${item.name} video`}
                                        className="w-full h-full rounded-lg"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            )}
                        </div>

                        {/* Slide indicators - only show if there's a video */}
                        {hasVideo && (
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {Array.from({ length: totalSlides }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentSlide(index);
                                        }}
                                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                                            currentSlide === index ? 'bg-white shadow-lg' : 'bg-white/50'
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

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