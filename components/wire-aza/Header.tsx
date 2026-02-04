"use client";

import { useState } from "react";
import { Headphones, Lock, Menu, Search, UserPlus, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const headerLinks = [
    {
      title: "Support",
      icon: <Headphones className="w-5 h-5" />,
      to: "/support",
    },
    {
      title: "Find Aza",
      icon: <Search className="w-5 h-5" />,
      to: "/find-aza",
    },
    { title: "Signup", icon: <UserPlus className="w-5 h-5" />, to: "/signup" },
    { title: "Login", icon: <Lock className="w-5 h-5" />, to: "/login" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full top-0 left-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-200">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Wire<span className="text-green-600">Aza</span>
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {headerLinks.map((link, index) => (
              <Link
                href={link.to}
                key={index}
                className="flex items-center space-x-2 text-gray-600 hover:text-green-600 font-medium transition-colors duration-200"
              >
                {link.icon}
                <span>{link.title}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-green-600 p-2 transition-colors"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {headerLinks.map((link, index) => (
                <Link
                  href={link.to}
                  key={index}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-4 py-4 rounded-xl text-gray-600 hover:bg-green-50 hover:text-green-600 transition-all duration-200"
                >
                  {link.icon}
                  <span className="text-lg font-medium">{link.title}</span>
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center py-4 bg-green-600 text-white rounded-xl font-bold shadow-lg shadow-green-100"
                >
                  Get Started Free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
