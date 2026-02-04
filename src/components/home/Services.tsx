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
import Link from "next/link";

const services = [
    {
        title: "Assistance with daily life",
        subtitle: "Personalized Home Care",
        description: "Accomplish both household and personal tasks in your home or shared space with our dedicated daily assistance.",
        icon: <Heart className="w-8 h-8" />,
        slug: "assistance-with-daily-life"
    },
    {
        title: "Group/Centre Activities",
        subtitle: "Social Engagement",
        description: "Enhance your mental and physical well-being through a variety of group and centre-based activities.",
        icon: <Users className="w-8 h-8" />,
        slug: "group-activities"
    },
    {
        title: "Emergency Respite",
        subtitle: "Immediate Support",
        description: "Short-term accommodation and care for those who need a safe, supportive place on an emergency basis.",
        icon: <Clock className="w-8 h-8" />,
        slug: "emergency-respite"
    },
    {
        title: "Nursing Care Assistance",
        subtitle: "Professional Medical",
        description: "Access to the best nurses providing comprehensive care to ensure you recover fast and safely.",
        icon: <Stethoscope className="w-8 h-8" />,
        slug: "nursing-care"
    },
    {
        title: "Community Participation",
        subtitle: "Socialization Support",
        description: "Access community resources and build lasting connections with others through our socialization programs.",
        icon: <Users2 className="w-8 h-8" />,
        slug: "community-participation"
    },
    {
        title: "Transportation Mobility",
        subtitle: "Mobility Assistance",
        description: "Get help reaching locations with your aids. Our support workers assist you every step of the way.",
        icon: <Car className="w-8 h-8" />,
        slug: "transportation"
    },
    {
        title: "Allied Health Support",
        subtitle: "Therapeutic Services",
        description: "Broad array of therapy from practitioners dedicated to helping you recover or manage your condition.",
        icon: <Activity className="w-8 h-8" />,
        slug: "allied-health"
    },
    {
        title: "Psychosocial Coaching",
        subtitle: "Mental Health Recovery",
        description: "Recovery coaches dedicated to helping you or your loved ones overcome specific types of disabilities.",
        icon: <Brain className="w-8 h-8" />,
        slug: "psychosocial-recovery-coach"
    }
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-[#0a0c12] relative overflow-hidden">
            {/* Subtle Texture */}
            <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-5 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
                            Our Capabilities
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            Comprehensive <span className="text-primary">Support Services</span>
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Professional care designed for clarity, safety, and your independence. We offer a wide range of NDIS services tailored to your goals.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="h-full"
                        >
                            <Link href={`/${service.slug}`} className="block h-full group">
                                <div className="flex flex-col h-full bg-[#151921] border border-white/5 group-hover:border-primary/50 rounded-2xl p-6 transition-colors duration-300">
                                    <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-slate-900 transition-colors duration-300">
                                        {service.icon}
                                    </div>

                                    <span className="text-xs font-bold text-primary/80 uppercase tracking-wider mb-2">
                                        {service.subtitle}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed mb-6 flex-1 text-sm">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center text-primary text-sm font-bold group-hover:gap-2 transition-all">
                                        <span>Learn More</span>
                                        <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 transition-all border border-white/10"
                    >
                        Contact Us for More Services
                    </button>
                </div>
            </div>
        </section>
    );
};
