import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { HiOutlineUsers } from "react-icons/hi";

interface VendorInfoProps {
  formData: any;
}

const VendorInfo: React.FC<VendorInfoProps> = ({ formData }) => {
  const vendorTags = [
    "Quality goods",
    "Nice designs",
    "Quality goods",
    "Nice designs",
    "Quality goods",
    "Nice designs",
  ];

  return (
    <div className="relative min-h-screen bg-white">
      {/* Content Section */}
      <div className="p-4 max-w-lg mx-auto bg-white rounded-lg pb-4">
        {/* About this vendor */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold">About this vendor</span>
        </div>

        {/* Vendor Information */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image src="/gucci.png" alt="vendor_logo" width={40} height={40} />
            </div>
            <div>
              <h2 className="text-[12px] font-medium">Gucci Store</h2>
              <p className="text-[12px] font-normal text-gray-500">
                <span className="text-[#00000066] text-[12px] font-normal">Fashion</span> •{" "}
                <FaStar className="inline text-black" /> 5.4 • <HiOutlineUsers className="inline" />{" "}
                <span className="text-[#00000066] text-[10px] font-normal">100k</span>
              </p>
            </div>
          </div>
          <button className="text-[#8A226F] text-[12px] font-medium">Follow</button>
        </div>

        {/* Vendor Description */}
        <div className="mb-4">
          <p className="text-sm text-gray-500">
            Vendor description:
            <span>
              {formData.description ||
                "You can track your parcel on the following website using your tracking number. https://www.17trac..."}
            </span>
          </p>
        </div>

        {/* Vendor Tags */}
        <div className="flex gap-2 flex-wrap mb-4">
          {vendorTags.map((tag, index) => (
            <span key={index} className="bg-gray-100 px-2 py-1 rounded-full text-[12px]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Fixed Publish Button */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 border-t border-gray-300 shadow-lg">
        <div className="max-w-lg mx-auto">
          <button className="w-full bg-[#8A226F] text-white py-2 rounded-full font-semibold text-sm">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorInfo;
