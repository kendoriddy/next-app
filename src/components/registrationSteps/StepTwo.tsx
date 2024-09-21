import InputField from "@/components/InputField";
import Image from "next/image";
import { useContext } from "react";
import { OnboardingContext } from "@/context/OnboardingContext";

const StepTwo = ({
  onboardingSteps,
  handleNext,
}: {
  onboardingSteps: string[];
  handleNext: () => void;
}) => {
  const { userData, setUserData } = useContext(OnboardingContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-between items-center w-full">
      <div className="flex flex-col justify-normal items-start gap-6 w-full">
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-4">{onboardingSteps[1]}</h2>
          <p className="text-[14px] leading-[18px] text-[#00000099] font-normal mb-4">
            Connect your socials for quick setup
          </p>
          <div className="flex gap-3">
            <button className="flex justify-center items-center gap-4 bg-[#F2F2F2] text-[#00000099] rounded-xl py-3 px-4 w-full">
              <Image src="/Google.png" alt="google" width={20} height={20} />
            </button>
            <button className="flex justify-center items-center gap-4 bg-[#F2F2F2] text-[#00000099] rounded-xl py-3 px-4 w-full">
              <Image src="/Instagram.png" alt="instagram" width={20} height={20} />
            </button>
            <button className="flex justify-center items-center gap-4 bg-[#F2F2F2] text-[#00000099] rounded-xl py-3 px-4 w-full">
              <Image src="/TikTok.png" alt="tiktok" width={20} height={20} />
            </button>
          </div>
          <div>
            <p className="text-[14px] leading-[18px] text-[#00000099] font-normal mb-4 mt-6">
              Or enter manually
            </p>

            <div className="w-full">
              <InputField
                handleChange={handleChange}
                value={userData.fullName}
                name="fullName"
                type="text"
                placeholder="Full name"
              />
              <InputField
                handleChange={handleChange}
                value={userData.username}
                name="username"
                type="text"
                placeholder="Username"
              />
              <InputField
                handleChange={handleChange}
                value={userData.phone}
                name="phone"
                type="tel"
                placeholder="Phone number"
              />
              <InputField
                handleChange={handleChange}
                value={userData.email}
                name="email"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <hr className="h-[0.5px] mb-4 -mx-5" />
        <button
          onClick={handleNext}
          className="px-2.5 py-1.5 w-full rounded-[90px] bg-[#8A226F] text-white font-bold hover:bg-pink-950 transition flex items-center justify-center"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
