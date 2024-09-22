import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// Set up the PWA options
const pwaConfig = {
  dest: "public",
  disable: process.env.NODE_ENV === "development", // Disable PWA in development
  register: true,
  skipWaiting: true,
};

// Export the Next.js config with PWA support
export default withPWA(pwaConfig)(nextConfig);
