"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Heart,
    Users,
    Stethoscope,
    Car,
    Brain,
    Clock,
    Activity,
    Users2,
    ArrowRight
} from "lucide-react";

const services = [
    {
        title: "Assistance with daily life",
        subtitle: "Personalized Home Care",
        description: "Accomplish both household and personal tasks in your home or shared space with our dedicated daily assistance.",
        icon: <Heart className="w-9 h-9" />,
    },
    {
        title: "Group/Centre Activities",
        subtitle: "Social Engagement",
        description: "Enhance your mental and physical well-being through a variety of group and centre-based activities.",
        icon: <Users className="w-9 h-9" />,
    },
    {
        title: "Emergency Respite",
        subtitle: "Immediate Support",
        description: "Short-term accommodation and care for those who need a safe, supportive place on an emergency basis.",
        icon: <Clock className="w-9 h-9" />,
    },
    {
        title: "Nursing Care Assistance",
        subtitle: "Professional Medical",
        description: "Access to the best nurses providing comprehensive care to ensure you recover fast and safely.",
        icon: <Stethoscope className="w-9 h-9" />,
    },
    {
        title: "Community Participation",
        subtitle: "Socialization Support",
        description: "Access community resources and build lasting connections with others through our socialization programs.",
        icon: <Users2 className="w-9 h-9" />,
    },
    {
        title: "Transportation Mobility",
        subtitle: "Mobility Assistance",
        description: "Get help reaching locations with your aids. Our support workers assist you every step of the way.",
        icon: <Car className="w-9 h-9" />,
    },
    {
        title: "Allied Health Support",
        subtitle: "Therapeutic Services",
        description: "Broad array of therapy from practitioners dedicated to helping you recover or manage your condition.",
        icon: <Activity className="w-9 h-9" />,
    },
    {
        title: "Psychosocial Coaching",
        subtitle: "Mental Health Recovery",
        description: "Recovery coaches dedicated to helping you or your loved ones overcome specific types of disabilities.",
        icon: <Brain className="w-9 h-9" />,
    }
];

export const Services = () => {
    return (
        <section id="services" className="py-24 relative overflow-hidden bg-[#0a0c12]">
            {/* Optimized Background - Subtle Noise and Gradients instead of large images */}
            <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -ml-48 -mb-48 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-4 block">
                            NDIS Registered Care
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white leading-tight">
                            Reliable <span className="text-primary">Support Services</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-bold">
                            Professional care designed for clarity, safety, and your independence.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-[#151921] border border-white/5 rounded-3xl p-8 flex flex-col h-full transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
                                {service.icon}
                            </div>

                            <div className="flex-1 flex flex-col">
                                <span className="text-[10px] font-black text-primary/80 uppercase tracking-widest mb-2">
                                    {service.subtitle}
                                </span>
                                <h4 className="text-2xl font-black text-white mb-4 leading-tight">
                                    {service.title}
                                </h4>
                                <p className="text-[17px] text-slate-300 font-bold leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                <div className="mt-auto flex items-center gap-2 text-primary font-black uppercase text-xs tracking-[0.1em] group-hover:gap-3 transition-all duration-300">
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 pt-16 border-t border-white/5 text-center">
                    <p className="text-white/30 italic text-lg max-w-4xl mx-auto font-medium leading-relaxed">
                        "Js Choice Care and Support is built on principles of respect, safety, inclusivity, and compassion.
                        We focus on your independence and well-being every single day."
                    </p>
                </div>
            </div>
        </section>
    );
};
