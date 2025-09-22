// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <motion.section
//       className="relative h-screen w-full flex items-center justify-center overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//     >
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src="/your-bg.jpg" // replace with your image path
//           alt="Wedding Background"
//           className="h-full w-full object-cover"
//         />
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center text-white px-6">
//         {/* Names */}
//         <motion.h1
//           className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-wide drop-shadow-lg"
//           initial={{ y: -80, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           <span className="text-pink-300">[Name]</span> &{" "}
//           <span className="text-pink-300">[Name]</span>
//         </motion.h1>

//         {/* Tagline */}
//         <motion.p
//           className="mt-4 text-lg md:text-2xl font-light tracking-wide italic"
//           initial={{ y: 40, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 1, duration: 1 }}
//         >
//           We’re getting married!
//         </motion.p>

//         {/* Date + Location */}
//         <motion.div
//           className="mt-8 space-y-2 text-lg md:text-2xl font-medium drop-shadow-md"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 1.5, duration: 0.8 }}
//         >
//           <p>October 26, 2025</p>
//           <p>New York City, NY</p>
//         </motion.div>
//       </div>

//       {/* Floating Animated Hearts */}
//       <motion.img
//         src="/heart.png" // place a heart image in your public folder
//         alt="Heart"
//         className="absolute top-20 left-10 w-12 h-12 opacity-80"
//         animate={{ y: [0, -30, 0] }}
//         transition={{ repeat: Infinity, duration: 4 }}
//       />
//       <motion.img
//         src="/heart.png"
//         alt="Heart"
//         className="absolute bottom-24 right-16 w-14 h-14 opacity-70"
//         animate={{ y: [0, 30, 0] }}
//         transition={{ repeat: Infinity, duration: 5 }}
//       />
//       <motion.img
//         src="/heart.png"
//         alt="Heart"
//         className="absolute top-40 right-1/3 w-10 h-10 opacity-60"
//         animate={{ y: [0, -25, 0] }}
//         transition={{ repeat: Infinity, duration: 6 }}
//       />
//     </motion.section>
//   );
// };

// export default Hero;


// import { motion } from "framer-motion";
// import { Heart } from "lucide-react";

// import wedbg from '../assets/images/heart-bg1.jpg';



// const Hero = () => {
//   return (
//     <motion.section
//       className="relative h-screen w-full flex items-center justify-center overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//     >
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src={wedbg}
//           alt="Wedding Background"
//           className="h-full w-full object-cover"
//         />
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center text-white px-6">
//         <motion.h1
//           className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-wide drop-shadow-lg"
//           initial={{ y: -80, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           <span className="text-pink-300">[Name]</span> &{" "}
//           <span className="text-pink-300">[Name]</span>
//         </motion.h1>

//         <motion.p
//           className="mt-4 text-lg md:text-2xl font-light tracking-wide italic"
//           initial={{ y: 40, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 1, duration: 1 }}
//         >
//           We’re getting married!
//         </motion.p>

//         <motion.div
//           className="mt-8 space-y-2 text-lg md:text-2xl font-medium drop-shadow-md"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 1.5, duration: 0.8 }}
//         >
//           <p>October 26, 2025</p>
//           <p>New York City, NY</p>
//         </motion.div>
//       </div>

//       {/* Floating Animated Hearts */}
//       <motion.div
//         className="absolute top-20 left-10 text-pink-400"
//         animate={{ y: [0, -40, 0] }}
//         transition={{ repeat: Infinity, duration: 4 }}
//       >
//         <Heart size={40} fill="currentColor" />
//       </motion.div>

//       <motion.div
//         className="absolute bottom-24 right-16 text-pink-300"
//         animate={{ y: [0, 30, 0] }}
//         transition={{ repeat: Infinity, duration: 5 }}
//       >
//         <Heart size={48} fill="currentColor" />
//       </motion.div>

//       <motion.div
//         className="absolute bottom-25 left-16 text-pink-300"
//         animate={{ y: [0, 30, 0] }}
//         transition={{ repeat: Infinity, duration: 5 }}
//       >
//         <Heart size={48} fill="currentColor" />
//       </motion.div>

//       <motion.div
//         className="absolute top-40 right-1/3 text-red-400"
//         animate={{ y: [0, -25, 0] }}
//         transition={{ repeat: Infinity, duration: 6 }}
//       >
//         <Heart size={36} fill="currentColor" />
//       </motion.div>
//     </motion.section>
//   );
// };

// export default Hero;


import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

import wedbg1 from "../assets/images/couple-holding-hands.jpg";
import wedbg2 from "../assets/images/wedding-ring-finger.jpg";
import wedbg3 from "../assets/images/Wedding-bg.jpg";
import wedbg4 from "../assets/images/couple-bg.jpg";

const images = [wedbg1, wedbg2, wedbg3, wedbg4];

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
