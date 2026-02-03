"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Link from "next/link";

// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Understanding the New NDIS Price Guide: What It Means for You",
        excerpt: "The latest NDIS price guide has been released. Here's a breakdown of the key changes and how they impact participants and providers.",
        category: "NDIS Updates",
        date: "Feb 1, 2026",
        readTime: "5 min read",
        image: "/assets/blog/blog_ndis_guide.png",
        featured: true,
    },
    {
        id: 2,
        title: "5 Ways to Make the Most of Your Support Coordination",
        excerpt: "Support coordination can unlock new opportunities. Learn strategies to maximize the value of this crucial service.",
        category: "Tips & Guides",
        date: "Jan 28, 2026",
        readTime: "4 min read",
        image: "/assets/blog/blog_support_coordination.png",
        featured: false,
    },
    {
        id: 3,
        title: "A Day in the Life of a Support Worker at JS Choice",
        excerpt: "Ever wondered what it's like to work in disability support? Follow Sarah through a typical day of care and connection.",
        category: "Our Stories",
        date: "Jan 22, 2026",
        readTime: "7 min read",
        image: "/assets/blog/blog_support_worker.png",
        featured: true,
    },
    {
        id: 4,
        title: "Community Participation: Building Connections That Last",
        excerpt: "Social connection is key to well-being. Discover how our community access programs foster meaningful relationships.",
        category: "Community",
        date: "Jan 15, 2026",
        readTime: "6 min read",
        image: "/assets/blog/blog_community.png",
        featured: false,
    },
    {
        id: 5,
        title: "Navigating Your First NDIS Plan: A Beginner's Guide",
        excerpt: "New to the NDIS? This comprehensive guide will walk you through understanding and utilizing your first plan effectively.",
        category: "Tips & Guides",
        date: "Jan 10, 2026",
        readTime: "8 min read",
        image: "/assets/blog/blog_ndis_plan.png",
        featured: false,
    },
    {
        id: 6,
        title: "The Importance of Allied Health in Your NDIS Journey",
        excerpt: "From physiotherapy to speech therapy, allied health services can significantly enhance your quality of life.",
        category: "Health & Wellness",
        date: "Jan 5, 2026",
        readTime: "5 min read",
        image: "/assets/blog/blog_allied_health.png",
        featured: false,
    },
];

const categories = ["All", "NDIS Updates", "Tips & Guides", "Our Stories", "Community", "Health & Wellness"];

export const BlogGrid = () => {
    const [activeCategory, setActiveCategory] = React.useState("All");

    const filteredPosts = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    const featuredPost = blogPosts.find(post => post.featured);

    return (
        <section className="py-16 bg-white dark:bg-black">
            <div className="container mx-auto px-4">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-3 justify-center mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === category
                                ? "bg-primary text-white shadow-lg shadow-primary/30"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Featured Post - Large Card */}
                {featuredPost && activeCategory === "All" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <Link href={`/blog/${featuredPost.id}`} className="group block">
                            <div className="relative rounded-[2rem] overflow-hidden bg-slate-900 h-[500px] md:h-[600px]">
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/90 text-white text-xs font-bold uppercase tracking-wider mb-4">
                                        Featured
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 max-w-3xl leading-tight group-hover:text-primary transition-colors">
                                        {featuredPost.title}
                                    </h2>
                                    <p className="text-slate-300 text-lg max-w-2xl mb-6 line-clamp-2">
                                        {featuredPost.excerpt}
                                    </p>
                                    <div className="flex items-center gap-6 text-slate-400 text-sm">
                                        <span className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            {featuredPost.readTime}
                                        </span>
                                        <span>{featuredPost.date}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/blog/${post.id}`} className="group block h-full">
                                <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-sm text-xs font-bold text-slate-700 dark:text-slate-200">
                                                <Tag className="w-3 h-3" />
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-grow flex flex-col">
                                        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                                            <span className="flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5" />
                                                {post.readTime}
                                            </span>
                                            <span>{post.date}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 flex-grow">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                                            <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                                                Read Article
                                                <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-16">
                    <button className="px-10 py-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full font-bold text-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        Load More Articles
                    </button>
                </div>
            </div>
        </section>
    );
};
