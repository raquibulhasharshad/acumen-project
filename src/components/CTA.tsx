// "use client";
// import { Send } from "lucide-react";

// export default function CTABut() {
//     return (
//         <section className="w-full bg-acumen-light-900 py-16 md:py-24">
//             <div className="mx-auto max-w-5xl px-6 flex flex-col items-center text-center">

//                 <h2 className="text-3xl md:text-5xl font-extrabold text-acumen-purple-900/90 leading-tight tracking-tight">
//                     Ready to Transform Your Digital Presence?
//                 </h2>

//                 <p className="mt-4 mb-8 text-lg font-semibold text-acumen-purple-800 max-w-3xl">
//                     Let's discuss your ambitious goals and craft a strategic plan 
//                     to achieve measurable results.
//                 </p>

//                 {/* CTA Button */}
//                 <a
//                     href="/contact"
//                     className="
//                         px-8 py-3 rounded-full font-bold uppercase tracking-wider
//                         bg-acumen-purple-700 text-acumen-purple-50
//                         transition-all duration-300
//                         flex items-center gap-2
//                         hover:bg-acumen-purple-50 hover:text-acumen-purple-700 hover:border-2 border-acumen-purple-900
//                         hover:scale-105 shadow-xl hover:shadow-acumen-purple-200
//                     "
//                 >
//                     <Send className="w-5 h-5" />
//                     Get in Touch
//                 </a>

//             </div>
//         </section>
//     );
// }

"use client";

import { Button } from "@/components/ui/Button";

export const CTA = () => (
  <section id="contact" className="py-24 bg-[#FDFCFE] relative">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
          Ready To Scale?
        </h2>

        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          Let's discuss your ambitious goals and craft a strategic plan tailored to you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="secondary"
            size="xl"
            className="w-full sm:w-auto shadow-xl shadow-[hsl(277,72%,26%)]/40 hover:shadow-lg transition-shadow"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Schedule a Consultation
          </Button>

          <Button
            variant="outline"
            size="xl"
            className="w-full sm:w-auto"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Services
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
          {[
            "Free 30-min Strategy Call",
            "No Long-term Contracts",
            "Results Guaranteed",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CTA;