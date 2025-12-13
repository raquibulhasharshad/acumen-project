"use client";

import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const CTA = () => (
  // FIX 1: Section background changed from hex to subtle brand tint
  <section id="contact" className="py-12 bg-white relative">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* FIX 2: Headline text color updated to darkest brand shade */}
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-acumen-secondary mb-6">
          Ready To Scale?
        </h2>

        {/* FIX 3: Body text color updated to neutral shade */}
        <p className="text-xl text-acumen-light mb-12 max-w-2xl mx-auto">
         Big goals need bold moves. Let's build a plan that makes them happen.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contactus" className="w-full sm:w-auto">
          <Button
            variant="secondary"
            size="xl"
            // FIX 4: Replaced hardcoded HSL shadow with clean brand shadow
            className="w-full sm:w-auto shadow-xl shadow-acumen-primary/40 hover:shadow-lg transition-shadow"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Schedule a Consultation
          </Button>
          </Link>
          <Button
            variant="outline"
            size="xl"
            // FIX: Overrides the default outline to use brand colors (which are necessary because the Button.tsx default outline still had slate border)
            className="w-full sm:w-auto border-acumen-primary text-acumen-secondary hover:bg-acumen-primary/10 hover:border-acumen-primary"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Services
          </Button>
        </div>

        {/* FIX 5: Feature text color updated to neutral shade */}
        <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-acumen-light">
          {["Free 30-min Strategy Call", "No Long-term Contracts", "Results Guaranteed"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              {/* Green color retained as it often signifies success/trust (standard) */}
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