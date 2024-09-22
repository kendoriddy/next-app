import { useState } from "react";
import Image from "next/image";

interface ImageData {
  file: File | {};
  name: string;
  isActive: boolean;
  base64?: string;
}

interface ImageSliderProps {
  images: ImageData[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter only active images
  const activeImages = images && images?.filter((image) => image.isActive);

  // Use the provided images or default placeholders
  const displayImages =
    activeImages.length > 0
      ? activeImages
      : [
          { file: {}, name: "Placeholder 1", isActive: true, base64: "" },
          { file: {}, name: "Placeholder 2", isActive: true, base64: "" },
        ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % displayImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? displayImages.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {displayImages.length > 0 && (
        <div className="flex items-center justify-center w-full h-64 bg-gray-100 rounded-lg overflow-hidden relative">
          {displayImages[currentIndex].base64 ? (
            <Image
              src={displayImages[currentIndex].base64}
              alt={displayImages[currentIndex].name}
              width={400}
              height={400}
              className="object-contain"
            />
          ) : (
            // Show default image if no base64 available
            <Image
              src="/PRODUCTIMAGE.png"
              alt="Default Image"
              width={400}
              height={400}
              className="object-contain"
            />
          )}
        </div>
      )}

      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50 rounded-r"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50 rounded-l"
      >
        Next
      </button>

      <div className="absolute bottom-4 right-4 text-sm bg-black bg-opacity-50 text-white px-3 py-1 rounded">
        {currentIndex + 1}/{displayImages.length}
      </div>
    </div>
  );
};

export default ImageSlider;
