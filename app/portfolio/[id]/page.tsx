"use client";

import React, { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
    ArrowLeft,
    Layers,
    Cpu,
    BarChart3,
    ArrowUpRight,
    Calendar,
    User,
    FileText,
    FolderOpen
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import { CTA } from "@/components/CTA";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";

// --- DATA ---
const PROJECTS = [
    {
        id: 1,
        client: "DSenergize",
        title: "Solar IoT Analytics Platform",
        category: "Web&App Development",
        image: "/assets/dse.png",
        stat: "Max Energy Gen",
        desc: "Development of a cloud-based energy management dashboard allowing real-time remote monitoring, predictive maintenance, and data logging for solar assets.",
        website: "https://dsenergize.com/",
        challenge: "Solar plant owners faced inefficiencies due to a lack of real-time visibility into asset performance, leading to prolonged downtimes and unoptimized energy generation.",
        approach: "We engineered a robust IoT-enabled platform that connects directly with solar dataloggers. The system processes gigabytes of telemetry data to provide instant alerts and predictive maintenance schedules.",
        stack: ["React.js", "TypeScript", "Node.js", "MongoDB", "Express.js", "Docker", "Tailwind CSS"],
        result: "Enabled 24/7 remote monitoring for over 50MW of solar assets, reducing maintenance response time by 60%."
    },
    {
        id: 2,
        client: "REQX",
        title: "Global IT Talent Portal",
        category: "Web Development",
        image: "/assets/reqx.png",
        stat: "Top-Tier Vetting",
        desc: "Designing a corporate digital interface to connect businesses with executive IT talent and specialized consulting services for digital transformation.",
        website: "https://reqxtechnology.com",
        challenge: "High-stakes IT recruitment was bogged down by slow manual vetting processes and a lack of transparency between global enterprises and specialized talent.",
        approach: "We built a streamlined, high-performance web portal featuring an intuitive dashboard for employers to filter candidates based on rigorous technical vetting scores and cultural fit.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
        result: "Achieved a 45% increase in candidate conversion rates and established a digital footprint for global talent sourcing."
    },
    {
        id: 3,
        client: "ShapeIQ",
        title: "Sustainable MedTech Launch",
        category: "Strategy",
        image: "/assets/ShapeIQ.jpg",
        stat: "90% Less Waste",
        desc: "Brand positioning and market entry strategy for 'EcoCast,' a revolutionary recycled 3D-printed orthopedic product driving the circular economy.",
        website: "https://www.shapeiq.in",
        challenge: "Introducing a disruptive 3D-printed medical product into a traditional orthopedic market required shifting the narrative from 'novelty' to 'medical necessity' and 'sustainability'.",
        approach: "We crafted a dual-narrative strategy focusing on 'Patient Comfort' (breathable, lightweight) and 'Planetary Health' (recycled materials), positioning ShapeIQ as the leader in circular MedTech.",
        stack: ["Brand Strategy", "Market Research", "Visual Identity", "Digital Marketing", "Go-To-Market Roadmap"],
        result: "Successfully positioned EcoCast as a premium alternative, securing partnerships with 5 major orthopedic clinics pre-launch."
    },
    {
        id: 4,
        client: "KrishiGRO",
        title: "Eco-Agri Brand Identity",
        category: "Branding",
        image: "/assets/KG.png",
        stat: "Zero Emission Tech",
        desc: "Strategic brand positioning for the 'Tesla of Tillers,' launching the Bheem 1.0 electric multi-utility vehicle to revolutionize rural farming.",
        website: "https://www.krishigro.in/",
        challenge: "To position a complex agri-tech product as an accessible, powerful tool for rural farmers while appealing to modern investors.",
        approach: "We focused on the narrative of 'Strength meets Sustainability'. Visuals were designed to look robust and earthy, yet futuristic.",
        stack: ["Wix", "React", "JavaScript", "Wix Velo", "Wix Forms"],
        result: "Successfully launched at the Agri-Expo 2024 with over 500 pre-orders."
    },
    {
        id: 5,
        client: "SLV",
        title: "Global Consultancy Portal",
        category: "Website Development",
        image: "/assets/slv.png",
        stat: "5+ Sector Reach",
        desc: "Development of a corporate web platform showcasing end-to-end international market entry, procurement, and cross-border growth strategies.",
        website: "https://www.spheralink.com/",
        challenge: "Consolidating diverse services (Healthcare, Construction, Energy) into a unified, professional digital experience.",
        approach: "We utilized a clean, corporate aesthetic with a modular CMS, allowing the client to easily update sector-specific case studies.",
        stack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Node.js", "Vercel"],
        result: "Reduced client inquiry response time by 40% due to better information architecture."
    },
    {
        id: 6,
        client: "UMPL",
        title: "EV Ecosystem Visibility",
        category: "Search Engine Optimization",
        image: "/assets/umpl.png",
        stat: "Net Zero Aligned",
        desc: "Comprehensive SEO strategy to position 'eMOTION' retrofit kits as a central hub in India's EV ecosystem and self-reliant mobility goals.",
        website: "https://www.uveramobility.com/",
        challenge: "Low organic visibility for niche keywords like 'Retrofitting' and 'EV Conversion' in a crowded automotive market.",
        approach: "We implemented a topic-cluster strategy, creating high-value content around government policies (FAME-II) and technical guides.",
        stack: ["HTML", "CSS", "JavaScript", "Responsive Web Design", "Bootstrap", "PHP"],
        result: "Organic traffic doubled in 6 months; ranked #1 for 'EV Kit Delhi'."
    },
    {
        id: 7,
        client: "NFI",
        title: "AI Analytics SaaS Platform",
        category: "Website Development",
        image: "/assets/NFI.png",
        stat: "Real-Time Processing",
        desc: "UI/UX design and development for a drag-and-drop AI platform, enabling real-time visual data analytics and edge computing for drones.",
        website: "https://neuroforgeinnovation.com/",
        challenge: "Simplifying complex AI data processing into a user-friendly 'Drag & Drop' interface for non-technical users.",
        approach: "We adopted a dashboard-first design, focusing on data visualization and minimal latency interactions.",
        stack: ["React", "TypeScript", "D3.js", "WebSockets", "Node.js"],
        result: "User onboarding time decreased by 60% due to intuitive UX patterns."
    }
];

const ProjectDetail = () => {
    const params = useParams();
    const router = useRouter();
    const [project, setProject] = useState<typeof PROJECTS[0] | null>(null);
    const [mounted, setMounted] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setIsReady(true);
    }, []);

    const { scrollYProgress } = useScroll(
        isReady
            ? {
                target: containerRef,
                offset: ["start end", "center center"],
            }
            : {}
    );

    // --- ANIMATION CONFIGURATION ---
    const springConfig = { stiffness: 100, damping: 20, mass: 1 };

    // NOTE: Increased 'y' values (600-800) force the cards to start much deeper in the folder
    // CARD 1 (Top Left)
    const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [600, 0]), springConfig);
    const x1 = useSpring(useTransform(scrollYProgress, [0, 1], [100, 0]), springConfig);
    const r1 = useSpring(useTransform(scrollYProgress, [0, 1], [-15, 0]), springConfig);

    // CARD 2 (Top Right)
    const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [700, 0]), springConfig);
    const x2 = useSpring(useTransform(scrollYProgress, [0, 1], [-100, 0]), springConfig);
    const r2 = useSpring(useTransform(scrollYProgress, [0, 1], [15, 0]), springConfig);

    // CARD 3 (Bottom Left)
    const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [800, 0]), springConfig);
    const x3 = useSpring(useTransform(scrollYProgress, [0, 1], [50, 0]), springConfig);
    const r3 = useSpring(useTransform(scrollYProgress, [0, 1], [-5, 0]), springConfig);

    // CARD 4 (Bottom Right)
    const y4 = useSpring(useTransform(scrollYProgress, [0, 1], [900, 0]), springConfig);
    const x4 = useSpring(useTransform(scrollYProgress, [0, 1], [-50, 0]), springConfig);
    const r4 = useSpring(useTransform(scrollYProgress, [0, 1], [5, 0]), springConfig);

    // Scale Effect: Cards grow from 0.5 to 1 as they emerge
    const scale = useTransform(scrollYProgress, [0, 0.8], [0.5, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);


    useEffect(() => {
        setMounted(true);
        const found = PROJECTS.find((p) => p.id === Number(params.id));
        if (found) {
            setProject(found);
        }
    }, [params.id]);

    if (!mounted) return null;

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFCFE]">
                <h1 className="font-serif text-3xl text-acumen-secondary mb-4">Project Not Found</h1>
                <Button onClick={() => router.push('/allcasestudies')}>Back to Portfolio</Button>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#FDFCFE] font-sans selection:bg-acumen-primary selection:text-white overflow-x-hidden">
            <Navbar />

            {/* --- IMMERSIVE HERO SECTION --- */}
            <section className="relative w-full h-[85vh] min-h-[600px] flex items-end overflow-hidden pb-12">
                <div className="absolute inset-0 z-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover animate-pulse-slow scale-105"
                    />
                    {/* Gradients */}
                    <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/90 via-white/50 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-acumen-secondary/95 via-acumen-secondary/50 to-transparent mix-blend-multiply z-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-0" />
                </div>

                <div className="relative z-10 container mx-auto px-6 w-full animate-fade-in">
                    <Link
                        href="/allcasestudies"
                        className="absolute -top-[50vh] md:-top-[60vh] left-6 inline-flex items-center text-acumen-secondary/80 hover:text-acumen-secondary transition-colors group bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-sm z-50 font-medium"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>

                    <div className="max-w-5xl mx-auto">
                        <div className="mb-6">
                            <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs font-bold text-white uppercase tracking-[0.2em] shadow-lg">
                                {project.category}
                            </span>
                        </div>
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 drop-shadow-xl">
                            {project.title}
                        </h1>
                        {/* Hero Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
                            <div className="flex flex-col">
                                <span className="flex items-center text-xs text-white/60 uppercase tracking-wider mb-2 font-semibold">
                                    <User className="w-3 h-3 mr-2" /> Client
                                </span>
                                <span className="text-2xl font-serif text-white">{project.client}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="flex items-center text-xs text-white/60 uppercase tracking-wider mb-2 font-semibold">
                                    <Calendar className="w-3 h-3 mr-2" /> Year
                                </span>
                                <span className="text-2xl font-serif text-white">2025</span>
                            </div>
                            <div className="flex flex-col bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 -mt-4">
                                <span className="flex items-center text-xs text-white uppercase tracking-wider mb-1 font-bold">
                                    <BarChart3 className="w-3 h-3 mr-2" /> Key Impact
                                </span>
                                <span className="text-xl md:text-2xl font-bold text-white">{project.stat}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- INTERACTIVE "POP-OUT" FOLDER SECTION --- */}
            <section ref={containerRef} className="py-24 px-4 md:px-6 bg-[#FAFAFA] relative overflow-hidden">

                <div className="container mx-auto max-w-6xl relative z-20">

                    {/* Header */}
                    <div className="text-center mb-12 max-w-3xl mx-auto">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-acumen-light mb-3">Project Dossier</h2>
                        <p className="text-2xl md:text-3xl font-serif text-acumen-secondary">
                            {project.desc}
                        </p>
                    </div>

                    {/* FOLDER BACKDROP */}
                    {/* Added relative z-index to ensure it sits behind the popping cards if needed, but visually it acts as the container */}
                    <div className="relative bg-[#EAE8EC] rounded-t-[3rem] border-t border-l border-r border-white/50 shadow-2xl px-6 md:px-12 pt-12 pb-32 -mb-20 min-h-[700px]">

                        {/* Folder Tab */}
                        {/* <div className="absolute -top-12 left-0 md:left-12 bg-[#EAE8EC] w-48 h-12 rounded-t-2xl border-t border-l border-r border-white/50 flex items-center justify-center shadow-[0_-5px_10px_rgba(0,0,0,0.02)]">
                            <span className="text-xs font-bold uppercase tracking-widest text-acumen-secondary/50">Confidential</span>
                        </div> */}

                        {/* --- THE GRID OF CARDS --- */}
                        {/* Z-10 ensures they are above the folder back but below the Lip (which is Z-30) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

                            {/* 1. Challenge */}
                            <motion.div
                                style={{ y: y1, x: x1, rotate: r1, scale, opacity }}
                                className="bg-white p-8 rounded-[2rem] shadow-lg border border-acumen-secondary/5 hover:shadow-xl transition-shadow origin-bottom"
                            >
                                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-500">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-serif text-acumen-secondary mb-4">The Challenge</h3>
                                <p className="text-acumen-light leading-relaxed">
                                    {project.challenge}
                                </p>
                            </motion.div>

                            {/* 2. Approach */}
                            <motion.div
                                style={{ y: y2, x: x2, rotate: r2, scale, opacity }}
                                className="bg-white p-8 rounded-[2rem] shadow-lg border border-acumen-secondary/5 hover:shadow-xl transition-shadow origin-bottom"
                            >
                                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-6 text-acumen-primary">
                                    <Cpu className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-serif text-acumen-secondary mb-4">Our Approach</h3>
                                <div className="text-acumen-light leading-relaxed">
                                    <p>{project.approach}</p>
                                </div>
                            </motion.div>

                            {/* 3. Tech Stack */}
                            <motion.div
                                style={{ y: y3, x: x3, rotate: r3, scale, opacity }}
                                className="bg-acumen-secondary text-white p-8 rounded-[2rem] shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden origin-bottom"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-acumen-primary/30 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 text-white">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-serif mb-6">Technologies</h3>
                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {project.stack.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-sm border border-white/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* 4. Result */}
                            <motion.div
                                style={{ y: y4, x: x4, rotate: r4, scale, opacity }}
                                className="bg-white p-8 rounded-[2rem] shadow-lg border-2 border-acumen-primary/10 hover:border-acumen-primary/30 transition-colors flex flex-col justify-center origin-bottom"
                            >
                                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-600">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-acumen-light mb-2">Final Outcome</h3>
                                <p className="text-2xl md:text-3xl font-serif text-acumen-secondary leading-snug">
                                    "{project.result}"
                                </p>
                            </motion.div>

                        </div>
                    </div>

                    {/* FOLDER "LIP" (The Front Pocket) */}
                    {/* Z-30 ensures this sits ON TOP of the cards while they are animating up from behind it */}
                    <div className="relative h-32 bg-[#E2DFE5] rounded-b-[3rem] shadow-[inset_0_10px_20px_rgba(0,0,0,0.05)] -mt-10 z-30 flex items-center justify-center border-b border-l border-r border-white/50">
                        <FolderOpen className="text-acumen-secondary/20 w-10 h-10" />
                    </div>

                    <div className="text-center mt-12 relative z-30">
                        <Link href={project.website} target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="rounded-full px-8 h-14 text-lg shadow-xl shadow-acumen-primary/20 hover:scale-105 transition-transform bg-acumen-primary text-white">
                                Visit Live Site <ArrowUpRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>

                </div>
            </section>

            <CTA />
            <Footer />
        </main>
    );
};

export default ProjectDetail;