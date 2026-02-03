"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, ExternalLink, ShieldCheck, HelpCircle, FileCheck, ArrowRight } from "lucide-react";

const resources = [
    {
        category: "NDIS Essentials",
        items: [
            {
                title: "NDIS Price Guide",
                description: "Latest pricing arrangements and price limits.",
                icon: <FileText className="w-5 h-5" />,
                action: "Download PDF",
                link: "#"
            },
            {
                title: "Understanding Your Plan",
                description: "A guide to reading and utilizing your NDIS plan.",
                icon: <HelpCircle className="w-5 h-5" />,
                action: "Read Guide",
                link: "#"
            },
            {
                title: "Participant Handbook",
                description: "Everything you need to know about our services.",
                icon: <BookOpen className="w-5 h-5" />, // Will import BookOpen
                action: "Download PDF",
                link: "#"
            }
        ]
    },
    {
        category: "Forms & Agreements",
        items: [
            {
                title: "Referral Form",
                description: "Refer a participant to JS Choice Group services.",
                icon: <FileCheck className="w-5 h-5" />,
                action: "Online Form",
                link: "/contact-us" // Linking to contact for now as referral is there
            },
            {
                title: "Service Agreement",
                description: "Template for our standard service agreement.",
                icon: <ShieldCheck className="w-5 h-5" />,
                action: "View Sample",
                link: "#"
            },
            {
                title: "Feedback & Complaints",
                description: "We value your feedback to improve our care.",
                icon: <MessageSquare className="w-5 h-5" />, // Will import MessageSquare
                action: "Submit Feedback",
                link: "#"
            }
        ]
    },
    {
        category: "External Links",
        items: [
            {
                title: "NDIS Official Website",
                description: "The primary source for all NDIS information.",
                icon: <ExternalLink className="w-5 h-5" />,
                action: "Visit Site",
                link: "https://www.ndis.gov.au",
                external: true
            },
            {
                title: "NDIS Commission",
                description: "Quality and Safeguards Commission website.",
                icon: <ShieldCheck className="w-5 h-5" />,
                action: "Visit Site",
                link: "https://www.ndiscommission.gov.au",
                external: true
            }
        ]
    }
];

import { BookOpen, MessageSquare } from "lucide-react";

export const ResourcesList = () => {
    return (
        <section className="py-20 bg-slate-50 dark:bg-black/50">
            <div className="container mx-auto px-4">
                {resources.map((section, sectionIndex) => (
                    <div key={section.category} className="mb-20 last:mb-0">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3"
                        >
                            <span className="w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                            {section.category}
                        </motion.h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {section.items.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden hover:border-primary/30 transition-all duration-300"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                                        {/* Large background icon */}
                                        {React.cloneElement(item.icon as React.ReactElement, { className: "w-32 h-32" })}
                                    </div>

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            {item.icon}
                                        </div>

                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                                            {item.description}
                                        </p>

                                        <a
                                            href={item.link}
                                            target={(item as any).external ? "_blank" : undefined}
                                            rel={(item as any).external ? "noopener noreferrer" : undefined}
                                            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors"
                                        >
                                            {item.action}
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
