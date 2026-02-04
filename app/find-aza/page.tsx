"use client";

import { useState } from "react";
import { Search, User, ExternalLink, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import Header from "@/components/wire-aza/Header";
import Footer from "@/components/wire-aza/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function FindAzaPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;

    setIsSearching(true);
    // Mock search results
    setTimeout(() => {
      setResults([
        { id: 1, name: "Sarah Johnson", username: "sarahj", verified: true, count: 2 },
        { id: 2, name: "Michael Chen", username: "mchen", verified: true, count: 1 },
        { id: 3, name: "Tech Solutions Ltd", username: "techsol", verified: true, count: 1 },
      ]);
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Search Hero */}
        <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
            >
              Find an <span className="text-green-600">Aza</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium"
            >
              Search for a professional account vault by name or username to securely view bank details.
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSearch}
              className="relative max-w-2xl mx-auto"
            >
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-green-600 transition-colors" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter name or @username..."
                  className="w-full pl-16 pr-32 py-5 md:py-6 rounded-[2rem] border-2 border-slate-200 focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-500/10 shadow-xl shadow-slate-200/50 text-lg font-bold transition-all"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 md:py-4 rounded-2xl font-black transition-all shadow-lg shadow-green-200 disabled:opacity-70"
                >
                  {isSearching ? "Searching..." : "Search"}
                </button>
              </div>
            </motion.form>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            {isSearching ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20"
              >
                <div className="w-16 h-16 border-4 border-slate-100 border-t-green-600 rounded-full animate-spin mb-4"></div>
                <p className="text-slate-500 font-bold">Scouring the vault...</p>
              </motion.div>
            ) : results.length > 0 ? (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-black text-slate-900 mb-8 px-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-green-600" />
                  Search Results ({results.length})
                </h2>
                {results.map((result) => (
                  <Link
                    key={result.id}
                    href={`/aza/${result.username}`}
                    className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-white border border-slate-100 rounded-[2.5rem] hover:border-green-200 hover:shadow-2xl hover:shadow-green-50 transition-all group"
                  >
                    <div className="flex items-center gap-6 mb-4 md:mb-0">
                      <div className="w-16 h-16 bg-slate-50 rounded-[1.5rem] flex items-center justify-center group-hover:bg-green-50 transition-colors">
                        <User className="w-8 h-8 text-slate-400 group-hover:text-green-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-black text-slate-900">{result.name}</h3>
                          {result.verified && <ShieldCheck className="w-5 h-5 text-green-600 fill-green-50" />}
                        </div>
                        <p className="text-slate-500 font-bold">@{result.username}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between md:justify-end gap-8">
                      <div className="text-right">
                        <p className="text-lg font-black text-slate-900">{result.count}</p>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Accounts</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-green-600 group-hover:text-white transition-all">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            ) : searchQuery && !isSearching ? (
              <motion.div
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200"
              >
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Search className="w-10 h-10 text-slate-200" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">No Aza found</h3>
                <p className="text-slate-500 font-medium max-w-xs mx-auto">We couldn&apos;t find any vault matching &quot;{searchQuery}&quot;</p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 bg-green-600 rounded-[3rem] text-white shadow-2xl shadow-green-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                    <ShieldCheck className="w-12 h-12 mb-6 text-green-200" />
                    <h3 className="text-2xl font-black mb-4">Secure & Verified</h3>
                    <p className="text-green-50 font-medium leading-relaxed">
                        Every Aza on our platform is verified to ensure you&apos;re sending money to the right person.
                    </p>
                </div>
                <div className="p-10 bg-slate-900 rounded-[3rem] text-white shadow-2xl shadow-slate-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-40 h-40 bg-green-600/20 rounded-full blur-2xl"></div>
                    <ExternalLink className="w-12 h-12 mb-6 text-green-500" />
                    <h3 className="text-2xl font-black mb-4">Direct Access</h3>
                    <p className="text-slate-400 font-medium leading-relaxed">
                        Get instant access to bank details without waiting for a manual response from your clients.
                    </p>
                </div>
              </div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <Footer />
    </div>
  );
}
