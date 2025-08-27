import { motion } from "framer-motion";
import { aboutDescription } from "../constants";


const About = () => {
  // Split description into words
  const words = aboutDescription.flatMap((paragraph) => paragraph.split(" "));


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
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />

      <div className="relative z-10 max-w-4xl text-white font-cormorant">
        <h1
          className="text-4xl sm:text-6xl mb-10 lg:mb-16"
        >
          What Fuels Our Passion?
        </h1>

        <p className="lg:text-2xl text-xl text-start leading-normal tracking-wide mb-8 text-white/40">
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.4,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              {word}
            </motion.span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default About;
