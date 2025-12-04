import { Lightbulb, Target, Zap, Heart, Quote } from "lucide-react";

export const About = () => (
  // Outer section remains white
  <section id="about" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      {/* Main container background: Retain light tint, add soft shadow for depth */}
      <div className="bg-gradient-to-br from-acumen-primary/20 to-palette-blue-slate/30 rounded-[3rem] p-8 md:p-16 lg:p-24 relative overflow-hidden text-acumen-secondary shadow-lg shadow-acumen-primary/10">
        
        {/* FIX 2: Abstract Background Blurs using branded colors for a subtle effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-acumen-primary/30 mix-blend-lighten rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-palette-lavender-muted/50 mix-blend-lighten rounded-full blur-3xl opacity-50" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Badge uses dark text against light background */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-acumen-primary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-acumen-secondary">Our Philosophy</span>
            </div>

            {/* H2 uses the dark brand shade (acumen-secondary) */}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Strategy. Build.
              <br /> Accelerate.
            </h2>

            <p className="text-lg text-acumen-light leading-relaxed mb-8 max-w-md">
              We believe in growth fueled by clarity and purpose, not just clicks. We craft
              intentional strategies.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {["Vision", "Mission"].map((label) => (
                <div
                  key={label}
                  // Info boxes use a subtle dark background that works on the light parent
                  className="bg-acumen-primary/10 border border-acumen-primary/20 p-6 rounded-2xl"
                >
                  <h4 className="font-serif text-xl font-bold mb-2 text-acumen-secondary">{label}</h4>
                  <p className="text-sm text-acumen-light">
                    {label === "Vision" ? "Fusing insight with execution." : "Forging the path to dominance."}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* FIX: Quote Box - Changed to light/medium gradient and dark text for contrast */}
            <div className="aspect-square rounded-3xl p-10 flex flex-col justify-between shadow-2xl shadow-acumen-primary/40 
                        bg-gradient-to-br from-palette-lavender-muted/50 to-acumen-primary/10 text-acumen-secondary border-2 border-purple-Heart backdrop-blur-md">
              <Quote className="w-12 h-12 text-acumen-primary/40 mb-4" />
              <blockquote className="font-serif text-2xl md:text-3xl leading-snug">
                "True success isn't about chasing the next trend—it's about building a foundation
                that lasts."
              </blockquote>

              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full bg-acumen-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-acumen-primary" />
                </div>
                <div>
                  <div className="font-bold text-acumen-secondary">Syedah Fatma</div>
                  {/* Text must be a darker neutral shade */}
                  <div className="text-sm text-acumen-light">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);