'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Copy,
  Check,
  Share2,
  ShieldCheck,
  ExternalLink,
  ArrowLeft,
  Banknote,
  User,
  CreditCard
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/wire-aza/Header';
import Footer from '@/components/wire-aza/Footer';

// Mock data for demo purposes
const MOCK_USERS = [
  {
    id: '1',
    name: 'Sarah Johnson',
    handle: 'sarahj',
    avatar: 'SJ',
    azas: [
      { id: 'a1', bank: 'Chase Bank', accountName: 'Sarah Johnson', accountNumber: '1234567890', type: 'Savings' },
      { id: 'a2', bank: 'Mercury', accountName: 'Johnson Designs LLC', accountNumber: '9876543210', type: 'Business' }
    ]
  },
  {
    id: '2',
    name: 'Michael Chen',
    handle: 'mchen',
    avatar: 'MC',
    azas: [
      { id: 'a3', bank: 'Bank of America', accountName: 'Michael Chen', accountNumber: '5544332211', type: 'Personal' }
    ]
  },
  {
    id: '3',
    name: 'Tech Solutions Ltd',
    handle: 'techsol',
    avatar: 'TS',
    azas: [
      { id: 'a4', bank: 'Standard Chartered', accountName: 'Tech Solutions Global', accountNumber: '8877665544', type: 'Corporate' }
    ]
  }
];

export default function AzaProfilePage() {
  const params = useParams();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showShareToast, setShowShareToast] = useState(false);

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      const id = typeof params.id === 'string' ? params.id.toLowerCase() : '';
      const foundUser = MOCK_USERS.find(u =>
        u.id === id || u.handle.toLowerCase() === id
      ) || MOCK_USERS[0];
      setUser(foundUser);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [params.id]);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 3000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-500 font-medium">Loading Aza profile...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Back Button */}
          <Link
            href="/find-aza"
            className="inline-flex items-center text-gray-500 hover:text-emerald-600 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to search
          </Link>

          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-8"
          >
            <div className="h-32 bg-gradient-to-r from-emerald-500 to-teal-600 relative">
              <div className="absolute -bottom-12 left-8">
                <div className="w-24 h-24 rounded-2xl bg-white p-1 shadow-lg">
                  <div className="w-full h-full rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 text-2xl font-bold">
                    {user.avatar}
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <button
                  onClick={handleShare}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-2 rounded-xl transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="pt-16 pb-8 px-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    {user.name}
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  </h1>
                  <p className="text-gray-500 font-medium">@{user.handle}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  Verified Receiver
                </div>
              </div>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Professional wire transfer details for {user.name}. Please ensure you double-check all details before initiating a transfer.
              </p>
            </div>
          </motion.div>

          {/* Aza Cards */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 px-2 flex items-center gap-2">
              <Banknote className="w-5 h-5 text-emerald-500" />
              Available Payment Details
            </h2>

            {user.azas.map((aza: any, index: number) => (
              <motion.div
                key={aza.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-emerald-200 transition-all hover:shadow-md relative group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{aza.bank}</h3>
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        {aza.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-widest block mb-1">Account Name</label>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <span className="font-medium text-gray-800">{aza.accountName}</span>
                      <button
                        onClick={() => copyToClipboard(aza.accountName, `${aza.id}-name`)}
                        className="text-gray-400 hover:text-emerald-600 transition-colors"
                      >
                        {copiedId === `${aza.id}-name` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-widest block mb-1">Account Number</label>
                    <div className="flex items-center justify-between p-3 bg-emerald-50/30 rounded-xl border border-emerald-100/50">
                      <span className="font-mono text-lg font-bold text-emerald-700 tracking-wider">{aza.accountNumber}</span>
                      <button
                        onClick={() => copyToClipboard(aza.accountNumber, `${aza.id}-num`)}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-lg transition-colors shadow-sm"
                      >
                        {copiedId === `${aza.id}-num` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Securely verified via WireAza
                  </span>
                  <button className="text-emerald-600 text-sm font-semibold hover:underline flex items-center gap-1">
                    Instruction manual
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm text-sm text-gray-600">
              <User className="w-4 h-4 text-emerald-500" />
              Want your own Aza page?
              <Link href="/signup" className="text-emerald-600 font-bold hover:underline">Get started free</Link>
            </div>
          </div>
        </div>
      </main>

      {/* Share Toast */}
      <AnimatePresence>
        {showShareToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-50"
          >
            <div className="bg-emerald-500 rounded-full p-1">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium">Profile link copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
