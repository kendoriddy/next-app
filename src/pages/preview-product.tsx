import ImageSlider from "@/components/ImageSlider";
import ProductDetails from "@/components/ProductDetails";
import VendorInfo from "@/components/VendorInfo";
import { FormContext } from "@/context/FormContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { CgMoreVerticalAlt } from "react-icons/cg";

const PreviewProduct = () => {
  const { formData } = useContext(FormContext);
  console.log(formData);
  return (
    <div className="py-3">
      <div className="px-4 max-w-lg mx-auto flex items-center justify-between mb-3">
        <Link href="/product-page">
          <span className="self-start gap-2 flex items-center justify-start">
            <Image src="/l-nav2.png" alt="back_arrow" width={10} height={10} />
            <span className="font-semibold text-base">Product preview</span>
          </span>
        </Link>
        <CgMoreVerticalAlt />
      </div>
      <ImageSlider images={formData?.images || ("" as any)} />
      <div className="">
        <ProductDetails />

        <VendorInfo />
      </div>
    </div>
  );
};

export default PreviewProduct;
