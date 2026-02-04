"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Background images for the carousel
const heroImages = [
    "/assets/hero-bg-premium.webp",
    "/assets/home-img01.webp",
    "/assets/about-hero.png",
    "/assets/contact-hero.png"
];

const HeroTextRotator = () => {
    const words = ["Empowerment", "Connection", "Support", "Independence"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="relative inline-flex items-center justify-center min-w-[220px] h-[1.2em]">
            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center text-primary"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
            <span className="invisible">{words[0]}</span>
        </span>
    );
};

export const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden w-full">
            {/* Background Carousel */}
            <div className="absolute inset-0 -z-10 bg-slate-950">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={heroImages[currentImageIndex]}
                            alt="Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-950/70 z-10" />

                {/* Gradient Fade at bottom for smooth transition */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950/90 to-transparent z-10" />
            </div>

            {/* Main Hero Content */}
            {/* Increased padding-top to pt-48 to effectively clear large navbars */}
            <div className="relative z-20 container mx-auto px-4 flex-grow flex flex-col items-center justify-center text-center w-full pt-48 pb-24">
                <div className="w-full max-w-4xl mx-auto flex flex-col items-center">

                    {/* Trust Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 shadow-lg mt-4"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-bold text-white tracking-wide">NDIS Registered Provider</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1] flex flex-col items-center"
                    >
                        <span>Professional Care That</span>
                        <span className="mt-2 block"><HeroTextRotator /></span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
                    >
                        Js Choice embraces neurodiversity and cultural inclusion, providing personalized support for a life of independence and purpose.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-5 w-full justify-center mb-16"
                    >
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-primary text-slate-900 font-bold text-lg hover:bg-primary/90 hover:scale-105 transition-all shadow-xl shadow-primary/20 min-w-[200px]"
                        >
                            Get Started
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <a
                            href="tel:0421622262"
                            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all min-w-[200px]"
                        >
                            <Phone className="mr-2 w-5 h-5" />
                            0421 622 262
                        </a>
                    </motion.div>

                    {/* Social Proof */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col items-center gap-3 backdrop-blur-sm bg-black/30 p-4 rounded-2xl border border-white/10"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/150?u=${i + 15}`} alt="user" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-1.5 text-yellow-400">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                            <span className="text-white font-bold ml-1 text-sm tracking-wide">TRUSTED BY 500+ FAMILIES</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Dots Positioned Absolute at Bottom */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {heroImages.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 shadow-sm ${idx === currentImageIndex
                                ? "bg-primary w-8"
                                : "bg-white/50 w-2 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};
