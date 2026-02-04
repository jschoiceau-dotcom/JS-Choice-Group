"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HeroTextRotator = () => {
    const words = ["Empowers", "Connects", "Supports", "Inspires"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="relative inline-block min-w-[140px] sm:min-w-[180px] md:min-w-[280px]">
            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -20, opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute left-0 top-0 text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#818cf8] to-primary bg-[200%_auto] animate-shine"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
            <span className="invisible">{words[0]}</span>
        </span>
    );
};

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/assets/blog/blog_support_coordination.png"
                    alt="Disability Support Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80" />
            </div>

            {/* Main Hero Content */}
            <div className="flex-1 flex items-center justify-center w-full pt-40 pb-20 px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 sm:mb-8"
                        >
                            <span className="relative flex h-2 w-2 mr-2 sm:mr-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-white/90 tracking-wide">Trusted NDIS Registered Provider</span>
                            <ArrowRight className="ml-2 w-3 h-3 text-white/70" />
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-[1.1]"
                        >
                            Care That <HeroTextRotator />
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto mb-8 sm:mb-10 font-medium leading-relaxed px-2"
                        >
                            Js Choice embraces neurodiversity and cultural inclusion, providing personalized support for a life of independence.
                        </motion.p>

                        {/* CTA Buttons - Same Size */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none mb-10 sm:mb-12"
                        >
                            <Link
                                href="/contact-us"
                                className="w-full sm:w-auto min-w-[200px] px-8 py-4 bg-primary text-white rounded-full font-bold text-base shadow-xl shadow-primary/30 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group overflow-hidden relative"
                            >
                                <span className="relative z-10 flex items-center gap-2 text-black">
                                    Get Started
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </Link>
                            <a
                                href="tel:0421622262"
                                className="w-full sm:w-auto min-w-[200px] px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full font-bold text-base text-white hover:bg-white/20 transition-all flex items-center justify-center gap-3 group"
                            >
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                                    <Phone className="w-4 h-4 fill-current" />
                                </div>
                                0421 622 262
                            </a>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col items-center gap-3 sm:gap-4"
                        >
                            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-[3px] border-white/30 overflow-hidden bg-slate-200 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                                            <img src={`https://i.pravatar.cc/150?u=${i + 15}`} alt="user" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col items-center sm:items-start">
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        ))}
                                        <span className="font-bold text-white ml-1">4.9/5</span>
                                    </div>
                                    <span className="text-xs sm:text-sm text-white/70 font-medium">From 500+ Happy Families</span>
                                </div>
                            </div>
                            <p className="text-white/60 italic text-sm sm:text-lg mt-2 text-center">
                                Victoria's Trusted NDIS Disability Support Provider
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
