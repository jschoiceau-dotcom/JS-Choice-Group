import React from "react";
import { ResourcesHero } from "@/src/components/resources/ResourcesHero";
import { ResourcesList } from "@/src/components/resources/ResourcesList";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resources | JS Choice Group",
    description: "Access essential NDIS guides, forms, and resources to support your journey.",
};

export default function ResourcesPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black selection:bg-primary/20 selection:text-primary">
            <ResourcesHero />
            <ResourcesList />
        </main>
    );
}
