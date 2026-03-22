const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🧴</span>
        <span className="font-display text-xl tracking-widest text-foreground">
          RASA <span className="text-muted-foreground font-sans text-xs tracking-[0.3em] uppercase">by Velour</span>
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wider text-muted-foreground">
        <a href="#scent-finder" className="hover:text-accent transition-colors duration-300">Discover</a>
        <a href="#products" className="hover:text-accent transition-colors duration-300">Collection</a>
        <a href="#experience" className="hover:text-accent transition-colors duration-300">Experience</a>
        <a href="#story" className="hover:text-accent transition-colors duration-300">Story</a>
      </div>
    </nav>
  );
};

export default Navbar;
