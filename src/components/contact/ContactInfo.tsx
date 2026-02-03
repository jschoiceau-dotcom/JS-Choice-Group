"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

export const ContactInfo = () => {
    return (
        <div className="space-y-8">
            <div className="mb-8">
                <span className="text-primary font-bold tracking-wider uppercase text-sm">Contact Information</span>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-2">
                    Let's Start a Conversation
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg leading-relaxed">
                    Whether you prefer a phone call, email, or a visit to our office, we are here to make connecting with us as easy as possible.
                </p>
            </div>

            <div className="grid gap-6">
                <motion.a
                    href="tel:0393946305"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-colors hover:border-primary/30 group"
                >
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Call Us</h3>
                        <p className="text-slate-600 dark:text-slate-400 font-medium">0393 946 305 / 0421 622 262</p>
                        <span className="text-sm text-primary font-bold mt-2 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0">
                            Call Now <ExternalLink className="w-3 h-3" />
                        </span>
                    </div>
                </motion.a>

                <motion.a
                    href="mailto:info@jschoicegroup.com.au"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-colors hover:border-secondary/30 group"
                >
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Email Us</h3>
                        <p className="text-slate-600 dark:text-slate-400 font-medium break-all">info@jschoicegroup.com.au</p>
                        <span className="text-sm text-secondary font-bold mt-2 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0">
                            Send Email <ExternalLink className="w-3 h-3" />
                        </span>
                    </div>
                </motion.a>

                <div className="flex items-start gap-4 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 shrink-0">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Visit Us</h3>
                        <p className="text-slate-600 dark:text-slate-400 font-medium">
                            Suite 106, Level 1, C5, 2 Main Street, <br />
                            Point Cook VICTORIA 3030
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 shrink-0">
                        <Clock className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Business Hours</h3>
                        <p className="text-slate-600 dark:text-slate-400 font-medium">
                            Office: 8:00 AM - 6:00 PM <br />
                            <span className="text-primary font-bold">Care Services: 24 Hours</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
