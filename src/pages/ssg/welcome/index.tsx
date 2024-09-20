import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

const WelcomePageSSG = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <img src="/shopping_image.png" alt="Shopping" className="mb-8 w-1/2 h-auto" />
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to ShopEasy</h1>
      <p className="text-lg mb-6 text-gray-600">
        Shop easily with the best app for all your shopping needs.
      </p>

      <ul className="space-y-4 mb-6">
        {[
          "Easy shopping experience",
          "Best prices available",
          "Wide range of products",
          "Seamless checkout process",
        ].map((reason, index) => (
          <li key={index} className="flex items-center text-lg">
            <FaCheckCircle className="text-green-500 mr-2" />
            {reason}
          </li>
        ))}
      </ul>

      <Link href="/ssg/onboarding">
        <span className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition">
          Get Started
        </span>
      </Link>
    </div>
  );
};

// Static Site Generation (SSG)
export const getStaticProps = async () => {
  return {
    props: {}, // Add props if needed
  };
};

export default WelcomePageSSG;
