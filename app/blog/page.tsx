import React from "react";
import { BlogHero } from "@/src/components/blog/BlogHero";
import { BlogGrid } from "@/src/components/blog/BlogGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | JS Choice Group",
    description: "Explore insights, NDIS updates, and inspiring stories from the JS Choice Group community.",
};

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black selection:bg-primary/20 selection:text-primary">
            <BlogHero />
            <BlogGrid />
        </main>
    );
}
