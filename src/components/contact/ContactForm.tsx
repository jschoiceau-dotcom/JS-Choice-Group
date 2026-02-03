"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Mail, MapPin, MessageSquare, Send } from "lucide-react";

export const ContactForm = () => {
    const [focusedField, setFocusedField] = useState<string | null>(null);

    return (
        <div className="h-full">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 p-8 md:p-12 h-full relative overflow-hidden"
            >
                {/* Decorative Elements */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[60px]" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-[60px]" />

                <div className="md:mb-8 mb-6">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm">Get in Touch</span>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-2">
                        Send Us a Message
                    </h2>
                </div>

                <form className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2 group">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Your Name</label>
                            <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'scale-[1.02]' : ''}`}>
                                <input
                                    type="text"
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="John Doe"
                                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-primary/50 text-lg rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium placeholder:text-slate-400"
                                />
                                <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 transition-colors ${focusedField === 'name' ? 'text-primary' : 'text-slate-400'}`} />
                            </div>
                        </div>

                        <div className="space-y-2 group">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Phone Number</label>
                            <div className={`relative transition-all duration-300 ${focusedField === 'phone' ? 'scale-[1.02]' : ''}`}>
                                <input
                                    type="tel"
                                    onFocus={() => setFocusedField('phone')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="0400 000 000"
                                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-primary/50 text-lg rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium placeholder:text-slate-400"
                                />
                                <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 transition-colors ${focusedField === 'phone' ? 'text-primary' : 'text-slate-400'}`} />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2 group">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                            <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
                                <input
                                    type="email"
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="john@example.com"
                                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-primary/50 text-lg rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium placeholder:text-slate-400"
                                />
                                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 transition-colors ${focusedField === 'email' ? 'text-primary' : 'text-slate-400'}`} />
                            </div>
                        </div>

                        <div className="space-y-2 group">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Location / Suburb</label>
                            <div className={`relative transition-all duration-300 ${focusedField === 'location' ? 'scale-[1.02]' : ''}`}>
                                <input
                                    type="text"
                                    onFocus={() => setFocusedField('location')}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="e.g. Point Cook"
                                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-primary/50 text-lg rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium placeholder:text-slate-400"
                                />
                                <MapPin className={`absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 transition-colors ${focusedField === 'location' ? 'text-primary' : 'text-slate-400'}`} />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 group">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                        <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'scale-[1.01]' : ''}`}>
                            <textarea
                                onFocus={() => setFocusedField('message')}
                                onBlur={() => setFocusedField(null)}
                                rows={4}
                                placeholder="How can we help you?"
                                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-primary/50 text-lg rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium placeholder:text-slate-400 resize-none"
                            />
                            <MessageSquare className={`absolute left-4 top-6 w-6 h-6 transition-colors ${focusedField === 'message' ? 'text-primary' : 'text-slate-400'}`} />
                        </div>
                    </div>

                    <button
                        className="w-full bg-primary text-white font-black text-xl uppercase tracking-widest py-5 rounded-2xl hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group mt-4 relative overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Send Message
                            <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                    </button>
                </form>
            </motion.div>
        </div>
    );
};
