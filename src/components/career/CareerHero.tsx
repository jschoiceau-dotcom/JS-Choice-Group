"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, Star } from "lucide-react";

export const CareerHero = () => {
    return (
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-white dark:bg-black pt-48 pb-20">
            <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-20 pointer-events-none" />

            {/* Background Blobs */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-black/50 border border-slate-200 dark:border-white/10 backdrop-blur-sm mb-6 shadow-sm">
                        <Briefcase className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Join Our Team</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                        Do Work That <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Matters.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                        Join a passionate team dedicated to redefining care. We're looking for individuals who dream big and care deeply.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#application-form" className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 flex items-center gap-2 group">
                            View Openings
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="flex items-center gap-2 px-6 py-4 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-[3px] border-white dark:border-black overflow-hidden bg-slate-200 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                                        <img src={`https://i.pravatar.cc/150?u=${i + 15}`} alt="user" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <span className="text-sm font-bold text-slate-600 dark:text-slate-300">Join 50+ Experts</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
