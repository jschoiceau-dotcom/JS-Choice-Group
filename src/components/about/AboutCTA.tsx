"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export const AboutCTA = () => {
    return (
        <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-slate-900 dark:bg-white/10 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10 max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                            Ready to experience care that puts <span className="text-primary">you first?</span>
                        </h2>
                        <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                            Connect with our team today and let's start a conversation about your goals and how we can support them.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a
                                href="#contact"
                                className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors flex items-center gap-2 group"
                            >
                                Get in Touch
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="mailto:info@jschoicegroup.com.au"
                                className="px-10 py-5 bg-transparent border-2 border-slate-700 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-colors flex items-center gap-2"
                            >
                                <Mail className="w-5 h-5" />
                                Email Us
                            </a>
                        </div>
                    </motion.div>

                    {/* Background Gradients */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-30">
                        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
                    </div>
                </div>
            </div>
        </section>
    );
};
