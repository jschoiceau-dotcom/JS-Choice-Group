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
} from "lucide-react";
import Logo from "../../../public/assets/logo-img.webp";
import NDISLogo from "../../../public/assets/footer-ndis-img.webp";
import Acknowledgement from "../../../public/assets/acknowledgement-img.webp";

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
    "Client And Family Advocacy",
    "NDIS Access Requests",
    "Innovative Community Participation"
];

export const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8 md:pt-24 md:pb-12 overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 lg:mb-20">

                    {/* Column 1: Logo and Socials */}
                    <div className="lg:col-span-3 flex flex-col items-center lg:items-start space-y-8">
                        <Link href="/" className="block">
                            <Image src={Logo} alt="JS Choice Logo" width={180} height={54} className="brightness-125 w-48 h-auto object-contain" />
                        </Link>
                        <p className="text-slate-400 text-center lg:text-left text-sm leading-relaxed max-w-xs">
                            Empowering independence through personalized NDIS support services tailored to your unique needs.
                        </p>

                        <div className="flex gap-4">
                            {[Facebook, Instagram].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black transition-all duration-300 group"
                                >
                                    <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                                </Link>
                            ))}
                        </div>

                        {/* NDIS Logo Badge */}
                        <div className="pt-4">
                            <Image src={NDISLogo} alt="NDIS Logo" width={110} height={50} className="brightness-125 w-28 h-auto object-contain" />
                        </div>
                    </div>

                    {/* Column 2: Services List */}
                    <div className="lg:col-span-5">
                        <h4 className="text-primary font-bold text-lg mb-8 tracking-widest uppercase text-center lg:text-left border-b border-white/10 pb-4 lg:border-none lg:pb-0 inline-block lg:block mx-auto lg:mx-0">
                            Our Services
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 md:gap-y-4">
                            <div className="flex flex-col gap-3 min-w-0">
                                {servicesLeft.map((item) => (
                                    <Link key={item} href="#" className="text-sm md:text-base font-medium text-slate-300 hover:text-primary transition-colors hover:translate-x-1 duration-200 block text-center lg:text-left truncate">
                                        {item}
                                    </Link>
                                ))}
                            </div>
                            <div className="flex flex-col gap-3 min-w-0">
                                {servicesRight.map((item) => (
                                    <Link key={item} href="#" className="text-sm md:text-base font-medium text-slate-300 hover:text-primary transition-colors hover:translate-x-1 duration-200 block text-center lg:text-left truncate">
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Contact Details */}
                    <div className="lg:col-span-4">
                        <h4 className="text-primary font-bold text-lg mb-8 tracking-widest uppercase text-center lg:text-left border-b border-white/10 pb-4 lg:border-none lg:pb-0 inline-block lg:block mx-auto lg:mx-0">
                            Contact Us
                        </h4>
                        <ul className="space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <li className="flex flex-col lg:flex-row items-center lg:items-start gap-3 md:gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <a href="tel:0421622262" className="block text-base md:text-lg font-bold text-white hover:text-primary transition-colors">0421 622 262</a>
                                    <a href="tel:0393946305" className="block text-base md:text-lg font-bold text-white hover:text-primary transition-colors">03 9394 6305</a>
                                </div>
                            </li>
                            <li className="flex flex-col lg:flex-row items-center lg:items-start gap-3 md:gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <a href="mailto:info@jschoicegroup.com.au" className="text-base md:text-lg font-medium text-slate-300 hover:text-primary transition-colors break-all">
                                    info@jschoicegroup.com.au
                                </a>
                            </li>
                            <li className="flex flex-col lg:flex-row items-center lg:items-start gap-3 md:gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-1">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div className="space-y-2 max-w-xs">
                                    <p className="text-sm md:text-base font-medium text-slate-300 leading-relaxed text-balance">
                                        Suite 106, Level 1, C5, 2 Main Street, Point Cook VICTORIA 3030
                                    </p>
                                    <div className="flex flex-col items-center lg:items-start md:flex-row gap-2 text-slate-400 text-xs">
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-primary/70" /> PO Box 6282 Point Cook 3030</span>
                                    </div>
                                </div>
                            </li>
                            <li className="flex flex-col lg:flex-row items-center lg:items-start gap-3 md:gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 bg-transparent">
                                    <Clock className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-sm md:text-base font-medium text-slate-300 leading-relaxed max-w-xs text-balance">
                                    Office: 8am - 6pm<br />Care Services: 24 Hours
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Acknowledgement Section */}
                <div className="pt-16 md:pt-20 border-t border-white/10 text-center space-y-10">
                    <div className="flex justify-center">
                        <Image src={Acknowledgement} alt="Acknowledgement" width={90} height={50} className="brightness-125 w-24 h-auto object-contain" />
                    </div>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        <h5 className="text-primary font-bold tracking-[0.15em] text-sm md:text-base uppercase">Acknowledgement of Country</h5>
                        <p className="text-sm md:text-lg leading-[1.8] text-slate-400 italic px-2">
                            "Js Choice – Care and Support pays tribute to the First Nations across Australia, acknowledging and honoring their lasting bond with the land, sea, culture, and community. We hold in high regard and celebrate the wisdom of Elders from the past, present, and those yet to come."
                        </p>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="mt-16 pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-xs text-slate-600 font-medium uppercase tracking-wider">
                        <p>© {new Date().getFullYear()} JS CHOICE GROUP PTY LTD</p>
                        <p>ABN: 54 644 196 270 | Licence: 4050118332</p>
                        <p>Design by Crux Labs</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
