import { useState } from "react";
import Image from "next/image";

interface ImageData {
  file: File | {};
  name: string;
  isActive: boolean;
}

interface ImageSliderProps {
  images: ImageData[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const validImages = Array.isArray(images) ? images : [];

  const activeImages = validImages.filter((image) => image.isActive);

  const displayImages =
    activeImages.length > 0
      ? activeImages
      : [
          { file: {}, name: "Placeholder 1", isActive: true },
          { file: {}, name: "Placeholder 2", isActive: true },
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
          <Image
            src={`/PRODUCTIMAGE.png`}
            alt={displayImages[currentIndex].name}
            width={400}
            height={400}
            className="object-contain"
          />
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
