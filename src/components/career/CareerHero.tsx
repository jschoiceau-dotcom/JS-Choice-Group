"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";
import Image from "next/image";

export const CareerHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/career-hero.png"
                    alt="Careers at JS Choice Group Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />
                <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-10 pointer-events-none" />
            </div>

            {/* Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 z-1" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 z-1" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-2xl">
                        <Briefcase className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-bold text-white uppercase tracking-widest">Join Our Team</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[1.05]">
                        Do Work That <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">Matters.</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
                        Join a passionate team dedicated to redefining care. We're looking for individuals who dream big and care deeply.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="#application-form" className="w-full sm:w-auto px-10 py-5 bg-primary text-black rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-3 group overflow-hidden relative">
                            <span className="relative z-10">View Openings</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                        <div className="flex items-center gap-3 px-8 py-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-[3px] border-white/20 overflow-hidden bg-white/10 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                                        <img src={`https://i.pravatar.cc/150?u=${i + 25}`} alt="team member" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <span className="text-sm font-bold text-white/80 uppercase tracking-tighter">Join 50+ Experts</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/60 dark:from-black/60 to-transparent z-1" />
        </section>
    );
};

