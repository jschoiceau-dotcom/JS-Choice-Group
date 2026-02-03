"use client";

import React from "react";
import { motion } from "framer-motion";
import BannerImg from "../../../public/assets/home-img01.jpg";
import Image from "next/image";
import { BlurFade } from "../shadcn-ui/blur-fade";

export const Introduction = () => {
    return (
        <section className="py-16 md:py-24 bg-white dark:bg-black overflow-hidden relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl lg:text-5xl font-black mb-8 leading-tight text-slate-900 drop-shadow-[0_2px_10px_rgba(171,179,241,0.2)]">
                                Why We are the Ideal Melbourne <br />
                                <span className="text-slate-800 drop-shadow-none">NDIS Service Providers?</span>
                            </h2>
                            <p className="text-base md:text-xl text-slate-700 mb-8 font-medium leading-relaxed">
                                Js Choice – Care and Support is undoubtedly the most suitable NDIS organisation in Melbourne since:
                            </p>

                            <div className="grid gap-4 mb-10">
                                {[
                                    "We provide personalised supports to make your life easier",
                                    "Our support workers are trained, experienced, and will coordinate with you and your family",
                                    "Our providers promote social inclusion and help you reach your goals",
                                    "We comply with NDIS guidelines to provide effective supports to participants"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group hover:border-primary/50 transition-colors">
                                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">
                                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-200">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed italic border-l-4 border-secondary pl-6">
                                Do you have more queries about our support workers or services? Contact us or go through the FAQ section below to get answers to some of the most common questions.
                            </p>
                        </motion.div>
                    </div>
                    <div className="flex-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-white/10"
                        >
                            <BlurFade delay={0.25} inView>
                                <Image
                                    src={BannerImg}
                                    alt="Support Care"
                                    className="w-full h-full object-cover aspect-[4/5] lg:aspect-[4/4]"
                                />
                            </BlurFade>
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
                        </motion.div>
                        {/* Decorative blobs */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse delay-700" />
                    </div>
                </div>
            </div>
        </section>
    );
};
