import { motion } from "framer-motion";
import vdo from '../assets/videos/Wed_Graphics.mp4';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.6, duration: 1 },
  }),
};

const VideoSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={vdo}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-script text-pink-300 mb-6 drop-shadow-lg"
        >
          Two Hearts, One Journey
        </motion.h2>

        <motion.p
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-2xl max-w-2xl mx-auto font-light mb-4"
        >
          From the very first glance, our worlds changed forever.
        </motion.p>

        <motion.p
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-2xl max-w-2xl mx-auto font-light mb-4"
        >
          Countless memories, endless laughter, and shared dreams.
        </motion.p>

        <motion.p
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-2xl max-w-2xl mx-auto font-light mb-8"
        >
          Today, we begin the greatest chapter of all — together.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8"
        >
        <button
            onClick={() => {
              document.getElementById("our-story")?.scrollIntoView({ behavior: "smooth" });
               }}
                className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg transition"
              >
          Watch Full Story
        </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
