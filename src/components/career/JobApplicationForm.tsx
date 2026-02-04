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
                    <div className="flex-1 w-full relative group">
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                x: [0, 20, 0],
                                y: [0, -20, 0]
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                            style={{ willChange: "transform" }}
                            className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-[60px] pointer-events-none z-0"
                        />
                        <motion.div
                            animate={{
                                scale: [1.05, 1, 1.05],
                                x: [0, -30, 0],
                                y: [0, 30, 0]
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                            style={{ willChange: "transform" }}
                            className="absolute -bottom-10 -right-10 w-80 h-80 bg-secondary/20 rounded-full blur-[80px] pointer-events-none z-0"
                        />

                        {/* Floating Decorative Glass Shapes */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            style={{ willChange: "transform" }}
                            className="absolute -top-12 -right-4 w-20 h-20 bg-white/10 backdrop-blur-lg rounded-[1.5rem] border border-white/20 shadow-xl z-20 flex items-center justify-center hidden lg:flex overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                            <div className="w-8 h-8 bg-white/10 rounded-full animate-pulse blur-sm" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            style={{ willChange: "transform" }}
                            className="absolute -bottom-8 -left-8 w-16 h-16 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-xl z-20 flex items-center justify-center hidden lg:flex overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-bl from-secondary/10 to-transparent" />
                            <div className="w-6 h-6 bg-white/10 rounded-full animate-bounce blur-sm" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            {/* Static Glow Border */}
                            <div className="absolute -inset-[1px] rounded-[2.6rem] bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-40 blur-[2px]" />

                            <div className="bg-white/70 dark:bg-slate-900/90 backdrop-blur-xl rounded-[2.5rem] shadow-[0_25px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_25px_50px_rgba(0,0,0,0.4)] border border-white/60 dark:border-white/10 p-6 md:p-10 relative overflow-hidden">
                                {/* Moving Mesh Gradient Background */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.05),transparent_70%)] pointer-events-none" />

                                <form className="space-y-6 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2 group/field">
                                            <label className="text-sm font-black text-slate-800 dark:text-slate-100 ml-1 block">First Name</label>
                                            <div className={`relative transition-all duration-300 ${focusedField === 'firstName' ? 'scale-[1.01]' : ''}`}>
                                                <input
                                                    type="text"
                                                    onFocus={() => setFocusedField('firstName')}
                                                    onBlur={() => setFocusedField(null)}
                                                    placeholder="John"
                                                    className="w-full bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:border-primary rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-base font-bold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                                />
                                                <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'firstName' ? 'text-primary' : 'text-slate-400'}`} />
                                            </div>
                                        </div>
                                        <div className="space-y-2 group/field">
                                            <label className="text-sm font-black text-slate-800 dark:text-slate-100 ml-1 block">Last Name</label>
                                            <div className={`relative transition-all duration-300 ${focusedField === 'lastName' ? 'scale-[1.01]' : ''}`}>
                                                <input
                                                    type="text"
                                                    onFocus={() => setFocusedField('lastName')}
                                                    onBlur={() => setFocusedField(null)}
                                                    placeholder="Doe"
                                                    className="w-full bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:border-primary rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-base font-bold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                                />
                                                <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'lastName' ? 'text-primary' : 'text-slate-400'}`} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2 group/field">
                                            <label className="text-sm font-black text-slate-800 dark:text-slate-100 ml-1 block">Phone Number</label>
                                            <div className={`relative transition-all duration-300 ${focusedField === 'phone' ? 'scale-[1.01]' : ''}`}>
                                                <input
                                                    type="tel"
                                                    onFocus={() => setFocusedField('phone')}
                                                    onBlur={() => setFocusedField(null)}
                                                    placeholder="+61 000 000 000"
                                                    className="w-full bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:border-primary rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-base font-bold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                                />
                                                <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'phone' ? 'text-primary' : 'text-slate-400'}`} />
                                            </div>
                                        </div>
                                        <div className="space-y-2 group/field">
                                            <label className="text-sm font-black text-slate-800 dark:text-slate-100 ml-1 block">Email Address</label>
                                            <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.01]' : ''}`}>
                                                <input
                                                    type="email"
                                                    onFocus={() => setFocusedField('email')}
                                                    onBlur={() => setFocusedField(null)}
                                                    placeholder="example@mail.com"
                                                    className="w-full bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:border-primary rounded-2xl px-4 py-4 pl-12 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-base font-bold text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                                />
                                                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'email' ? 'text-primary' : 'text-slate-400'}`} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-black text-slate-800 dark:text-slate-100 ml-1 uppercase tracking-wider">Position Applied For</label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {positions.map((pos) => (
                                                <div
                                                    key={pos.id}
                                                    onClick={() => setSelectedPosition(pos.id)}
                                                    className={`cursor-pointer rounded-2xl p-4 border flex items-center gap-3 transition-all duration-300 ${selectedPosition === pos.id ? 'border-primary/50 bg-primary/20 shadow-[0_0_25px_rgba(var(--primary-rgb),0.2)] scale-[1.03]' : 'border-slate-200 dark:border-white/5 bg-white/60 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-800/80'}`}
                                                >
                                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${selectedPosition === pos.id ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/30' : 'bg-slate-100/50 dark:bg-slate-700/50 text-slate-500'}`}>
                                                        {pos.icon}
                                                    </div>
                                                    <span className={`font-black text-sm ${selectedPosition === pos.id ? 'text-primary' : 'text-slate-700 dark:text-slate-200'}`}>{pos.label}</span>
                                                    {selectedPosition === pos.id && <CheckCircle className="w-5 h-5 text-primary ml-auto" />}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-black text-slate-800 dark:text-slate-100 ml-1">Gender</label>
                                        <div className="relative">
                                            <select className="w-full bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-white/10 focus:border-primary rounded-2xl px-4 py-4 pl-4 pr-10 focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold text-slate-900 dark:text-white appearance-none cursor-pointer">
                                                <option value="" disabled selected>Select...</option>
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
                                        <label className="text-sm font-black text-slate-800 dark:text-slate-100 ml-1">CV / Resume</label>
                                        <div
                                            className={`relative border-2 border-dashed rounded-[1.5rem] p-6 text-center transition-all duration-300 group/upload cursor-pointer ${dragActive ? "border-primary bg-primary/10" : "border-slate-300/50 dark:border-white/10 bg-white/40 dark:bg-slate-800/40 hover:border-primary/50"}`}
                                            onDragEnter={handleDrag}
                                            onDragLeave={handleDrag}
                                            onDragOver={handleDrag}
                                            onDrop={handleDrop}
                                        >
                                            <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={handleChange} accept=".pdf,.doc,.docx" />
                                            <div className="flex flex-col items-center gap-2">
                                                <Upload className="w-10 h-10 text-primary group-hover/upload:scale-110 group-hover/upload:-translate-y-1 transition-all" />
                                                <div>
                                                    <p className="font-bold text-base text-slate-700 dark:text-slate-100 leading-tight">
                                                        {fileName ? fileName : "Upload Resume"}
                                                    </p>
                                                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-tighter">PDF, DOC (Max 5MB)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        className="w-full bg-primary text-black font-black text-base uppercase tracking-widest py-5 rounded-xl hover:shadow-[0_15px_50px_rgba(var(--primary-rgb),0.5)] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group/btn mt-2 relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                                        <span className="relative z-10 flex items-center gap-2">
                                            Submit Application
                                            <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
