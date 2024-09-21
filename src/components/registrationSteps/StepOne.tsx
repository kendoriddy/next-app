import InputField from "@/components/InputField";
import Image from "next/image";
import { useContext } from "react";
import { OnboardingContext } from "@/context/OnboardingContext";

const StepOne = ({
  onboardingSteps,
  handleChange,
  handleNext,
  userData,
}: {
  onboardingSteps: string[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  userData: any;
}) => {
  return (
    <div className="min-h-[85vh] flex flex-col justify-between items-center">
      <div className="flex flex-col justify-normal items-start gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">{onboardingSteps[0]}</h2>
          <p className="text-[14px] leading-[18px] text-[#00000099] font-normal">
            We will send you a verification code for confirmation
          </p>
        </div>
        <InputField
          handleChange={handleChange}
          type="email"
          placeholder="Enter phone number or email"
          value={userData.email}
          name="email"
        />
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

export default StepOne;
