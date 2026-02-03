"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Facebook,
    Instagram,
    Mail,
    Phone,
    MapPin,
    Clock,
    Heart
} from "lucide-react";
import Logo from "../../../public/assets/logo-img.png";
import NDISLogo from "../../../public/assets/footer-ndis-img.png";
import Acknowledgement from "../../../public/assets/acknowledgement-img.png";

const servicesLeft = [
    "Assistance With Daily Life",
    "Emergency Respite",
    "Assistance With Nursing Care",
    "Transportation Assistance",
    "Access To Community Activities",
    "NDIS Accommodation"
];

const servicesRight = [
    "Support Coordination",
    "Psychosocial Recovery Coach",
    "Allied Health Assistance",
    "Client And Family Advocacy For NDIS Participants Only",
    "NDIS Access Requests",
    "Innovative Community Participation"
];

export const Footer = () => {
    return (
        <footer className="bg-black text-white pt-24 pb-12 overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">

                    {/* Column 1: Logo and Socials */}
                    <div className="md:col-span-3 flex flex-col items-center md:items-start space-y-10">
                        <Link href="/" className="block">
                            <Image src={Logo} alt="JS Choice Logo" width={200} height={60} className="brightness-125" />
                        </Link>

                        <div className="flex gap-4">
                            {[Facebook, Instagram].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5 text-white" />
                                </Link>
                            ))}
                        </div>

                        {/* NDIS Logo Badge - Matching Image Style */}
                        <div className="flex flex-col items-center justify-center w-36">
                            <Image src={NDISLogo} alt="NDIS Logo" width={100} height={60} className="brightness-125" />
                        </div>
                    </div>

                    {/* Column 2: Services List */}
                    <div className="md:col-span-6">
                        <h4 className="text-primary font-bold text-xl mb-12 tracking-wider uppercase text-center md:text-left">
                            SERVICES
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                            <div className="space-y-5">
                                {servicesLeft.map((item) => (
                                    <Link key={item} href="#" className="block text-lg font-bold text-slate-100 hover:text-secondary transition-colors leading-snug text-center md:text-left">
                                        {item}
                                    </Link>
                                ))}
                            </div>
                            <div className="space-y-5">
                                {servicesRight.map((item) => (
                                    <Link key={item} href="#" className="block text-lg font-bold text-slate-100 hover:text-secondary transition-colors leading-snug text-center md:text-left">
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Contact Details */}
                    <div className="md:col-span-3">
                        <h4 className="text-primary font-bold text-xl mb-12 tracking-wider uppercase text-center md:text-left">
                            CONTACT US
                        </h4>
                        <ul className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-lg font-bold text-slate-100">0421 622 262</p>
                                    <p className="text-lg font-bold text-slate-100">03 9394 6305</p>
                                </div>
                            </li>
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-lg font-bold text-slate-100 italic">info@jschoicegroup.com.au</span>
                            </li>
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-4 max-w-[320px]">
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 mt-1">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div className="space-y-3">
                                    <p className="text-lg font-bold text-slate-100 leading-tight">Suite 106, Level 1, C5, 2 Main Street, Point Cook VICTORIA 3030</p>
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <Clock className="w-4 h-4 text-primary" />
                                        <p className="text-xs font-bold uppercase tracking-widest italic">PO Box 6282 Point Cook 3030 Victoria</p>
                                    </div>
                                </div>
                            </li>
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 mt-1">
                                    <Clock className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-lg font-bold text-slate-100 leading-tight">Office - 8 am to 6 pm, Care Services - 24 Hours</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Acknowledgement Section - Based on Footer Image */}
                <div className="pt-20 border-t border-white/10 text-center space-y-12">
                    <div className="flex justify-center gap-10">
                        {/* Aboriginal Flag */}
                        <Image src={Acknowledgement} alt="Acknowledgement" width={100} height={60} className="brightness-125" />
                    </div>

                    <div className="space-y-4 px-4">
                        <h5 className="text-primary font-black tracking-[0.2em] text-lg uppercase italic underline underline-offset-8">ACKNOWLEDGEMENT OF COUNTRY</h5>
                        <p className="text-lg leading-[1.8] text-slate-300 font-bold italic max-w-5xl mx-auto">
                            Js Choice – Care and Support pays tribute to the First Nations across Australia, acknowledging and honoring their lasting bond with the land, sea, culture, and community. We hold in high regard and celebrate the wisdom of Elders from the past, present, and those yet to come, and we extend this reverence to all contemporary First Nations individuals.
                        </p>
                    </div>
                </div>

                {/* Technical Bottom Line */}
                <div className="mt-24 pt-10 border-t border-white/5 flex flex-col items-center gap-6">
                    <p className="text-xs md:text-sm font-bold tracking-[0.1em] text-slate-500 uppercase text-center leading-relaxed">
                        Copyright © {new Date().getFullYear()} JS CHOICE GROUP PTY LTD Design by Crux Labs | ABN : 54 644 196 270 | Licence no : 4050118332
                    </p>
                </div>
            </div>
        </footer>
    );
};
