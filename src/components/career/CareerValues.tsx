"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Clock, TrendingUp, Users } from "lucide-react";

const benefits = [
    {
        title: "Impactful Work",
        description: "Every day, you'll make a tangible difference in someone's life, helping them achieve independence and joy.",
        icon: <Heart className="w-6 h-6" />,
        color: "bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400"
    },
    {
        title: "Flexible Schedule",
        description: "We believe in work-life balance. Enjoy flexible shifts that adapt to your lifestyle and personal needs.",
        icon: <Clock className="w-6 h-6" />,
        color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
    },
    {
        title: "Career Growth",
        description: "Access ongoing training, mentorship programs, and clear pathways for professional advancement.",
        icon: <TrendingUp className="w-6 h-6" />,
        color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400"
    },
    {
        title: "Supportive Team",
        description: "Join a community that cares about you. We foster a culture of respect, collaboration, and mutual support.",
        icon: <Users className="w-6 h-6" />,
        color: "bg-violet-50 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400"
    }
];

export const CareerValues = () => {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center md:text-left mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                        Why <span className="text-primary">JS Choice?</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                        We don't just offer jobs; we offer careers built on purpose, growth, and community.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${benefit.color} flex items-center justify-center mb-6`}>
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
