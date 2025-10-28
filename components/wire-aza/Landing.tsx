import Link from "next/link";

const Landing = () => {
  return (
    <div className="py-8 md:py-12 lg:py-16 min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center grid gap-4 md:gap-6">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 ">
          Present your account <br className="hidden sm:block" />
          details professionally
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-snug">
          Streamline client onboarding with secure, branded, and beautifully
          formatted account summaries.
        </p>

        {/* CTA Button */}
        <div className="mt-4">
          <Link
            href="/login"
            className="inline-flex items-center justify-center px-8 py-4 
                     text-base sm:text-lg font-semibold text-white 
                     bg-green-600 hover:bg-green-700 
                     rounded-full shadow-lg 
                     transition-all duration-200 
                     transform hover:scale-105 
                     focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
