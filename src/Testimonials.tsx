import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useSwipeable } from "react-swipeable";
import { testimonials } from "../constants";

const imageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.6 } },
};

const textVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, x: 100, transition: { duration: 0.6 } },
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((old) => (old === 0 ? testimonials.length - 1 : old - 1));
  };

  const next = () => {
    setIndex((old) => (old === testimonials.length - 1 ? 0 : old + 1));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const currentTestimonial = testimonials[index];

  return (
    <section
      id="testimonials"
      className="max-w-7xl mx-auto py-24 px-6 sm:px-12 lg:px-24 font-cormorant flex flex-col"
      {...swipeHandlers}
    >
      <h2 className="text-4xl sm:text-6xl mb-12 text-center">
        What Our Clients Say
      </h2>

      <div className="relative flex flex-col md:flex-row-reverse items-center bg-yellow-300/10 backdrop-blur-xl rounded-2xl p-8 shadow-lg h-[380px] md:min-h-[300px] gap-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={currentTestimonial.id}
            src={currentTestimonial.image}
            alt={currentTestimonial.name}
            className="w-36 h-36 md:w-60 md:h-60 rounded-full object-cover shadow-lg md:order-2"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
          <motion.div
            key={currentTestimonial.id + "-text"}
            className="md:pr-8 md:pl-8 mt-6 md:mt-0 md:w-3/5 flex flex-col items-center md:items-start"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <p className="text-lg sm:text-xl mb-4 max-w-xl text-center md:text-left">
              “{currentTestimonial.review}”
            </p>
            <span className="font-semibold text-yellow-300 text-xl italic">
              ~ {currentTestimonial.name}
            </span>
            <p className="hidden md:block text-lg sm:text-xl max-w-xl text-center md:text-left mt-10">
              {currentTestimonial.position}
            </p>
            <p className="hidden md:block text-lg sm:text-xl mb-4 max-w-xl text-center md:text-left italic">
              {currentTestimonial.company}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows centered below */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="rounded-full bg-yellow-300/50 p-2 shadow hover:bg-yellow-400 transition"
        >
          <ChevronLeftIcon className="w-6 h-6 text-black" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="rounded-full bg-yellow-300/50 p-2 shadow hover:bg-yellow-400 transition"
        >
          <ChevronRightIcon className="w-6 h-6 text-black" />
        </button>
      </div>
    </section>
  );
}
