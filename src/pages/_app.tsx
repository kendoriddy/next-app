import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/AuthContext";
import { OnboardingProvider } from "@/context/OnboardingContext";
import { FormProvider } from "@/context/FormContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OnboardingProvider>
      <FormProvider>
        <AuthProvider>
          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            toastClassName="custom-toast"
            bodyClassName="custom-toast-body"
          />
        </AuthProvider>
      </FormProvider>
    </OnboardingProvider>
  );
}
