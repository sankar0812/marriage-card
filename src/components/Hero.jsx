import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

import wedbg1 from "../assets/images/couple-holding-hands.jpg";
import wedbg2 from "../assets/images/wedding-ring-finger.jpg";
import wedbg3 from "../assets/images/Wedding-bg.jpg";
// import wedbg4 from "../assets/images/couple-bg.jpg";

const images = [wedbg1, wedbg2, wedbg3];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Sliding Background */}
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt="Wedding Background"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-wide drop-shadow-lg"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <span className="text-pink-300">[Name]</span> &{" "}
          <span className="text-pink-300">[Name]</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-2xl font-light tracking-wide italic"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          We’re getting married!
        </motion.p>

        <motion.div
          className="mt-8 space-y-2 text-lg md:text-2xl font-medium drop-shadow-md"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p>October 26, 2025</p>
          <p>New York City, NY</p>
        </motion.div>
      </div>

      {/* Floating Hearts */}
      <motion.div
        className="absolute top-20 left-10 text-pink-400"
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <Heart size={40} fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute bottom-24 right-16 text-pink-300"
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <Heart size={48} fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-22 text-red-300"
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <Heart size={48} fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-5 text-pink-300"
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <Heart size={30} fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-1/3 text-red-400"
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        <Heart size={36} fill="currentColor" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;


// import { motion, AnimatePresence } from "framer-motion";
// import { Heart } from "lucide-react";
// import { useState, useEffect } from "react";

// import wedbg1 from "../assets/images/couple-holding-hands.jpg";
// import wedbg2 from "../assets/images/wedding-ring-finger.jpg";
// import wedbg3 from "../assets/images/Wedding-bg.jpg";
// import wedbg4 from "../assets/images/couple-bg.jpg";

// const images = [wedbg1, wedbg2, wedbg3, wedbg4];

// const Hero = () => {
//   const [index, setIndex] = useState(0);

//   // Auto-slide every 5s
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <motion.section
//       className="relative h-screen w-full overflow-hidden flex items-center"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//     >
//       {/* Background Slideshow */}
//       <AnimatePresence>
//         <motion.img
//           key={index}
//           src={images[index]}
//           alt="Wedding Background"
//           className="absolute inset-0 h-full w-full object-cover"
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.9 }}
//           transition={{ duration: 1.2 }}
//         />
//       </AnimatePresence>

//       {/* Dark gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

//       {/* Left side extra content */}
//       <div className="relative z-10 w-1/3 h-full flex flex-col items-center justify-center text-white px-6">
//         <motion.div
//           className="text-3xl md:text-5xl font-bold tracking-wider"
//           initial={{ x: -80, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           💌 You're Invited!
//         </motion.div>

//         <motion.p
//           className="mt-6 text-lg md:text-xl text-gray-200 max-w-sm text-center"
//           initial={{ x: -60, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 1, duration: 1 }}
//         >
//           Join us for a day full of love, laughter, and memories that will last forever.
//         </motion.p>

//         {/* Animated floating heart on left */}
//         <motion.div
//           className="mt-10 text-pink-400"
//           animate={{ y: [0, -25, 0] }}
//           transition={{ repeat: Infinity, duration: 4 }}
//         >
//           <Heart size={50} fill="currentColor" />
//         </motion.div>
//       </div>

//       {/* Center main wedding details */}
//       <div className="relative z-10 w-2/3 flex flex-col items-center justify-center text-center text-white px-6">
//         <motion.h1
//           className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-wide drop-shadow-lg"
//           initial={{ y: -80, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.7, duration: 1 }}
//         >
//           <span className="text-pink-300">[Name]</span> &{" "}
//           <span className="text-pink-300">[Name]</span>
//         </motion.h1>

//         <motion.p
//           className="mt-4 text-lg md:text-2xl font-light tracking-wide italic"
//           initial={{ y: 40, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 1.2, duration: 1 }}
//         >
//           We’re getting married!
//         </motion.p>

//         <motion.div
//           className="mt-8 space-y-2 text-lg md:text-2xl font-medium drop-shadow-md"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 1.8, duration: 0.8 }}
//         >
//           <p>October 26, 2025</p>
//           <p>New York City, NY</p>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default Hero;
