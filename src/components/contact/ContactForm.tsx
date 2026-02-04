"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Mail, MapPin, MessageSquare, Send } from "lucide-react";

export const ContactForm = () => {
    const [focusedField, setFocusedField] = useState<string | null>(null);

    return (
        <div className="h-full relative group">
            {/* Background Glows - Highly Dynamic */}
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                    x: [0, -20, 0],
                    y: [0, 20, 0]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform" }}
                className="absolute -top-5 -right-5 w-56 h-56 bg-primary/15 rounded-full blur-[50px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1.05, 1, 1.05],
                    x: [0, 30, 0],
                    y: [0, -30, 0]
                }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform" }}
                className="absolute -bottom-5 -left-5 w-64 h-64 bg-secondary/15 rounded-full blur-[60px] pointer-events-none"
            />

            {/* Floating Decorative Glass Shapes */}
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform" }}
                className="absolute -top-10 -left-6 w-20 h-20 bg-white/10 backdrop-blur-lg rounded-[1.5rem] border border-white/20 shadow-xl z-20 flex items-center justify-center hidden lg:flex overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent" />
                <Mail className="w-8 h-8 text-white/30" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 h-full"
            >
                {/* Static Glow Border */}
                <div className="absolute -inset-[1px] rounded-[2.6rem] bg-gradient-to-r from-secondary/20 via-primary/20 to-secondary/20 opacity-40 blur-[2px]" />

                <div className="bg-white/70 dark:bg-slate-900/90 backdrop-blur-xl rounded-[2.5rem] shadow-[0_25px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_25px_50px_rgba(0,0,0,0.4)] border border-white/60 dark:border-white/10 p-6 md:p-10 h-full relative overflow-hidden">
                    {/* Inner Glow Stripe */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50" />

                    <div className="md:mb-8 mb-6 relative">
                        <span className="text-secondary font-black tracking-[0.2em] uppercase text-xs">Reach Out</span>
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
                            Send us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Message</span>
                        </h2>
                    </div>

                    <form className="space-y-5 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2 group/field">
                                <label className="text-sm font-black text-slate-800 dark:text-slate-100 ml-1 block">Full Name</label>
                                <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'scale-[1.01]' : ''}`}>
                                    <input
                                        type="text"
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="Enter your name"
                                        className="w-full bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:border-primary rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-base font-bold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                    />
                                    <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'name' ? 'text-primary' : 'text-slate-400'}`} />
                                </div>
                            </div>

                            <div className="space-y-2 group/field">
                                <label className="text-sm font-black text-slate-800 dark:text-slate-100 ml-1 block">Phone Number</label>
                                <div className={`relative transition-all duration-300 ${focusedField === 'phone' ? 'scale-[1.01]' : ''}`}>
                                    <input
                                        type="tel"
                                        onFocus={() => setFocusedField('phone')}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="0400 000 000"
                                        className="w-full bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:border-primary rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-base font-bold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                    />
                                    <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'phone' ? 'text-primary' : 'text-slate-400'}`} />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2 group/field">
                                <label className="text-sm font-black text-slate-800 dark:text-slate-100 ml-1 block">Email Address</label>
                                <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.01]' : ''}`}>
                                    <input
                                        type="email"
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="example@mail.com"
                                        className="w-full bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:border-primary rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-base font-bold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                    />
                                    <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'email' ? 'text-primary' : 'text-slate-400'}`} />
                                </div>
                            </div>

                            <div className="space-y-2 group/field">
                                <label className="text-sm font-black text-slate-800 dark:text-slate-100 ml-1 block">Subject</label>
                                <div className={`relative transition-all duration-300 ${focusedField === 'location' ? 'scale-[1.01]' : ''}`}>
                                    <input
                                        type="text"
                                        onFocus={() => setFocusedField('location')}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="Subject..."
                                        className="w-full bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:border-primary rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-base font-bold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                    />
                                    <MapPin className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'location' ? 'text-primary' : 'text-slate-400'}`} />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2 group/field">
                            <label className="text-sm font-black text-slate-800 dark:text-slate-100 ml-1 block">Your Message</label>
                            <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'scale-[1.01]' : ''}`}>
                                <textarea
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    rows={4}
                                    placeholder="How can we help?"
                                    className="w-full bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:border-primary rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-base font-bold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none"
                                />
                                <MessageSquare className={`absolute left-4 top-6 w-5 h-5 transition-colors ${focusedField === 'message' ? 'text-primary' : 'text-slate-400'}`} />
                            </div>
                        </div>

                        <button
                            className="w-full bg-primary text-black font-black text-base uppercase tracking-widest py-5 rounded-xl hover:shadow-[0_15px_50px_rgba(var(--primary-rgb),0.5)] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group/btn mt-2 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                            <span className="relative z-10 flex items-center gap-2">
                                Send Message
                                <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </span>
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};
