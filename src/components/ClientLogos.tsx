// // src/components/ui/ClientLogos.tsx
// import Image from "next/image";
// import { cn } from "@/lib/utils";

// const logos = [
//   { name: "DSE", src: "/assets/DSElog.jpg" },
//   {name: "KG", src: "/assets/KG.jpg" },
//   { name: "ReqX", src: "/assets/ReqX.jpeg" },
//   {name: "UMPL", src: "/assets/UMPL.jpg" },
//   { name: "SLV", src: "/assets/SLV.jpeg" },
//   {name: "NFI", src: "/assets/NFI.png" },

// ];

// export default function ClientLogos() {
//   return (
//     <section className="w-full py-4 md:py-12 overflow-hidden bg-white">
//       <div className="container px-4 md:px-6 mb-10 text-center">
//         <h3 className="text-2xl font-bold tracking-tight text-acumen-primary uppercase font-sans">
//           Our Industry Partners
//         </h3>
//         <div className="w-16 h-1 bg-palette-Royal Purple mx-auto mt-2 rounded-full opacity-80"></div>
//       </div>

//       <div 
//         className="relative flex w-full max-w-[95vw] mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
//       >
//         <div className="flex min-w-full shrink-0 gap-24 py-4 animate-scroll hover:[animation-play-state:paused]">
          
//           {/* First set */}
//           {logos.map((logo, index) => (
//             <div 
//               key={index} 
//               // REMOVED: grayscale hover:grayscale-0
//               // KEPT: opacity-70 hover:opacity-100 (Logos are slightly see-through until hovered. Remove these too if you want full brightness always)
//               className="relative h-20 w-48 flex-shrink-0 flex items-center justify-center transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110"
//             >
//               <Image
//                 src={logo.src}
//                 alt={`${logo.name} logo`}
//                 fill
//                 sizes="200px"
//                 className="object-contain"
//                 unoptimized 
//               />
//             </div>
//           ))}
          
//           {/* Second set (Duplicate) */}
//           {logos.map((logo, index) => (
//             <div 
//               key={`duplicate-${index}`}
//               // REMOVED: grayscale hover:grayscale-0
//               className="relative h-20 w-48 flex-shrink-0 flex items-center justify-center transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110"
//               aria-hidden="true"
//             >
//               <Image
//                 src={logo.src}
//                 alt={`${logo.name} logo`}
//                 fill
//                 sizes="200px"
//                 className="object-contain"
//                 unoptimized
//               />
//             </div>
//           ))}
          
//         </div>
//       </div>
//     </section>
//   );
// }