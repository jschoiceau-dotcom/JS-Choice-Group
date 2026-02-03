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
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-black/40 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 drop-shadow-sm">
                            Areas We Serve
                        </h2>
                        <div className="w-24 h-1.5 bg-secondary mx-auto mb-8 rounded-full" />
                        <p className="text-base md:text-xl text-slate-600 font-semibold leading-relaxed">
                            Based in Point Cook, Js Choice – Care and Support supports participants
                            in surrounding areas and across Melbourne&apos;s western and northern suburbs.
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
                            transition={{ delay: index * 0.05 }}
                            className="group flex items-center gap-3 bg-primary/10 border border-primary/20 px-6 py-4 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 cursor-default shadow-sm hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="w-8 h-8 rounded-full bg-white dark:bg-white/10 flex items-center justify-center group-hover:bg-white/20">
                                <MapPin className="w-4 h-4 text-primary group-hover:text-white" />
                            </div>
                            <span className="text-base md:text-lg font-bold text-slate-800 group-hover:text-white">{location}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
