import {
  Globe,
  Palette,
  Megaphone,
  Video,
  Smartphone,
  Search,
  ArrowRight,
} from "lucide-react";

// Define the primary theme color variable for readability
const THEME_PRIMARY_COLOR = "[hsl(277,72%,26%)]";
// Define a very light, custom background color for cards (replaces bg-slate-50)
const CARD_LIGHT_BG = "[#FAFAFD]";

export const Services = () => {
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
    <section id="services" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            {/* Using THEME_PRIMARY_COLOR for "Our Expertise" to match the theme */}
            <span className={`text-md font-bold text-${THEME_PRIMARY_COLOR} uppercase tracking-widest`}>
              Our Expertise
            </span>
            <h2 className={`font-serif text-4xl md:text-5xl font-bold text-${THEME_PRIMARY_COLOR}`}>
              How We Deliver Growth
            </h2>
          </div>

          <p className="text-slate-500 text-lg max-w-md pb-1">
            Comprehensive services tailored to drive growth and elevate your
            brand presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              // FIX: Replaced bg-slate-50 with custom light background color and adjusted hover/shadows
              className={`group p-8 rounded-3xl bg-${CARD_LIGHT_BG} border-2 border-[#F4F4F9] hover:border-purple-200 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-${THEME_PRIMARY_COLOR}/10 hover:bg-white hover:scale-[1.01]`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-${THEME_PRIMARY_COLOR} transition-colors duration-300`}>
                <service.icon className={`w-7 h-7 text-${THEME_PRIMARY_COLOR} group-hover:text-white transition-colors duration-300`} />
              </div>

              <h3 className={`font-serif text-2xl font-semibold text-${THEME_PRIMARY_COLOR} mb-3`}>
                {service.title}
              </h3>

              <p className="text-slate-500 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className={`flex items-center text-sm font-semibold text-${THEME_PRIMARY_COLOR} group-hover:text-slate-900 transition-colors`}>
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;