"use client";

import React from "react";
import { Navbar } from "@/src/components/common/Navbar";
import { Footer } from "@/src/components/common/Footer";
import { Hero } from "@/src/components/home/Hero";
import { Introduction } from "@/src/components/home/Introduction";
import { Services } from "@/src/components/home/Services";
import { About } from "@/src/components/home/About";
import { FAQ } from "@/src/components/home/FAQ";
import { AreasWeServe } from "@/src/components/home/AreasWeServe";
import { ContactCTA } from "@/src/components/home/ContactCTA";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <About />
        <Services />
        <AreasWeServe />
        <ContactCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
