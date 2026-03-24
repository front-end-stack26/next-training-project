"use client";

import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const handleBack = () => router.back();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>

      <div className="max-w-3xl text-center">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to the About Page!
        </p>
      </div>

      <button
        onClick={handleBack}
        className="px-6 py-3 mt-6 bg-red-800 text-white"
      >
        Go Back
      </button>
    </div>
  );
};

export default About;