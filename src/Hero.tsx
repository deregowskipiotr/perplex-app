
// components/Hero.tsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full z-0">
      {/* Background image */}
      <div
        className="
          absolute inset-0 
          bg-center
          object-cover
        "
        style={{ backgroundImage: "url('/images/bg-whiskey.jpg')" }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center font-cormorant w-[80%] mx-auto mt-0 lg:mt-14">
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold mb-26 max-w-4xl leading-tight mt-[-120px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          Discover the Most Iconic & Finest Quality Alcoholic Spirits
        </motion.h1>
        <motion.p
          className="max-w-3xl text-lg sm:text-xl font-light text-gray-300 mb-26"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          Explore our exclusive collection of the highest quality and most
          expensive alcohol brands from around the world.
        </motion.p>
        <motion.a
          href="#products"
          className="inline-block bg-yellow-300/20 hover:bg-yellow-600 font-cormorant rounded-xl px-8 py-3 shadow-lg transition-colors duration-300 ease-in-out uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          Explore Products
        </motion.a>
      </div>
    </section>
  );
}
