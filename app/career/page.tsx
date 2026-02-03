import React from "react";
import { CareerHero } from "@/src/components/career/CareerHero";
import { CareerValues } from "@/src/components/career/CareerValues";
import { JobApplicationForm } from "@/src/components/career/JobApplicationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers | JS Choice Group",
    description: "Join our team and build a rewarding career in care and support.",
};

export default function CareerPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black selection:bg-primary/20 selection:text-primary">
            <CareerHero />
            <CareerValues />
            <JobApplicationForm />
        </main>
    );
}
