"use client";

import { Linkedin, Mail, ArrowRight, Facebook, Instagram, Loader2, Check } from "lucide-react";
import { useState } from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // UPDATED: Define explicit paths for routing
  const companyLinks = [
    // About & Services are components on the front page: link to front-page anchors
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/allcasestudies" }, // Routes to your Portfolio page
    { name: "Contact", href: "/contactus" },    // Routes to your Contact page
    { name: "Careers", href: "/careers" }
  ];

  const legalLinks = [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Cookies", href: "/cookies" }
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <footer className="bg-white border-t border-acumen-primary/10 pt-20 pb-5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand/Contact Section */}
          <div className="md:col-span-5">
            {/* UPDATED: Link to Home Route "/" */}
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl text-white font-bold">
                <span className="text-xl font-serif">
                  <img src="/assets/TheArc.gif" alt="Acumen Logo" className="w-10 h-10" onError={(e) => e.currentTarget.style.display = 'none'} /> 
                  <a href="/#home" />
                </span>
              </div>
              <span className="font-serif text-xl font-bold text-acumen-primary">
                The Acumen Arc
              </span>
            </a>

            <p className="text-acumen-light mb-8 max-w-xs leading-relaxed">
              Strategy That Moves. Creativity That Wins.”
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/theacumenarc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-acumen-primary/5 flex items-center justify-center text-acumen-light hover:bg-acumen-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-acumen-primary/5 flex items-center justify-center text-acumen-light hover:bg-acumen-primary hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.instagram.com/theacumenarc?igsh=MWo5cHhtM2FneWVqbQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-acumen-primary/5 flex items-center justify-center text-acumen-light hover:bg-acumen-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-acumen-primary/5 flex items-center justify-center text-acumen-light hover:bg-acumen-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:syedah@theacumenarc.com" className="w-10 h-10 rounded-full bg-acumen-primary/5 flex items-center justify-center text-acumen-light hover:bg-acumen-primary hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-acumen-secondary mb-6">Company</h4>
            <ul className="space-y-4 text-acumen-light">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  {/* Note: Use <Link> in your real project */}
                  <a 
                    href={item.href}
                    className="hover:text-acumen-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-acumen-secondary mb-6">Legal</h4>
            <ul className="space-y-4 text-acumen-light">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="hover:text-acumen-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-acumen-secondary mb-6">Stay Updated</h4>
            <p className="text-acumen-light text-sm mb-4">
              Subscribe to our newsletter for insights and updates.
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading" || status === "success"}
                  className="flex-1 bg-acumen-primary/5 border-none rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-acumen-primary disabled:opacity-50 transition-all"
                  required
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={`rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 ${
                    status === "success" 
                      ? "bg-green-500 text-white" 
                      : "bg-acumen-primary text-white hover:bg-acumen-secondary"
                  }`}
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : status === "success" ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </div>
              {status === "success" && (
                <p className="absolute -bottom-6 left-0 text-xs text-green-600 font-medium animate-in fade-in slide-in-from-top-1">
                  You're subscribed!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-acumen-primary/10 pt-8 flex flex-col md:flex-row justify-between text-sm text-acumen-light">
          <p>&copy; {currentYear} The Acumen Arc. All rights reserved.</p>
          <div className="flex text-acumen-secondary gap-4 mt-4 md:mt-0">
              <a className="hover:text-acumen-light" href="/terms">
                Terms of Service
              </a>
              <a className="hover:text-acumen-light" href="/privacy">
                Privacy Policy
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;