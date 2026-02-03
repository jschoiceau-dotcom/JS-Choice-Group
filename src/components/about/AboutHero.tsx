"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const AboutHero = () => {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-white dark:bg-black pt-48 pb-20">
            <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-20 pointer-events-none" />

            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-black/50 border border-slate-200 dark:border-white/10 backdrop-blur-sm mb-6 shadow-sm">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Our Story</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                        Empowering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Independence.</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        We are more than just an NDIS provider. We are your partners in creating a life of dignity, choice, and endless possibilities.
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-0.5 h-16 bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-700 rounded-full" />
            </motion.div>
        </section>
    );
};
