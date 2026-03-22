import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const questions = [
  {
    question: "What defines your presence?",
    options: [
      { label: "Calm", emoji: "🌿", desc: "Quiet confidence" },
      { label: "Bold", emoji: "🔥", desc: "Unmistakable energy" },
      { label: "Refined", emoji: "✨", desc: "Understated elegance" },
    ],
  },
  {
    question: "Where will you wear it?",
    options: [
      { label: "Work", emoji: "💼", desc: "Professional setting" },
      { label: "Wedding", emoji: "🤵", desc: "Special occasion" },
      { label: "Evening", emoji: "🌙", desc: "After-hours" },
    ],
  },
  {
    question: "Choose your vibe",
    options: [
      { label: "Subtle", emoji: "🤫", desc: "Whisper, not shout" },
      { label: "Strong", emoji: "💪", desc: "Leave a mark" },
      { label: "Charismatic", emoji: "🎭", desc: "Draw them in" },
    ],
  },
];

const results: Record<string, { name: string; traits: string[]; tagline: string }> = {
  "Calm": { name: "Sandalwood Smoke", traits: ["Calm authority", "Perfect for daily identity", "Warm, grounded, confident"], tagline: "Your quiet power, bottled." },
  "Bold": { name: "Oud Reserve", traits: ["Deep intensity", "Commands every room", "Rich, powerful, unforgettable"], tagline: "Presence that precedes you." },
  "Refined": { name: "Spice Trail", traits: ["Sophisticated energy", "Effortless charisma", "Warm, spiced, magnetic"], tagline: "Elegance in motion." },
};

const ScentFinder = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (label: string) => {
    const newAnswers = [...answers, label];
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const result = results[answers[0]] || results["Calm"];

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <section id="scent-finder" className="py-32 relative">
      <div className="absolute inset-0 smoke-overlay opacity-50" />
      <div className="container relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-accent mb-4">Scent Finder</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-16">
            Discover Your <span className="italic text-gold">Signature</span>
          </h2>
        </ScrollReveal>

        {!showResult ? (
          <ScrollReveal>
            <div className="space-y-8">
              {/* Progress */}
              <div className="flex justify-center gap-2 mb-8">
                {questions.map((_, i) => (
                  <div key={i} className={`h-1 w-12 rounded-full transition-all duration-500 ${i <= step ? "bg-accent" : "bg-border"}`} />
                ))}
              </div>

              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-8">
                {questions[step].question}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {questions[step].options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => handleSelect(opt.label)}
                    className="group p-6 rounded-2xl border border-border bg-card hover:border-accent/50 transition-all duration-300 glow-gold-hover active:scale-[0.97] cursor-pointer"
                  >
                    <span className="text-3xl block mb-3">{opt.emoji}</span>
                    <span className="font-display text-xl text-foreground block mb-1">{opt.label}</span>
                    <span className="text-sm text-muted-foreground">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ) : (
          <div className="animate-reveal space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 text-accent text-xs tracking-[0.3em] uppercase font-sans mb-4">
              Your Signature
            </div>

            <h3 className="font-display text-4xl md:text-5xl text-gold">{result.name}</h3>
            <p className="text-muted-foreground font-sans italic">{result.tagline}</p>

            <div className="flex flex-col items-center gap-3 mt-8">
              {result.traits.map((trait) => (
                <div key={trait} className="flex items-center gap-3 text-foreground/80 font-sans text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {trait}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button variant="hero" size="lg" className="rounded-full px-10">
                Make it Your Signature
              </Button>
              <Button variant="luxe" size="lg" className="rounded-full px-10" onClick={reset}>
                Start Over
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScentFinder;
