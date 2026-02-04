import { AboutHero } from "@/src/components/about/AboutHero";
import { WhoWeAre } from "@/src/components/about/WhoWeAre";
import { OurValues } from "@/src/components/about/OurValues";
import { AboutCTA } from "@/src/components/about/AboutCTA";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black selection:bg-primary/20 selection:text-primary">
            <AboutHero />
            <WhoWeAre />
            <OurValues />
            <AboutCTA />
        </main>
    );
}
