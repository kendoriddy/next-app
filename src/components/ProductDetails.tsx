import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { PiShareFatThin } from "react-icons/pi";

const ProductDetails = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(true);
  };

  const handleViewLess = () => {
    setIsExpanded(false);
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      {/* Product Title, Price and Rating Section */}
      <div className="mb-4">
        <div className="flex justify-between items-start">
          <h2 className="text-[14px] font-semibold">
            Gucci bag – the epitome of luxury and sophistication
          </h2>
          <div className="flex gap-2">
            <button className="text-gray-600 bg-gray-200 rounded-[100px] p-2 hover:text-gray-700">
              <PiShareFatThin />
            </button>
            <button className="text-gray-500 bg-gray-200 rounded-[100px] p-2 hover:text-gray-700">
              <CiHeart />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 mt-2">
            <span className="text-[16px] font-medium text-[#000000E5]">₦18.0</span>
            <span className="text-[12px] text-gray-500 line-through">₦28.0</span>
            <span className="text-[9px] bg-[#8A226F] text-white py-1 px-1 rounded">25% OFF</span>
          </div>

          <div className="flex items-center gap-0.5 mt-2 text-yellow-500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar className="text-gray-300" />
            <span className="text-sm text-gray-500">(5 sold)</span>
          </div>
        </div>
      </div>

      <hr className="h-[0.5px] mb-4 -mx-4 mt-2" />

      {/* Select Variants Section */}
      <div className="mb-4">
        <span className="block font-semibold text-[14px] mb-2">Select variants</span>

        <div className="mb-2">
          <p className="text-sm text-gray-700 mb-1">Size: SMALL</p>
          <div className="flex gap-2 flex-wrap">
            <button className="bg-black text-white py-1 px-3 rounded-full text-sm">Filter</button>
            <button className="border border-gray-300 py-1 px-3 rounded-full text-sm">
              Filter
            </button>
            <button className="border border-gray-300 py-1 px-3 rounded-full text-sm">
              Filter
            </button>
            <button className="border border-gray-300 py-1 px-3 rounded-full text-sm">
              Filter
            </button>
            <button className="border border-gray-300 py-1 px-3 rounded-full text-sm">
              Filter
            </button>
          </div>
        </div>

        <div className="mb-2">
          <p className="text-sm text-gray-700 mb-1">Color: White</p>
          <div className="flex gap-2 flex-wrap">
            <button className="border border-gray-300 py-1 px-3 rounded-full text-sm">
              Filter
            </button>
            <button className="border border-gray-300 py-1 px-3 rounded-full text-sm">
              Filter
            </button>
            <button className="border border-gray-300 py-1 px-3 rounded-full text-sm">
              Filter
            </button>
          </div>
        </div>
      </div>

      <hr className="h-[0.5px] mb-4 -mx-4 mt-2" />

      {/* Product Description Section */}
      <div>
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setShowDescription(!showDescription)}
        >
          <span className="block font-semibold text-[14px] mb-2">Product description</span>
          <BiChevronDown className="text-gray-500" />
        </div>
        {showDescription && (
          <div className="mt-2 text-sm text-gray-700">
            Wholesale and drop shipping are both welcomed. For wholesale, we will offer discount or
            free express shipping which only takes 3–7 days to arrive...
            {!isExpanded && (
              <span
                className="text-[#8A226F] ml-1 text-[12px] font-medium cursor-pointer"
                onClick={handleReadMore}
              >
                Read more
              </span>
            )}
            {isExpanded && (
              <>
                <span>
                  {" "}
                  Additional details about the product go here. This text is shown when the user
                  clicks "Read more".
                </span>
                <span
                  className="text-[#8A226F] ml-1 text-[12px] font-medium cursor-pointer"
                  onClick={handleViewLess}
                >
                  Read less
                </span>
              </>
            )}
          </div>
        )}
      </div>
      <hr className="h-[0.5px] mb-0 -mx-4 mt-2" />
    </div>
  );
};

export default ProductDetails;
