"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Heart, Shield, Users, Star, Smile } from "lucide-react";

const values = [
    {
        title: "Neuro-Affirming",
        description: "We embrace unique brain processing and celebrate neurodiversity in all its forms.",
        icon: <Brain className="w-8 h-8" />,
        color: "bg-[#f1abab]"
    },
    {
        title: "Heartfelt Care",
        description: "Every interaction is driven by genuine kindness, empathy, and respect for your story.",
        icon: <Heart className="w-8 h-8" />,
        color: "bg-[#abb3f1]"
    },
    {
        title: "Safety & Trust",
        description: "We are a registered NDIS provider committed to the highest standards of safety and integrity.",
        icon: <Shield className="w-8 h-8" />,
        color: "bg-emerald-400"
    },
    {
        title: "Cultural Inclusion",
        description: "We honor and respect diverse cultural backgrounds and traditions in our care.",
        icon: <Users className="w-8 h-8" />,
        color: "bg-orange-400"
    },
    {
        title: "Excellence",
        description: "Striving to be one of the best care providers through continuous learning and improvement.",
        icon: <Star className="w-8 h-8" />,
        color: "bg-yellow-400"
    },
    {
        title: "Empowerment",
        description: "We don't decide for you; we give you the tools and support to navigate your own journey.",
        icon: <Smile className="w-8 h-8" />,
        color: "bg-purple-400"
    }
];

export const OurValues = () => {
    return (
        <section className="py-20 md:py-32 bg-slate-50 dark:bg-black/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 dark:text-white"
                    >
                        Our Core Values
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 dark:text-slate-400 font-medium"
                    >
                        These principles guide every decision we make and every interaction we have with our participants.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-slate-100 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className={`${value.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                                {value.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                {value.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
