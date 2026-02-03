"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export const ResourcesHero = () => {
    return (
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-white dark:bg-black pt-48 pb-20">
            <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-20 pointer-events-none" />

            {/* Ambient Background */}
            <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-black/50 border border-slate-200 dark:border-white/10 backdrop-blur-sm mb-6 shadow-sm">
                        <BookOpen className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Knowledge Hub</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                        Empowering You with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Information.</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        Access essential guides, forms, and resources to navigate the NDIS and your care journey with confidence.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
