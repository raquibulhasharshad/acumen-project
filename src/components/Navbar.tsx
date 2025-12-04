// "use client";

// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// // Path detection (mocked for Canvas)
// const usePathname = () => {
//     if (typeof window !== 'undefined') return window.location.pathname;
//     return '/';
// };

// const MAIN_NAV_LINKS = [
//     { title: "Home", href: "/" },
//     { title: "Services", href: "/services" },
//     { title: "Case Studies", href: "/case-studies" },
//     { title: "About Us", href: "/about" },
// ];

// type NavItem = { title: string; href: string };

// const CustomLink: React.FC<React.PropsWithChildren<{ href: string; className?: string; onClick?: () => void }>> = ({
//     href,
//     className,
//     children,
//     onClick,
// }) => <a href={href} className={className} onClick={onClick}>{children}</a>;

// // ----------------------------------------------------------------------------------

// const Header: React.FC = () => {
//     const pathname = usePathname();
//     const [isMounted, setIsMounted] = useState(false);
//     const [showTransition, setShowTransition] = useState(true);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const isInitialLoad = React.useRef(true);

//     useEffect(() => {
//         setIsMounted(true);

//         if (isInitialLoad.current) {
//             const timer = setTimeout(() => setShowTransition(false), 1000);
//             isInitialLoad.current = false;
//             return () => clearTimeout(timer);
//         }

//         setShowTransition(true);
//         const timer = setTimeout(() => setShowTransition(false), 1000);
//         return () => clearTimeout(timer);

//     }, [pathname]);

//     useEffect(() => {
//         setIsMobileMenuOpen(false);
//     }, [pathname]);

//     // FIX: Set all links to use the highly visible text-acumen-purple-50 
//     // and use font-weight/underline for state distinction.
//     const navItemClass = (href: string) =>
//         `text-sm transition-colors duration-200 ${
//             pathname === href
//                 // Active: Full color, bolder, strong underline
//                 ? 'font-bold text-acumen-purple-50 border-b-2 border-acumen-purple-100' 
//                 // Inactive: Slightly muted text color, regular weight, bright hover
//                 : 'font-medium text-acumen-purple-50/80 hover:text-acumen-purple-50 hover:border-b-2 hover:border-acumen-purple-50'
//         } pb-1`;

//     // FIX: Ensure SSR class uses the visible color as default
//     const ssrNavClass = "text-sm font-medium text-acumen-purple-50/80 pb-1";

//     const ImageLogo = () => (
//         <img
//             src="/assets/TheArcLog.png"
//             alt="The Acumen Arc Logo"
//             className="w-8 h-14 object-contain rounded-md"
//         />
//     );

//     const FullScreenTransition = () => (
//         <div
//             className={`fixed inset-0 z-[100] overflow-hidden flex items-center justify-center 
//                          bg-acumen-purple-50/70 backdrop-blur-sm transition-opacity duration-1000 ease-in-out 
//                          ${showTransition ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//             <img
//                 src="/assets/TheArc.gif"
//                 alt="Transition Animation"
//                 className={`block w-80 h-80 rounded-full shadow-2xl transition-transform duration-1000 ease-in-out 
//                              ${showTransition ? 'scale-100' : 'scale-0'}`}
//             />
//         </div>
//     );

//     return (
//         <>
//             <FullScreenTransition />

//             {/* HEADER */}
//             <header
//                 className="flex justify-between items-center px-6 md:px-10 
//                             border-b border-acumen-purple-600 rounded-b-lg sticky top-0 
//                             bg-acumen-purple-600 backdrop-blur-sm z-30"
//             >
//                 <CustomLink href="/" className="flex items-center space-x-2">
//                     <ImageLogo />
//                     {/* Title color is text-acumen-purple-50 (light) */}
//                     <h1 className="text-xl font-bold tracking-tight text-acumen-purple-50">
//                         The Acumen Arc
//                     </h1>
//                 </CustomLink>

//                 {/* Desktop nav */}
//                 <nav className="hidden sm:flex items-center space-x-8">
//                     {MAIN_NAV_LINKS.map((item: NavItem) => (
//                         <CustomLink
//                             key={item.href}
//                             href={item.href}
//                             className={isMounted ? navItemClass(item.href) : ssrNavClass}
//                         >
//                             {item.title}
//                         </CustomLink>
//                     ))}

