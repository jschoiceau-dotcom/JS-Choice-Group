"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@components/shadcn-ui/accordion";

const faqs = [
    {
        question: "Can your support coordinators connect me with NDIS providers?",
        answer: "Yes, based on your requirements, our support coordinators will connect you with NDIS providers. They will also help you develop skills with which you can manage the service providers on your own."
    },
    {
        question: "What is the NDIS?",
        answer: "The National Disability Insurance Scheme (NDIS) is Australia's national scheme for people with disability, providing funding directly to individuals for the support and services they need."
    },
    {
        question: "How can JS Choice Group help me?",
        answer: "We provide a wide range of support services including daily life assistance, community participation, nursing care, and transport, tailored to your unique goals."
    },
    {
        question: "Who is eligible for NDIS support?",
        answer: "Eligibility generally depends on age (under 65), residency status in Australia, and having a permanent and significant disability."
    },
    {
        question: "Can I choose my own support workers?",
        answer: "Yes! We prioritize choice and control, working with you to match you with support workers who understand your needs and share your interests."
    }
];

export const FAQ = () => {
    return (
        <section className="py-20 md:py-32 bg-white dark:bg-black/20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">
                            FAQ
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                            Frequently Asked Questions
                        </h2>
                        <div className="w-20 h-1.5 bg-secondary mx-auto mb-8 rounded-full" />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] rounded-2xl px-6 md:px-8 data-[state=open]:bg-white dark:data-[state=open]:bg-white/5 data-[state=open]:shadow-md transition-all duration-300"
                            >
                                <AccordionTrigger className="text-lg font-bold text-slate-900 dark:text-white py-6 hover:no-underline hover:text-primary transition-colors text-left">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed pb-6 pt-2">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};
