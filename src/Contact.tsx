const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 sm:px-12 lg:px-24 flex flex-col items-start md:items-center gap-12 bg-black/70"
      style={{
        backgroundImage: "url('/images/dark-wood-barrel.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      {/* Title full width top on mobile */}
      <h2 className="relative z-10 w-full text-center text-4xl sm:text-6xl mb-12 md:mb-[60px] font-cormorant mt-1">
        Let's be in touch!
      </h2>

      <div className="relative z-10 w-full md:flex justify-between">
        {/* Left side: Contact form */}
        <form
          className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="E-mail"
            required
            className="bg-white/10 rounded px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <input
            type="text"
            placeholder="Name"
            required
            className="bg-white/10 rounded px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <input
            type="text"
            placeholder="Surname"
            required
            className="bg-white/10 rounded px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <textarea
            placeholder="Message"
            rows={5}
            required
            className="bg-white/10 rounded px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <button
            type="submit"
            className="self-start inline-block bg-yellow-300/30 hover:bg-yellow-500 font-cormorant rounded-xl px-8 py-3 shadow-lg transition-colors duration-300 ease-in-out uppercase"
          >
            Send Message
          </button>
        </form>

        <div className="md:hidden w-[75%] h-[1px] bg-yellow-300 mt-24 mx-auto" />

        {/* Right side: Company info */}
        <div className="relative z-10 flex flex-col w-full md:w-1/2 space-y-2 text-center justify-center mt-12 md:mt-0">
          <h3 className="text-2xl font-semibold mb-2">Splendid Spirits</h3>
          <p>123 Highland Road, Whisky Town, Scotland</p>
          <p>Mobile: +44 123 456 7890</p>
          <p>Email: contact@splendidspirits.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
