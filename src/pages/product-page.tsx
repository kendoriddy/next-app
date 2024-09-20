// pages/products.tsx
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";

const ProductsPage = () => {
  const { isAuthenticated, loading, logout } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, router]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Protected Products Page</h1>
      <button onClick={logout} className="bg-red-500 text-white py-2 px-4 rounded-md">
        Logout
      </button>
      {/* Products list can be here */}
    </div>
  );
};

export default ProductsPage;
