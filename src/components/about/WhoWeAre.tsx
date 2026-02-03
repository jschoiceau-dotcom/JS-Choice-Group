"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutImage from "../../../public/assets/home-img02.webp";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const conditions = [
    "Autism Spectrum Disorders",
    "ADHD",
    "Down Syndrome",
    "Schizophrenia",
    "PTSD",
    "Pathological Demand Avoidance",
    "Stroke",
    "Muscular Dystrophy"
];

export const WhoWeAre = () => {
    return (
        <section className="py-20 bg-slate-50 dark:bg-black/40">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                        Deeply Committed <br />
                        <span className="text-primary">To Your Journey.</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-medium">
                        We move beyond traditional care to build genuine partnerships. Here is a glimpse into who we are and what drives us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">

                    {/* 1. Main Intro Card - Large */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-6 lg:col-span-7 row-span-2 bg-white dark:bg-white/5 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 dark:border-white/10 shadow-lg relative overflow-hidden group"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between gap-8">
                            <div>
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                    <ArrowRight className="w-6 h-6 text-primary -rotate-45" />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                    Welcome to Js Choice Care and Support!
                                </h3>
                                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                    We are so thrilled that you have taken your precious time to know us. As your trusted registered NDIS provider, we don't just offer services; we offer a relationship built on trust, transparency, and shared goals.
                                </p>
                            </div>

                            <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-6 border border-slate-100 dark:border-white/5">
                                <p className="text-slate-700 dark:text-slate-300 italic font-medium">
                                    "Let's collaborate to empower yourselves and your family, ensuring every step is taken with care, expertise, and heartfelt dedication."
                                </p>
                            </div>
                        </div>

                        {/* Decorative Gradient */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/5 via-secondary/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    </motion.div>

                    {/* 2. Visual Image Card - Tall */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-6 lg:col-span-5 row-span-3 bg-slate-200 dark:bg-white/5 rounded-[2.5rem] relative overflow-hidden min-h-[400px] group"
                    >
                        <Image
                            src={AboutImage}
                            alt="Team"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                            <h4 className="text-white text-2xl font-bold mb-2">Detailed Attention</h4>
                            <p className="text-white/80 font-medium">Every participant is unique, and so is our approach.</p>
                        </div>
                    </motion.div>

                    {/* 3. Conditions / Expertise Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-6 lg:col-span-7 row-span-auto bg-[#abb3f1] dark:bg-primary/20 rounded-[2.5rem] p-8 border border-white/20 shadow-lg relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-white" />
                                Our Experience & Expertise
                            </h3>
                            <p className="text-white/90 mb-6 font-medium text-lg">
                                We have extensive experience working with individuals across various conditions:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {conditions.map((condition, i) => (
                                    <span
                                        key={i}
                                        className="inline-flex px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-bold hover:bg-white/30 transition-colors cursor-default"
                                    >
                                        {condition}
                                    </span>
                                ))}
                                <span className="inline-flex px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-bold opacity-80">
                                    + More
                                </span>
                            </div>
                        </div>
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                    </motion.div>

                    {/* 4. Location Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-6 lg:col-span-4 lg:col-start-1 row-span-1 bg-white dark:bg-white/5 rounded-[2.5rem] p-8 border border-slate-100 dark:border-white/10 shadow-lg flex flex-col justify-center relative overflow-hidden group hover:border-secondary/30 transition-colors"
                    >
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                    <MapPin className="w-5 h-5 fill-current" />
                                </div>
                                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Our Base</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
                                Based in Point Cook,<br />Melbourne.
                            </h3>
                            <p className="mt-2 text-slate-600 dark:text-slate-400 font-medium text-sm">
                                Connecting with our wider NDIS community with a neuro-affirming approach.
                            </p>
                        </div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl translate-x-1/2 translate-y-1/2 group-hover:bg-secondary/10 transition-colors" />
                    </motion.div>

                    {/* 5. Stat / Extra Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-6 lg:col-span-3 lg:col-start-5 row-span-1 bg-slate-900 dark:bg-white rounded-[2.5rem] p-8 shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <span className="block text-5xl font-black text-white dark:text-slate-900 mb-2">100%</span>
                            <span className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                                Neuro-Affirming
                            </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                    </motion.div>

                    {/* 6. Contact Teaser */}
                    <Link href="#contact" className="md:col-span-6 lg:col-span-5 lg:col-start-8 row-span-1 block">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full h-full bg-[#f1abab] rounded-[2.5rem] p-8 flex items-center justify-between cursor-pointer group shadow-lg"
                        >
                            <div className="flex flex-col">
                                <span className="text-slate-900 text-lg font-bold mb-1">Have questions?</span>
                                <span className="text-3xl font-black text-slate-900">Get in Touch</span>
                            </div>
                            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-colors">
                                <ArrowRight className="w-8 h-8 text-slate-900" />
                            </div>
                        </motion.div>
                    </Link>

                </div>
            </div>
        </section>
    );
};
