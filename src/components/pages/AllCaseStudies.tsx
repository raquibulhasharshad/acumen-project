"use client";

import React, { useState, useEffect } from "react";
import { 
    ArrowUpRight, 
    ChevronDown,
    Instagram, 
    Linkedin, 
    Twitter,
    Search,
    Filter
} from "lucide-react";
import Navbar from "../Navbar";
import { CTA } from "../CTA";
import Footer from "../Footer";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";

// --- BUTTON COMPONENT (Integrated from your buttons.tsx) ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg" | "xl" | "icon";
}

// --- DATA ---
const CATEGORIES = ["All", "Branding", "Development", "Marketing", "Strategy"];

const PROJECTS = [
    {
        id: 1,
        client: "DSenergize",
        title: "Sustainable Brand Launch",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
        stat: "Record Q1 Sales",
        desc: "Complete visual identity overhaul and brand positioning for a renewable energy startup entering the European market."
    },
    {
        id: 2,
        client: "ReqX",
        title: "Transforming Tech Talent",
        category: "Development",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        stat: "+45% Conversion",
        desc: "Custom dashboard and AI-driven recruitment platform development to streamline candidate sourcing."
    },
    {
        id: 3,
        client: "ShapeIQ",
        title: "Digital Footprint Optimization",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        stat: "2x Traffic",
        desc: "Comprehensive SEO audit and content strategy implementation resulting in doubled organic traffic within 6 months."
    },
    {
        id: 4,
        client: "FinFlow",
        title: "Banking App UI Redesign",
        category: "Development",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
        stat: "4.8 App Rating",
        desc: "Modernizing the user experience for legacy banking software with a focus on accessibility and mobile-first design."
    },
    {
        id: 5,
        client: "Velvet Homes",
        title: "Luxury Real Estate Marketing",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
        stat: "Sold Out in 3mo",
        desc: "High-end social media campaigns and brochure design for a premium residential development."
    },
    {
        id: 6,
        client: "EcoWear",
        title: "E-commerce Growth Strategy",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
        stat: "30% ROAS Increase",
        desc: "Data-driven paid media strategy and conversion rate optimization for a sustainable fashion brand."
    }
];

