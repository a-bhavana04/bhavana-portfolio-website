const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50 z-10"></div> */}
      <div className="text-center z-20 max-w-4xl mx-auto px-4">


        {/* Profile Image */}
        <div className="mb-8 animate-float">
          <img
            src="/profile.jpeg"
            alt="Bhavana Anand profile"
            className="w-32 h-32 mx-auto rounded-full border-2 border-primary object-cover bg-secondary/20"
            style={{ objectPosition: 'center' }}
          />
        </div>


        {/* Main Heading: Name */}
        <h1 className="font-broadway text-4xl md:text-6xl lg:text-7xl text-primary mb-3 animate-glow-pulse">
          Bhavana Anand
        </h1>

        {/* Subtitle: Role */}
        <p className="font-broadway text-base md:text-lg text-primary/80 mb-5" style={{ letterSpacing: '0.05em' }}>
          Fullstack and AI Engineering
        </p>

        {/* Tagline */}
        <p className="font-broadway text-sm md:text-base text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Building intelligent, scalable, and secure digital solutions at the intersection of software engineering and AI.
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
