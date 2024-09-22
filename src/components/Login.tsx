import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { OnboardingContext } from "@/context/OnboardingContext";
import InputField from "./InputField";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(async () => {
      const isSuccess = await login(email, password);
      setLoading(false);

      if (isSuccess) {
        toast.success("Login successful! Redirecting...", {
          position: "top-right",
          autoClose: 2000,
        });
        console.log("please push");
        router.push("/product-page");
      } else {
        toast.error("Login failed! Check your credentials.", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    }, 1000);
  };

  const { userData } = useContext(OnboardingContext);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <div>
          <div className="p-4 bg-blue-100 rounded-lg shadow-md mb-4 border border-blue-300">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Correct login credentials are:
            </h3>
            <ul className="list-disc list-inside text-[#8A226F]">
              <li>
                <strong>Email:</strong> {userData.email ? userData.email : "dummy@example.com"}
              </li>
              <li>
                <strong>Password:</strong> {userData.phone ? userData.phone : "password123"}
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <InputField
            type="email"
            placeholder="Enter your email"
            value={email}
            name="email"
            handleChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4 relative">
          <label className="block text-gray-700">Password</label>
          <InputField
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            name="password"
            handleChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#8A226F] text-white py-2 rounded-md hover:bg-pink-950"
          disabled={loading}
        >
          {loading ? <Loader /> : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
