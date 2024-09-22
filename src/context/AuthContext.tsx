import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { OnboardingContext } from "./OnboardingContext";

interface AuthContextProps {
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  loading: true,
  login: async () => false,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const { userData } = useContext(OnboardingContext);

  const router = useRouter();

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth) {
      setIsAuthenticated(JSON.parse(storedAuth));
    }
    setLoading(false);
  }, []);

  const login = async (credential: string, password: string) => {
    const dummyEmail = "dummy@example.com";
    const dummyPhone = "1234567890";
    const dummyPassword = userData.phone ? userData.phone : "password123";

    const email = userData.email ? userData.email : dummyEmail;
    const phone = userData.phone ? userData.phone : dummyPhone;

    if ((credential === email || credential === phone) && password === dummyPassword) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    toast.success("Logged out successfully");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
