const About = () => {
  return (
    <div
      id="about"
      className="relative py-24 px-6 sm:px-12 lg:px-24 flex flex-col items-center text-center"
      style={{
        backgroundImage: "url('/images/dark-wood-barrel.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay with dark semi-transparent layer for better contrast */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />

      {/* Content container with z-index for overlay text */}
      <div className="relative z-10 max-w-4xl text-white font-cormorant">
        <h1 className="text-4xl sm:text-6xl mb-10 lg:mb-16">What Fuels Our Passion?</h1>
        <p className="lg:text-2xl sm:text-lg leading-normal tracking-wide mb-8 text-white/40">
          True connoisseurs of premium spirits have an unwavering passion for
          excellence, craftsmanship, and authenticity. They appreciate the
          delicate nuances of terroir, maturation, and masterful distillation
          that imbue each bottle with its unique signature. For them, tasting is
          more than just flavor — it’s an immersive journey through rich aromas,
          complex notes, and refined finishes. They seek rare, limited-edition
          releases and carefully curated collections that celebrate heritage and
          artistry. Their dedication reflects a refined lifestyle where every
          dram tells a story and every label carries a legacy.
        </p>
      </div>
    </div>
  );
};

export default About;
