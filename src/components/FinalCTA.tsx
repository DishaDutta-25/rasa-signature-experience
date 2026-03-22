import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const FinalCTA = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 50%, hsla(43, 72%, 55%, 0.06) 0%, transparent 70%)"
      }} />
      <div className="container relative z-10 max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
            From scent to signature —
            <br />
            <span className="italic text-gold">make it yours.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <Button variant="hero" size="lg" className="rounded-full px-12 py-6 text-lg mt-4"
            onClick={() => document.getElementById("scent-finder")?.scrollIntoView({ behavior: "smooth" })}>
            Explore Your Identity
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTA;
