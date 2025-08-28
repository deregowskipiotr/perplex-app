import { useState } from "react";
import { motion, easeOut } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const formVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut, // This should be a valid easing function
    },
  },
};



const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative py-24 px-6 sm:px-12 lg:px-24 flex flex-col items-start md:items-center gap-12 bg-black/70 font-cormorant"
      style={{
        backgroundImage: "url('/images/dark-wood-barrel.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Title and intro */}
      <div className="relative z-10 w-full mb-2">
        <h1 className="w-full text-center text-4xl sm:text-6xl mb-2 font-cormorant mt-1">
          Let's Craft a Connection.
        </h1>
        <motion.p
          className="text-center max-w-2xl mx-auto text-white/70 text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          We value every note from our fellow enthusiasts. Reach out and our
          team will respond personally, typically within one business day.
        </motion.p>
      </div>

      <div className="relative z-10 w-full md:flex justify-between">
        {/* Contact form, animated in */}
        <motion.form
          className="bg-white/5 backdrop-blur-xl border border-white/10 w-full md:w-1/2 flex flex-col gap-4 md:gap-6 p-6 rounded-xl shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 2800);
          }}
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.label
            variants={fieldVariants}
            htmlFor="email"
            className="text-left text-white/70 text-sm mb-[-8px]"
          >
            E-mail
          </motion.label>
          <motion.input
            variants={fieldVariants}
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className="bg-white/10 rounded px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/30"
          />
          <motion.label
            variants={fieldVariants}
            htmlFor="name"
            className="text-left text-white/70 text-sm mb-[-8px]"
          >
            Name
          </motion.label>
          <motion.input
            variants={fieldVariants}
            id="name"
            name="name"
            type="text"
            required
            autoComplete="given-name"
            placeholder="Your Name"
            className="bg-white/10 rounded px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/30"
          />
          <motion.label
            variants={fieldVariants}
            htmlFor="surname"
            className="text-left text-white/70 text-sm mb-[-8px]"
          >
            Surname
          </motion.label>
          <motion.input
            variants={fieldVariants}
            id="surname"
            name="surname"
            type="text"
            required
            autoComplete="family-name"
            placeholder="Your Surname"
            className="bg-white/10 rounded px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/30"
          />
          <motion.label
            variants={fieldVariants}
            htmlFor="message"
            className="text-left text-white/70 text-sm mb-[-8px]"
          >
            Message
          </motion.label>
          <motion.textarea
            variants={fieldVariants}
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Write your message…"
            className="bg-white/10 rounded px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/30"
          />
          <motion.button
            variants={fieldVariants}
            type="submit"
            className="inline-block bg-yellow-300/30 hover:bg-yellow-500 font-cormorant rounded-xl px-8 py-3 shadow-lg transition-colors duration-300 ease-in-out uppercase cursor-pointer"
            
          >
            Send Your Note
          </motion.button>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              layout
              className="mt-4 p-3 bg-yellow-300/70 text-black text-center rounded-lg font-cormorant"
            >
              Thank you! We’ll reply soon.
            </motion.div>
          )}
        </motion.form>

        {/* Visual divider on mobile */}
        <div className="md:hidden w-[75%] h-[1px] bg-yellow-300/80 mt-24 mx-auto" />

        {/* Company info with icons, animated in */}
        <motion.div
          className="relative z-10 flex flex-col w-full md:w-1/2 space-y-3 text-center justify-center mt-12 md:mt-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">Splendid Spirits Ltd</h3>
          <div className="flex flex-col items-start mx-auto gap-2">
            <div className="flex  justify-center space-x-2">
              <MapPinIcon className="w-6 h-6 text-yellow-300/80" />
              <span>123 Highland Road, Whisky Town, Scotland</span>
            </div>
            <div className="flex  justify-center space-x-2">
              <PhoneIcon className="w-6 h-6 text-yellow-300/80" />
              <span>+44 123 456 7890</span>
            </div>
            <div className="flex  justify-center space-x-2">
              <EnvelopeIcon className="w-6 h-6 text-yellow-300/80" />
              <span>contact@splendidspirits.com</span>
            </div>
          </div>
          <p className="text-sm text-white/50 mt-4">
            We reply within 1 business day.
          </p>
        </motion.div>
      </div>

      <div className="w-[90%] h-[1px] bg-yellow-300/80 mt-6 mx-auto" />

      <div className="flex w-full md:w-[75%] h-[20px] md:h-[5px] items-center justify-center md:justify-between">
        <p className="hidden md:block items-left text-center text-white/80">
          © Splendid Spirits Ltd. All rights reserved.
        </p>
        <p className="mx-auto md:mx-0 mb-5 md:mb-0">
          2025 - Designed by Pioter&Perplex
        </p>
      </div>
    </section>
  );
};

export default Contact;
