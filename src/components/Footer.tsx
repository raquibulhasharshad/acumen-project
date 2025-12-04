// "use client";

// import React from "react";
// import {
//   Mail,
//   MapPin,
//   Linkedin,
//   Twitter,
//   Instagram,
// } from "lucide-react";

// interface NavItem {
//   title: string;
//   href: string;
// }

// const MAIN_NAV_LINKS: NavItem[] = [
//   { title: "Home", href: "/" },
//   { title: "Services", href: "/services" },
//   { title: "Case Studies", href: "/case-studies" },
//   { title: "About Us", href: "/about" },
//   { title: "Contact", href: "/contact" },
// ];

// const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-acumen-purple-600 text-acumen-light-500">
//       <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">

//           {/* Brand Section */}
//           <div className="space-y-4 col-span-2 md:col-span-1">
//             <a href="/" className="flex items-center space-x-2">
//               <img
//                 src="/assets/TheArcLog.png"
//                 alt="The Acumen Arc Logo"
//                 className="h-8 w-12 object-contain rounded-md"
//                 onError={(e) => {
//                   const target = e.target as HTMLImageElement;
//                   target.onerror = null;
//                   target.style.display = "none";
//                   target.insertAdjacentHTML(
//                     "afterend",
//                     '<span class="text-xl font-bold tracking-tight text-acumen-purple-50">A</span>'
//                   );
//                 }}
//               />
//               <span className="text-xl font-bold tracking-tight text-acumen-purple-50">
//                 The Acumen Arc
//               </span>
//             </a>

//             <p className="text-acumen-purple-100 text-sm leading-relaxed max-w-xs">
//               Where creative strategy and technical expertise converge to deliver
//               digital excellence.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold text-acumen-purple-50 mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               {MAIN_NAV_LINKS.map((item) => (
//                 <li key={item.href}>
//                   <a
//                     href={item.href}
//                     className="text-acumen-purple-200 hover:text-acumen-purple-50 transition-colors text-sm"
//                   >
//                     {item.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Core Services */}
//           <div>
//             <h4 className="font-semibold text-acumen-purple-50 mb-4">Core Services</h4>
//             <ul className="space-y-2 text-acumen-purple-200 text-sm">
//               <li>Web Development</li>
//               <li>UI/UX Design</li>
//               <li>Marketing & PR</li>
//               <li>App Development</li>
//               <li>Video Production</li>
//               <li>Email Marketing</li>
//               {/* <li>Advanced SEO</li>
//               <li>Podcast Production</li>
//               <li>24/7 Sales Support</li>
//               <li>Social Media Management</li> */}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="font-semibold text-acumen-purple-50 mb-4">Connect</h4>
//             <ul className="space-y-3">
//               <li className="flex items-start space-x-3">
//                 <Mail className="w-4 h-4 text-acumen-purple-200 flex-shrink-0 mt-1" />
//                 <a
//                   href="mailto:info@acumenarc.com"
//                   className="text-acumen-purple-200 hover:text-acumen-purple-50 transition-colors text-sm"
//                 >
//                   info@acumenarc.com
//                 </a>
//               </li>

//               <li className="flex items-start space-x-3">
//                 <MapPin className="w-4 h-4 text-acumen-purple-200 flex-shrink-0 mt-1" />
//                 <span className="text-acumen-purple-200 text-sm">
//                   D-77/C, Naseem Manzil , Near Umar Masjid,
//                   Shaheen, Jamia Nagar , Okhla , New Delhi-110025
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-6 pt-4 border-t border-acumen-purple-900">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

//             <p className="text-acumen-purple-100 text-sm">
//               © {currentYear} The Acumen Arc. All rights reserved.
//             </p>

//             <div className="flex space-x-5">
//               <a href="#" className="text-acumen-purple-100 hover:text-acumen-purple-50 transition-colors">
//                 <Linkedin className="w-5 h-5" />
//               </a>
//               <a href="#" className="text-acumen-purple-100 hover:text-acumen-purple-50 transition-colors">
//                 <Twitter className="w-5 h-5" />
//               </a>
//               <a href="#" className="text-acumen-purple-100 hover:text-acumen-purple-50 transition-colors">
//                 <Instagram className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Share2, Globe, Mail, ArrowRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = ["About", "Services", "Work", "Contact"];
  const legalLinks = ["Privacy", "Terms", "Cookies"];

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            {/* Brand */}
            <div className="md:col-span-5">
              <a href="#" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[hsla(276, 35%, 78%, 1.00)] flex items-center justify-center">
                  <img
                    src="/assets/TheArc.gif"
                    alt="The Acumen Arc Logo"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <span className="font-serif text-xl font-bold text-[hsl(277,72%,26%)]">
                  The Acumen Arc
                </span>
              </a>
            </div>
            <p className="text-slate-500 mb-8 max-w-xs leading-relaxed">
              Where creative strategy and technical expertise converge to deliver
              digital excellence.
            </p>

            <div className="flex gap-4">
              {[Share2, Globe, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-[hsl(277,72%,26%)] hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-slate-500">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[hsl(277,72%,26%)] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-500">
              {legalLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[hsl(277,72%,26%)] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-slate-900 mb-6">Stay Updated</h4>
            <p className="text-slate-500 text-sm mb-4">
              Subscribe to our newsletter for insights and updates.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-slate-50 border-none rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(277,72%,26%)]"
              />
              <button className="bg-[hsl(277,72%,26%)] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[hsl(277,72%,22%)] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between text-sm text-slate-500">
          <p>&copy; {currentYear} The Acumen Arc. All rights reserved.</p>
          <p>Designed & Built in New Delhi.</p>
        </div>
      </div>
    </footer>
  );
};

