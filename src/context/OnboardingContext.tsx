import React, { createContext, useState, ReactNode } from "react";

interface OnboardingContextProps {
  userData: {
    email: string;
    phone: string;
    fullName: string;
    username: string;
    storeImage: string;
    storeName: string;
    storeTagName: string;
    storePhone: string;
    storeEmail: string;
    category: string;
  };
  setUserData: React.Dispatch<React.SetStateAction<any>>;
}

export const OnboardingContext = createContext<OnboardingContextProps>({
  userData: {
    email: "",
    phone: "",
    fullName: "",
    username: "",
    storeImage: "",
    storeName: "",
    storeTagName: "",
    storePhone: "",
    storeEmail: "",
    category: "",
  },
  setUserData: () => {},
});

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState({
    email: "",
    phone: "",
    fullName: "",
    username: "",
    storeImage: "",
    storeName: "",
    storeTagName: "",
    storePhone: "",
    storeEmail: "",
    category: "",
  });

  return (
    <OnboardingContext.Provider value={{ userData, setUserData }}>
      {children}
    </OnboardingContext.Provider>
  );
};
