// pages/onboarding.tsx
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const OnboardingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <Link href="/ssg/welcome">
        <span className="flex items-center mb-6">
          <FaArrowLeft className="text-2xl mr-2" />
          <span>Back to Welcome Page</span>
        </span>
      </Link>

      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Step 1: Enter Email</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-md mb-4"
        />
        <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg w-full hover:bg-blue-500 transition">
          Continue
        </button>
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
