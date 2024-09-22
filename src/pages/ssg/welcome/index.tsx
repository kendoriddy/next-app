import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const WelcomePageSSG = ({ reasons }: { reasons: string[] }) => {
  return (
    <div className="min-h-screen p-5 flex flex-col justify-between items-center bg-white">
      <div className="flex flex-col items-center justify-center">
        {/* Optimized Image */}
        <Image
          src="/sale.svg"
          alt="Welcome image"
          width={200}
          height={200}
          className="mb-8 w-1/2 h-auto"
        />
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome</h1>
        <p className="text-lg text-center mb-6 text-gray-600">
          The safest platform to shop from social media vendors.
        </p>

        {/* Dynamically Generated List */}
        <ul className="space-y-4 mb-6 py-3 px-4 rounded-xl border-[#8A226F] border-[0.5px] bg-[#FFEAFA]">
          {reasons.map((reason, index) => (
            <li key={index} className="flex gap-2 items-center text-lg">
              <Image src="/check_circle.svg" alt="Check icon" width={20} height={20} />
              {reason}
            </li>
          ))}
        </ul>
      </div>
      {/* Optimized Link */}
      <Link href="/ssg/onboarding" className="w-full">
        <span className="px-2.5 py-1.5 w-full rounded-[90px] bg-[#8A226F] text-white font-bold hover:bg-pink-950 transition flex items-center justify-center">
          Get Started
        </span>
      </Link>
    </div>
  );
};

// Static Site Generation (SSG)
export const getStaticProps = async () => {
  // Simulating data fetching at build time (reasons can be fetched from an API)
  const reasons = [
    "Easy shopping experience",
    "Best prices available",
    "Wide range of products",
    "Seamless checkout process",
  ];

  return {
    props: {
      reasons, // Passing reasons as props to the component
    },
  };
};

export default WelcomePageSSG;
