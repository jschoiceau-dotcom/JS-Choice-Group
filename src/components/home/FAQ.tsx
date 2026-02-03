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
        <section className="py-16 md:py-24 bg-white dark:bg-black/20">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 drop-shadow-sm">
                            Frequently Asked Question
                        </h2>
                        <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-none bg-slate-50 dark:bg-white/[0.03] rounded-[2rem] px-8 overflow-hidden transition-all duration-300 data-[state=open]:bg-secondary/10 data-[state=open]:ring-2 data-[state=open]:ring-secondary/20"
                            >
                                <AccordionTrigger className="text-lg md:text-xl font-bold text-slate-900 py-8 hover:no-underline hover:text-primary transition-colors text-left flex gap-4">
                                    <span className="flex-1">{faq.question}</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-base md:text-lg text-slate-700 font-medium leading-relaxed pb-8 pl-0">
                                    <div className="pt-4 border-t border-secondary/10">
                                        {faq.answer}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};
