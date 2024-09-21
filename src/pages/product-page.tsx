// pages/products.tsx
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";
import FloatingLabelInput from "@/components/registrationSteps/FloatingLabelInput";

const ProductsPage = () => {
  const { isAuthenticated, loading, logout } = useContext(AuthContext);
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, router]);

  if (loading) return <div>Loading...</div>;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Protected Products Page</h1>
      <button onClick={logout} className="bg-red-500 text-white py-2 px-4 rounded-md">
        Logout
      </button>
      <div className="flex flex-col items-center justify-center h-screen">
        <FloatingLabelInput
          label="Your Label Here"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
