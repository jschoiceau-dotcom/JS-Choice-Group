"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Upload, User, Mail, Phone, Briefcase, CheckCircle, ChevronRight, FileText } from "lucide-react";

const positions = [
    { id: "support-worker", label: "Support Worker", icon: <User className="w-5 h-5" /> },
    { id: "registered-nurse", label: "Registered Nurse", icon: <CheckCircle className="w-5 h-5" /> },
    { id: "care-coordinator", label: "Care Coordinator", icon: <Briefcase className="w-5 h-5" /> },
    { id: "admin", label: "Administration", icon: <FileText className="w-5 h-5" /> },
];

export const JobApplicationForm = () => {
    const [dragActive, setDragActive] = useState(false);
    const [fileName, setFileName] = useState<string | null>(null);
    const [selectedPosition, setSelectedPosition] = useState("");
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFileName(e.dataTransfer.files[0].name);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <section id="application-form" className="py-24 bg-white dark:bg-black relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[128px] translate-x-1/2" />
                <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary rounded-full blur-[100px] -translate-x-1/2" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Side: Call to Action */}
                    <div className="flex-1 lg:max-w-md sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                                Apply Now
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                                Start Your Journey <br />
                                <span className="text-primary">With Us.</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Ready to make a difference? Complete the form to take the first step towards a rewarding career. We're excited to learn more about you.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0 mt-1 shadow-sm">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white text-lg">Quick Application</h4>
                                        <p className="text-slate-500">Takes less than 2 minutes to complete.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-1 shadow-sm">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white text-lg">Secure Data</h4>
                                        <p className="text-slate-500">Your information is encrypted and safe.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: The Form */}
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-white/20 dark:border-white/5 p-8 md:p-12 relative overflow-hidden"
                        >
                            {/* Glow Effect */}
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />

                            <form className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 group-focus-within:text-primary transition-colors">First Name</label>
                                        <div className={`relative transition-all duration-300 ${focusedField === 'firstName' ? 'scale-[1.02]' : ''}`}>
                                            <input
                                                type="text"
                                                onFocus={() => setFocusedField('firstName')}
                                                onBlur={() => setFocusedField(null)}
                                                placeholder="John"
                                                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-transparent focus:border-primary/30 rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium placeholder:text-slate-400"
                                            />
                                            <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'firstName' ? 'text-primary' : 'text-slate-400'}`} />
                                        </div>
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 group-focus-within:text-primary transition-colors">Last Name</label>
                                        <div className={`relative transition-all duration-300 ${focusedField === 'lastName' ? 'scale-[1.02]' : ''}`}>
                                            <input
                                                type="text"
                                                onFocus={() => setFocusedField('lastName')}
                                                onBlur={() => setFocusedField(null)}
                                                placeholder="Doe"
                                                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-transparent focus:border-primary/30 rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium placeholder:text-slate-400"
                                            />
                                            <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'lastName' ? 'text-primary' : 'text-slate-400'}`} />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 group-focus-within:text-primary transition-colors">Phone</label>
                                        <div className={`relative transition-all duration-300 ${focusedField === 'phone' ? 'scale-[1.02]' : ''}`}>
                                            <input
                                                type="tel"
                                                onFocus={() => setFocusedField('phone')}
                                                onBlur={() => setFocusedField(null)}
                                                placeholder="+61 400 000 000"
                                                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-transparent focus:border-primary/30 rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium placeholder:text-slate-400"
                                            />
                                            <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'phone' ? 'text-primary' : 'text-slate-400'}`} />
                                        </div>
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 group-focus-within:text-primary transition-colors">Email</label>
                                        <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
                                            <input
                                                type="email"
                                                onFocus={() => setFocusedField('email')}
                                                onBlur={() => setFocusedField(null)}
                                                placeholder="john@example.com"
                                                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-transparent focus:border-primary/30 rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium placeholder:text-slate-400"
                                            />
                                            <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'email' ? 'text-primary' : 'text-slate-400'}`} />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Position Applied For</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {positions.map((pos) => (
                                            <div
                                                key={pos.id}
                                                onClick={() => setSelectedPosition(pos.id)}
                                                className={`cursor-pointer rounded-2xl p-4 border-2 flex items-center gap-3 transition-all duration-200 ${selectedPosition === pos.id ? 'border-primary bg-primary/5 shadow-md shadow-primary/10' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800/50 hover:border-primary/30'}`}
                                            >
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${selectedPosition === pos.id ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'}`}>
                                                    {pos.icon}
                                                </div>
                                                <span className={`font-bold text-sm ${selectedPosition === pos.id ? 'text-primary' : 'text-slate-600 dark:text-slate-300'}`}>{pos.label}</span>
                                                {selectedPosition === pos.id && <CheckCircle className="w-5 h-5 text-primary ml-auto" />}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Gender</label>
                                    <div className="relative">
                                        <select className="w-full bg-slate-50 dark:bg-slate-800/50 border-transparent rounded-2xl px-4 py-4 pl-4 pr-10 focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium appearance-none text-slate-600 dark:text-slate-300 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800">
                                            <option value="" disabled selected>Select gender...</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="non-binary">Non-binary</option>
                                            <option value="prefer-not-to-say">Prefer not to say</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <ChevronRight className="w-5 h-5 text-slate-400 rotate-90" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Upload CV / Resume</label>
                                    <div
                                        className={`relative border-2 border-dashed rounded-3xl p-8 text-center transition-all duration-300 group cursor-pointer ${dragActive ? "border-primary bg-primary/5 scale-[1.01]" : "border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/50"}`}
                                        onDragEnter={handleDrag}
                                        onDragLeave={handleDrag}
                                        onDragOver={handleDrag}
                                        onDrop={handleDrop}
                                    >
                                        <input
                                            type="file"
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            onChange={handleChange}
                                            accept=".pdf,.doc,.docx"
                                        />
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-sm">
                                                <Upload className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-lg text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                                                    {fileName ? fileName : "Drop your resume here"}
                                                </p>
                                                <p className="text-sm text-slate-500 mt-1">or click to browse files</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-black text-lg uppercase tracking-widest py-5 rounded-2xl hover:shadow-2xl hover:shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group mt-4 relative overflow-hidden"
                                >
                                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <span className="relative z-10 flex items-center gap-2">
                                        Submit Application
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
