"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Heart, MessageCircle, Star } from "lucide-react";
import Link from "next/link";

export const ContactCTA = () => {
    return (
        <section id="contact" className="relative py-24 bg-[#f1abab] overflow-hidden flex items-center justify-center">
            {/* Background Texture */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-10 mix-blend-overlay" />
            </div>

            {/* Floating Elements (Subtle) */}
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[5%] hidden lg:block opacity-50"
            >
                <Heart className="w-12 h-12 text-white fill-white/50" />
            </motion.div>
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[10%] right-[5%] hidden lg:block opacity-50"
            >
                <MessageCircle className="w-12 h-12 text-white fill-white/50" />
            </motion.div>

            <div className="container mx-auto px-4 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm text-slate-900 font-bold uppercase tracking-wider text-xs mb-6 border border-white/40">
                        Ready to start your journey?
                    </span>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 drop-shadow-sm">
                        Together, Let's Make The NDIS <br /> Work Seamlessly For You.
                    </h2>

                    <p className="text-lg md:text-xl text-slate-800 font-medium max-w-2xl mx-auto mb-10 leading-relaxed opacity-90">
                        Experience a future of continued independence with support that truly understands your needs.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 hover:scale-[1.02] transition-all shadow-xl min-w-[200px]"
                        >
                            Contact Now
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>

                        <a
                            href="tel:0421622262"
                            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white text-slate-900 font-bold text-lg hover:bg-white/90 hover:scale-[1.02] transition-all shadow-xl min-w-[200px]"
                        >
                            <Phone className="mr-2 w-5 h-5" />
                            0421 622 262
                        </a>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-2 opacity-75">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-[#f1abab] overflow-hidden">
                                    <img src={`https://i.pravatar.cc/150?u=${i + 50}`} alt="user" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <span className="text-slate-900 font-semibold text-sm">Trusted by families across Melbourne</span>
                    </div>
                </motion.div>
            </div>

            {/* Watermark Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.05]">
                <span className="text-[25vw] font-black text-white leading-none tracking-tighter">JSCHOICE</span>
            </div>
        </section>
    );
};
