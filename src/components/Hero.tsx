import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-perfume.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 smoke-overlay" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 animate-smoke pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 70% 30%, hsla(43, 72%, 55%, 0.12) 0%, transparent 70%)" }} />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-24 pb-16">
        <div className="space-y-8">
          <ScrollReveal>
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-accent">
              RASA by Velour
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl font-light leading-[0.95] text-foreground">
              Not Perfume.
              <br />
              <span className="text-gold italic">Presence.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-sans text-lg text-muted-foreground max-w-md leading-relaxed">
              Discover a fragrance that defines your identity.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Button variant="hero" size="lg" className="rounded-full px-10 py-6"
              onClick={() => document.getElementById("scent-finder")?.scrollIntoView({ behavior: "smooth" })}>
              Find Your Signature Scent
            </Button>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2} className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-accent/5 blur-3xl animate-float" />
            <img
              src={heroImg}
              alt="Luxury perfume bottle with smoke and amber crystals"
              className="relative rounded-2xl w-full max-w-md shadow-2xl shadow-black/40"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
