import { createContext, useState, ReactNode } from "react";

interface FormContextType {
  formData: {
    [key: string]: any;
    images?: { file: File; name: string; isActive: boolean }[];
  };
  setFormData: (data: { [key: string]: any }) => void;
}

export const FormContext = createContext<FormContextType>({
  formData: {},
  setFormData: () => {},
});

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  return <FormContext.Provider value={{ formData, setFormData }}>{children}</FormContext.Provider>;
};
