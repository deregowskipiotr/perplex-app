import { motion, easeOut, easeIn } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ProductProps {
  title: string;
  description?: string;
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
  //description,
  subDescription,
  img,
  onClose,
}) => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
    variants={productCardVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    //onClick={onClose} // Click outside to close (optional)
  >
    <div
      className="
        relative
        rounded-2xl
        shadow-2xl
        bg-white/70
        backdrop-blur-xl
        border border-white/20
        max-w-[720px] w-full
        h-[80%] md:h-[90%]
        mx-4 p-4
        flex flex-col justify-center items-center
        overflow-hidden
      "
      onClick={(e) => e.stopPropagation()} // Prevent close on card click
    >
      {/* Background Image with full size and lower opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center object-cover w-max-[90px] md:max-w-[70%] md:my-auto md:mx-auto"
        style={{ backgroundImage: `url('${img}')` }}
        aria-hidden="true"
      />

      {/* Dark overlay to improve contrast */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Content container (stacked above overlays) */}
      <div className="relative z-10 text-center px-2 md:px-10 md:pt-4 flex flex-col items-center justify-between h-full">
        <h2 className="font-cormorant text-2xl md:text-3xl text-yellow-200  max-w-[80%] pr-4">
          {title}
        </h2>

        {subDescription && (
          <p className="text-gray-300 font-light text-start text-base md:text-lg lg:text-xl w-full">
            {subDescription}
          </p>
        )}

        <button
          type="button"
          className="absolute top-0 md:top-4 right-0 md:right-5 text-yellow-100 hover:text-yellow-300 text-2xl bg-black/30 rounded-full px-2 py-1"
          onClick={onClose}
          aria-label="Close"
        >
          <XMarkIcon className="h-6 w-6 cursor-pointer"/>
        </button>
      </div>
    </div>
  </motion.div>
);

export default Product;
