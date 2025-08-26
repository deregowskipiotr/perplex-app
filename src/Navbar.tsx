import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { navigation } from "../constants";

// Increase staggerChildren delay to 0.3 seconds
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3, // Delay before the first child appears
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.6 },
  },
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 backdrop-blur-md transition-colors duration-300 w-full left-0 right-0",
        isScrolled ? "bg-black/40 shadow-lg" : "bg-inherit"
      )}
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center h-16 font-cormorant md:border-b border-yellow-300/30"
        aria-label="Main navigation"
      >
        {/* Desktop container with stagger animation for links only */}
        <motion.div
          className="flex flex-1 md:items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Logo without animation */}
          <a href="/" className="text-2xl font-cormorant tracking-tight italic">
            PD
          </a>

          {/* Navigation links with animation */}
          <div className="hidden md:flex flex-1 justify-center gap-10">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="font-medium text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out uppercase"
                variants={itemVariants}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Sign In button without animation */}
          <a
            href="/signin"
            className="hidden md:inline-block rounded-xl px-5 py-2 font-cormorant uppercase border border-white/40 hover:border-yellow-300 hover:text-yellow-300 transition-colors duration-300 ease-in-out"
          >
            Sign In
          </a>
        </motion.div>

        {/* Mobile hamburger with fade/slide animation */}
        <AnimatePresence>
          {!mobileMenuOpen && (
            <motion.div
              className="md:hidden flex items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-300 focus:outline-none transition duration-300 ease-in-out"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Menu"
              >
                <Bars3Icon
                  className="h-7 w-7 cursor-pointer"
                  aria-hidden="true"
                />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            as="div"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="md:hidden"
            static
          >
            <div
              className="fixed inset-0 z-40 bg-black/80"
              aria-hidden="true"
            />
            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-4/5 max-w-xs bg-black p-6 flex flex-col border-l-2 border-yellow-300/20 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 40 }}
            >
              <div className="ml-55">
                <button
                  type="button"
                  className="p-2 rounded-md text-white hover:text-yellow-300 transition duration-300 ease-in-out"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <XMarkIcon
                    className="h-7 w-7 cursor-pointer"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="mt-8 flex flex-col gap-4 items-center uppercase font-cormorant">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-3 rounded text-lg font-medium text-white hover:text-yellow-300 transition-colors duration-300 ease-in-out"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="/signin"
                  className="mt-4 rounded-xl px-5 py-2 w-full text-center font-cormorant border-1 border-white text-white hover:border-yellow-300 hover:text-yellow-300 transition-colors duration-300 ease-in-out"
                >
                  Sign In
                </a>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
