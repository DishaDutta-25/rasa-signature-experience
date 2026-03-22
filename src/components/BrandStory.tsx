import ScrollReveal from "@/components/ScrollReveal";

const BrandStory = () => {
  return (
    <section id="story" className="py-32 relative">
      <div className="absolute inset-0 smoke-overlay opacity-30" />
      <div className="container relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-accent mb-6">Our Story</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <blockquote className="font-display text-3xl md:text-4xl font-light text-foreground leading-snug italic">
            "Rooted in Indian heritage, crafted for modern identity —{" "}
            <span className="text-gold not-italic">RASA</span> is not just a fragrance, but a personal signature."
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 w-16 h-px bg-accent/40 mx-auto" />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BrandStory;
