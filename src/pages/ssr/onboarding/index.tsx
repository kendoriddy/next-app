import React, { useState } from "react";
import Link from "next/link";

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      {/* Back Arrow */}
      {step > 1 ? (
        <button onClick={handlePrevious} className="self-start mb-4">
          ← Back
        </button>
      ) : (
        <Link href="/ssr/welcome">
          <span className="self-start mb-4">← Back to Welcome</span>
        </Link>
      )}

      {/* Progress Bar */}
      <div className="flex space-x-2 mb-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-2 w-8 rounded-lg ${step >= i ? "bg-brown-600" : "bg-gray-300"}`}
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

export default OnboardingPage;
