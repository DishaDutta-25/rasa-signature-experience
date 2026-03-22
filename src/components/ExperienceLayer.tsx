import ScrollReveal from "@/components/ScrollReveal";

const experiences = [
  {
    icon: "💍",
    title: "Groom Kits",
    desc: "Curated wedding experiences with a personal scent identity.",
  },
  {
    icon: "💈",
    title: "Barbershop Trials",
    desc: "First discovery at your trusted grooming space.",
  },
  {
    icon: "🏬",
    title: "Retail Experiences",
    desc: "Immersive testing at select luxury locations.",
  },
];

const ExperienceLayer = () => {
  return (
    <section id="experience" className="py-32 relative bg-secondary/30">
      <div className="container max-w-4xl text-center">
        <ScrollReveal>
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-accent mb-4">Beyond the Bottle</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-16">
            The <span className="italic text-gold">Experience</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.title} delay={0.1 + i * 0.08}>
              <div className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm glow-gold-hover transition-all duration-300">
                <span className="text-4xl block mb-5">{exp.icon}</span>
                <h3 className="font-display text-xl text-foreground mb-2">{exp.title}</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{exp.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceLayer;
