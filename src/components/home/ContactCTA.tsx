"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Heart, MessageCircle, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const ContactCTA = () => {
    return (
        <section id="contact" className="relative py-24 bg-[#f1abab] overflow-hidden flex items-center justify-center min-h-[70vh]">
            {/* 1. Dynamic Background Mesh & Noise */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-[#8995d3]/20 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
            </div>

            {/* 2. Enhanced Floating 3D Elements */}
            <motion.div
                animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[15%] left-[8%] hidden lg:flex flex-col items-center gap-4 z-10"
            >
                <div className="glass-card bg-white/30 backdrop-blur-md p-5 rounded-[2rem] border border-white/50 shadow-2xl -rotate-12 hover:scale-110 transition-transform duration-500 cursor-pointer">
                    <Heart className="w-14 h-14 text-[#e11d48] fill-[#e11d48] drop-shadow-lg" />
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 30, 0], rotate: [0, -8, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[15%] right-[8%] hidden lg:flex flex-col items-center gap-4 z-10"
            >
                <div className="glass-card bg-white/30 backdrop-blur-md p-6 rounded-full border border-white/50 shadow-2xl rotate-12 hover:scale-110 transition-transform duration-500 cursor-pointer">
                    <MessageCircle className="w-14 h-14 text-[#4f46e5] fill-[#4f46e5] drop-shadow-lg" />
                </div>
            </motion.div>

            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] right-[20%] w-6 h-6 hidden lg:block"
            >
                <Star className="w-full h-full text-white fill-white" />
            </motion.div>

            {/* 3. Main Content Container */}
            <div className="container mx-auto px-4 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/50 text-slate-900 font-extrabold uppercase tracking-wider text-xs lg:text-sm mb-8 shadow-lg mx-auto hover:bg-white/50 transition-all cursor-default scale-100 hover:scale-105"
                    >
                        <Sparkles className="w-3.5 h-3.5 fill-slate-900" />
                        <span>Ready to start your journey?</span>
                    </motion.div>

                    {/* Headline - Bold & High Contrast */}
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight drop-shadow-sm">
                        Together, Let's Make The NDIS Work Seamlessly For You.
                    </h2>

                    <p className="text-base md:text-xl text-slate-800 font-bold max-w-2xl mx-auto mb-12 leading-relaxed opacity-90 drop-shadow-sm">
                        Experience a future of continued independence with support that truly understands your needs.
                    </p>

                    {/* 4. Interactive Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <Link
                            href="#contact"
                            className="w-full sm:w-auto min-w-[220px] px-8 py-5 bg-[#4f5b9e] text-white rounded-[2rem] font-black text-lg shadow-2xl shadow-[#4f5b9e]/30 hover:shadow-[#4f5b9e]/50 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                CONTACT NOW
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                        </Link>

                        <a
                            href="tel:0421622262"
                            className="w-full sm:w-auto min-w-[220px] px-8 py-5 bg-white text-[#4f5b9e] rounded-[2rem] font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#4f5b9e]/10 flex items-center justify-center text-[#4f5b9e] group-hover:bg-[#4f5b9e] group-hover:text-white transition-colors duration-300">
                                <Phone className="w-5 h-5 fill-current" />
                            </div>
                            <span className="font-black text-slate-900 group-hover:text-[#4f5b9e] transition-colors">0421 622 262</span>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* 5. Watermark Background */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[20%] select-none pointer-events-none opacity-[0.06] rotate-90 lg:rotate-0">
                <span className="text-[35vw] font-black text-white leading-none">JCG</span>
            </div>
        </section>
    );
};
