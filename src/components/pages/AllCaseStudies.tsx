"use client";

import React, { useState, useEffect } from "react";
import {
    ArrowUpRight,
    ChevronDown,
    Search,
} from "lucide-react";
import Navbar from "../Navbar";
import { CTA } from "../CTA";
import Footer from "../Footer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/Button";

// --- DATA (Updated with Real Stock Images for UI Demo) ---
const CATEGORIES = ["All", "Branding", "Web-Development", "Marketing", "Strategy", "App Development", "Search Engine Optimization"];

const PROJECTS = [
    {
        id: 1,
        client: "DSenergize",
        title: "Solar IoT Analytics Platform",
        category: "App Development",
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070&auto=format&fit=crop",
        stat: "Max Energy Gen",
        desc: "Development of a cloud-based energy management dashboard allowing real-time remote monitoring, predictive maintenance, and data logging for solar assets."
    },
    {
        id: 2,
        client: "REQX",
        title: "Global IT Talent Portal",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        stat: "Top-Tier Vetting",
        desc: "Designing a corporate digital interface to connect businesses with executive IT talent and specialized consulting services for digital transformation."
    },
    {
        id: 3,
        client: "ShapeIQ",
        title: "Sustainable MedTech Launch",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
        stat: "90% Less Waste",
        desc: "Brand positioning and market entry strategy for 'EcoCast,' a revolutionary recycled 3D-printed orthopedic product driving the circular economy."
    },
    {
        id: 4,
        client: "KrishiGRO",
        title: "Eco-Agri Brand Identity",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stat: "Zero Emission Tech",
        desc: "Strategic brand positioning for the 'Tesla of Tillers,' launching the Bheem 1.0 electric multi-utility vehicle to revolutionize rural farming."
    },
    {
        id: 5,
        client: "SLV",
        title: "Global Consultancy Portal",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        stat: "5+ Sector Reach",
        desc: "Development of a corporate web platform showcasing end-to-end international market entry, procurement, and cross-border growth strategies."
    },
    {
        id: 6,
        client: "UMPL",
        title: "EV Ecosystem Visibility",
        category: "Search Engine Optimization",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
        stat: "Net Zero Aligned",
        desc: "Comprehensive SEO strategy to position 'eMOTION' retrofit kits as a central hub in India's EV ecosystem and self-reliant mobility goals."
    },
    {
        id: 7,
        client: "NFI",
        title: "AI Analytics SaaS Platform",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        stat: "Real-Time Processing",
        desc: "UI/UX design and development for a drag-and-drop AI platform, enabling real-time visual data analytics and edge computing for drones."
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
            {/* INJECTED STYLES FOR PREVIEW */}
            <style jsx global>{`
                :root {
                  --acumen-primary: 277 72% 26%;
                  --acumen-secondary: 277 72% 22%;
                  --acumen-light: 277 72% 30%;
                }
                .bg-acumen-primary { background-color: hsl(var(--acumen-primary)); }
                .text-acumen-primary { color: hsl(var(--acumen-primary)); }
                .border-acumen-primary { border-color: hsl(var(--acumen-primary)); }
                .bg-acumen-secondary { background-color: hsl(var(--acumen-secondary)); }
                .text-acumen-secondary { color: hsl(var(--acumen-secondary)); }
                .text-acumen-light { color: hsl(var(--acumen-light)); }
                .bg-acumen-primary\/5 { background-color: hsl(var(--acumen-primary) / 0.05); }
                .bg-acumen-primary\/10 { background-color: hsl(var(--acumen-primary) / 0.1); }
                .bg-acumen-secondary\/20 { background-color: hsl(var(--acumen-secondary) / 0.2); }
                .border-acumen-primary\/10 { border-color: hsl(var(--acumen-primary) / 0.1); }
                .border-acumen-primary\/30 { border-color: hsl(var(--acumen-primary) / 0.3); }
                
                /* Animations */
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                }
                .mask-gradient {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .mask-gradient::-webkit-scrollbar { height: 0; }
            `}</style>

            <Navbar />

            {/* --- HERO SECTION (Image as Background) --- */}
            <div className="container mx-auto px-6 pt-20 pb-16">

                {/* HERO CONTAINER */}
                <div className={`relative w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    {/* 1. BACKGROUND IMAGE */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/assets/portfoliobg.jpg"
                            alt="Digital Impact Flow"
                            className="w-full h-full object-cover"
                        />
                        {/* Dark Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                    </div>

                    {/* 2. TEXT CONTENT (Sitting on top) */}
                    <div className="relative z-10 px-8 py-20 md:py-32 md:px-16 text-center md:text-left max-w-4xl mx-auto">
                        <div className="inline-block mb-4">
                            <span className="text-xs md:text-sm font-bold text-white uppercase tracking-[0.2em] px-3 py-1 bg-white/20 backdrop-blur-md border border-white/20 rounded-md">
                                Portfolio
                            </span>
                        </div>

                        <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Hall of Impact
                        </h1>

                        <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-md">
                            Explore our comprehensive list of digital transformations.
                            From code to creative, see how we help businesses evolve and scale in the digital age.
                        </p>
                    </div>

                </div>
            </div>

            {/* --- FILTER BAR --- */}
            <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-lg border-y border-acumen-secondary/5 py-4 mb-12 shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                        {/* Mobile Filter */}
                        <div className="w-full md:hidden flex items-center justify-between gap-3">
                            <div className="relative w-2/3">
                                <button
                                    type="button"
                                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                                    className="md:hidden w-full px-4 py-3 rounded-xl bg-white border border-acumen-primary/10 text-left text-sm text-acumen-secondary flex justify-between items-center focus:border-acumen-primary transition-all"
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
                                        <div className="fixed inset-0 z-30 md:hidden" onClick={() => setIsFilterOpen(false)} />
                                    </>
                                )}
                            </div>

                            <div className="w-1/3 flex justify-end">
                                <button
                                    onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                                    className="px-3 py-2 rounded-full bg-acumen-secondary/20 border border-acumen-primary/30 text-acumen-secondary"
                                >
                                    <Search className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Desktop Filter Pills */}
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

                        {/* Search Bar */}
                        <div className="w-full md:w-auto hidden md:block group">
                            <div className="flex items-center bg-white border border-acumen-primary/30 rounded-full px-4 py-2 w-64 focus-within:border-acumen-primary focus-within:ring-1 focus-within:ring-acumen-primary/20 transition-all duration-300">
                                <Search className="w-4 h-4 text-acumen-light mr-2 group-focus-within:text-acumen-primary transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    className="bg-transparent border-none outline-none text-sm w-full text-acumen-secondary placeholder:text-acumen-light"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Search Input */}
                    {isMobileSearchOpen && (
                        <div className="md:hidden mt-3">
                            <div className="flex items-center bg-acumen-secondary/30 border border-acumen-primary/30 rounded-full px-4 py-2 w-full transition-all duration-200">
                                <Search className="w-4 h-4 text-acumen-light mr-2" />
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    className="bg-transparent border-none outline-none text-sm w-full text-acumen-secondary placeholder:text-acumen-light"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* --- IMMERSIVE GRID SECTION --- */}
            <div className="container mx-auto pb-24 px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((item, index) => (
                        <Link
                            href={`/portfolio/${item.id}`}
                            key={item.id}
                            className="group relative block h-[480px] w-full overflow-hidden rounded-[2rem] shadow-lg animate-fade-in opacity-0 fill-mode-forwards bg-gray-100"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* 1. BACKGROUND IMAGE */}
                            <div className="absolute inset-0 z-0 h-full w-full">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-100"
                                />

                                {/* 2. NEUTRAL GRADIENT (Black Fade Only) 
                                    Replaced the purple/brand gradient with a standard black fade for text visibility.
                                */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                            </div>

                            {/* 3. TOP BADGES */}
                            <div className="absolute top-6 left-6 z-10">
                                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest shadow-sm">
                                    {item.category}
                                </span>
                            </div>

                            {/* 4. BOTTOM CONTENT */}
                            <div className="absolute bottom-0 left-0 w-full p-8 z-10 flex flex-col justify-end h-full">

                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    {/* Client Name */}
                                    <p className="text-acumen-primary font-bold text-xs mb-2 bg-white inline-block px-2 py-1 rounded shadow-sm">
                                        {item.client}
                                    </p>

                                    {/* Title */}
                                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2 leading-tight drop-shadow-md">
                                        {item.title}
                                    </h3>

                                    {/* Description Reveal */}
                                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] opacity-0 group-hover:opacity-100">
                                        <div className="overflow-hidden">
                                            <p className="text-white/90 text-sm leading-relaxed mb-6 pt-2 font-medium border-l-2 border-white/50 pl-3">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Stat & Arrow Row */}
                                    <div className="flex items-center justify-between border-t border-white/30 pt-4 mt-2">
                                        <div>
                                            <p className="text-[10px] text-white/70 uppercase tracking-wider font-semibold">Impact</p>
                                            <p className="text-lg font-bold text-white">{item.stat}</p>
                                        </div>

                                        {/* Animated Arrow */}
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-acumen-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-45 shadow-lg">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-acumen-primary/10">
                        <p className="text-acumen-light text-lg mb-4">No projects found in this category.</p>
                        <Button variant="ghost" onClick={() => setActiveCategory("All")}>
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