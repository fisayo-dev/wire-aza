"use client";

import Header from "@/components/wire-aza/Header";
import Footer from "@/components/wire-aza/Footer";
import { MessageSquare, Mail, Phone, HelpCircle, ArrowRight, Zap, ShieldCheck, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

export default function SupportPage() {
  const faqs = [
    {
      q: "Is my bank information safe?",
      a: "Yes, we use bank-level encryption to ensure your data is secure. We never store your login credentials, only the account details you choose to share."
    },
    {
      q: "Can I add international bank accounts?",
      a: "Absolutely! Wire Aza supports both local (Nigerian) and international bank accounts including USD, GBP, and EUR details."
    },
    {
      q: "How do I share my Aza link?",
      a: "Once you create a vault, you'll get a unique link (e.g., wireaza.com/johndoe) which you can copy and send to anyone via WhatsApp, Email, or Social Media."
    },
    {
      q: "Is Wire Aza free to use?",
      a: "Yes, our basic plan is completely free for individuals. We also offer premium features for businesses with high-volume needs."
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Support Hero */}
        <section className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-full mb-8 border border-green-500/20 font-bold"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Support Center</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
            >
              How can we <span className="text-green-500">help you?</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium"
            >
              Have questions about Wire Aza? Search our help articles or get in touch with our friendly team.
            </motion.p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20 max-w-7xl mx-auto px-4 -mt-20 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Live Chat",
                desc: "Chat with our team in real-time for immediate assistance.",
                action: "Start Chat",
                color: "bg-green-600"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Support",
                desc: "Send us a message and we'll get back to you within 24 hours.",
                action: "Send Email",
                color: "bg-blue-600"
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Phone Support",
                desc: "Call us directly for urgent issues and enterprise support.",
                action: "Call Us",
                color: "bg-slate-900"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:scale-[1.02] transition-all"
              >
                <div className={`w-20 h-20 ${item.color} text-white rounded-3xl flex items-center justify-center mb-8 shadow-xl rotate-3 group-hover:rotate-0 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                  {item.desc}
                </p>
                <button className="w-full py-4 px-8 border-2 border-slate-100 rounded-2xl font-black text-slate-900 hover:border-green-600 hover:bg-green-50 transition-all flex items-center justify-center gap-2">
                  {item.action} <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-500 font-bold">Quick answers to the most common questions.</p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200 transition-all"
                >
                  <h3 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-50 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                      ?
                    </div>
                    {faq.q}
                  </h3>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium pl-11">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Knowledge Base Categories */}
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black">Getting Started</h3>
                        <ul className="space-y-4 text-slate-500 font-bold">
                            <li className="hover:text-green-600 cursor-pointer flex items-center gap-2">Creating your first Aza <ArrowRight className="w-4 h-4" /></li>
                            <li className="hover:text-green-600 cursor-pointer flex items-center gap-2">Verifying your account <ArrowRight className="w-4 h-4" /></li>
                            <li className="hover:text-green-600 cursor-pointer flex items-center gap-2">Profile customization <ArrowRight className="w-4 h-4" /></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black">Security & Privacy</h3>
                        <ul className="space-y-4 text-slate-500 font-bold">
                            <li className="hover:text-green-600 cursor-pointer flex items-center gap-2">Enabling 2FA <ArrowRight className="w-4 h-4" /></li>
                            <li className="hover:text-green-600 cursor-pointer flex items-center gap-2">Data encryption policy <ArrowRight className="w-4 h-4" /></li>
                            <li className="hover:text-green-600 cursor-pointer flex items-center gap-2">Managing session logs <ArrowRight className="w-4 h-4" /></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                            <CreditCard className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-black">Payments & Fees</h3>
                        <ul className="space-y-4 text-slate-500 font-bold">
                            <li className="hover:text-green-600 cursor-pointer flex items-center gap-2">International wire transfers <ArrowRight className="w-4 h-4" /></li>
                            <li className="hover:text-green-600 cursor-pointer flex items-center gap-2">Subscription billing <ArrowRight className="w-4 h-4" /></li>
                            <li className="hover:text-green-600 cursor-pointer flex items-center gap-2">Refund policy <ArrowRight className="w-4 h-4" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
