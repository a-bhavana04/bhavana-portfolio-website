const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        {/* Profile Image Placeholder */}
        <div className="mb-8 animate-float">
          <div className="w-32 h-32 mx-auto rounded-full border-2 border-primary bg-secondary/20 flex items-center justify-center">
            <span className="font-broadway text-2xl text-primary">IMG</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-broadway text-4xl md:text-6xl lg:text-7xl text-primary mb-6 animate-glow-pulse">
          cyber
          <br />
          security
          <br />
          engineer
        </h1>

        {/* Subtitle */}
        <p className="font-broadway text-sm md:text-base text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Crafting secure digital experiences through innovative cybersecurity solutions
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-broadway text-xs px-6 py-3 border border-primary bg-transparent text-primary hover:bg-primary hover:text-background transition-all duration-300 rounded-lg animate-glow-pulse"
          >
            View Projects
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/3 right-16 w-1 h-1 bg-primary rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse opacity-50"></div>
    </section>
  );
};

export default HeroSection;
