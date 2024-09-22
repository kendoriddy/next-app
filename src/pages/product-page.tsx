import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";
import FloatingLabelInput from "@/components/registrationSteps/FloatingLabelInput";
import FloatingLabelTextarea from "@/components/registrationSteps/FloatingLabelTextarea";
import Link from "next/link";
import { CgMoreVerticalAlt } from "react-icons/cg";
import Image from "next/image";
import { BiCheck, BiChevronDown } from "react-icons/bi";
import { FormContext } from "@/context/FormContext";
import CollectionInput from "@/components/registrationSteps/CollectionInput";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { MdMoreHoriz } from "react-icons/md";
import { VariationOption } from "../components/VariationOption";
import { IoAdd } from "react-icons/io5";
import VariantPriceStockComponent from "@/components/VariantPriceStockComponent";

// Server-Side Rendering (SSR) - fetching necessary data before rendering the page
export async function getServerSideProps(context: { req: any }) {
  const { req } = context;

  // Perform authentication check on the server side (if required)
  const authToken = req.cookies.authToken;

  // We could also fetch other data related to products here (e.g., collections, variations, etc.)

  // Return data as props for the page component
  return {
    props: {
      isAuthenticated: !!authToken,
    },
  };
}

const ProductsPage = () => {
  const { isAuthenticated, loading } = useContext(AuthContext);
  const { formData, setFormData } = useContext(FormContext);
  const router = useRouter();
  const [selectedImages, setSelectedImages] = useState<
    { file: File; name: string; isActive: boolean; base64: any }[]
  >([]);
  const [variationOptions, setVariationOptions] = useState<
    { variationName: string; variationValues: string[] }[]
  >([]);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, router]);

  if (loading) return <div>Loading...</div>;

  const handleCollectionChange = (collections: string[]) => {
    setFormData({ ...formData, collections });
  };

  const handleSave = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    router.push("/preview-product");
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);

      // Function to convert file to base64
      const toBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = (error) => reject(error);
        });
      };

      const processImages = async () => {
        const newImages = await Promise.all(
          filesArray.map(async (file) => {
            const base64 = await toBase64(file);
            return {
              file,
              name: file.name,
              isActive: true,
              base64,
            };
          })
        );

        const updatedImages = [...selectedImages, ...newImages];
        setSelectedImages(updatedImages);

        setFormData({
          ...formData,
          images: updatedImages.map((image) => ({
            name: image.name,
            isActive: image.isActive,
            base64: image.base64,
          })),
        });
      };

      processImages();
    }
  };

  const handleToggleImage = (index: number) => {
    const updatedImages = selectedImages.map((img, i) =>
      i === index ? { ...img, isActive: !img.isActive } : img
    );
    setSelectedImages(updatedImages);

    setFormData({
      ...formData,
      images: updatedImages,
    });
  };

  const handleVariationChange = (index: number, updatedOption: any) => {
    const updatedVariations = variationOptions.map((option, i) =>
      i === index ? updatedOption : option
    );
    setVariationOptions(updatedVariations);
    setFormData({ ...formData, variations: updatedVariations });
  };

  const handleAddNewOption = () => {
    setVariationOptions([...variationOptions, { variationName: "", variationValues: [] }]);
  };

  const handleDeleteOption = (index: number) => {
    setVariationOptions(variationOptions.filter((_, i) => i !== index));
  };

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <div className="px-4 py-3">
      <div className="flex items-center justify-between mb-3">
        <Link href="/ssr/onboarding">
          <span className="self-start gap-2 flex items-center justify-start">
            <Image src="/l-nav2.png" alt="back_arrow" width={10} height={10} />
            <span className="font-semibold text-base">Create a product</span>
          </span>
        </Link>
        <CgMoreVerticalAlt />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-0.5 items-center justify-start border-[#0000001A] border rounded-[90px] px-2 py-0.5">
          <span className="text-xs font-normal text-[#00000099]">Draft</span>
          <BiCheck className="text-[#00000099]" />
        </div>

        <div>
          <Link href="/preview-product">
            <div className="text-[#8A226F] text-xs font-medium cursor-pointer">Preview product</div>
          </Link>
        </div>
      </div>
      <form>
        <hr className="h-[0.5px] mb-4 -mx-4 mt-2" />

        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="self-start gap-2 flex items-center justify-start">
              <span className="font-semibold text-base">Basic details</span>
            </span>
            <BiChevronDown className="text-[#00000099]" />
          </div>
          <div className="flex flex-col gap-3">
            {/* Product Title */}
            <FloatingLabelInput
              label="Product Title"
              name="title"
              value={formData.title || ""}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />

            {/* Product Description */}
            <FloatingLabelTextarea
              label="Product Description"
              name="description"
              value={formData.description || ""}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />

            <div className="flex gap-2">
              {/* Price */}
              <FloatingLabelInput
                label="Price"
                name="price"
                value={formData.price || ""}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />

              {/* Old Price */}
              <FloatingLabelInput
                label="Old Price"
                name="oldPrice"
                value={formData.oldPrice || ""}
                onChange={(e) => setFormData({ ...formData, oldPrice: e.target.value })}
              />
            </div>

            {/* Product Collection */}
            <CollectionInput
              label="Product Collection"
              value={formData.collections || []}
              onChange={handleCollectionChange}
            />

            {/* Inventory Stock */}
            <FloatingLabelInput
              label="Inventory Stock"
              name="inventoryStock"
              value={formData.inventoryStock || ""}
              onChange={(e) => setFormData({ ...formData, inventoryStock: e.target.value })}
            />
          </div>
        </div>
        <hr className="h-[0.5px] mb-4 -mx-4 mt-4" />

        {/* Product image */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="self-start gap-2 flex items-center justify-start">
              <span className="font-semibold text-base">Product images</span>
            </span>
            <BiChevronDown className="text-[#00000099]" />
          </div>

          {/* Selected Images Preview */}
          <div className="mb-4">
            {selectedImages.map((image, index) => (
              <div key={index} className="flex items-center justify-between gap-4 mb-2">
                <div className="flex items-center justify-normal gap-4">
                  {/* Image Preview */}
                  <Image
                    src={URL.createObjectURL(image.file)}
                    alt={image.name}
                    width={60}
                    height={60}
                    className="rounded w-12 h-12 object-cover"
                  />
                  {/* Image Name */}
                  <span className="text-sm font-normal">{truncateText(image.name, 12)}</span>
                </div>
                {/* Toggle Button */}
                <div className="flex items-center">
                  <MdMoreHoriz className="text-[#8A226F]" />
                  <button
                    type="button"
                    onClick={() => handleToggleImage(index)}
                    className={`text-xs font-semibold px-3 py-1 rounded ${
                      image.isActive ? "bg-white text-[#8A226F]" : "bg-white text-black"
                    }`}
                  >
                    {image.isActive ? (
                      <FaToggleOn className="h-5 w-8" />
                    ) : (
                      <FaToggleOff className="h-5 w-8" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 bg-[#00000008] rounded-[90px] p-2.5">
            <label className="text-[14px] font-[500] text-[#8A226F] cursor-pointer">
              <span className="text-[14px] font-[500] text-[#8A226F] ">Add image</span>

              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageSelect}
                className="hidden"
              />
            </label>
            <Image src="/add_image.png" alt="add_image" width={15} height={15} />
          </div>
        </div>

        <hr className="h-[0.5px] mb-4 -mx-4 mt-4" />

        {/* Inventory variation */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="self-start gap-2 flex items-center justify-start">
              <span className="font-semibold text-base">Inventory variations</span>
            </span>
          </div>

          <div className="flex items-center justify-start gap-2">
            <input
              type="checkbox"
              id="variableProduct"
              className="mt-1 w-6 h-6 checked:bg-[#8A226F]"
              name="isVariableProduct"
              checked={formData.isVariableProduct || false}
              onChange={(e) => setFormData({ ...formData, isVariableProduct: e.target.checked })}
            />

            <label
              htmlFor="variableProduct"
              className="text-[14px] leading-[19px] font-normal text-[#00000099]"
            >
              This product is variable; has different colors, sizes, weight, materials, etc.
            </label>
          </div>
          {formData.isVariableProduct && (
            <div className="mt-4">
              {variationOptions.map((option, index) => (
                <VariationOption
                  key={index}
                  index={index}
                  option={option}
                  onUpdate={handleVariationChange}
                  onDelete={handleDeleteOption}
                />
              ))}
              <button
                type="button"
                className="text-sm font-medium text-[#8A226F] border border-[#8A226F] rounded-[90px] px-4 py-2 mt-4 flex items-center gap-2 bg-[#00000008] w-full justify-center"
                onClick={handleAddNewOption}
              >
                <IoAdd className="text-[#8A226F] h-5 w-5" />
                <span>Add New Option</span>
              </button>
            </div>
          )}
        </div>

        <hr className="h-[0.5px] mb-4 -mx-4 mt-4" />
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="self-start gap-2 flex items-center justify-start">
              <span className="font-semibold text-[14px]">Configure variant prices and stocks</span>
            </span>
            <BiChevronDown className="text-[#00000099]" />
          </div>
          <VariantPriceStockComponent />
        </div>
        <hr className="h-[0.5px] mb-4 -mx-4 mt-4" />

        {/* Shipping */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="self-start gap-2 flex items-center justify-start">
              <span className="font-semibold text-base">Shipping</span>
            </span>
            <BiChevronDown className="text-[#00000099]" />
          </div>

          {/* Shelf Shipping Checkbox */}
          <div className="flex items-center justify-between gap-2 h-[30px]">
            <label
              htmlFor="shelfShipping"
              className="text-[14px] leading-[19px] font-normal text-[#00000099]"
            >
              Shelf shipping
            </label>
            <input
              type="checkbox"
              id="shelfShipping"
              className="mt-1 w-6 h-6 mr-3 checked:bg-[#8A226F]"
              name="shelfShipping"
              checked={formData.shelfShipping || false}
              onChange={(e) => setFormData({ ...formData, shelfShipping: e.target.checked })}
            />
          </div>

          {/* InstaShop Shipping Checkbox */}
          <div className="flex items-center justify-between gap-2 h-[30px]">
            <label
              htmlFor="instaShopShipping"
              className="text-[14px] leading-[19px] font-normal text-[#00000099]"
            >
              InstaShop shipping
            </label>
            <input
              type="checkbox"
              id="instaShopShipping"
              className="mt-1 w-6 h-6 mr-3 checked:bg-[#8A226F]"
              name="instaShopShipping"
              checked={formData.instaShopShipping || false}
              onChange={(e) => setFormData({ ...formData, instaShopShipping: e.target.checked })}
            />
          </div>

          {/* Inventory Stocks Input */}
          <div className="mt-3">
            <FloatingLabelInput
              label="Inventory stocks"
              name="inventoryStocks"
              value={formData.inventoryStocks || ""}
              onChange={(e) => setFormData({ ...formData, inventoryStocks: e.target.value })}
            />
          </div>
        </div>

        <hr className="h-[0.5px] mb-4 -mx-4 mt-8" />
      </form>
      <div className="flex gap-4 items-center justify-center">
        <button
          type="button"
          className="text-sm cursor-pointer font-medium border border-[#8A226F] text-[#8A226F] rounded-[90px] p-2.5 w-[40%]"
        >
          Cancel
        </button>
        <button
          onClick={(e: any) => handleSave(e)}
          className="text-sm cursor-pointer font-medium rounded-[90px] p-2.5 w-[40%] bg-[#8A226F] text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
