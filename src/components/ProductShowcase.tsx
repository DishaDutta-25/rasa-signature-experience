import productsImg from "@/assets/products-lineup.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const products = [
  {
    name: "Oud Reserve",
    mood: "Deep, intense, powerful",
    occasion: "Evening & Special Events",
    color: "from-amber-900/20 to-transparent",
  },
  {
    name: "Sandalwood Smoke",
    mood: "Calm, warm, refined",
    occasion: "Daily Wear & Office",
    color: "from-stone-700/20 to-transparent",
  },
  {
    name: "Spice Trail",
    mood: "Bold, energetic, charismatic",
    occasion: "Social & Weekend",
    color: "from-emerald-900/20 to-transparent",
  },
];

const ProductShowcase = () => {
  return (
    <section id="products" className="py-32 relative">
      <div className="container max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-accent mb-4">The Collection</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
              Three Signatures. <span className="italic text-gold">One Identity.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Hero image */}
        <ScrollReveal delay={0.1}>
          <div className="relative rounded-3xl overflow-hidden mb-16">
            <img src={productsImg} alt="RASA by Velour collection" className="w-full h-64 md:h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          </div>
        </ScrollReveal>

        {/* Product cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={0.1 + i * 0.08}>
              <div className="group p-8 rounded-2xl border border-border bg-card glow-gold-hover transition-all duration-400 hover:border-accent/30">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6`}>
                  <span className="text-2xl">🧴</span>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">{product.name}</h3>
                <p className="text-sm text-accent font-sans mb-2">{product.mood}</p>
                <p className="text-xs text-muted-foreground font-sans tracking-wide uppercase">{product.occasion}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
