"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
    "Lara", "South Morang", "Epping", "Tarneit", "Craigieburn",
    "Geelong", "Point Cook", "Werribee", "Hoppers Crossing", "Williams Landing",
    "Laverton", "Altona", "Altona North", "Truganina", "Footscray",
    "Shepparton", "Altona Meadows"
];

export const AreasWeServe = () => {
    return (
        <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
                            Service Areas
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                            Areas We Serve
                        </h2>
                        <div className="w-20 h-1.5 bg-secondary mx-auto mb-8 rounded-full" />
                        <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            Based in Point Cook, Js Choice – Care and Support supports participants
                            in surrounding areas and across Melbourne's western and northern suburbs.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {locations.map((location, index) => (
                        <motion.div
                            key={location}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.03 }}
                            className="group flex items-center gap-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-6 py-3 rounded-full hover:border-primary hover:shadow-lg transition-all duration-300 cursor-default"
                        >
                            <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                            <span className="text-base font-semibold text-slate-700 dark:text-slate-200">{location}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-slate-500 dark:text-slate-500">
                        Don't see your suburb? <a href="/contact-us" className="text-primary font-bold hover:underline">Contact us</a> to check availability.
                    </p>
                </div>
            </div>
        </section>
    );
};
