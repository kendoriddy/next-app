// pages/products.tsx
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";
import FloatingLabelInput from "@/components/registrationSteps/FloatingLabelInput";
import FloatingLabelTextarea from "@/components/registrationSteps/FloatingLabelTextarea";
import Link from "next/link";
import { CgMoreVertical } from "react-icons/cg";
import Image from "next/image";

const ProductsPage = () => {
  const { isAuthenticated, loading, logout } = useContext(AuthContext);
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, router]);

  if (loading) return <div>Loading...</div>;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link href="">
          <span className="self-start gap-2 flex items-center justify-start">
            <Image src="/l-nav2.png" alt="back_arrow" width={10} height={10} />
            <span className="font-medium text-base">Create a product</span>
          </span>
        </Link>
        <CgMoreVertical />
      </div>
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

      <div className="flex flex-col items-center justify-center h-screen">
        <FloatingLabelTextarea
          label="Your Textarea Label"
          value={textareaValue}
          onChange={handleTextareaChange}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
