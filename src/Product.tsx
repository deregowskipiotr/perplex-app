import { motion, easeOut, easeIn } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ProductProps {
  title: string;
  description: string;
  subDescription?: string;
  img: string;
  onClose: () => void;
}

const productCardVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: easeOut },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: { duration: 0.3, ease: easeIn },
  },
};

const Product: React.FC<ProductProps> = ({
  title,
  subDescription,
  img,
  onClose,
}) => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    variants={productCardVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    onClick={onClose} // Click outside to close (optional)
  >
    <div
      className="
        rounded-2xl 
        shadow-2xl 
        bg-white/10 
        backdrop-blur-xl 
        border border-white/20 
        max-w-[620px] w-full
        h-[80%] md:h-[90%]
        mx-4 p-0 
        flex flex-col overflow-hidden relative"
      onClick={(e) => e.stopPropagation()} // Prevent close on card click
    >
      <div className="flex flex-col items-center p-6 h-[100%]">
        <h2 className="font-cormorant text-2xl md:text-3xl text-yellow-200 mt-1 mb-4 text-center">
          {title}
        </h2>

        <div
          className="w-full h-60 md:h-80 bg-cover bg-center"
          style={{ backgroundImage: `url('${img}')` }}
        />

        <p className="text-gray-100 font-light text-center text-base md:text-lg mt-14">
          {subDescription}
        </p>

        <button
          type="button"
          className="absolute top-4 right-5 text-yellow-100 hover:text-yellow-300 text-2xl bg-black/30 rounded-full px-2 py-1"
          onClick={onClose}
          aria-label="Close"
        >
          <XMarkIcon className="h-6 w-6 cursor-pointer" />
        </button>
      </div>
    </div>
  </motion.div>
);

export default Product;
