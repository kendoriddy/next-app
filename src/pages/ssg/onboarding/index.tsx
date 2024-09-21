import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

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
    <div className="min-h-screen flex flex-col justify-start bg-gray-100 p-5">
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
      <div className="flex space-x-2 mb-8 w-full">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`flex-1 h-1 rounded-lg ${step >= i ? "bg-[#8A226F]" : "bg-gray-300"}`}
          ></div>
        ))}
      </div>

      {/* Steps */}
      <div className="flex flex-col items-center">
        {step === 1 && (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Enter Your Email</h2>
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-lg px-4 py-2 mb-4"
            />
            <button onClick={handleNext} className="px-6 py-2 bg-blue-600 text-white rounded-lg">
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Complete Profile Setup</h2>
            {/* Profile setup form */}
            <button onClick={handleNext} className="px-6 py-2 bg-blue-600 text-white rounded-lg">
              Continue
            </button>
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
