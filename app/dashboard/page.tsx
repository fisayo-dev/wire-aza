"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  CreditCard,
  Settings,
  LogOut,
  Plus,
  Copy,
  ExternalLink,
  Trash2,
  Banknote,
  Building2,
  User,
  Hash,
  X,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [accounts, setAccounts] = useState([
    {
      id: "1",
      bankName: "Guaranty Trust Bank",
      accountName: "John Doe",
      accountNumber: "0123456789",
      currency: "NGN",
    },
    {
      id: "2",
      bankName: "Zenith Bank",
      accountName: "John Doe",
      accountNumber: "9876543210",
      currency: "NGN",
    }
  ]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  const navItems = [
    { id: "dashboard", label: "Home", icon: LayoutDashboard, href: "/dashboard" },
    { id: "my-azas", label: "Azas", icon: CreditCard, href: "#" },
    { id: "settings", label: "Settings", icon: Settings, href: "#" },
  ];

  const handleAddAccount = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we'd collect form data here
    const newAccount = {
      id: Math.random().toString(),
      bankName: "Newly Added Bank",
      accountName: "John Doe",
      accountNumber: "1234567890",
      currency: "NGN",
    };
    setAccounts([...accounts, newAccount]);
    setIsAddModalOpen(false);
    toast.success("New Aza added successfully!");
  };

  const deleteAccount = (id: string) => {
    setAccounts(accounts.filter(acc => acc.id !== id));
    toast.success("Aza removed");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Sidebar (Desktop) */}
      <aside className="w-72 bg-white border-r border-slate-200 hidden md:flex flex-col sticky top-0 h-screen">
        <div className="p-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-200">
              <span className="text-white font-black text-xl">W</span>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-slate-900">
              Wire<span className="text-green-600">Aza</span>
            </h2>
          </Link>
        </div>

        <nav className="flex-grow px-4 space-y-1.5 mt-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center justify-between px-4 py-3.5 rounded-2xl font-bold transition-all duration-200 group",
                activeTab === item.id
                  ? "bg-green-50 text-green-700 shadow-sm shadow-green-100"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className={cn("w-5 h-5", activeTab === item.id ? "text-green-600" : "text-slate-400 group-hover:text-slate-600")} />
                <span>{item.label}</span>
              </div>
              {activeTab === item.id && <ChevronRight className="w-4 h-4" />}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-100">
          <Link
            href="/login"
            className="flex items-center gap-3 px-4 py-3.5 text-red-500 hover:bg-red-50 rounded-2xl font-bold transition-all group"
          >
            <LogOut className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow pb-24 md:pb-8">
        <div className="max-w-6xl mx-auto p-4 md:p-10 lg:p-12">
          {activeTab === "dashboard" || activeTab === "my-azas" ? (
            <>
              <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
                <div>
                  <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl md:text-4xl font-black text-slate-900 mb-2"
                  >
                    {activeTab === "dashboard" ? "My Aza Vault" : "Manage Azas"}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-slate-500 text-lg font-medium"
                  >
                    Manage and share your bank account details securely.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button
                    onClick={() => setIsAddModalOpen(true)}
                    className="bg-green-600 hover:bg-green-700 text-white rounded-2xl px-8 py-7 h-auto shadow-xl shadow-green-200 font-bold flex items-center gap-2 group transition-all hover:scale-105 active:scale-95"
                  >
                    <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform" />
                    <span className="text-lg">Add New Aza</span>
                  </Button>
                </motion.div>
              </header>

              <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 md:gap-8">
                <AnimatePresence mode="popLayout">
                  {accounts.map((account, idx) => (
                    <motion.div
                      key={account.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      layout
                    >
                      <Card className="border-none shadow-xl shadow-slate-200/60 rounded-[2.5rem] overflow-hidden group hover:shadow-2xl hover:shadow-green-100 transition-all duration-300">
                        <div className="bg-green-600 h-2 w-full"></div>
                        <CardHeader className="flex flex-row justify-between items-start pt-8 px-8">
                          <div>
                            <CardTitle className="text-2xl font-black text-slate-900 mb-1">{account.bankName}</CardTitle>
                            <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider">
                              {account.currency} Account
                            </span>
                          </div>
                          <div className="w-14 h-14 bg-slate-50 rounded-[1.25rem] flex items-center justify-center group-hover:bg-green-50 transition-colors">
                            <Banknote className="w-7 h-7 text-green-600" />
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-8 p-8">
                          <div className="space-y-1.5">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Account Name</p>
                            <p className="text-xl font-bold text-slate-800">{account.accountName}</p>
                          </div>

                          <div className="space-y-2">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Account Number</p>
                            <div className="flex items-center justify-between bg-slate-50 p-5 rounded-2xl border border-slate-100 group-hover:border-green-100 transition-colors">
                              <p className="text-2xl font-black text-slate-900 tracking-widest font-mono">{account.accountNumber}</p>
                              <button
                                onClick={() => copyToClipboard(account.accountNumber)}
                                className="p-3 bg-white hover:bg-green-600 rounded-xl text-slate-400 hover:text-white transition-all shadow-sm active:scale-90"
                              >
                                <Copy className="w-5 h-5" />
                              </button>
                            </div>
                          </div>

                          <div className="flex gap-4 pt-2">
                            <Button
                              variant="outline"
                              onClick={() => {
                                navigator.clipboard.writeText(`https://wireaza.com/aza/${account.id}`);
                                toast.success("Share link copied!");
                              }}
                              className="flex-grow rounded-2xl h-14 border-slate-200 text-slate-700 font-bold hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition-all gap-2"
                            >
                              <ExternalLink className="w-5 h-5" />
                              Share Link
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => deleteAccount(account.id)}
                              className="rounded-2xl w-14 h-14 p-0 border-slate-200 text-slate-400 hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all"
                            >
                              <Trash2 className="w-5 h-5" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * accounts.length }}
                    onClick={() => setIsAddModalOpen(true)}
                    className="border-3 border-dashed border-slate-200 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-slate-400 hover:border-green-400 hover:text-green-600 hover:bg-green-50/50 transition-all min-h-[400px] group"
                  >
                    <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                      <Plus className="w-10 h-10" />
                    </div>
                    <p className="font-black text-xl mb-2">Add New Aza</p>
                    <p className="text-slate-400 font-medium">Store another bank account</p>
                  </motion.button>
                </AnimatePresence>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">Account Settings</h1>
              <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-50">
                <div className="p-8 space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 bg-emerald-100 rounded-3xl flex items-center justify-center text-emerald-700 text-3xl font-black">
                      JD
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900">John Doe</h3>
                      <p className="text-slate-500 font-medium">@johndoe • Verified Member</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-2">
                      <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Display Name</label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all font-bold"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Email Address</label>
                      <input
                        type="email"
                        defaultValue="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all font-bold"
                      />
                    </div>
                  </div>

                  <div className="pt-6 flex gap-4">
                    <Button className="bg-green-600 hover:bg-green-700 text-white rounded-2xl px-8 py-6 h-auto font-bold shadow-lg shadow-green-200">
                      Save Changes
                    </Button>
                    <Button variant="outline" className="rounded-2xl px-8 py-6 h-auto font-bold border-slate-200 text-slate-600 hover:bg-slate-50">
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-xl border-t border-slate-100 px-6 py-4 flex justify-between items-center z-[90] shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "flex flex-col items-center gap-1.5 transition-all",
              activeTab === item.id ? "text-green-600" : "text-slate-400"
            )}
          >
            <item.icon className={cn("w-6 h-6", activeTab === item.id && "scale-110")} />
            <span className="text-[10px] font-black uppercase tracking-wider">{item.label.split(' ')[item.label.split(' ').length - 1]}</span>
          </button>
        ))}

        <div className="relative -mt-14">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="w-16 h-16 bg-green-600 rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-green-300 border-4 border-white active:scale-90 transition-transform"
          >
            <Plus className="w-8 h-8" />
          </button>
        </div>

        <Link href="/login" className="flex flex-col items-center gap-1.5 text-slate-400">
          <LogOut className="w-6 h-6" />
          <span className="text-[10px] font-black uppercase tracking-wider">Exit</span>
        </Link>
      </div>

      {/* Add Aza Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-lg overflow-hidden"
            >
              <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Add New Aza</h3>
                  <p className="text-slate-500 font-medium">Link a new bank account to your vault</p>
                </div>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="p-3 hover:bg-white hover:shadow-sm rounded-2xl transition-all group"
                >
                  <X className="w-6 h-6 text-slate-400 group-hover:text-slate-900" />
                </button>
              </div>
              <form onSubmit={handleAddAccount} className="p-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Bank Name</label>
                  <div className="relative group">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-green-600 transition-colors" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Zenith Bank"
                      className="w-full pl-12 pr-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Account Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-green-600 transition-colors" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full pl-12 pr-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Account Number</label>
                  <div className="relative group">
                    <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-green-600 transition-colors" />
                    <input
                      type="text"
                      required
                      placeholder="10 digits"
                      className="w-full pl-12 pr-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-green-500/10 focus:border-green-500 transition-all font-bold text-slate-900 placeholder:text-slate-300 font-mono tracking-widest"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full py-5 bg-green-600 hover:bg-green-700 text-white rounded-[1.5rem] font-black text-lg shadow-xl shadow-green-200 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3">
                    Securely Create Aza <ArrowRight className="w-6 h-6" />
                  </button>
                  <p className="text-center text-slate-400 text-sm mt-4 font-medium">
                    Your account details are encrypted and private.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
