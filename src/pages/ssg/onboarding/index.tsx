import { useContext, useState } from "react";
import { OnboardingContext } from "@/context/OnboardingContext";
import InputField from "@/components/InputField";
import Link from "next/link";
import Image from "next/image";

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
        {onboardingSteps.map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-1 rounded-lg ${step > i ? "bg-[#8A226F]" : "bg-gray-300"}`}
          ></div>
        ))}
      </div>

      {/* Steps */}
      <div className="flex flex-col items-start">
        {step === 1 && (
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
        )}

        {step === 2 && (
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
                    <Image src="/Instagram.png" alt="facebook" width={20} height={20} />
                  </button>
                  <button className="flex justify-center items-center gap-4 bg-[#F2F2F2] text-[#00000099] rounded-xl py-3 px-4 w-full">
                    <Image src="/TikTok.png" alt="facebook" width={20} height={20} />
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
        )}

        {step === 3 && (
          <div className="min-h-[85vh] flex flex-col justify-between items-center w-full">
            <div className="flex flex-col justify-normal items-start gap-6 w-full">
              <div className="w-full">
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
              <Link href="/login">
                <span className="px-2.5 py-1.5 w-full rounded-[90px] bg-[#8A226F] text-white font-bold hover:bg-pink-950 transition flex items-center justify-center">
                  Continue
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Simulate fetching onboarding steps
export async function getStaticProps() {
  // Here, you could make an actual API request. For demonstration, I will use hardcoded data.
  const onboardingSteps = [
    "Enter your phone number or email",
    "Complete Profile Setup",
    "Enter your Store Details",
  ];

  return {
    props: {
      onboardingSteps, // Pass the fetched data as props
    },
  };
}

export default OnboardingPage;
