"use client";

import React, { useState } from "react";
import {
    Menu,
    MapPin,
    Mail,
    Phone,
    ArrowRight,
    CheckCircle2,
    Loader2,
    ChevronDown
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

// --- MAIN CONTACT PAGE ---
const ContactUs = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // 1. CONFIGURATION: Define your receiving number here for WhatsApp integration
    const RECIPIENT_NUMBER = "918920525465"; 

    const services = [
        "Branding & Identity",
        "Web Development",
        "UI/UX Design",
        "Digital Strategy",
        "SEO & Marketing",
        "Other"
    ];

    const toggleService = (service: string) => {
        setSelectedServices(prev =>
            prev.includes(service)
                ? prev.filter(s => s !== service)
                : [...prev, service]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // 2. Gather Form Data
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const message = (document.getElementById('message') as HTMLTextAreaElement).value;
        const serviceList = selectedServices.join(', ') || "None selected";

        // 3. Construct WhatsApp Message
        const text = `*New Website Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Interested in:* ${serviceList}%0A*Message:* ${message}`;

        // 4. Redirect logic with simulated loading delay
        setTimeout(() => {
            window.open(`https://wa.me/${RECIPIENT_NUMBER}?text=${text}`, '_blank');
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    return (
        // Added overflow-x-hidden here to prevent horizontal scroll
        <main className="min-h-screen bg-[#FDFCFE] font-sans selection:bg-acumen-primary selection:text-white flex flex-col overflow-x-hidden">
            {/* INJECTED STYLES FOR PREVIEW ENVIRONMENT */}
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
        
        /* Form Focus Rings */
        .focus-within\:ring-acumen-primary:focus-within {
            --tw-ring-color: hsl(var(--acumen-primary));
        }
        
        /* Animation */
        @keyframes fade-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
            animation: fade-up 0.6s ease-out forwards;
        }
      `}</style>

            <Navbar />

            {/* Main Content Wrapper - Holds Gradient Backgrounds and Page Content */}
            <div className="relative flex-grow w-full">

                {/* --- BACKGROUND LAYERS CONTAINER (Clips blobs separately) --- */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-[hsl(277,72%,26%)]/20 to-blue-600/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/20 to-[hsl(277,72%,26%)]/20 rounded-full blur-3xl" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/nc')] opacity-5" />
                </div>

                <div className="flex-grow pt-20 pb-12 px-6 relative z-10">
                    <div className="container mx-auto max-w-6xl">

                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

                            {/* LEFT COLUMN: Info & Context */}
                            <div className="animate-fade-up">
                                <span className="text-sm font-bold text-acumen-primary uppercase tracking-widest bg-acumen-primary/5 px-3 py-1 rounded-md mb-6 inline-block">
                                    Contact Us
                                </span>

                                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-acumen-secondary mb-6 leading-tight">
                                    Let's build something <span className="text-acumen-primary font-serif italic">visionary.</span>
                                </h1>

                                <p className="text-lg text-acumen-light mb-12 max-w-lg leading-relaxed">
                                    Whether you need a complete brand overhaul or a technical transformation, we are ready to help you scale. Tell us about your project.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-acumen-primary group-hover:bg-acumen-primary group-hover:text-white transition-colors duration-300">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-acumen-secondary mb-1">Email Us</h3>
                                            <p className="text-acumen-light hover:text-acumen-primary transition-colors cursor-pointer">syedah@theacumenarc.com</p>
                                            <p className="text-acumen-light hover:text-acumen-primary transition-colors cursor-pointer">info@theacumenarc.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-acumen-primary group-hover:bg-acumen-primary group-hover:text-white transition-colors duration-300">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-acumen-secondary mb-1">Visit Us</h3>
                                            <p className="text-acumen-light">CIE, 4C(Gate: 4), Jamia Milia Islamia<br />New Delhi, India 110025</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN: Interactive Form */}
                            <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>

                                {/* Decorative Blob */}
                                <div className="absolute -top-20 -right-20 w-80 h-80 bg-acumen-primary/5 rounded-full blur-3xl pointer-events-none" />

                                <div className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-xl shadow-acumen-primary/5 border border-slate-100 relative">

                                    {isSuccess ? (
                                        <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-up">
                                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                                <CheckCircle2 className="w-10 h-10 text-green-600" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-acumen-secondary mb-2">Message Sent!</h3>
                                            <p className="text-acumen-light max-w-xs mx-auto mb-8">
                                                Redirecting you to WhatsApp to complete your inquiry...
                                            </p>
                                            <Button variant="outline" onClick={() => { setIsSuccess(false); setSelectedServices([]); }}>
                                                Send Another Message
                                            </Button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label htmlFor="name" className="text-sm font-semibold text-acumen-secondary">Name</label>
                                                    <input
                                                        id="name"
                                                        type="text"
                                                        required
                                                        placeholder="Your Name"
                                                        className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200 focus:border-acumen-primary focus:ring-1 focus:ring-acumen-primary outline-none transition-all placeholder:text-slate-400"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="email" className="text-sm font-semibold text-acumen-secondary">Email</label>
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        required
                                                        placeholder="xyz@company.com"
                                                        className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200 focus:border-acumen-primary focus:ring-1 focus:ring-acumen-primary outline-none transition-all placeholder:text-slate-400"
                                                    />
                                                </div>
                                            </div>

                                            {/* Services Section with Mobile Dropdown */}
                                            <div className="space-y-3 relative">
                                                <label className="text-sm font-semibold text-acumen-secondary">I'm interested in...</label>
                                                
                                                {/* Mobile Trigger Button */}
                                                <button
                                                    type="button"
                                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                    className="md:hidden w-full px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200 text-left text-sm text-acumen-secondary flex justify-between items-center focus:border-acumen-primary focus:ring-1 focus:ring-acumen-primary transition-all"
                                                >
                                                    <span className="truncate mr-2">
                                                        {selectedServices.length > 0 
                                                            ? selectedServices.join(", ") 
                                                            : "Select Services..."}
                                                    </span>
                                                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-200 text-acumen-light", isDropdownOpen && "rotate-180")} />
                                                </button>

                                                {/* Services List (Dropdown on Mobile, Grid on Desktop) */}
                                                <div className={cn(
                                                    "flex flex-wrap gap-2 transition-all",
                                                    // Mobile Styles (Dropdown Mode)
                                                    isDropdownOpen 
                                                        ? "absolute z-50 top-full left-0 right-0 mt-2 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex" 
                                                        : "hidden",
                                                    // Desktop Styles (Always Visible Grid)
                                                    "md:flex md:static md:bg-transparent md:p-0 md:border-none md:shadow-none"
                                                )}>
                                                    {services.map(service => (
                                                        <button
                                                            key={service}
                                                            type="button"
                                                            onClick={() => toggleService(service)}
                                                            className={cn(
                                                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border text-left",
                                                                selectedServices.includes(service)
                                                                    ? "bg-acumen-primary text-white border-acumen-primary shadow-md shadow-acumen-primary/20"
                                                                    : "bg-white text-acumen-secondary border-acumen-primary/10 hover:border-acumen-primary hover:text-acumen-primary"
                                                            )}
                                                        >
                                                            {service}
                                                        </button>
                                                    ))}
                                                </div>
                                                
                                                {/* Mobile Backdrop to close dropdown */}
                                                {isDropdownOpen && (
                                                    <div className="fixed inset-0 z-40 md:hidden" onClick={() => setIsDropdownOpen(false)} />
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="message" className="text-sm font-semibold text-acumen-secondary">Message</label>
                                                <textarea
                                                    id="message"
                                                    rows={4}
                                                    required
                                                    placeholder="Tell us about your goals, timeline, and budget..."
                                                    className="w-full px-4 py-3 rounded-xl bg-slate-50/50 border border-slate-200 focus:border-acumen-primary focus:ring-1 focus:ring-acumen-primary outline-none transition-all placeholder:text-slate-400 resize-none"
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                variant="primary"
                                                size="lg"
                                                className="w-full"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message <ArrowRight className="w-4 h-4" />
                                                    </>
                                                )}
                                            </Button>

                                            <p className="text-xs text-center text-acumen-light mt-4">
                                                By submitting this form, you agree to our <a href="/privacy" className="underline hover:text-acumen-primary">Privacy Policy</a>.
                                            </p>
                                        </form>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default ContactUs;