//                     <CustomLink href="/contact">
//                         <button
//                             className="bg-acumen-purple-700 text-acumen-purple-50 px-4 py-2 rounded-lg font-semibold 
//                                      hover:bg-acumen-purple-50 hover:text-acumen-purple-700 
//                                      border-2 border-acumen-purple-500 transition duration-150 shadow-xl hover:scale-105"
//                         >
//                             Get Started
//                         </button>
//                     </CustomLink>
//                 </nav>

//                 {/* Mobile menu button */}
//                 <button
//                     className="sm:hidden text-acumen-purple-50 p-2 rounded-lg hover:bg-acumen-purple-700/30 transition"
//                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 >
//                     {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                 </button>
//             </header>

//             {/* MOBILE MENU */}
//             <div
//                 className={`fixed top-0 right-0 h-full w-64 bg-acumen-purple-900 z-40 shadow-2xl transform 
//                              transition-transform duration-300 ease-in-out sm:hidden
//                              ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
//             >
//                 <div className="flex flex-col p-6 space-y-6 pt-20">
//                     {MAIN_NAV_LINKS.map((item: NavItem) => (
//                         <CustomLink
//                             key={item.href}
//                             href={item.href}
//                             onClick={() => setIsMobileMenuOpen(false)}
//                             className={`text-xl font-semibold p-2 rounded-lg transition 
//                                  ${pathname === item.href
//                                  ? 'text-acumen-purple-50 bg-acumen-purple-700/30'
//                                  // FIX: Using acumen-purple-50/80 instead of acumen-light for consistency
//                                  : 'text-acumen-purple-50/80 hover:text-acumen-purple-50 hover:bg-acumen-purple-700/20'}`}
//                         >
//                             {item.title}
//                         </CustomLink>
//                     ))}

//                     <CustomLink href="/contact">
//                         <button
//                             onClick={() => setIsMobileMenuOpen(false)}
//                             className="w-full bg-acumen-purple-700 text-acumen-purple-50 px-4 py-3 rounded-lg 
//                                      font-bold mt-4 hover:bg-acumen-purple-50 hover:text-acumen-purple-700
//                                      border-2 border-acumen-purple-700 transition duration-150 hover:scale-105 shadow-xl"
//                         >
//                             Get Started
//                         </button>
//                     </CustomLink>
//                 </div>
//             </div>

//             {/* BACKDROP */}
//             {isMobileMenuOpen && (
//                 <div
//                     className="fixed inset-0 bg-acumen-purple-900/60 z-30 sm:hidden"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                 />
//             )}
//         </>
//     );
// };

// export default Header;

"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Expertise", href: "#services" },
        { name: "Work", href: "#case-studies" },
        { name: "Philosophy", href: "#about" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-xl py-3 border-b border-acumen-primary/10"
                    : "py-3"
            )}
        >
            <div className="container mx-auto px-6 md:px-8">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group z-50">
                        <div className="w-10 h-10 flex items-center bg-[hsla(276, 35%, 78%, 1.00)] justify-center rounded-xl text-white font-bold">
                            <img
                                src="/assets/TheArc.gif"
                                alt="The Acumen Arc Logo"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                        <span className="font-serif text-lg font-bold tracking-tight text-[hsl(277,72%,26%)]">
                            The Acumen Arc
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1 p-1 bg-white/50 backdrop-blur-lg rounded-full border border-slate-200/50">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-5 py-2 text-sm font-medium text-slate-600 rounded-full hover:bg-slate-100 hover:text-slate-900 transition"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button
                            variant="primary"
                            size="md"
                            onClick={() =>
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            Let's Talk
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 rounded-full hover:bg-slate-100 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-slate-900" />
                        ) : (
                            <Menu className="w-6 h-6 text-slate-900" />
                        )}
                    </button>

                    {/* Mobile Menu */}
                    <div
                        className={cn(
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
                                    className="text-2xl font-serif font-medium text-slate-800 hover:text-slate-900 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}

                            <div className="h-px w-12 bg-slate-200 my-4" />

                            <Button
                                variant="secondary"
                                size="lg"
                                className="w-full max-w-xs"
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }}
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

export default Navbar;