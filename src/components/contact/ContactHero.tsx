"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export const ContactHero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/contact-hero.png"
                    alt="Contact JS Choice Group Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />
                <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-10 pointer-events-none" />
            </div>

            {/* Ambient Background */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 z-1" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 z-1" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-2xl">
                        <MessageCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm font-bold text-white uppercase tracking-widest">Get in Touch</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[1.05]">
                        We're Here to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">Help You.</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
                        Have questions about the NDIS or our services? Our friendly team is ready to listen and support you.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/60 dark:from-black/60 to-transparent z-1" />
        </section>
    );
};