// --- MAIN PAGE COMPONENT ---
const AllCaseStudies = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [mounted, setMounted] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Filter logic
    const filteredProjects = activeCategory === "All" 
        ? PROJECTS 
        : PROJECTS.filter(project => project.category === activeCategory);

    return (
        <main className="min-h-screen bg-[#FDFCFE] font-sans selection:bg-acumen-primary selection:text-white overflow-x-hidden">
             {/* INJECTED STYLES FOR PREVIEW ENVIRONMENT ONLY 
                This simulates the tailwind.config.ts logic for the chat preview.
                In your real project, your Tailwind config will handle this.
            */}
            <style jsx global>{`
                :root {
                  --acumen-primary: 277 72% 26%;
                  --acumen-secondary: 277 72% 22%;
                  --acumen-light: 277 72% 30%;
                }
                
                /* Colors */
                .bg-acumen-primary { background-color: hsl(var(--acumen-primary)); }
                .text-acumen-primary { color: hsl(var(--acumen-primary)); }
                .border-acumen-primary { border-color: hsl(var(--acumen-primary)); }
                
                .bg-acumen-secondary { background-color: hsl(var(--acumen-secondary)); }
                .text-acumen-secondary { color: hsl(var(--acumen-secondary)); }
                .border-acumen-secondary { border-color: hsl(var(--acumen-secondary)); }

                .text-acumen-light { color: hsl(var(--acumen-light)); }

                /* Opacity Variants (Simulated for Preview) */
                .bg-acumen-primary\/5 { background-color: hsl(var(--acumen-primary) / 0.05); }
                .bg-acumen-primary\/10 { background-color: hsl(var(--acumen-primary) / 0.1); }
                .bg-acumen-primary\/20 { background-color: hsl(var(--acumen-primary) / 0.2); }
                .bg-acumen-primary\/30 { background-color: hsl(var(--acumen-primary) / 0.3); }
                
                .border-acumen-primary\/30 { border-color: hsl(var(--acumen-primary) / 0.3); }

                /* Hover Variants */
                .hover\:bg-acumen-secondary:hover { background-color: hsl(var(--acumen-secondary)); }
                .hover\:text-acumen-primary:hover { color: hsl(var(--acumen-primary)); }
                .hover\:text-acumen-secondary:hover { color: hsl(var(--acumen-secondary)); }
                .hover\:border-acumen-primary:hover { border-color: hsl(var(--acumen-primary)); }
                .hover\:border-acumen-secondary:hover { border-color: hsl(var(--acumen-secondary)); }
                .hover\:bg-acumen-primary\/10:hover { background-color: hsl(var(--acumen-primary) / 0.1); }
                .group:hover .group-hover\:text-acumen-primary { color: hsl(var(--acumen-primary)); }
                .group:hover .group-hover\:border-acumen-primary\/20 { border-color: hsl(var(--acumen-primary) / 0.2); }

                /* Shadows */
                .hover\:shadow-acumen-primary\/50:hover { --tw-shadow-color: hsl(var(--acumen-primary) / 0.5); }
                .group:hover .group-hover\:shadow-acumen-primary\/10 { --tw-shadow-color: hsl(var(--acumen-primary) / 0.1); }

                /* Animations */
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                }

                /* Hide native scrollbar buttons and hide scrollbar for pill container */
                .mask-gradient {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
                .mask-gradient::-webkit-scrollbar { height: 0; }
                .mask-gradient::-webkit-scrollbar-button { display: none; width: 0; height: 0; }
            `}</style>
            <Navbar />
            
            {/* HERO SECTION */}
            <div className="container mx-auto px-6 pt-32 pb-16">
                <div className={`max-w-4xl mx-auto text-center md:text-left transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block mb-4">
                        <span className="text-sm font-bold text-acumen-primary uppercase tracking-[0.2em] px-3 py-1 bg-acumen-primary/5 rounded-md">
                            Portfolio
                        </span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-6xl font-bold text-acumen-secondary mb-6 leading-tight">
                        Hall of Impact
                    </h1>
                    <p className="text-lg md:text-xl text-acumen-light max-w-2xl leading-relaxed">
                        Explore our comprehensive list of digital transformations. 
                        From code to creative, see how we help businesses evolve and scale in the digital age.
                    </p>
                </div>
            </div>

            {/* FILTER BAR - STICKY */}
            <div className="sticky top-20 z-30 bg-white backdrop-blur-md border-acumen-secondary/10 border-rounded-full py-4 mb-12 shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Mobile: compact dropdown + search */}
                        <div className="w-full md:hidden flex items-center justify-between gap-3">
                            <div className="relative w-2/3">
                                <button
                                    type="button"
                                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                                    className="md:hidden w-full px-4 py-3 rounded-xl bg-white border border-acumen-primary/10 text-left text-sm text-acumen-secondary flex justify-between items-center focus:border-acumen-primary focus:ring-1 focus:ring-acumen-primary transition-all"
                                >
                                    <span className="truncate mr-2">{activeCategory}</span>
                                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-200 text-acumen-light", isFilterOpen && "rotate-180")} />
                                </button>

                                {isFilterOpen && (
                                    <>
                                        <div className="absolute left-0 right-0 mt-2 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-40">
                                            {CATEGORIES.map((cat) => (
                                                <button
                                                    key={cat}
                                                    onClick={() => { setActiveCategory(cat); setIsFilterOpen(false); }}
                                                    className={cn(
                                                        "w-full text-left px-3 py-2 rounded-md text-sm mb-1",
                                                        activeCategory === cat
                                                            ? "bg-acumen-primary text-white"
                                                            : "text-acumen-secondary hover:bg-acumen-primary/10"
                                                    )}
                                                >
                                                    {cat}
                                                </button>
                                            ))}
                                        </div>
                                        {/* Backdrop to close dropdown on outside click */}
                                        <div className="fixed inset-0 z-30 md:hidden" onClick={() => setIsFilterOpen(false)} />
                                    </>
                                )}
                            </div>

                            <div className="w-1/3 flex justify-end">
                                <button
                                    onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                                    className="px-3 py-2 rounded-full bg-acumen-secondary/20 border border-acumen-primary/30 text-acumen-secondary"
                                    aria-label="Toggle search"
                                >
                                    <Search className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Desktop & tablet: category pills (existing) and search */}
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto mask-gradient hidden md:flex">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={cn(
                                        "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border whitespace-nowrap",
                                        activeCategory === cat
                                            ? "bg-acumen-primary text-white border-acumen-primary shadow-md shadow-acumen-primary/20 scale-105"
                                            : "bg-white text-acumen-light border-acumen-primary/10 hover:border-acumen-primary hover:text-acumen-primary"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        
                        {/* Search Bar (desktop) */}
                        <div className="w-full md:w-auto hidden md:block group">
                            <div className="flex items-center bg-white border border-acumen-primary/30 rounded-full px-4 py-2 w-64 focus-within:border-acumen-primary focus-within:ring-1 focus-within:ring-acumen-primary/20 transition-all duration-300">
                                <Search className="w-4 h-4 text-acumen-light mr-2 group-focus-within:text-acumen-primary transition-colors" />
                                <input 
                                    type="text" 
                                    placeholder="Search case studies..." 
                                    className="bg-transparent border-none outline-none text-sm w-full text-acumen-secondary placeholder:text-acumen-light"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mobile: expandable search input */}
                    {isMobileSearchOpen && (
                        <div className="md:hidden mt-3">
                            <div className="flex items-center bg-acumen-secondary/30 border border-acumen-primary/30 rounded-full px-4 py-2 w-full transition-all duration-200">
                                <Search className="w-4 h-4 text-acumen-light mr-2" />
                                <input
                                    type="text"
                                    placeholder="Search case studies..."
                                    className="bg-transparent border-none outline-none text-sm w-full text-acumen-secondary placeholder:text-acumen-light"
                                />
                            </div>
                        </div>
                    )}
                    </div>
                </div>

            {/* GRID SECTION */}
            <div className="container mx-auto px-6 pb-32">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((item, index) => (
                        <div 
                            key={item.id} 
                            // Using the animation class from your config
                            className="group cursor-pointer block animate-fade-in opacity-0 fill-mode-forwards rounded-2xl overflow-hidden bg-white"
                            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                        >
                            {/* Card Image Area */}
                            <div className="rounded-2xl aspect-[4/3] mb-6 overflow-hidden relative bg-[#F3F0FF] transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-acumen-primary/10 group-hover:-translate-y-2">
                                <img
                                    src={item.image}
                                    alt={`Case study for ${item.client}`}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-acumen-primary/90 via-acumen-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Floating Stat Badge */}
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                    <span className="bg-white/95 backdrop-blur text-acumen-secondary px-4 py-2 rounded-full text-xs font-bold tracking-wide shadow-sm border border-white/50 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        {item.stat}
                                    </span>
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75 text-acumen-primary">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>

                            {/* Card Text Content */}
                            <div className="pr-2">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-[10px] font-bold text-acumen-primary uppercase tracking-widest bg-acumen-primary/5 px-2 py-1 rounded">
                                        {item.category}
                                    </span>
                                    <span className="text-xs text-acumen-light font-medium">
                                        {item.client}
                                    </span>
                                </div>

                                <h3 className="font-serif text-2xl font-bold text-acumen-secondary group-hover:text-acumen-primary transition-colors mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-acumen-light text-sm leading-relaxed line-clamp-2">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-acumen-primary/10">
                        <p className="text-acumen-light text-lg mb-4">No projects found in this category.</p>
                        <Button 
                            variant="ghost"
                            onClick={() => setActiveCategory("All")}
                        >
                            View all projects
                        </Button>
                    </div>
                )}
            </div>
            <CTA />
            <Footer />
        </main>
    );
}

export default AllCaseStudies;