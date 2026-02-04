"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, Phone, Mail, ArrowRight, Star, ShieldCheck, Sparkles, Heart, Users, Stethoscope, Car, Brain, Clock, Activity, Home, Search, UserCircle, ClipboardList, Plus, Minus, MessageCircle } from "lucide-react";
import { ServiceContent } from "@/src/data/services";
import { Navbar } from "../common/Navbar";
import { Footer } from "../common/Footer";
import { cn } from "@/lib/utils";

// Animation Variants
const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-100 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className={cn("text-lg md:text-xl font-bold transition-colors", isOpen ? "text-indigo-600" : "text-slate-800 group-hover:text-indigo-600")}>
                    {question}
                </span>
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center transition-all", isOpen ? "bg-indigo-600 text-white rotate-180" : "bg-slate-50 text-slate-400")}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-lg text-slate-500 font-medium leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const ServiceDetail = ({ service }: { service: ServiceContent }) => {
    return (
        <div className="bg-white min-h-screen font-sans text-slate-700 overflow-hidden relative">
            <Navbar />

            {/* Floating Action Button - Creative Touch */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="fixed bottom-8 right-8 z-[100] group"
            >
                <Link href="/contact-us" className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-indigo-500/50 hover:scale-110 transition-transform relative">
                    <MessageCircle className="w-8 h-8" />
                    <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        Need Help? Talk to us
                    </span>
                </Link>
            </motion.div>

            {/* Decorative Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[120px] opacity-60" />
                <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-rose-50 rounded-full blur-[100px] opacity-40" />
            </div>

            <main className="relative z-10 pt-20">
                {/* 1. HERO SECTION */}
                <section className="relative py-24 md:py-32 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-bold mb-8"
                            >
                                <Sparkles className="w-4 h-4" />
                                <span>Premier NDIS Service Provider</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight"
                                dangerouslySetInnerHTML={{
                                    __html: service.titleHtml || service.title
                                }}
                            />

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                            >
                                {service.shortDescription}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="flex flex-wrap justify-center gap-4"
                            >
                                <button
                                    onClick={() => document.getElementById('content-start')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center gap-2 group"
                                >
                                    Explore Details <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <a href="tel:0421622262" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-indigo-600 transition-all shadow-sm flex items-center gap-2">
                                    Quick Inquiry <Phone className="w-5 h-5" />
                                </a>
                            </motion.div>
                        </div>
                    </div>

                    <div className="mt-20 container mx-auto px-4 max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[21/9] border-8 border-white group"
                        >
                            <Image
                                src={service.heroImage}
                                alt={service.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent">
                                <div className="flex flex-wrap gap-4 md:gap-12">
                                    <div className="flex items-center gap-3 text-white">
                                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                            <ShieldCheck className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase font-black tracking-widest opacity-60">Verified</div>
                                            <div className="text-sm font-bold">NDIS Registered</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 text-white">
                                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase font-black tracking-widest opacity-60">Availability</div>
                                            <div className="text-sm font-bold">24/7 Care</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <div id="content-start" />

                {/* 2. STATS SECTION */}
                {service.stats && (
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {service.stats.map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="text-center p-8 rounded-3xl bg-indigo-50/30 border border-indigo-50 hover:bg-white hover:shadow-xl hover:border-indigo-100 transition-all group"
                                    >
                                        <div className="text-4xl md:text-5xl font-black text-indigo-600 mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                                        <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 3. DYNAMIC CONTENT SECTIONS */}
                <section className="py-24 space-y-32">
                    {service.sections.map((section, index) => (
                        <div key={index} className="container mx-auto px-4 max-w-7xl">
                            <div className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
                                <motion.div
                                    initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="flex-1 space-y-8"
                                >
                                    <div className="space-y-4">
                                        <div className="w-12 h-1.5 bg-indigo-600 rounded-full" />
                                        {section.title && (
                                            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                                                {section.titleHighlight ? (
                                                    <>
                                                        {section.title.split(section.titleHighlight)[0]}
                                                        <span className="text-indigo-600 relative">
                                                            {section.titleHighlight}
                                                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                                                                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-200" />
                                                            </svg>
                                                        </span>
                                                        {section.title.split(section.titleHighlight)[1]}
                                                    </>
                                                ) : (
                                                    section.title
                                                )}
                                            </h2>
                                        )}
                                    </div>

                                    <div className="space-y-6 text-lg md:text-xl leading-relaxed text-slate-600 font-medium">
                                        {section.content.map((p, i) => (
                                            <p key={i}>{p}</p>
                                        ))}
                                    </div>

                                    {section.list && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 bg-indigo-50/50 p-8 rounded-[2rem] border border-indigo-100">
                                            {section.list.map((item, i) => (
                                                <div key={i} className="flex gap-4 items-center">
                                                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm transition-transform hover:scale-110">
                                                        <ShieldCheck className="w-5 h-5 text-indigo-600" />
                                                    </div>
                                                    <span className="text-slate-800 font-bold">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: section.reverse ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="flex-1 w-full"
                                >
                                    <div className="relative group">
                                        <div className="absolute -inset-4 bg-indigo-100 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500 opacity-50" />
                                        <div className="absolute -inset-4 bg-rose-100 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500 opacity-50" />

                                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white aspect-[4/5] md:aspect-auto md:h-[600px] border-4 border-white">
                                            <Image
                                                src={section.image || service.heroImage}
                                                alt={section.title || service.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* 4. PROCESS SECTION */}
                {service.process && (
                    <section className="py-32 bg-slate-50 relative">
                        <div className="container mx-auto px-4 relative z-10">
                            <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900">{service.process.title}</h2>
                                <p className="text-lg text-slate-500 font-medium">Step-by-step excellence in care and delivery tailored to you.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {service.process.steps.map((step, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="relative bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all group"
                                    >
                                        <div className="absolute -top-6 -left-6 w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg shadow-indigo-200 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                            0{i + 1}
                                        </div>
                                        <div className="mt-4 space-y-4">
                                            <h3 className="text-xl font-black text-slate-900">{step.title}</h3>
                                            <p className="text-slate-500 font-medium leading-relaxed">{step.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 5. REASONS SECTION */}
                {service.reasons && (
                    <section className="py-32 overflow-hidden">
                        <div className="container mx-auto px-4 max-w-7xl">
                            <div className="bg-indigo-900 rounded-[3rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-20 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl" />

                                <div className="flex-1 space-y-10 relative z-10">
                                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                                        {service.reasons.title}
                                    </h2>

                                    <ul className="grid grid-cols-1 gap-6">
                                        {service.reasons.items.map((item, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                                className="flex gap-6 items-center group"
                                            >
                                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-primary transition-colors">
                                                    <Star className="w-5 h-5 text-white group-hover:text-black fill-current" />
                                                </div>
                                                <span className="text-indigo-100 text-lg md:text-xl font-bold">{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex-1 relative w-full h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10">
                                    <Image
                                        src="/assets/choose-img.webp"
                                        alt="Why Choose Us"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* 6. FAQ SECTION - CREATIVE ACCORDION */}
                {service.faqs && (
                    <section className="py-32 bg-white">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <div className="text-center mb-20 space-y-4">
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900">Common Questions</h2>
                                <p className="text-lg text-slate-500 font-medium">Everything you need to know about our {service.title} services.</p>
                            </div>
                            <div className="bg-white rounded-[2.5rem] p-4 md:p-12 border border-slate-100 shadow-sm">
                                {service.faqs.map((faq, i) => (
                                    <FAQItem key={i} question={faq.question} answer={faq.answer} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 7. CREATIVE CTA SECTION */}
                <section className="py-32 relative">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto space-y-12 py-20 bg-indigo-50 rounded-[4rem] border border-indigo-100 relative shadow-2xl shadow-indigo-500/5 group"
                        >
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform">
                                <Heart className="w-12 h-12 text-rose-500 animate-pulse" />
                            </div>

                            <div className="space-y-6 px-12">
                                <h2 className="text-4xl md:text-6xl font-black text-slate-900">
                                    Ready to Live <span className="text-indigo-600">Better?</span>
                                </h2>
                                <p className="text-slate-600 text-xl font-bold leading-relaxed">
                                    Our support team is ready to welcome you into the JS Choice family. Let's make every day better, together.
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 pt-4 px-8">
                                <a href="tel:0421622262" className="px-10 py-5 bg-indigo-600 text-white font-black rounded-3xl hover:bg-indigo-700 transition-all uppercase text-sm tracking-widest shadow-xl shadow-indigo-200 flex items-center gap-3">
                                    <Phone className="w-5 h-5" /> Call Now
                                </a>
                                <Link href="/contact-us" className="px-10 py-5 bg-white text-slate-900 font-black rounded-3xl border-2 border-slate-200 hover:border-indigo-600 transition-all uppercase text-sm tracking-widest shadow-sm flex items-center gap-3">
                                    <Mail className="w-5 h-5" /> Get In Touch
                                </Link>
                            </div>

                            <p className="text-slate-400 font-bold uppercase tracking-tighter text-xs">Available 24/7 for urgent clinical support</p>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};
