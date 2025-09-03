import { useState } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { products } from "../constants";
import Product from "./Product";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const Products = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div
      id="products"
      className="relative min-h-[100vh] w-full py-24 px-6 sm:px-12 lg:px-24 flex flex-col items-center text-center"
      style={{
        backgroundImage: "url('/images/dark-wood-barrel.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      <div className="relative z-10 w-full">
        <h1 className="text-4xl sm:text-6xl mb-10 lg:mb-16 font-cormorant w-full left-0">
          Our Opulent Collection of Fine Spirits
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className={`
                flex flex-col 
               bg-white/5
                backdrop-blur-xl
                rounded-xl
                p-5
                shadow-lg
                border border-white/20
                min-h-[300px]
                md:max-h-[440px]
                md:px-8
                relative
                glass-card
              `}
            >
              {/* Title always on top, centered */}
              <h3 className="font-bold font-cormorant text-lg md:text-xl text-yellow-200 mb-2 text-center w-full">
                {product.title}
              </h3>

              {/* Image: centered - change the size on mobile view afyer deploy? */}
              <div className="flex md:flex-col items-center justify-center w-full h-full mb-4 md:mt-10 md:overflow-hidden">
                <div className="w-full md:w-[30%] md:h-[200px] h-full mb-2 mx-auto flex justify-center items-center md:justify-end md:items-center">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="rounded-lg object-cover w-[90px] md:h-full md:w-full md:mt-4"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content Row: stacks on mobile, horizontal on desktop */}
              
                <div className="flex flex-col md:items-stretch w-full h-full mb-2 md:mb-0 gap-2">
                  {/* Description: full width on mobile, left half on desktop */}
                  <div className="w-full flex flex-col justify-between">
                    <span className="text-gray-50 text-sm md:text-base font-light text-center md:text-left mb-8 md:mb-0 md:mt-8">
                      {product.description}
                    </span>
                    {/* "More" link below description, right on mobile, left on desktop */}
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelected(i);
                      }} // Show modal for this product
                      className="
                   text-yellow-300 font-medium text-xs md:text-sm opacity-90 hover:opacity-100 transition
                    absolute right-6 bottom-5 md:static md:bottom-auto md:right-auto md:mt-4 md:text-left
                    md:self-end md:max-h-[120px]"
                    >
                      more
                    </a>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* AnimatePresence for smooth entrance or Exit */}
      <AnimatePresence>
        {selected !== null && (
          <Product
            title={products[selected].title}
            description={products[selected].description}
            subDescription={products[selected].subDescription}
            img={products[selected].img}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
