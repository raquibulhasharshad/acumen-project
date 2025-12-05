
"use client";

import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center pt-28 pb-20"
    >
      {/* Abstract Background - Using primary brand colors for subtle gradient blur */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[hsl(277,72%,26%)]/20 to-blue-600/20 rounded-full blur-3xl" />
      {/* <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-palette-blue-slate/30 to-acumen-primary/20 rounded-full blur-3xl" /> */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 to-[hsl(277,72%,26%)]/20 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/nc')] opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Badge */}
          <div className="animate-fade-in opacity-0 [animation-delay:200ms] inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-acumen-primary/30">
            <Sparkles className="w-3.5 h-3.5 text-acumen-primary" />
            <span className="text-xs font-semibold tracking-wide text-acumen-secondary uppercase">
              Strategic Digital Partner
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in opacity-0 [animation-delay:400ms] font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-acumen-secondary mt-6 mb-4">
            <span className="text-acumen-secondary">Build Brands That</span> <br className="hidden md:block" />
            
            <span className="text-acumen-primary">Inspire &</span> 
            <span className="text-palette-pastel-lavender"> Convert</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in opacity-0 [animation-delay:600ms] text-lg md:text-xl text-acumen-light max-w-2xl mb-10">
            We fuse data-driven strategy with world-class design to build
            digital experiences that perform.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in opacity-0 [animation-delay:800ms] flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="xl"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start a Project <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              variant="outline"
              size="xl"
              onClick={() =>
                document
                  .getElementById("case-studies")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Case Studies
            </Button>
          </div>

          {/* Social Proof */}
          <div className="animate-fade-in opacity-0 [animation-delay:1000ms] mt-20 pt-8 border-t border-acumen-primary/20 w-full">
            <p className="text-sm font-medium text-acumen-light mb-6 uppercase tracking-wide">
              Trusted by visionary brands
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale">
              {["Acme Corp", "GlobalTech", "Nebula", "Velocity", "FoxRun", "DSEnergize"].map(
                (logo) => (
                  <span
                    key={logo}
                    className="text-lg font-serif font-bold text-acumen-secondary"
                  >
                    {logo}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() =>
          document
            .getElementById("services")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ChevronDown className="w-8 h-8 text-acumen-light" />
      </div>
    </section>
  );
};