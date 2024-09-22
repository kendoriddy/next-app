import InputField from "@/components/InputField";
import UploadFile from "@/components/UploadFile";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const StepThree = ({
  userData,
  setUserData,
  handleChange,
  onboardingSteps,
}: {
  userData: any;
  setUserData: React.Dispatch<React.SetStateAction<any>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onboardingSteps: string[];
}) => {
  const router = useRouter();

  const handleContinue = () => {
    toast.success("Registration successful! Proceed to login", {
      position: "top-right",
      autoClose: 2000,
    });

    setTimeout(() => {
      router.push("/login");
    }, 2000);
  };
  return (
    <div className="min-h-[85vh] flex flex-col justify-between items-center w-full w-full">
      <div className="flex flex-col justify-normal items-start gap-6 w-full">
        <div className="w-full">
          <UploadFile
            value={userData.storeImage}
            onChange={(e) => {
              const files = e.target.files;
              if (files && files[0]) {
                const file = files[0];
                // Update the userData state with the image file or base64 data
                const reader = new FileReader();
                reader.onloadend = () => {
                  setUserData((prev: typeof userData) => ({
                    ...prev,
                    storeImage: reader.result,
                  }));
                };
                reader.readAsDataURL(file);
              }
            }}
          />
          <h2 className="text-xl font-semibold mb-4">{onboardingSteps[2]}</h2>
          <InputField
            handleChange={handleChange}
            value={userData.storeName}
            name="storeName"
            type="text"
            placeholder="Store name"
          />
          <InputField
            handleChange={handleChange}
            value={userData.storeTagName}
            name="storeTagName"
            type="text"
            placeholder="Store tag name"
          />
          <InputField
            handleChange={handleChange}
            value={userData.storePhone}
            name="storePhone"
            type="tel"
            placeholder="Store phone number"
          />
          <InputField
            handleChange={handleChange}
            value={userData.storeEmail}
            name="storeEmail"
            type="email"
            placeholder="Store email"
          />
          <InputField
            handleChange={handleChange}
            value={userData.category}
            name="category"
            type="text"
            placeholder="Category"
          />
        </div>
      </div>
      <div className="w-full">
        <hr className="h-[0.5px] mb-4 -mx-5" />
        <button
          onClick={handleContinue}
          className="px-2.5 py-1.5 w-full rounded-[90px] bg-[#8A226F] text-white font-bold hover:bg-pink-950 transition flex items-center justify-center"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepThree;
