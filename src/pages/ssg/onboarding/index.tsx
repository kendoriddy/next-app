import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import InputField from "@/components/InputField";

const OnboardingPage = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-start bg-white p-5">
      {/* Back Arrow */}
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
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`flex-1 h-1 rounded-lg ${step >= i ? "bg-[#8A226F]" : "bg-gray-300"}`}
          ></div>
        ))}
      </div>

      {/* Steps */}
      <div className="flex flex-col items-start">
        {step === 1 && (
          <div className="min-h-[85vh] flex flex-col justify-between items-center">
            <div className="flex flex-col justify-normal items-start gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Enter your phone number or email to get started
                </h2>
                <p className="text-[14px] leading-[18px] text-[#00000099] font-normal">
                  We will send you a verification code for confirmation
                </p>
              </div>
              <InputField type="email" placeholder="Enter phone number or email" />
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
                <h2 className="text-xl font-semibold mb-4">Complete Profile Setup</h2>
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
                    <InputField type="text" placeholder="Full name" />
                    <InputField type="text" placeholder="Username" />
                    <InputField type="tel" placeholder="Phone number" />
                    <InputField type="email" placeholder="Email" />
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
          </div>
        )}

        {step === 3 && (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Enter Store Information</h2>
            {/* Store information form */}
            <Link href="/product-page">
              <span className="px-6 py-2 bg-blue-600 text-white rounded-lg">Continue</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // Fetch static data at build time if needed
  return {
    props: {}, // No props needed here, just for demonstration
  };
}

export default OnboardingPage;
