"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, CheckCircle2, Star } from "lucide-react";
import Link from "next/link";
import BannerImg from "../../../public/assets/banner-img.png";
import HeroBg from "../../../public/assets/hero-bg.png";
import Image from "next/image";
import { AnimatedShinyText } from "../shadcn-ui/animated-shiny-text";
import { BlurFade } from "../shadcn-ui/blur-fade";

export const Hero = () => {
    const words = ["Empowers", "Connects", "Supports", "Inspires"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden">
            {/* 1. Background Image Layer */}
            <div className="absolute inset-0 -z-30 w-full h-full">
                <Image
                    src={HeroBg}
                    alt="Background"
                    fill
                    className="object-cover opacity-90 dark:opacity-80"
                    priority
                />
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-white/70 dark:bg-black/70 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/90 dark:from-black/80 dark:via-transparent dark:to-black/90" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Content Side */}
                    <div className="flex-1 text-center lg:text-left relative z-20">
                        <BlurFade delay={0.1} inView>
                            <div className="inline-flex items-center justify-center px-4 py-1.5 transition-all outline-none relative no-underline hover:shadow-sm bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-full shadow-sm mb-8 group cursor-default">
                                <span className="relative flex h-2 w-2 mr-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <AnimatedShinyText className="inline-flex items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                    <span className="text-sm font-bold tracking-wide">Trusted NDIS Registered Provider</span>
                                    <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                                </AnimatedShinyText>
                            </div>
                        </BlurFade>

                        <div className="space-y-4 mb-10">
                            <BlurFade delay={0.2} inView>
                                <h1 className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-black tracking-tight leading-[1.0] text-slate-900 dark:text-white">
                                    Care That <br className="hidden lg:block" />
                                    <span className="relative inline-block min-w-[200px] md:min-w-[300px]">
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
                                        {/* Invisible duplicate to hold width */}
                                        <span className="invisible">{words[0]}</span>
                                    </span>
                                </h1>
                            </BlurFade>
                            <BlurFade delay={0.3} inView>
                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 font-bold leading-relaxed tracking-tight">
                                    Js Choice embraces neurodiversity and cultural inclusion, providing personalized support for a life of independence.
                                </p>
                            </BlurFade>
                        </div>

                        <BlurFade delay={0.4} inView>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                                <Link
                                    href="#contact"
                                    className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold text-base md:text-lg shadow-xl shadow-primary/25 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group overflow-hidden relative"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Get Started
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </Link>
                                <a
                                    href="tel:0421622262"
                                    className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full font-bold text-base md:text-lg text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-3 group"
                                >
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Phone className="w-4 h-4 fill-current" />
                                    </div>
                                    0421 622 262
                                </a>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.5} inView>
                            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-[3px] border-white dark:border-black overflow-hidden bg-slate-200 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                                                <img src={`https://i.pravatar.cc/150?u=${i + 15}`} alt="user" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                            <span className="font-bold text-slate-900 dark:text-white">4.9/5</span>
                                        </div>
                                        <span className="text-xs text-slate-500 font-medium">From 500+ Happy Families</span>
                                    </div>
                                </div>
                            </div>
                        </BlurFade>
                    </div>

                    {/* Visual Side */}
                    <div className="flex-1 w-full max-w-[600px] mt-10 lg:max-w-none relative perspective-1000">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, rotateY: 15 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1.2, type: "spring", bounce: 0.2 }}
                            className="relative z-10"
                        >
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white dark:border-white/5 bg-slate-100 aspect-[4/5] md:aspect-square lg:aspect-[3.5/4] group">
                                <Image
                                    src={BannerImg}
                                    alt="Caregiver supporting a patient"
                                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Floating Glass Element 1: Quality Badge */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 -left-12 lg:-left-20 z-20 hidden sm:block"
                            >
                                <div className="glass-card bg-white/75 dark:bg-black/75 backdrop-blur-xl p-5 rounded-3xl border border-white/40 shadow-xl flex items-center gap-4 hover:scale-110 transition-transform cursor-pointer">
                                    <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                                        <CheckCircle2 className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 dark:text-white text-lg">Verified</h4>
                                        <p className="text-sm text-slate-700 font-bold uppercase tracking-wider">NDIS Provider</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Glass Element 2: Stats */}
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-12 -right-6 lg:-right-12 z-20 hidden sm:block"
                            >
                                <div className="glass-card bg-white/75 dark:bg-black/75 backdrop-blur-xl p-6 rounded-[2rem] border border-white/40 shadow-2xl max-w-[260px] hover:scale-110 transition-transform cursor-pointer group/card">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-black text-slate-800 dark:text-white">24/7</span>
                                            <span className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Support</span>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover/card:rotate-12 transition-transform">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-2 mb-2 overflow-hidden">
                                        <div className="bg-green-500 h-full w-[95%] rounded-full animate-pulse" />
                                    </div>
                                    <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400">
                                        <span>Response Rate</span>
                                        <span className="text-green-600">98%</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Background Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-[100px] -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};
