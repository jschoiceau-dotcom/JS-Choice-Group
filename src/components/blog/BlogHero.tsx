"use client";

import React from "react";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

export const BlogHero = () => {
    return (
        <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-white dark:bg-black pt-48 pb-16">
            <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-20 pointer-events-none" />

            {/* Ambient Background */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-black/50 border border-slate-200 dark:border-white/10 backdrop-blur-sm mb-6 shadow-sm">
                        <Newspaper className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Our Blog</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                        Insights & <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Stories.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        Explore articles on disability support, NDIS updates, and inspiring stories from our community.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
