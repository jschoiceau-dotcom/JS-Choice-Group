"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export const AboutHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/about-hero.png"
                    alt="JS Choice Group Team Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85" />
                <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-10 pointer-events-none" />
            </div>

            {/* Ambient Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 z-1" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 z-1" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-2xl">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-bold text-white uppercase tracking-widest">Our Story</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[1.05]">
                            Empowering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">Independence.</span>
                        </h1>

                        <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
                            We are more than just an NDIS provider. We are your partners in creating a life of dignity, choice, and endless possibilities.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
                            >
                                <span className="text-primary text-2xl font-black">10+</span>
                                <span className="text-white/70 text-sm font-bold leading-tight text-left uppercase tracking-tighter">Years of<br />Experience</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
                            >
                                <span className="text-secondary text-2xl font-black">500+</span>
                                <span className="text-white/70 text-sm font-bold leading-tight text-left uppercase tracking-tighter">Happy<br />Families</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
                            >
                                <div className="flex flex-col text-left">
                                    <span className="text-white font-black text-sm uppercase tracking-tighter">Certified</span>
                                    <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">NDIS Provider</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/60 dark:from-black/60 to-transparent z-1" />
        </section>
    );
};
