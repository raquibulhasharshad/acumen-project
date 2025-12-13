"use client";

import React from "react";
import { 
  ArrowRight, 
  Briefcase, 
  Clock, 
  MapPin, 
  Users, 
  Zap, 
  Heart, 
  Target 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// --- MOCK DATA ---
const PERKS = [
  {
    icon: Zap,
    title: "High Impact Work",
    desc: "Work on visionary projects that reshape industries, not just maintain them."
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    desc: "A flat hierarchy where the best idea wins, regardless of your title."
  },
  {
    icon: Target,
    title: "Continuous Growth",
    desc: "Dedicated budget for courses, conferences, and personal development."
  },
  {
    icon: Heart,
    title: "Holistic Wellness",
    desc: "Flexible hours and remote-friendly options to prioritize your well-being."
  }
];

const OPEN_POSITIONS = [
  {
    id: 1,
    role: "Senior UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote / New Delhi",
    link: "mailto:careers@theacumenarc.com?subject=Application: Senior UI/UX Designer"
  },
  {
    id: 2,
    role: "Frontend Developer (React/Next.js)",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    link: "mailto:careers@theacumenarc.com?subject=Application: Frontend Developer"
  },
  {
    id: 3,
    role: "Digital Strategy Lead",
    department: "Strategy",
    type: "Contract / Full-time",
    location: "New Delhi",
    link: "mailto:careers@theacumenarc.com?subject=Application: Digital Strategy Lead"
  }
];

export default function Careers() {
  return (
    <main className="min-h-screen bg-[#FDFCFE] font-sans selection:bg-acumen-primary selection:text-white flex flex-col overflow-x-hidden">
      
      {/* INJECTED STYLES FOR PREVIEW (You can remove this block in your real project if tailwind config is set) */}
      <style>{`
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
        
        .hover\:bg-acumen-primary:hover { background-color: hsl(var(--acumen-primary)); }
        .hover\:text-acumen-primary:hover { color: hsl(var(--acumen-primary)); }
        .hover\:border-acumen-primary:hover { border-color: hsl(var(--acumen-primary)); }

        @keyframes fade-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
            animation: fade-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        
        @keyframes slide-up-fade {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up-fade {
            animation: slide-up-fade 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative lg:pt-32 lg:pb-16 md:pb-16 pb-12 overflow-hidden">
        {/* Background Gradients & Grid (Enord Style) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-[hsl(277,72%,26%)]/10 to-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/10 to-[hsl(277,72%,26%)]/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/nc')] opacity-5" />
            
            {/* Vertical Staggered Grid */}
            <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 gap-0 h-full w-full max-w-7xl mx-auto px-6">
                {[...Array(12)].map((_, i) => (
                    <div 
                        key={i}
                        className={`relative h-full border-r border-acumen-primary/5 hidden ${i < 6 ? 'block' : 'md:block'} opacity-0 animate-slide-up-fade`}
                        style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
                    />
                ))}
            </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="animate-fade-up">
            <span className="text-sm font-bold text-acumen-primary uppercase tracking-widest bg-acumen-primary/5 px-3 py-1 rounded-md mb-6 inline-block">
              Careers
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-acumen-secondary mb-6 leading-tight max-w-4xl mx-auto">
              Build the <span className="text-acumen-primary italic">extraordinary</span> with us.
            </h1>
            <p className="text-lg md:text-xl text-acumen-light max-w-2xl mx-auto leading-relaxed mb-10">
              We are a team of visionaries, builders, and strategists. Join us in crafting digital experiences that define the future.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="primary" 
                size="xl" 
                onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Openings
              </Button>
              <Button variant="outline" size="xl">
                Read our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES / PERKS SECTION --- */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PERKS.map((perk, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-3xl bg-[#FDFCFE] border border-slate-100 hover:border-acumen-primary/20 hover:shadow-xl hover:shadow-acumen-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-acumen-primary/5 flex items-center justify-center mb-6 text-acumen-primary group-hover:bg-acumen-primary group-hover:text-white transition-colors duration-300">
                  <perk.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-acumen-secondary mb-3">
                  {perk.title}
                </h3>
                <p className="text-sm text-acumen-light leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OPEN POSITIONS SECTION --- */}
      <section id="positions" className="py-12 bg-[#FDFCFE] relative border-t border-acumen-primary/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-acumen-secondary mb-4">
                Open Positions
              </h2>
              <p className="text-acumen-light max-w-lg">
                Ready to make an impact? Find the role that fits your expertise.
              </p>
            </div>
            {/* Optional Filter or count could go here */}
            <div className="text-sm font-semibold text-acumen-primary bg-acumen-primary/5 px-4 py-2 rounded-full">
              {OPEN_POSITIONS.length} Roles Available
            </div>
          </div>

          <div className="grid gap-6">
            {OPEN_POSITIONS.map((job) => (
              <a 
                key={job.id}
                href={job.link}
                className="group relative bg-white p-6 md:p-8 rounded-2xl border border-slate-200 hover:border-acumen-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-acumen-primary/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-acumen-primary bg-acumen-primary/5 px-2 py-1 rounded">
                      {job.department}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-acumen-secondary group-hover:text-acumen-primary transition-colors mb-2">
                    {job.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-acumen-light">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-acumen-primary font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>

          {/* --- GENERAL CTA --- */}
          <div className="md:p-12 rounded-3xl bg-white text-acumen-secondary text-center relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/6 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

            <div className="relative z-10">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-acumen-secondary">
                Don't see your perfect role?
              </h3>
              <p className="text-acumen-light max-w-xl mx-auto mb-8">
                We are always looking for exceptional talent. Send us your portfolio and tell us how you can add value to the Arc.
              </p>
              <a href="mailto:careers@theacumenarc.com">
                <Button variant="glass" size="lg" className="bg-acumen-primary border-white/30 hover:bg-acumen-secondary text-white">
                  Email Your Portfolio
                </Button>
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}