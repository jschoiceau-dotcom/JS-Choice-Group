"use client";

import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../../../public/assets/choose-img.webp";
import Image from "next/image";
import { BlurFade } from "../shadcn-ui/blur-fade";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Image Content */}
                    <div className="flex-1 w-full relative">
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                            <BlurFade delay={0.2} inView>
                                <div className="aspect-[4/5] relative">
                                    <Image
                                        src={AboutImg}
                                        alt="Care support"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                            </BlurFade>

                            {/* Experience Badge */}
                            <div className="absolute top-6 left-6 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
                                <p className="text-4xl font-black text-primary mb-0 leading-none">10+</p>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Years Experience</p>
                            </div>
                        </div>
                        {/* Decorative Pattern */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block text-secondary font-bold tracking-wider uppercase text-sm mb-4">About Us</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                                Empowering Lives Through <span className="text-primary">Choice</span>
                            </h2>

                            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                                <p>
                                    As a neuro-affirming NDIS provider, we recognise the unique ways every individual interacts with the world. We don't just provide support; we stand by you as partners in your journey.
                                </p>
                                <p>
                                    Our approach is collaborative and inclusive. We design plans that are tailored to your specific needs and goals, giving you the tools to navigate the NDIS landscape with confidence.
                                </p>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-l-4 border-primary shadow-sm">
                                    <p className="font-semibold text-slate-900 dark:text-slate-100 italic">
                                        "We collaborate with one another in order to achieve our goals; that is, supporting you in your NDIS journey."
                                    </p>
                                </div>
                            </div>

                            <Link
                                href="/about-us"
                                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-slate-900 font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                            >
                                Learn More
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
