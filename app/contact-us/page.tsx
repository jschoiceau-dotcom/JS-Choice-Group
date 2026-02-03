import React from "react";
import { ContactHero } from "@/src/components/contact/ContactHero";
import { ContactInfo } from "@/src/components/contact/ContactInfo";
import { ContactForm } from "@/src/components/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | JS Choice Group",
    description: "Get in touch with JS Choice Group. We are here to answer your questions and support your NDIS journey.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black selection:bg-primary/20 selection:text-primary">
            <ContactHero />

            <section className="py-20 bg-white dark:bg-black relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        {/* Left Column: Info */}
                        <div className="lg:sticky lg:top-32">
                            <ContactInfo />
                        </div>

                        {/* Right Column: Form */}
                        <div className="w-full">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
