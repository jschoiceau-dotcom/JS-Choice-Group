"use client";

import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../../../public/assets/choose-img.webp";
import Image from "next/image";
import { BlurFade } from "../shadcn-ui/blur-fade";

export const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-slate-50 dark:bg-white/[0.02] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    <div className="flex-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white dark:border-white/10 relative">
                                <BlurFade delay={0.25} inView>
                                    <Image
                                        src={AboutImg}
                                        alt="Care support"
                                        className="w-full h-full object-contain"
                                        placeholder="blur"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </BlurFade>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>

                            {/* Floating experience card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-white/10 z-20"
                            >
                                <p className="text-5xl font-black text-primary mb-1">10+</p>
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Years of Trust</p>
                            </motion.div>
                        </motion.div>

                        {/* Decorative circles */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10" />
                    </div>

                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight text-slate-900 leading-tight drop-shadow-sm">
                                Why Choose Us
                            </h2>
                            <div className="space-y-6 text-base md:text-xl text-slate-700 mb-10 leading-relaxed font-medium">
                                <p>
                                    Because we never stop learning. As a neuro-affirming NDIS provider, we recognise all the various ways our brains work. We will stand by you.
                                </p>
                                <p>
                                    We embrace all diversity within our community. We design plans that best suit your needs. We do not decide for you, we give you the tools needed to navigate your NDIS industry.
                                </p>
                                <p className="text-slate-900 dark:text-slate-100 font-bold border-l-4 border-primary pl-6 py-2">
                                    We collaborate with one another in order to achieve our goals; that is, supporting you in your NDIS journey.
                                </p>
                                <p>
                                    We include everyone and treat people with kindness.
                                </p>
                            </div>

                            <button className="px-12 py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center gap-3">
                                LEARN MORE
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
