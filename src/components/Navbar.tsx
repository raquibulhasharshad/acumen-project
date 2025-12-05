"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Helper for scrolling is often needed in the Hero section
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // --- FIX: Manage body overflow to prevent double scroll when menu is open ---
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            // Restore default scroll behavior when menu is closed
            document.body.style.overflowY = 'unset';
        }
        // Cleanup function to ensure scroll is restored on component unmount/state change
        return () => {
            document.body.style.overflowY = 'unset';
        };
    }, [isMobileMenuOpen]);
    // -----------------------------------------------------------------------------

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Expertise", href: "#services" },
        { name: "Work", href: "#case-studies" },
        { name: "Philosophy", href: "#about" },
    ];

    return (
        <header
            // Ensure header takes full width and has the highest z-index
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
                isScrolled
                    ? "bg-white/90 backdrop-blur-xl py-3 border-b border-acumen-primary/20"
                    : "py-3"
            )}
        >
            <div className="container mx-auto px-6 md:px-8">
                <nav className="flex items-center justify-between">
                    {/* Logo - Ensure logo stays on top (z-50) */}
                    <a href="#home" className="flex items-center gap-2 group z-50" onClick={() => scrollToSection("home")}>
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl text-white font-bold">
                            <span className="text-xl font-serif">
                                <img src="/assets/TheArc.gif" alt="" />
                            </span>
                        </div>
                        <span className="font-serif text-lg font-bold tracking-tight text-acumen-primary">
                            The Acumen Arc
                        </span>
                    </a>

                    {/* Desktop Nav - Border color fixed for visibility */}
                    <div className="hidden md:flex items-center gap-1 p-1 bg-white/50 backdrop-blur-lg rounded-full border border-acumen-secondary">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-5 py-2 text-sm font-medium text-acumen-light rounded-full hover:bg-acumen-primary/10 hover:text-acumen-secondary transition"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href.substring(1));
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button
                            variant="secondary"
                            size="md"
                            onClick={() => scrollToSection("contact")}
                        >
                            Let's Talk
                        </Button>
                    </div>

                    {/* Mobile Toggle - Ensure this button stays on top (z-50) */}
                    <button
                        className="md:hidden p-2 rounded-full hover:bg-acumen-primary/10 transition-colors z-50 relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {/* ICON SWAP LOGIC IS ALREADY CORRECT */}
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-acumen-secondary" />
                        ) : (
                            <Menu className="w-6 h-6 text-acumen-secondary" />
                        )}
                    </button>

                    {/* Mobile Menu Overlay - z-40 is correct for the menu itself */}
                    <div
                        className={cn(
                            // This element is now clipped by the body overflow setting
                            "fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center transition-all duration-300",
                            isMobileMenuOpen
                                ? "opacity-100 visible"
                                : "opacity-0 invisible pointer-events-none"
                        )}
                    >
                        <div className="flex flex-col items-center gap-6 w-full px-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-serif font-medium text-acumen-secondary hover:text-acumen-primary transition-colors"
                                    onClick={() => scrollToSection(link.href.substring(1))}
                                >
                                    {link.name}
                                </a>
                            ))}

                            <div className="h-px w-12 bg-acumen-primary/20 my-4" />

                            <Button
                                variant="secondary"
                                size="lg"
                                className="w-full max-w-xs"
                                onClick={() => scrollToSection("contact")}
                            >
                                Start Your Project
                            </Button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};