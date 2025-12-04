// "use client";
// import { ArrowRight } from "lucide-react";

// export default function Hero() {
//     return (
//         <section className="w-full bg-acumen-light-900">
//             <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

//                 {/* LEFT TEXT SECTION */}
//                 <div>
//                     <h1 className="text-4xl md:text-6xl font-bold leading-tight text-acumen-purple-800">
//                         We Build Brands That <span className="text-acumen-purple-700">Inspire & Convert</span>
//                     </h1>

//                     <p className="mt-6 text-xl max-w-lg text-acumen-purple-800">
//                         Acumen Arc is your creative & strategic partner — delivering results-driven
//                         digital experiences for ambitious brands.
//                     </p>

//                     {/* CTA BUTTONS */}
//                     <div className="mt-8 flex gap-4">

//                         {/* CTA 1 */}
//                         <a
//                             href="/contact"
//                             className="px-6 py-3 rounded-xl font-medium cursor-pointer
//                             border-2 border-acumen-purple-700
//                             bg-acumen-purple-700 text-acumen-purple-50
//                             transition-all duration-300
//                             hover:bg-acumen-purple-50 hover:text-acumen-purple-700
//                             hover:scale-105 shadow-md"
//                         >
//                             Get Started
//                         </a>

//                         {/* CTA 2 */}
//                         <a
//                             href="/services"
//                             className="px-6 py-3 rounded-xl font-medium cursor-pointer
//                             border-2 border-acumen-purple-700
//                             bg-acumen-purple-700 text-acumen-purple-50
//                             transition-all duration-300
//                             hover:bg-acumen-purple-50 
//                             hover:text-acumen-purple-700                            
//                             hover:scale-105 shadow-md
//                             flex items-center gap-2"
//                         >
//                             Our Services →
//                         </a>

//                     </div>
//                 </div>

//                 {/* RIGHT VIDEO SECTION */}
//                 {/* <div className="relative">
//                     <div className="w-full h-72 md:h-96 rounded-2xl shadow-inner bg-acumen-purple-900 overflow-hidden">
//                         <video
//                             src="/assets/herovid.mp4"
//                             autoPlay
//                             loop
//                             muted
//                             playsInline
//                             className="w-full h-full object-cover"
//                         />
//                     </div>
//                     <p className="text-sm text-center mt-2 text-acumen-purple-800">
//                         (The Acumen Arc Core Cycle Visual)
//                     </p>
//                 </div> */}
//             </div>
//         </section>
//     );
// }

"use client";

import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center pt-28 pb-20"
    >
      {/* Abstract Background */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-[hsl(277,72%,26%)]/20 to-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 to-[hsl(277,72%,26%)]/20 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/nc')] opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Badge */}
          <div className="animate-fade-in opacity-0 [animation-delay:200ms] inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-slate-200/50">
            <Sparkles className="w-3.5 h-3.5 text-[hsl(277,72%,26%)]" />
            <span className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
              Strategic Digital Partner
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in opacity-0 [animation-delay:400ms] font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-[#4f1271] mt-6 mb-4">
            Build Brands That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(277,72%,26%)] to-[#bfacc8]">
              Inspire & Convert
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in opacity-0 [animation-delay:600ms] text-lg md:text-xl text-slate-600 max-w-2xl mb-10">
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
          <div className="animate-fade-in opacity-0 [animation-delay:1000ms] mt-20 pt-8 border-t border-slate-100 w-full">
            <p className="text-sm font-medium text-slate-400 mb-6 uppercase tracking-wide">
              Trusted by visionary brands
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale">
              {["Acme Corp", "GlobalTech", "Nebula", "Velocity", "FoxRun"].map(
                (logo) => (
                  <span
                    key={logo}
                    className="text-lg font-serif font-bold text-slate-800"
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
        <ChevronDown className="w-8 h-8 text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;
