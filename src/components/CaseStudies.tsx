"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link"; // <--- 1. Import Link

export const CaseStudies = () => {
    const cases = [
        {
            id: 1,
            client: "DSenergize",
            title: "Solar IoT Analytics Platform",
            tags: ["App Development"],
            image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070&auto=format&fit=crop",
            stat: "Max Energy Gen",
            desc: "Development of a cloud-based energy management dashboard allowing real-time remote monitoring, predictive maintenance, and data logging for solar assets."
        },
        {
            id: 2,
            client: "ReqX",
            title: "Global IT Talent Portal",
            tags: ["Web Development"],
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
            stat: "Top-Tier Vetting",
            desc: "Designing a corporate digital interface to connect businesses with executive IT talent and specialized consulting services for digital transformation."
        },
        {
            id: 3,
            client: "ShapeIQ",
            title: "Sustainable MedTech Launch",
            tags: ["Strategy"],
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
            stat: "90% Less Waste",
            desc: "Brand positioning and market entry strategy for 'EcoCast,' a revolutionary recycled 3D-printed orthopedic product driving the circular economy."
        }
    ];

    // Helper function to check if the string looks like a URL/Path
    const isImagePath = (path: string) => path.includes('/') || path.includes('.');

    return (
        <section id="case-studies" className="py-16 md:py-24 bg-[#FDFCFE]">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-lg font-bold text-acumen-primary uppercase tracking-widest">
                            Our Work
                            <span className="font-serif"> & </span>
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-acumen-secondary">
                            Hall of Impact
                        </h2>
                    </div>

                    {/* Desktop Button Wrapped in Link */}
                    <Link href="/allcasestudies" className="hidden md:block">
                        <Button
                            variant="secondary"
                            className="border-acumen-primary"
                        >
                            View All Work
                        </Button>
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {cases.map((item) => (
                        // WRAPPED IN LINK TO DYNAMIC PAGE
                        <Link href={`/portfolio/${item.id}`} key={item.id} className="group cursor-pointer block">
                            <div>
                                <div
                                    className={cn(
                                        "rounded-[1rem] aspect-[4/3] mb-6 overflow-hidden relative bg-acumen-primary/5 border-2 hover:border-acumen-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-acumen-primary/10 hover:scale-[1.01]",
                                        !isImagePath(item.image) && item.image
                                    )}
                                >
                                    {isImagePath(item.image) && (
                                        <img
                                            src={item.image}
                                            alt={`Case study image for ${item.client}`}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.onerror = null;
                                                target.src = `https://placehold.co/600x400/acumen-primary/ffffff?text=Image+Missing`;
                                            }}
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-acumen-primary/10 transition-colors duration-300" />
                                    <div className="absolute inset-0 bg-acumen-secondary/0 group-hover:bg-acumen-secondary/10 transition-colors duration-300" />

                                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="bg-white/90 backdrop-blur text-acumen-secondary px-4 py-2 rounded-full text-sm font-semibold">
                                            {item.stat}
                                        </span>
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                            <ArrowRight className="w-5 h-5 text-acumen-secondary" />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex gap-2 mb-3">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs font-semibold text-acumen-light uppercase tracking-wider"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="font-serif text-2xl font-bold text-acumen-secondary group-hover:text-acumen-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-acumen-light">{item.client}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Mobile View Button */}
                <div className="mt-12 md:hidden">
                    <Link href="/allcasestudies" className="w-full block">
                        <Button variant="outline" className="w-full bg-acumen-primary text-white hover:bg-acumen-secondary">
                            View All Work
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};