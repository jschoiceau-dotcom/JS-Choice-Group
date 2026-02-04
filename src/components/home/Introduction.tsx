"use client";

import React from "react";
import { motion } from "framer-motion";
import BannerImg from "../../../public/assets/home-img01.webp";
import Image from "next/image";
import { BlurFade } from "../shadcn-ui/blur-fade";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export const Introduction = () => {
    return (
        <section className="py-20 md:py-32 bg-white dark:bg-slate-950 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="flex-1 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block text-primary font-bold tracking-wider uppercase text-sm mb-4">Why Choose Us</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                                Why We are the Ideal <br />
                                <span className="text-secondary">NDIS Service Partners</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Js Choice – Care and Support is undoubtedly the most suitable NDIS organisation in Melbourne. We prioritize your independence and well-being.
                            </p>

                            <div className="grid gap-4 mb-10">
                                {[
                                    "Personalised support plans tailored to your needs",
                                    "Experienced and compassionate support workers",
                                    "Promoting social inclusion and community engagement",
                                    "Full NDIS compliance and safety standards"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" strokeWidth={3} />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl"
                            >
                                Get In Touch
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Image Content */}
                    <div className="flex-1 order-1 lg:order-2 w-full">
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                            <BlurFade delay={0.2} inView>
                                <div className="aspect-[4/3] lg:aspect-square relative">
                                    <Image
                                        src={BannerImg}
                                        alt="Support Care"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>
                            </BlurFade>

                            {/* Floating Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800">
                                <p className="text-slate-900 dark:text-white font-bold italic text-lg leading-snug">
                                    "The team is incredibly supportive and truly understands our needs."
                                </p>
                                <div className="mt-2 flex items-center gap-2">
                                    <div className="h-0.5 w-8 bg-primary rounded-full" />
                                    <span className="text-sm text-slate-500 font-semibold">Sarah M., Melbourne</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
