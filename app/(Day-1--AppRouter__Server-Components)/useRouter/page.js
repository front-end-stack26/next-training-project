"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleNavigate = () => router.push("/useRouter/about");
  const handleReplace = () => router.replace("/useRouter/contact");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Welcome to the useRouter Home Page
      </h1>

      <div className="space-y-4 ">
        <button
          onClick={handleNavigate}
          className="px-6 py-3 mr-3 bg-red-500 text-white"
        >
          Go to About Page
        </button>
        <button
          onClick={handleReplace}
          className="px-6 py-3 bg-teal-500 text-white"
        >
          Go to Contact Page
        </button>
      </div>
    </div>
  );
};

export default Home;