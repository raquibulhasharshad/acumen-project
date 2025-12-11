"use client";

import { useRef, useState, useEffect, useMemo } from "react";
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

// --- Utility: Custom Smooth Scroll Function ---
// Tuned for a "buttery" feel rather than a mechanical slide
const scrollToTarget = (
  container: HTMLElement | Window,
  targetPos: number,
  direction: "horizontal" | "vertical",
  duration: number = 800
) => {
  const startPos =
    direction === "horizontal"
      ? (container as HTMLElement).scrollLeft
      : container instanceof Window
      ? window.scrollY
      : (container as HTMLElement).scrollTop;
  const distance = targetPos - startPos;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    // Easing: easeOutQuart (Smoother deceleration than Cubic)
    const ease = (t: number) => 1 - Math.pow(1 - t, 4);
    
    const run = ease(Math.min(timeElapsed / duration, 1));
    const nextPos = startPos + distance * run;

    if (direction === "horizontal") {
      (container as HTMLElement).scrollTo({ left: nextPos });
    } else {
      container.scrollTo({ top: nextPos });
    }

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  requestAnimationFrame(animation);
};

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // --- Track Mobile State ---
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // --- Optimization: Memoize Data ---
  const services = useMemo(() => [
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
  ], []);

  // Scroll Detection to update activeIndex
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.findIndex(
              (card) => card === entry.target
            );
            // --- Optimization: Only update state if index actually changed ---
            // This prevents React from re-rendering during the scroll animation,
            // which causes the "lag" or "stutter".
            if (index !== -1) {
              setActiveIndex((prev) => (prev !== index ? index : prev));
            }
          }
        });
      },
      {
        threshold: 0.6,
      }
    );
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    return () => observer.disconnect();
  }, [services]);

  // Handler for Dot Clicks
  const handleDotClick = (idx: number) => {
    const card = cardsRef.current[idx];
    const container = containerRef.current;
    if (!card || !container) return;

    if (isMobile) {
      // Mobile Vertical Scroll Logic
      const rect = card.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const stickyOffset = 80 + idx * 10;
      const targetY = rect.top + scrollTop - stickyOffset - 20; 
      scrollToTarget(window, targetY, "vertical", 800);
    } else {
      // Desktop Horizontal Scroll Logic
      const containerWidth = container.clientWidth;
      const cardWidth = card.clientWidth;
      const cardLeft = card.offsetLeft;
      const targetX = cardLeft - containerWidth / 2 + cardWidth / 2;
      scrollToTarget(container, targetX, "horizontal", 900);
    }
  };

  return (
    <section id="services" className="py-4 md:py-8 bg-white relative z-0">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between md:mb-6 gap-4 md:gap-8">
          <div className="max-w-2xl">
            <span className="text-sm md:text-lg font-bold text-acumen-primary uppercase tracking-widest">
              Our Expertise <span className="font-serif"> & </span>
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-acumen-primary mt-2">
              Signature Services
            </h2>
          </div>
        </div>

        {/* LAYOUT WRAPPER */}
        <div className="flex flex-row md:flex-col gap-4 relative">
          {/* CARDS CONTAINER */}
          <div
            ref={containerRef}
            className={`
              flex-1
              flex 
              flex-col md:flex-row 
              md:overflow-x-auto md:snap-x md:snap-mandatory 
              gap-6 
              py-12 
              no-scrollbar
            `}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                initial={{ opacity: 0, y: 50, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                // --- Optimization: Lighter Transition ---
                // Switched from 'spring' to 'easeOut'. Springs are heavy on lists.
                transition={{
                  duration: 0.6,
                  delay: idx * 0.05,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                
                // Stacking Logic (Mobile) vs Horizontal Layout (Desktop)
                style={{
                  top: `${80 + idx * 10}px`, 
                  left: isMobile ? 0 : `${idx * 40}px`,
                  // Optimization: Tell browser to prepare for animation
                  willChange: "transform", 
                }}

                className={`
                  /* CARD DIMENSIONS */
                  w-full h-[300px] 
                  md:min-w-[550px] md:w-[550px] 
                  md:h-[400px] 
                  md:flex-shrink-0
                  
                  sticky
                  md:snap-center
                  
                  /* APPEARANCE */
                  group relative flex flex-col justify-between
                  p-6 md:p-8 rounded-[2rem]
                  
                  bg-[#F9F5FF]
                  
                  /* BORDER */
                  border-[3px] border-acumen-primary/10
                  hover:border-acumen-primary/50
                  transition-colors duration-300
                  
                  /* SHADOW & GPU Acceleration */
                  shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]
                  transform-gpu 
                  
                  cursor-pointer
                  overflow-hidden
                  
                  z-0
                `}
                whileHover={{
                  y: -8, // Reduced movement slightly for performance
                  scale: 1.01, // Subtle scale
                  zIndex: 20,
                  boxShadow: "0 20px 40px -10px rgba(88,28,135,0.1)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* DECORATIVE BLOB - Optimized */}
                <motion.div
                  className="absolute -right-12 -top-12 w-40 h-40 bg-acumen-primary/5 rounded-full blur-3xl"
                  // Removed complex continuous animation which causes high CPU usage
                  // Replaced with subtle opacity pulse which is cheaper
                  animate={{
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
                      whileHover={{ rotate: -5, scale: 1.05 }}
                      transition={{ type: "tween", duration: 0.3 }}
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

            {/* Spacer for desktop horizontal scroll padding */}
            <div className="hidden md:block min-w-[50px] flex-shrink-0" />
          </div>

          {/* PAGINATION DOTS */}
          <div
            className="
            flex-shrink-0
            flex 
            
            /* Mobile Styles */
            flex-col 
            justify-center 
            sticky 
            top-[30vh]
            h-fit
            ml-2
            
            /* Desktop Styles */
            md:flex-row 
            md:static 
            md:w-full 
            md:mt-4 
            md:ml-0
            md:gap-2
            md:items-center
          "
          >
            <div className="flex flex-col md:flex-row gap-3 md:gap-2 bg-white/80 backdrop-blur-sm p-2 rounded-full md:bg-transparent md:p-0">
              {services.map((_, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`
                  rounded-full cursor-pointer transition-colors duration-300
                  ${
                    activeIndex === idx
                      ? "bg-acumen-primary" // Active
                      : "bg-acumen-primary/20 hover:bg-acumen-primary/40" // Inactive
                  }
                  
                  /* Mobile Dimensions (Vertical bars) */
                  w-1.5 h-6 
                  ${activeIndex === idx ? "h-8" : "h-6"}

                  /* Desktop Dimensions (Horizontal bars/dots) */
                  md:h-2 
                  md:${activeIndex === idx ? "w-8" : "w-2"}
                `}
                  // Using Layout transition with a tween is smoother than spring for small UI elements
                  layout
                  transition={{ type: "tween", ease: "circOut", duration: 0.3 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

// "use client";

// import { useRef, useState, useEffect } from "react";
// import {
//   Globe,
//   Palette,
//   Megaphone,
//   Video,
//   Smartphone,
//   Search,
//   ArrowRight,
// } from "lucide-react";
// import { motion } from "framer-motion";

// // --- Utility: Custom Smooth Scroll Function ---
// // Includes cancellation token to prevent animation conflicts
// let currentAnimationId: number | null = null;

// const scrollToTarget = (
//   container: HTMLElement | Window,
//   targetPos: number,
//   direction: "horizontal" | "vertical",
//   duration: number = 1000 // Slightly increased for luxury feel
// ) => {
//   if (currentAnimationId !== null) {
//     cancelAnimationFrame(currentAnimationId);
//   }

//   const startPos =
//     direction === "horizontal"
//       ? (container as HTMLElement).scrollLeft
//       : container instanceof Window
//       ? window.scrollY
//       : (container as HTMLElement).scrollTop;

//   const distance = targetPos - startPos;
//   let startTime: number | null = null;

//   function animation(currentTime: number) {
//     if (startTime === null) startTime = currentTime;
//     const timeElapsed = currentTime - startTime;

//     // Easing: easeInOutQuart (Smoother start/end than Cubic)
//     const ease = (t: number) =>
//       t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

//     const run = ease(Math.min(timeElapsed / duration, 1));
//     const nextPos = startPos + distance * run;

//     if (direction === "horizontal") {
//       (container as HTMLElement).scrollTo({ left: nextPos });
//     } else {
//       container.scrollTo({ top: nextPos });
//     }

//     if (timeElapsed < duration) {
//       currentAnimationId = requestAnimationFrame(animation);
//     } else {
//       currentAnimationId = null;
//     }
//   }

//   currentAnimationId = requestAnimationFrame(animation);
// };

// export const Services = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

//   const services = [
//     {
//       icon: Globe,
//       title: "Web Development",
//       description:
//         "Scalable, high-performance web platforms and e-commerce solutions.",
//     },
//     {
//       icon: Palette,
//       title: "UI/UX Design",
//       description:
//         "Intuitive interfaces and seamless user experiences that drive engagement.",
//     },
//     {
//       icon: Megaphone,
//       title: "Marketing Strategy",
//       description:
//         "Data-backed campaigns and funnel optimization for measurable growth.",
//     },
//     {
//       icon: Video,
//       title: "Video Production",
//       description:
//         "Cinematic storytelling that captures attention and builds trust.",
//     },
//     {
//       icon: Smartphone,
//       title: "Mobile Apps",
//       description:
//         "Native and cross-platform app development for iOS and Android.",
//     },
//     {
//       icon: Search,
//       title: "SEO & Analytics",
//       description:
//         "Technical SEO and deep analytical insights for top organic ranking.",
//     },
//   ];

//   // Scroll Detection to update activeIndex
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = cardsRef.current.findIndex(
//               (card) => card === entry.target
//             );
//             if (index !== -1) {
//               setActiveIndex(index);
//             }
//           }
//         });
//       },
//       {
//         threshold: 0.5, // Reduced slightly for better mobile detection
//         rootMargin: "-10% 0px -10% 0px", // Focus on center of screen
//       }
//     );

//     cardsRef.current.forEach((card) => {
//       if (card) observer.observe(card);
//     });

//     return () => observer.disconnect();
//   }, [services.length]);

//   // Handler for Dot Clicks
//   const handleDotClick = (idx: number) => {
//     const card = cardsRef.current[idx];
//     const container = containerRef.current;

//     if (!card || !container) return;

//     const isMobile = window.innerWidth < 768;

//     if (isMobile) {
//       // Mobile: Vertical Window Scroll
//       const rect = card.getBoundingClientRect();
//       const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
//       // Calculate exact center position
//       // Target = absolute position - (screen height / 2) + (card height / 2)
//       const offset = (window.innerHeight - rect.height) / 2;
//       const targetY = rect.top + scrollTop - offset; 

//       scrollToTarget(window, targetY, "vertical");
//     } else {
//       // Desktop: Horizontal Container Scroll
//       const containerWidth = container.clientWidth;
//       const cardWidth = card.clientWidth;
//       const cardLeft = card.offsetLeft;

//       const targetX = cardLeft - containerWidth / 2 + cardWidth / 2;
//       scrollToTarget(container, targetX, "horizontal");
//     }
//   };

//   return (
//     <section id="services" className="py-4 md:py-8 bg-white relative z-0">
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between md:mb-6 gap-4 md:gap-8">
//           <div className="max-w-2xl">
//             <span className="text-sm md:text-lg font-bold text-acumen-primary uppercase tracking-widest">
//               Our Expertise <span className="font-serif"> & </span>
//             </span>
//             <h2 className="font-serif text-3xl md:text-5xl font-bold text-acumen-primary mt-2">
//               Signature Services
//             </h2>
//           </div>
//         </div>

//         {/* LAYOUT WRAPPER */}
//         <div className="flex flex-row md:flex-col gap-4 relative">
          
//           {/* CARDS CONTAINER */}
//           {/* Added min-w-0 to prevent flex child overflow issues on mobile */}
//           <div
//             ref={containerRef}
//             className={`
//               flex-1 min-w-0
//               flex 
//               flex-col md:flex-row 
//               md:overflow-x-auto md:snap-x md:snap-mandatory 
//               gap-6 md:gap-6
//               py-8 md:py-12 
//               no-scrollbar
//             `}
//             style={{
//               scrollbarWidth: "none",
//               msOverflowStyle: "none",
//             }}
//           >
//             {services.map((service, idx) => (
//               <motion.div
//                 key={idx}
//                 ref={(el) => {
//                   cardsRef.current[idx] = el;
//                 }}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//                 // Removing inline styles for mobile to let flexbox handle flow naturally
//                 // Only applying specific widths via classes
//                 className={`
//                   /* CARD DIMENSIONS */
//                   w-full
//                   h-[320px] 
//                   md:min-w-[550px] md:w-[550px] 
//                   md:h-[400px] 
//                   md:flex-shrink-0
                  
//                   snap-center
                  
//                   /* APPEARANCE */
//                   group relative flex flex-col justify-between
//                   p-6 md:p-8 rounded-[2rem]
                  
//                   bg-[#F9F5FF]
//                   border-[3px] border-acumen-primary/10
//                   hover:border-acumen-primary/50
//                   transition-colors duration-300
//                   shadow-sm
                  
//                   cursor-pointer
//                   overflow-hidden
//                   z-0
//                 `}
//                 whileHover={{
//                   y: -5, // Reduced hover movement for mobile stability
//                   scale: 1.01,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 {/* DECORATIVE BLOB */}
//                 <div className="absolute -right-12 -top-12 w-40 h-40 bg-acumen-primary/5 rounded-full blur-3xl" />

//                 {/* CONTENT */}
//                 <div className="relative z-10 h-full flex flex-col justify-between">
//                   <div>
//                     <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
//                       <service.icon className="w-6 h-6 md:w-8 md:h-8 text-acumen-primary" />
//                     </div>

//                     <div>
//                       <h3 className="font-serif text-xl md:text-3xl font-semibold text-acumen-secondary mb-3">
//                         {service.title}
//                       </h3>
//                       <p className="text-acumen-light text-sm md:text-lg leading-relaxed">
//                         {service.description}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-center text-xs md:text-sm font-bold tracking-wide text-acumen-primary uppercase mt-auto">
//                     <span>Learn more</span>
//                     <ArrowRight className="w-4 h-4 ml-2" />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//             {/* Desktop Spacer */}
//             <div className="hidden md:block min-w-[50px] flex-shrink-0" />
//           </div>

//           {/* PAGINATION DOTS */}
//           {/* Mobile: Sticky Vertical Right Sidebar. Desktop: Horizontal Bottom Bar. */}
//           <div className="
//             flex-shrink-0
//             z-20
            
//             /* Mobile Styles: Sticky sidebar centered vertically */
//             w-8 
//             sticky 
//             top-0 
//             h-screen 
//             flex 
//             flex-col 
//             justify-center 
//             items-center
            
//             /* Desktop Styles: Reset to horizontal bar */
//             md:w-full 
//             md:h-auto 
//             md:static 
//             md:flex-row 
//             md:mt-4 
//             md:justify-center
//           ">
//              {/* Wrapper for dots to control spacing */}
//             <div className="flex flex-col md:flex-row gap-3 md:gap-2">
//               {services.map((_, idx) => (
//                 <motion.div
//                   key={idx}
//                   onClick={() => handleDotClick(idx)}
//                   className={`
//                     rounded-full cursor-pointer transition-all duration-500
//                     ${
//                       activeIndex === idx
//                         ? "bg-acumen-primary" 
//                         : "bg-acumen-primary/20 hover:bg-acumen-primary/40"
//                     }
                    
//                     /* Mobile: Vertical bars */
//                     w-1.5 
//                     ${activeIndex === idx ? "h-8" : "h-2"} 

//                     /* Desktop: Horizontal bars */
//                     md:h-2 
//                     md:${activeIndex === idx ? "w-8" : "w-2"}
//                     md:transition-[width]
//                   `}
//                   // Smooth layout animation for size changes
//                   layout 
//                 />
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;