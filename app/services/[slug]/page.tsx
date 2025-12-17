"use client";

import React, { useRef } from "react";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  PenTool,
  ShoppingCart,
  Smartphone,
  Database,
  Cloud,
  Globe,
  FolderOpen
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES_DATA } from "@/lib/services-data";
import { cn } from "@/lib/utils";

export default function ServiceDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-acumen-primary selection:text-white">
      <Navbar />
      <ServiceContent service={service} />
      <Footer />
    </div>
  );
}

function ServiceContent({ service }: { service: typeof SERVICES_DATA[0] }) {
  const containerRef = useRef(null);
  const folderRef = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  // --- PARALLAX HERO LOGIC ---
  const { scrollYProgress: heroProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(heroProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(heroProgress, [0, 0.8], [1, 0.5]);
  const textY = useTransform(heroProgress, [0, 1], ["0%", "50%"]);

  // --- FOLDER ANIMATION LOGIC ---
  const { scrollYProgress: folderProgress } = useScroll({
    target: folderRef,
    offset: ["start 100%", "center 50%"],
  });

  const springConfig = { stiffness: 100, damping: 20, mass: 1 };

  // Adjusted Y values to ensure they start 'deep' enough but not too far
  const y1 = useSpring(useTransform(folderProgress, [0, 1], [600, 0]), springConfig);
  const x1 = useSpring(useTransform(folderProgress, [0, 1], [50, 0]), springConfig);
  const r1 = useSpring(useTransform(folderProgress, [0, 1], [-5, 0]), springConfig);

  const y2 = useSpring(useTransform(folderProgress, [0, 1], [700, 0]), springConfig);
  const x2 = useSpring(useTransform(folderProgress, [0, 1], [-50, 0]), springConfig);
  const r2 = useSpring(useTransform(folderProgress, [0, 1], [2, 0]), springConfig);

  const y3 = useSpring(useTransform(folderProgress, [0, 1], [800, 0]), springConfig);
  const x3 = useSpring(useTransform(folderProgress, [0, 1], [25, 0]), springConfig);
  const r3 = useSpring(useTransform(folderProgress, [0, 1], [-2, 0]), springConfig);

  const y4 = useSpring(useTransform(folderProgress, [0, 1], [900, 0]), springConfig);
  const x4 = useSpring(useTransform(folderProgress, [0, 1], [-25, 0]), springConfig);
  const r4 = useSpring(useTransform(folderProgress, [0, 1], [5, 0]), springConfig);

  const cardScale = useTransform(folderProgress, [0, 0.8], [0.5, 1]);
  const cardOpacity = useTransform(folderProgress, [0, 0.2], [0, 1]);

  const getFeatureIcon = (idx: number) => {
    switch (idx) {
      case 0: return <PenTool className="w-6 h-6" />;
      case 1: return <ShoppingCart className="w-6 h-6" />;
      case 2: return <Smartphone className="w-6 h-6" />;
      case 3: return <Database className="w-6 h-6" />;
      case 4: return <Cloud className="w-6 h-6" />;
      default: return <Globe className="w-6 h-6" />;
    }
  };

  const getCardStyles = (idx: number) => {
    const styles = [
      { bg: "bg-white", iconBg: "bg-red-50 text-red-500" },
      { bg: "bg-white", iconBg: "bg-purple-50 text-purple-500" },
      { bg: "bg-acumen-secondary text-white", iconBg: "bg-white/10 text-white" },
      { bg: "bg-white", iconBg: "bg-green-50 text-green-600" },
    ];
    return styles[idx % styles.length];
  };

  const displayFeatures = service.features.slice(0, 4);

  return (
    <div ref={containerRef} className="relative">

      {/* --- HERO SECTION --- */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <motion.div
          style={{ scale, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          {/* Top Scrim for Navbar */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/90 via-white/50 to-transparent z-10 pointer-events-none" />
          
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
        </motion.div>

        {/* Floating Hero Text */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 flex flex-col justify-end pb-32 px-4 md:px-10 container mx-auto z-20"
        >
          <div className="pt-24">
            <Link
              href="/#services"
              className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors w-fit group"
            >
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mr-3 backdrop-blur-md group-hover:bg-white/10">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest shadow-black/50 drop-shadow-md">Back to Services</span>
            </Link>

            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tight mb-8 drop-shadow-lg">
              {service.title}
            </h1>

            <div className="flex items-center gap-6 text-white/90 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                <span className="text-sm font-bold uppercase tracking-wider drop-shadow-md">Available Now</span>
              </div>
              <div className="h-4 w-[1px] bg-white/30" />
              <span className="text-sm font-bold uppercase tracking-wider drop-shadow-md">Scroll to Explore</span>
            </div>
          </div>
        </motion.div>
      </div>


      {/* --- CONTENT SHEET --- */}
      <div className="relative z-10 bg-[#FAFAFA] rounded-t-[3rem] md:rounded-t-[5rem] -mt-20 pt-24 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">

        <main className="container mx-auto px-4 md:px-6 pb-20">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">

            {/* Sidebar (Sticky - Desktop Only) */}
            <aside className="hidden lg:block w-1/5 min-w-[240px]">
              <div className="sticky top-32 space-y-10">
                <div className="w-20 h-20 bg-acumen-secondary text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-acumen-secondary/30">
                  <Icon className="w-10 h-10" />
                </div>

                <div className="space-y-8 py-8 border-t border-slate-200">
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Category</span>
                    <span className="font-serif text-xl text-acumen-secondary">Digital Product</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Timeline</span>
                    <span className="font-serif text-xl text-acumen-secondary">4-8 Weeks</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Deliverables</span>
                    <span className="font-serif text-xl text-acumen-secondary">Design & Code</span>
                  </div>
                </div>

                <Link href="/contactus">
                  <Button className="w-full bg-acumen-secondary hover:bg-acumen-primary text-white rounded-full py-7 font-bold text-lg shadow-xl hover:shadow-2xl transition-all">
                    Start Project
                  </Button>
                </Link>
              </div>
            </aside>


            {/* Main Content Area */}
            <div className="flex-1">

              {/* --- MOBILE METADATA & BUTTON --- */}
              <div className="lg:hidden mb-16 space-y-12">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                      <div>
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Category</span>
                        <span className="font-serif text-xl text-acumen-secondary">Digital Product</span>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Timeline</span>
                        <span className="font-serif text-xl text-acumen-secondary">4-8 Weeks</span>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Deliverables</span>
                        <span className="font-serif text-xl text-acumen-secondary">Design & Code</span>
                      </div>
                  </div>
                  <Link href="/contactus" className="block">
                      <Button className="w-full bg-acumen-secondary hover:bg-acumen-primary text-white rounded-full py-7 font-bold text-lg shadow-xl">
                        Start Project
                      </Button>
                  </Link>
              </div>

              {/* Description */}
              <div className="mb-20 max-w-3xl">
                <p className="text-2xl md:text-4xl font-serif leading-tight text-acumen-secondary mb-8">
                  {service.description}
                </p>
                <div className="prose prose-lg text-slate-600 leading-relaxed max-w-none">
                  <p>{service.longDescription}</p>
                </div>
              </div>

              {/* --- INTERACTIVE "SERVICE DOSSIER" (FOLDER ANIMATION) --- */}
              <div ref={folderRef} className="relative z-10 mb-24">
                  <div className="flex items-end justify-between mb-8 px-2">
                    <h3 className="font-serif text-3xl font-bold text-acumen-secondary">
                        Capabilities Dossier
                    </h3>
                  </div>

                  {/* FOLDER CONTAINER 
                      - Added overflow-hidden: Prevents cards from showing outside the folder
                      - Added z-0: Base layer for the back of the folder
                  */}
                  <div className="relative bg-[#EAE8EC] rounded-t-[3rem] border-t border-l border-r border-white/50 shadow-2xl px-6 md:px-12 pt-12 pb-32 -mb-20 min-h-[600px] overflow-hidden z-0">
                      
                      {/* Folder Tab (Visual) */}
                      <div className="absolute -top-12 left-0 md:left-12 bg-[#EAE8EC] w-48 h-12 rounded-t-2xl border-t border-l border-r border-white/50 flex items-center justify-center shadow-[0_-5px_10px_rgba(0,0,0,0.02)]">
                          <span className="text-xs font-bold uppercase tracking-widest text-acumen-secondary/50">Core Services</span>
                      </div>

                      {/* --- THE CARDS --- */}
                      {/* Z-10: Puts cards above the folder back background */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                          {displayFeatures.map((feature, idx) => {
                             let style = {};
                             if (idx === 0) style = { y: y1, x: x1, rotate: r1, scale: cardScale, opacity: cardOpacity };
                             if (idx === 1) style = { y: y2, x: x2, rotate: r2, scale: cardScale, opacity: cardOpacity };
                             if (idx === 2) style = { y: y3, x: x3, rotate: r3, scale: cardScale, opacity: cardOpacity };
                             if (idx === 3) style = { y: y4, x: x4, rotate: r4, scale: cardScale, opacity: cardOpacity };

                             const colors = getCardStyles(idx);

                             return (
                               <motion.div
                                 key={idx}
                                 style={style}
                                 className={cn(
                                   "p-8 rounded-[2rem] shadow-lg border border-black/5 hover:shadow-xl transition-shadow origin-bottom flex flex-col justify-between min-h-[240px]",
                                   colors.bg
                                 )}
                               >
                                  <div>
                                    <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-6", colors.iconBg)}>
                                        {getFeatureIcon(idx)}
                                    </div>
                                    <h3 className={cn("text-xl font-serif font-bold mb-3", idx === 2 ? "text-white" : "text-acumen-secondary")}>
                                        {feature}
                                    </h3>
                                    <p className={cn("text-sm leading-relaxed", idx === 2 ? "text-white/80" : "text-slate-500")}>
                                        Professional {feature.toLowerCase()} tailored to scale your business operations.
                                    </p>
                                  </div>
                                  
                                  {idx === 2 && (
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
                                  )}
                               </motion.div>
                             );
                          })}
                      </div>
                  </div>

                  {/* FOLDER "LIP" (The Front Pocket) 
                      - Z-20: Sits ON TOP of the cards (which are z-10)
                      - This creates the visual effect that cards are sliding OUT from the pocket.
                  */}
                  <div className="relative h-32 bg-[#E2DFE5] rounded-b-[3rem] shadow-[inset_0_10px_20px_rgba(0,0,0,0.05)] -mt-10 z-20 flex items-center justify-center border-b border-l border-r border-white/50">
                      <FolderOpen className="text-acumen-secondary/20 w-10 h-10" />
                  </div>

                  <div className="text-center mt-12 relative z-30">
                    <Link href="/contactus">
                        <Button size="lg" className="rounded-full px-8 h-14 text-lg shadow-xl shadow-acumen-primary/20 hover:scale-105 transition-transform bg-acumen-primary text-white">
                            Inquire About Services <ArrowUpRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                  </div>

              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}