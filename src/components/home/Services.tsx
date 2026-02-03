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
    ArrowRight
} from "lucide-react";

const services = [
    {
        title: "Assistance with daily life",
        description: "With our daily life assistance service, you will get to accomplish both household and personal tasks in your home or shared space.",
        icon: <Heart className="w-8 h-8" />,
        color: "bg-primary",
        shadow: "shadow-primary/20",
        link: "/assistance-with-daily-life"
    },
    {
        title: "Group/Centre Activities",
        description: "To enhance your mental and physical well-being, our staff will help you perform all types of group and centre-based activities.",
        icon: <Users className="w-8 h-8" />,
        color: "bg-secondary",
        shadow: "shadow-secondary/20",
        link: "/group-centre-activities"
    },
    {
        title: "Emergency Respite",
        description: "If you are looking for a place to move into for a few days on an emergency basis, we have got you covered. We will provide you with accommodation.",
        icon: <Clock className="w-8 h-8" />,
        color: "bg-primary/80",
        shadow: "shadow-primary/20",
        link: "/emergency-respite"
    },
    {
        title: "Assistance With Nursing Care",
        description: "We have access to the best nurses who will provide you with comprehensive care so that you can recover fast.",
        icon: <Stethoscope className="w-8 h-8" />,
        color: "bg-secondary/80",
        shadow: "shadow-secondary/20",
        link: "/assistance-with-nursing-care"
    },
    {
        title: "Access to community activities",
        description: "With our support, you will be able to access community resources and develop connections with others through socialisation.",
        icon: <Users className="w-8 h-8" />,
        color: "bg-primary/90",
        shadow: "shadow-primary/20",
        link: "/community-activities"
    },
    {
        title: "Transportation Assistance",
        description: "By opting for this service, you will get assistance with mobility. Our support workers will help you reach locations with the help of your aids and even assist you.",
        icon: <Car className="w-8 h-8" />,
        color: "bg-secondary/90",
        shadow: "shadow-secondary/20",
        link: "/transportation-assistance"
    },
    {
        title: "Allied Health Assistance",
        description: "We provide comprehensive allied health assistance where we offer a broad array of therapy. We have practitioners who will help you recover or manage your condition.",
        icon: <Stethoscope className="w-8 h-8" />,
        color: "bg-primary/70",
        shadow: "shadow-primary/20",
        link: "/allied-health"
    },
    {
        title: "Psychosocial recovery coaching",
        description: "Our psychosocial recovery coaches will help you or your loved one overcome challenges with this specific type of disability.",
        icon: <Brain className="w-8 h-8" />,
        color: "bg-secondary/70",
        shadow: "shadow-secondary/20",
        link: "/psychosocial-recovery-coaching"
    }
];

export const Services = () => {
    return (
        <section id="services" className="py-16 md:py-24 relative overflow-hidden bg-white dark:bg-black/40">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 drop-shadow-sm">
                            NDIS Support That Empowers
                        </h2>
                        <div className="w-24 h-1.5 bg-secondary mx-auto mb-8 rounded-full" />
                        <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto font-semibold leading-relaxed">
                            We offer a wide range of NDIS services designed to provide you with the care
                            you need to lead a fulfilling and independent life.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-white/5 p-8 rounded-[3rem] border border-slate-300 dark:border-white/10 flex flex-col items-start gap-6 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg ${service.shadow} group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>
                            <div className="flex-1 flex flex-col">
                                <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
                                <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-1">
                                    {service.description}
                                </p>
                                <button className="flex items-center gap-2 text-primary font-bold group/btn mt-auto">
                                    Learn More
                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="bg-primary/5 hover:bg-primary/10 text-primary px-12 py-5 rounded-2xl text-lg font-bold transition-all border border-primary/20 shadow-xl shadow-primary/5">
                        View All Services
                    </button>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
        </section>
    );
};
