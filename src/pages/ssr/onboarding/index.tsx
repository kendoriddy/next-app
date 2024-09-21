import { useContext, useState } from "react";
import { OnboardingContext } from "@/context/OnboardingContext";
import Link from "next/link";
import Image from "next/image";
import { GetServerSideProps } from "next";
import "react-toastify/dist/ReactToastify.css";
import StepTwo from "@/components/registrationSteps/StepTwo";
import StepThree from "@/components/registrationSteps/StepThree";
import StepOne from "@/components/registrationSteps/StepOne";

const OnboardingPage = ({ onboardingSteps }: { onboardingSteps: string[] }) => {
  const [step, setStep] = useState(1);
  const { userData, setUserData } = useContext(OnboardingContext);

  const handleNext = () => {
    if (step < onboardingSteps.length) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col justify-start bg-white p-5">
      {step > 1 ? (
        <button
          onClick={handlePrevious}
          className="self-start gap-2 mb-4 flex items-center justify-start"
        >
          <Image src="/l-nav2.png" alt="back_arrow" width={10} height={10} />{" "}
          <span className="font-medium text-base">Get started</span>
        </button>
      ) : (
        <Link href="/ssg/welcome">
          <span className="self-start gap-2 mb-4 flex items-center justify-start">
            <Image src="/l-nav2.png" alt="back_arrow" width={10} height={10} />
            <span className="font-medium text-base">Get started</span>
          </span>
        </Link>
      )}

      {/* Progress Bar */}
      <div className="flex space-x-2 mb-6 w-full">
        {onboardingSteps?.map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-1 rounded-lg ${step > i ? "bg-[#8A226F]" : "bg-gray-300"}`}
          ></div>
        ))}
      </div>

      {/* Steps */}
      <div className="flex flex-col items-start">
        {step === 1 && (
          <StepOne
            onboardingSteps={onboardingSteps}
            handleChange={handleChange}
            handleNext={handleNext}
            userData={userData}
          />
        )}

        {step === 2 && <StepTwo onboardingSteps={onboardingSteps} handleNext={handleNext} />}

        {step === 3 && (
          <StepThree
            userData={userData}
            setUserData={setUserData}
            handleChange={handleChange}
            onboardingSteps={onboardingSteps}
          />
        )}
      </div>
    </div>
  );
};

// Fetch onboarding steps on server-side rendering
export const getServerSideProps: GetServerSideProps = async () => {
  // Here, we can make an actual API request. For demonstration, I will use hardcoded data.
  const onboardingSteps = ["Enter your phone number or email", "Complete Profile Setup", ""];

  return {
    props: {
      onboardingSteps, // Pass the fetched data as props
    },
  };
};

export default OnboardingPage;
