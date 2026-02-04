"use client";
import { cn } from "@/lib/utils";
import {
  Bitcoin,
  CheckCircle2,
  DollarSign,
  Layout,
  Link2,
  Lock,
  MessageSquare,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Bank from "../icons/Bank";
import { motion } from "framer-motion";

const Landing = () => {
  const iconContainer =
    "flex items-center justify-center rounded-full p-3 md:p-4 lg:p-5 shadow-2xl backdrop-blur-sm border border-white/30";

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <div
        className="py-12 md:py-20 lg:py-24 min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center grid gap-2 md:gap-4 relative z-10 mt-8"
      >
        <span className="inline-block px-4 py-1.5 bg-green-50 text-green-700 text-sm font-semibold rounded-full mb-4 mx-auto">
          Sending Money doesn&apos;t have to be hard
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-gray-900 tracking-tight leading-tight">
          Present your <span className="text-green-600">Aza</span> <br className="hidden sm:block" />
          professionally
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed mt-4">
          Streamline client onboarding with secure, branded, and beautifully
          formatted account summaries.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4
                     text-lg font-bold text-white
                     bg-green-600 hover:bg-green-700 
                     rounded-2xl shadow-xl shadow-green-100
                     transition-all duration-200 
                     transform hover:scale-105"
          >
            Get Started Free
          </Link>
          <Link
            href="/find-aza"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4
                     text-lg font-bold text-gray-700
                     bg-white border-2 border-gray-100 hover:border-green-200
                     rounded-2xl
                     transition-all duration-200"
          >
            Search Aza
          </Link>
        </div>
      </motion.div>
    </div>

    {/* Features Section */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need for your finances
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Wire Aza provides a suite of tools to help you manage and share your
            account details with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Instant Branded Links",
              desc: "Share a professional link containing all your bank details in one place.",
              icon: <Link2 className="w-8 h-8 text-green-600" />,
            },
            {
              title: "Secure & Encrypted",
              desc: "Your data is protected with industry-standard encryption protocols.",
              icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
            },
            {
              title: "One-Click Copy",
              desc: "Clients can copy your account number with a single tap, reducing errors.",
              icon: <Zap className="w-8 h-8 text-green-600" />,
            },
            {
              title: "Multiple Accounts",
              desc: "Manage all your local and international bank accounts in one dashboard.",
              icon: <Layout className="w-8 h-8 text-green-600" />,
            },
            {
              title: "Proof of Payment",
              desc: "Easily track and verify incoming payments from clients.",
              icon: <CheckCircle2 className="w-8 h-8 text-green-600" />,
            },
            {
              title: "Support 24/7",
              desc: "Our team is always here to help you with any issues or questions.",
              icon: <MessageSquare className="w-8 h-8 text-green-600" />,
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-8 bg-gray-50 rounded-3xl hover:bg-green-50 transition-colors group border border-transparent hover:border-green-100"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How it Works Section */}
    <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-green-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-green-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Get set up in <span className="text-green-500">3 simple steps</span>
            </h2>
            <div className="space-y-10">
              {[
                {
                  step: "01",
                  title: "Create your account",
                  desc: "Sign up in seconds and verify your identity to get started.",
                },
                {
                  step: "02",
                  title: "Add your bank details",
                  desc: "Input your various account numbers, whether local or international.",
                },
                {
                  step: "03",
                  title: "Share your Aza link",
                  desc: "Send your custom link to clients and get paid professionally.",
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-4xl font-black text-green-500/30">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="bg-gradient-to-br from-green-500 to-emerald-700 p-1 rounded-[2.5rem] shadow-2xl">
                <div className="bg-gray-800 rounded-[2.2rem] p-8 aspect-video flex items-center justify-center">
                    <div className="text-center">
                        <Lock className="w-20 h-20 text-green-500 mx-auto mb-4" />
                        <p className="text-xl font-semibold">Secure Dashboard Preview</p>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-24 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Ready to professionalize your payments?
            </h2>
            <Link
                href="/signup"
                className="inline-flex items-center justify-center px-12 py-5 bg-white text-green-600 text-xl font-bold rounded-2xl hover:bg-gray-100 transition-colors shadow-xl"
            >
                Join Wire Aza Today
            </Link>
        </div>
    </section>
    </div>
  );
};

export default Landing;
