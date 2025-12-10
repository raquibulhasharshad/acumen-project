"use client";

import { useRef } from "react";
import {
  Globe,
  Palette,
  Megaphone,
  Video,
  Smartphone,
  Search,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Scalable, high-performance web platforms and e-commerce solutions.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Intuitive interfaces and seamless user experiences that drive engagement.",
    },
    {
      icon: Megaphone,
      title: "Marketing Strategy",
      description:
        "Data-backed campaigns and funnel optimization for measurable growth.",
    },
    {
      icon: Video,
      title: "Video Production",
      description:
        "Cinematic storytelling that captures attention and builds trust.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Native and cross-platform app development for iOS and Android.",
    },
    {
      icon: Search,
      title: "SEO & Analytics",
      description:
        "Technical SEO and deep analytical insights for top organic ranking.",
    },
  ];

  return (
    // Added 'z-0' to the section to keep it below the navbar (assuming Navbar is z-50+)
    <section id="services" className="py-4 md:py-20 bg-white relative z-0">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 md:mb-6 gap-4 md:gap-8">
          <div className="max-w-2xl">
            <span className="text-sm md:text-lg font-bold text-acumen-primary uppercase tracking-widest">
              Our Expertise <span className="font-serif"> & </span>
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-acumen-primary mt-2">
              Signature Services
            </h2>
          </div>
        </div>

        {/* CONTAINER */}
        <div
          ref={containerRef}
          className={`
            flex 
            flex-col md:flex-row 
            md:overflow-x-auto md:snap-x md:snap-mandatory 
            gap-6 
            py-16 /* Padding prevents clipping on hover lift */
            no-scrollbar
            px-2
          `}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, x: 20, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                type: "spring",
                bounce: 0.3,
                damping: 20,
              }}
              viewport={{ once: true }}
              style={{
                position: "sticky",
                top: `${80 + idx * 10}px`,
                left: `${idx * 40}px`,
              }}
              className={`
                /* CARD DIMENSIONS */
                w-full h-[320px] 
                md:min-w-[550px] md:w-[550px] 
                md:h-[480px] 
                md:flex-shrink-0
                
                snap-center
                
                /* APPEARANCE */
                group relative flex flex-col justify-between
                p-6 md:p-8 rounded-[2rem]
                
                bg-[#F9F5FF]
                
                /* BORDER */
                border-[3px] border-white
                hover:border-acumen-primary/30
                transition-colors duration-300
                
                /* SHADOW */
                shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]
                
                cursor-pointer
                overflow-hidden
                
                /* Z-INDEX FIX: Changed from z-10 to z-0 so it stays under navbar */
                z-0
              `}
              // HOVER INTERACTION
              whileHover={{
                y: -12,
                scale: 1.02,
                // Z-INDEX FIX: Changed from z-50 to z-20. 
                // This is high enough to overlap other cards, but low enough to stay under a z-50 Navbar.
                zIndex: 20, 
                boxShadow: "0 30px 60px -15px rgba(88,28,135,0.15)",
              }}
            >
              {/* DECORATIVE BLOB */}
              <motion.div
                className="absolute -right-12 -top-12 w-40 h-40 bg-acumen-primary/5 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* CONTENT WRAPPER */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  {/* ICON */}
                  <motion.div
                    className="
                      w-12 h-12 md:w-16 md:h-16 
                      rounded-2xl bg-white flex items-center justify-center mb-6 md:mb-8 
                      shadow-sm group-hover:bg-acumen-primary transition-all duration-300
                    "
                    whileHover={{ rotate: -5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-acumen-primary group-hover:text-white transition-colors duration-300" />
                  </motion.div>

                  {/* TEXT */}
                  <div className="group-hover:translate-x-1 transition-transform duration-300 ease-out">
                    <h3 className="font-serif text-xl md:text-3xl font-semibold text-acumen-secondary mb-3 md:mb-4">
                      {service.title}
                    </h3>
                    <p className="text-acumen-light text-sm md:text-lg leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* FOOTER */}
                <div className="flex items-center text-xs md:text-sm font-bold tracking-wide text-acumen-primary uppercase mt-auto">
                  <span className="group-hover:mr-2 transition-all duration-300">
                    Learn more
                  </span>
                  <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Spacer */}
          <div className="hidden md:block min-w-[50px] flex-shrink-0" />
        </div>
      </div>
    </section>
  );
};

export default Services;