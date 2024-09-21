import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg`}
    >
      <h2 className="text-4xl font-bold mb-8">Welcome to our platform</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/ssg/welcome">
          <span className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
            Visit the SSG page
          </span>
        </Link>
        <Link href="/ssr/welcome">
          <span className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
            Visit the SSR page
          </span>
        </Link>
      </div>
    </div>
  );
}
