import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { cn } from "@/lib/utils";

import { Navbar } from "@/src/components/common/Navbar";
import { Footer } from "@/src/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JS Choice Group | Trusted NDIS Support in Melbourne",
  description: "Empowering independence through compassionate NDIS support services. Certified NDIS provider in Melbourne offering daily life assistance, nursing care, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "antialiased selection:bg-primary/20 selection:text-primary")}>
        <div className="fixed inset-0 bg-[url('/assets/noise.svg')] opacity-20 pointer-events-none z-0" />
        <Toaster position="bottom-right" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
