"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    Phone,
    Mail,
    Clock,
    ArrowRight,
    ChevronDown,
    Heart,
    Users,
    Stethoscope,
    Car,
    Brain,
    Shield,
    Activity,
    ClipboardList,
    Home,
    Search,
    UserCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "../../../public/assets/logo-img.webp";

const servicesItems = [
    {
        title: "Daily Life Assistance",
        description: "Personal and household tasks for independent living.",
        icon: <Heart className="w-5 h-5" />,
    },
    {
        title: "Group Activities",
        description: "Mental and physical well-being through community.",
        icon: <Users className="w-5 h-5" />,
    },
    {
        title: "Emergency Respite",
        description: "Quick accommodation and care in urgent situations.",
        icon: <Home className="w-5 h-5" />,
    },
    {
        title: "Nursing Care",
        description: "Comprehensive care from registered medical experts.",
        icon: <Stethoscope className="w-5 h-5" />,
    },
    {
        title: "Community Access",
        description: "Develop social connections and access resources.",
        icon: <Activity className="w-5 h-5" />,
    },
    {
        title: "Transportation",
        description: "Safe and reliable mobility assistance for appointments.",
        icon: <Car className="w-5 h-5" />,
    },
    {
        title: "Allied Health",
        description: "Broad array of therapy from specialized practitioners.",
        icon: <ClipboardList className="w-5 h-5" />,
    },
    {
        title: "Recovery Coaching",
        description: "Overcome challenges related to psychosocial disability.",
        icon: <Brain className="w-5 h-5" />,
    },
    {
        title: "NDIS Access",
        description: "Expert guidance for your NDIS access requests.",
        icon: <Search className="w-5 h-5" />,
    },
    {
        title: "Support Coordination",
        description: "Seamlessly manage your NDIS plan and services.",
        icon: <Shield className="w-5 h-5" />,
    },
    {
        title: "Family Advocacy",
        description: "Professional advocacy for NDIS participants.",
        icon: <UserCircle className="w-5 h-5" />,
    },
    {
        title: "Innovative Participation",
        description: "Unique ways to engage with your local community.",
        icon: <ArrowRight className="w-5 h-5" />,
    }
];

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "About Us", href: "/about-us" },
    { name: "Blog", href: "/blog" },
    { name: "Career", href: "/career" },
    { name: "Resources", href: "/resources" },
    { name: "Contact Us", href: "/contact-us" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out",
                isScrolled ? "py-2" : "py-4"
            )}
        >
            <div className="container mx-auto px-4">
                {/* Top Info Bar */}
                {!isScrolled && (
                    <div className="hidden lg:flex justify-between items-center bg-white/50 backdrop-blur-md border border-white rounded-full px-8 py-3 mb-4 text-sm text-slate-700 dark:text-white/80 font-bold">
                        <div className="flex gap-8">
                            <span className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-primary" />
                                0393 946 305 / 0421 622 262
                            </span>
                            <span className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-secondary" />
                                info@jschoicegroup.com.au
                            </span>
                        </div>
                        <div className="flex gap-4 items-center text-primary">
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                Office - 8 am to 6 pm, Care Services - 24 Hours
                            </span>
                        </div>
                    </div>
                )}

                {/* Main Navbar */}
                <div
                    className={cn(
                        "glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 backdrop-blur-xl",
                        isScrolled ? "bg-white/90 dark:bg-black/90 shadow-lg" : "bg-white/75 dark:bg-white/10"
                    )}
                >
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={Logo}
                            alt="JS Choice Logo"
                            width={100}
                            height={40}
                            className="w-auto h-8 md:h-10"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative py-2"
                                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
                            >
                                <Link
                                    href={link.href}
                                    className="text-sm font-bold hover:text-primary transition-all duration-300 flex items-center gap-1 group"
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isServicesOpen && "rotate-180")} />
                                    )}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                                </Link>

                                {link.hasDropdown && (
                                    <AnimatePresence>
                                        {isServicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                                className="absolute top-[calc(100%+5px)] -left-48 lg:-left-96 w-[600px] lg:w-[800px] bg-white border border-slate-200 shadow-2xl rounded-[2rem] p-6 overflow-hidden z-[60]"
                                            >
                                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                                    {servicesItems.map((item) => (
                                                        <Link
                                                            key={item.title}
                                                            href={`#services`}
                                                            className="flex gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-300 group/item"
                                                        >
                                                            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover/item:bg-white group-hover/item:border-primary/20 group-hover/item:shadow-lg transition-all text-primary">
                                                                {React.cloneElement(item.icon as React.ReactElement, { className: "w-4 h-4" })}
                                                            </div>
                                                            <div className="space-y-0.5">
                                                                <h5 className="font-bold text-sm group-hover/item:text-primary transition-colors">{item.title}</h5>
                                                                <p className="text-[12px] text-slate-500 font-medium leading-tight">{item.description}</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>

                                                <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center bg-slate-50 -mx-6 -mb-6 px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                                                            <Heart className="w-4 h-4 fill-current" />
                                                        </div>
                                                        <p className="text-xs font-bold text-slate-600">Empowering your future care.</p>
                                                    </div>
                                                    <Link href="#services" className="text-primary font-black text-sm uppercase tracking-widest hover:underline md:flex items-center gap-2">
                                                        See All Services <ArrowRight className="w-4 h-4" />
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <Link
                            href="#contact"
                            className="bg-primary text-white px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center gap-2 group hover:scale-105 active:scale-95"
                        >
                            Referral
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-3 rounded-2xl glass text-foreground active:scale-90 transition-transform"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="fixed inset-y-0 right-0 w-[80%] max-w-sm glass-dark bg-white shadow-2xl p-8 md:hidden z-[70] overflow-y-auto"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex justify-between items-center mb-12">
                                <Image src={Logo} alt="Logo" width={120} height={40} />
                                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-500">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <div key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-2xl font-black py-4 flex items-center justify-between border-b border-slate-50 last:border-0 hover:text-primary transition-colors"
                                            onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                            {link.hasDropdown && <ChevronDown className="w-5 h-5 opacity-50" />}
                                        </Link>

                                        {link.hasDropdown && (
                                            <div className="grid grid-cols-1 gap-4 py-6 px-4">
                                                {servicesItems.slice(0, 5).map((item) => (
                                                    <Link
                                                        key={item.title}
                                                        href={`#services`}
                                                        className="flex items-center gap-3 text-slate-600 font-bold"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                                        {item.title}
                                                    </Link>
                                                ))}
                                                <Link href="#services" className="text-primary font-black uppercase tracking-tighter text-sm">View More +</Link>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-12">
                                <Link
                                    href="#contact"
                                    className="bg-primary text-white w-full py-4 rounded-2xl text-center font-black uppercase tracking-widest block shadow-xl shadow-primary/20"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Make a Referral
                                </Link>
                                <div className="mt-8 flex justify-center gap-8">
                                    <a href="tel:0421622262" className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-primary"><Phone className="w-5 h-5" /></a>
                                    <a href="mailto:info@jschoicegroup.com.au" className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-secondary"><Mail className="w-5 h-5" /></a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
