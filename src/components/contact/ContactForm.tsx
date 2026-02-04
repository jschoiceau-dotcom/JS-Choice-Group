"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Mail, MapPin, MessageSquare, Send } from "lucide-react";

export const ContactForm = () => {
    const [focusedField, setFocusedField] = useState<string | null>(null);

    return (
        <div className="h-full relative group">
            {/* Background Glows */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/40 dark:border-white/10 p-6 md:p-10 h-full relative overflow-hidden"
            >
                {/* Glow Stripe */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-50" />

                <div className="md:mb-8 mb-6 relative">
                    <span className="text-secondary font-black tracking-[0.2em] uppercase text-xs">Contact Us</span>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
                        Send us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Message</span>
                    </h2>
                </div>

                <form className="space-y-5 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2 group">
                            <label className="text-sm font-black text-slate-800 dark:text-slate-100 ml-1 block">Full Name</label>
                            <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'scale-[1.01]' : ''}`}>
                                <input
                                    type="text"
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Enter your name"
                                    className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:border-primary rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-base font-bold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                />
                                <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'name' ? 'text-primary' : 'text-slate-400'}`} />
                            </div>
                        </div>

                        <div className="space-y-2 group">
                            <label className="text-sm font-black text-slate-800 dark:text-slate-100 ml-1 block">Phone Number</label>
                            <div className={`relative transition-all duration-300 ${focusedField === 'phone' ? 'scale-[1.01]' : ''}`}>
                                <input
                                    type="tel"
                                    onFocus={() => setFocusedField('phone')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="0400 000 000"
                                    className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:border-primary rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-base font-bold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                />
                                <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'phone' ? 'text-primary' : 'text-slate-400'}`} />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2 group">
                            <label className="text-sm font-black text-slate-800 dark:text-slate-100 ml-1 block">Email Address</label>
                            <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.01]' : ''}`}>
                                <input
                                    type="email"
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="example@mail.com"
                                    className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:border-primary rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-base font-bold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                />
                                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'email' ? 'text-primary' : 'text-slate-400'}`} />
                            </div>
                        </div>

                        <div className="space-y-2 group">
                            <label className="text-sm font-black text-slate-800 dark:text-slate-100 ml-1 block">Subject</label>
                            <div className={`relative transition-all duration-300 ${focusedField === 'location' ? 'scale-[1.01]' : ''}`}>
                                <input
                                    type="text"
                                    onFocus={() => setFocusedField('location')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Subject..."
                                    className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:border-primary rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-base font-bold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                />
                                <MapPin className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'location' ? 'text-primary' : 'text-slate-400'}`} />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 group">
                        <label className="text-sm font-black text-slate-800 dark:text-slate-100 ml-1 block">Your Message</label>
                        <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'scale-[1.01]' : ''}`}>
                            <textarea
                                onFocus={() => setFocusedField('message')}
                                onBlur={() => setFocusedField(null)}
                                rows={4}
                                placeholder="How can we help?"
                                className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:border-primary rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-base font-bold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none"
                            />
                            <MessageSquare className={`absolute left-4 top-6 w-5 h-5 transition-colors ${focusedField === 'message' ? 'text-primary' : 'text-slate-400'}`} />
                        </div>
                    </div>

                    <button
                        className="w-full bg-primary text-black font-black text-base uppercase tracking-widest py-4 rounded-xl hover:shadow-[0_10px_30px_rgba(var(--primary-rgb),0.3)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group mt-2 relative overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </form>
            </motion.div>
        </div>
    );
};
