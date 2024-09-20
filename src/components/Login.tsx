import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Loader from "../components/Loader"; // Import the Loader component

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    // Simulate delay for 2 seconds
    setTimeout(async () => {
      const isSuccess = await login(email, password);
      setLoading(false); // Set loading to false

      if (isSuccess) {
        toast.success("Login successful! Redirecting...", {
          position: "top-right",
          autoClose: 3000,
        });
        router.push("/product-page");
      } else {
        toast.error("Login failed! Check your credentials.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }, 1500); // 2 second delay
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <div>
          Correct login credentials are
          <ul>
            <li>Email: user@example.com</li>
            <li>Password: password123</li>
          </ul>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          disabled={loading} // Disable button while loading
        >
          {loading ? <Loader /> : "Login"} {/* Use Loader when loading */}
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
