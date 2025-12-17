import { 
  Globe, 
  Palette, 
  Megaphone, 
  Video, 
  Smartphone, 
  Search,
  LucideIcon 
} from "lucide-react";

export interface ServiceItem {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "web-development",
    icon: Globe,
    title: "Web Development",
    description: "Scalable, high-performance web platforms and e-commerce solutions.",
    longDescription: "We build more than just websites; we build digital infrastructure. Our web development team focuses on creating scalable, secure, and high-performance platforms using the latest technologies like Next.js and React. Whether it's a complex SaaS platform or a high-traffic e-commerce site, we ensure your code is clean and future-proof.",
    features: ["Custom CMS Solutions", "E-commerce Architecture", "Progressive Web Apps (PWA)", "API Integrations", "Database Design", "Cloud Infrastructure"],
    image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    slug: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive interfaces and seamless user experiences that drive engagement.",
    longDescription: "Great design is invisible. We craft user experiences that feel natural and intuitive, ensuring your users find what they need without friction. Our process involves deep user research, wireframing, and iterative prototyping to solve real user problems while maintaining stunning aesthetics.",
    features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Interaction Design", "Usability Testing", "Accessibility (a11y)"],
    image: "https://images.unsplash.com/photo-1760008486593-a85315610136?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    slug: "marketing-strategy",
    icon: Megaphone,
    title: "Marketing Strategy",
    description: "Data-backed campaigns and funnel optimization for measurable growth.",
    longDescription: "Stop guessing and start growing. Our marketing strategies are built on deep data analysis and consumer psychology to maximize your ROI. We analyze your market position to create data-driven strategies that optimize your funnel from awareness to conversion.",
    features: ["Funnel Optimization", "PPC Campaigns", "Social Media Strategy", "Conversion Rate Optimization", "Brand Positioning", "Email Marketing Automation"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    slug: "video-production",
    icon: Video,
    title: "Video Production",
    description: "Cinematic storytelling that captures attention and builds trust.",
    longDescription: "In an attention economy, video is king. We produce high-end commercial, corporate, and social video content that tells your brand's story. From concept to color grading, we handle every aspect of production to deliver cinematic results.",
    features: ["Commercial Ad Production", "Motion Graphics", "Scriptwriting & Storyboarding", "Post-Production & Editing", "Drone Cinematography", "Sound Design"],
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000"
  },
  {
    slug: "mobile-apps",
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform app development for iOS and Android.",
    longDescription: "Put your brand in your customer's pocket. We develop high-performance mobile applications using React Native and Swift/Kotlin. We ensure your app offers a native feel, offline capabilities, and seamless integration with your existing backend.",
    features: ["iOS & Android Development", "App Store Optimization (ASO)", "UI/UX for Mobile", "Cross-Platform Solutions", "React Native", "App Maintenance"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    slug: "seo-analytics",
    icon: Search,
    title: "SEO & Analytics",
    description: "Technical SEO and deep analytical insights for top organic ranking.",
    longDescription: "Visibility is the currency of the internet. We ensure your site ranks for the keywords that matter most to your business. We move beyond basic keywords to implement technical SEO fixes, schema markup, and advanced analytics setups.",
    features: ["Technical Site Audits", "Keyword Strategy & Research", "Backlink Campaigns", "Google Analytics 4 Setup", "Local SEO", "Performance Optimization"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
  },
];