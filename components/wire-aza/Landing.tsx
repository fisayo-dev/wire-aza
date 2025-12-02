"use client";
import { cn } from "@/lib/utils";
import { Bitcoin, DollarSign } from "lucide-react";
import Link from "next/link";
import Bank from "../icons/Bank";

const Landing = () => {
  const iconContainer =
    "flex items-center justify-center rounded-full p-3 md:p-4 lg:p-5 shadow-2xl backdrop-blur-sm border border-white/30";

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
      {/* ====================== 3D LARGE ROUND ICONS ====================== */}

      {/* Bitcoin – Top-left */}
      <div
        className={cn(
          iconContainer,
          "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
          "bg-linear-to-br from-orange-400 to-amber-600",
          "absolute top-10 left-6 md:top-14 md:left-10",
          "animate-float opacity-90"
        )}
      >
        <Bitcoin
          className="w-full h-full text-white drop-shadow-md"
          strokeWidth={2.5}
        />
      </div>

      {/* Naira – Top-right */}
      <div
        className={cn(
          iconContainer,
          "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
          "bg-linear-to-br from-emerald-500 to-green-600",
          "absolute top-10 right-6 md:top-14 md:right-10",
          "animate-float-delay-1 opacity-90"
        )}
      >
        <span className="text-white font-black text-4xl md:text-5xl lg:text-6xl leading-none">
          ₦
        </span>
      </div>

      {/* Dollar – Bottom-left */}
      <div
        className={cn(
          iconContainer,
          "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
          "bg-linear-to-br from-teal-500 to-emerald-600",
          "absolute bottom-10 left-6 md:bottom-14 md:left-10",
          "animate-float-delay-2 opacity-90"
        )}
      >
        <DollarSign
          className="w-full h-full text-white drop-shadow-md"
          strokeWidth={2.5}
        />
      </div>

      {/* Bank – Bottom-right */}
      <div
        className={cn(
          iconContainer,
          "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24",
          "bg-linear-to-br from-green-500 to-emerald-700",
          "absolute bottom-10 right-6 md:bottom-14 md:right-10",
          "animate-float-delay-3 opacity-90"
        )}
      >
        <Bank />
      </div>

      {/* ====================== MAIN CONTENT ====================== */}
      <div className="max-w-4xl mx-auto text-center grid gap-2 md:gap-4 relative z-10 mt-8">
        <span className="text-sm md:text-[1rem] text-center text-gray-800 mb-4">
          Sending Money doesn&apos;t have to be hard
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight">
          Present your account <br className="hidden sm:block" />
          details professionally
        </h1>

        <div className="w-24 h-1 bg-green-500 mx-auto mt-2"></div>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-snug mt-4">
          Streamline client onboarding with secure, branded, and beautifully
          formatted account summaries.
        </p>

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
