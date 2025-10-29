"use client";
import Link from "next/link";

const Landing = () => {
  return (
    <div
      className="py-8 md:py-12 lg:py-16 min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: `
          linear-gradient(rgba(34, 197, 94, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34, 197, 94, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
      }}
    >

      <div className="max-w-4xl mx-auto text-center grid gap-2 md:gap-4 relative z-10 mt-8">
        <span className="text-sm md:text-[1rem] text-center text-gray-800 mb-4 ">Sending Money doesn&apos;t have to be hard</span>
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight">
          Present your account <br className="hidden sm:block" />
          details professionally
        </h1>

        {/* Decorative underline (like in image) */}
        <div className="w-24 h-1 bg-green-500 mx-auto mt-2"></div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-snug mt-4">
          Streamline client onboarding with secure, branded, and beautifully
          formatted account summaries.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <Link
            href="/login"
            className="inline-flex items-center justify-center px-8 py-4 
                     text-base sm:text-lg font-semibold text-white 
                     bg-green-600 hover:bg-green-700 
                     rounded-full shadow-lg 
                     transition-all duration-200 
                     transform hover:scale-105 
                     focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
