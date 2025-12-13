"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link"; // <--- 1. Import Link

export const CaseStudies = () => {
    const cases = [
        {
            client: "DSenergize",
            title: "Sustainable Brand Launch",
            tags: ["Branding", "Launch"],
            image: "/assets/pic1.jpg",
            stat: "Record Q1 Sales",
        },
        {
            client: "ReqX",
            title: "Transforming Tech Talent Acquisition",
            tags: ["UX/UI", "Development"],
            image: "/assets/pic9.jpg",
            stat: "+45% Conversion",
        },
        {
            client: "ShapeIQ",
            title: "Optimizing Digital Footprint for Space",
            tags: ["Strategy", "SEO"],
            image: "/assets/pic7.jpg",
            stat: "2x Traffic",
        },
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
                    
                    {/* 2. Desktop Button Wrapped in Link */}
                    <Link href="/allcasestudies" className="hidden md:block">
                        <Button
                            variant="secondary"
                            className="border-acumen-primary hover:border-acumen-primary"
                        >
                            View All Work
                        </Button>
                    </Link>
                </div>

                {/* Mobile: sticky "View All Work" button pinned to top of this section while visible */}
                <div className="md:hidden sticky top-20 z-40 mb-6">
                    <Link href="/allcasestudies" className="w-full block">
                        <Button variant="outline" className="w-full">
                            View All Work
                        </Button>
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {cases.map((item, idx) => (
                        <div key={idx} className="group cursor-pointer">
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
                    ))}
                </div>

                {/* mobile button moved to section top (sticky) */}
            </div>
        </section>
    );
};