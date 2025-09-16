import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      className="relative h-screen flex flex-col items-center justify-center text-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Background image container */}
      <div className="absolute inset-0 z-0">

        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div className="relative z-10 p-8">
        <motion.h1
          className="text-6xl md:text-8xl font-script text-accent"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          [Name] & [Name]
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl font-sans mt-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          We're getting married!
        </motion.p>
        <motion.div
          className="mt-8 text-xl md:text-3xl font-sans"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p>October 26, 2025</p>
          <p>New York City, NY</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
