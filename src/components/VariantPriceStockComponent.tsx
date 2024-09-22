import Image from "next/image";
import { MdMoreHoriz } from "react-icons/md";
import { useState } from "react";

const VariantPriceStockComponent = () => {
  const [activeVariant, setActiveVariant] = useState(1);

  const variants = [
    {
      id: 1,
      description: "Red - L - leather",
      price: "₦20",
      quantity: "20X",
      unitPrice: "₦20",
      stock: "20",
    },
    {
      id: 2,
      description: "Red - L - leather",
      price: "₦20",
      quantity: "20X",
      unitPrice: "₦20",
      stock: "20",
    },
    {
      id: 3,
      description: "Red - L - leather",
      price: "₦20",
      quantity: "20X",
      unitPrice: "₦20",
      stock: "20",
    },
  ];

  const handleVariantClick = (id: number) => {
    setActiveVariant(id);
  };

  return (
    <div className="">
      {/* List of variants */}
      <div className="space-y-4">
        {variants.map((variant) => (
          <div
            key={variant.id}
            className="flex items-start flex-col justify-start"
            onClick={() => handleVariantClick(variant.id)}
          >
            {/* Image and description */}
            <div className="flex items-center justify-between w-full gap-4">
              <div className="flex items-center justify-start gap-2">
                <div className="w-8 h-8 rounded-[4px] flex items-center justify-center bg-gray-200">
                  <Image src="/add_photo_alternate.png" alt="add_image" width={15} height={15} />
                </div>
                <div>
                  <span className="text-[#000000E5] block text-sm font-semibold">
                    {variant.description}
                  </span>
                  <span className="block text-xs text-gray-500">
                    {variant.price} • {variant.quantity}
                  </span>
                </div>
              </div>
              {/* Options Icon */}
              <MdMoreHoriz className="text-gray-500 cursor-pointer" />
            </div>

            {/* Price and Stock Inputs - Only show for active variant */}
            {activeVariant === variant.id && (
              <div className="flex items-center gap-2 w-full mt-2">
                <div className="flex items-center border border-gray-300 rounded px-2 py-1">
                  <input
                    type="text"
                    value={variant.unitPrice}
                    className="w-1/2 text-sm text-center border-none outline-none"
                  />
                  <span className="text-[#000000E5] text-[14px] font-medium">₦</span>
                </div>
                <div className="flex items-center border border-gray-300 rounded px-2 py-1">
                  <input
                    type="text"
                    value={variant.stock}
                    className="w-1/2 text-sm text-center border-none outline-none"
                  />
                  <span className="text-[#000000E5] text-[14px] font-medium">Units</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VariantPriceStockComponent;
