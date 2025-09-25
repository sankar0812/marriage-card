import { motion } from "framer-motion";
import handhold from "../assets/videos/handhold.mp4"; // Your imported video file

// Re-using the item variant for a nice entry animation
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

const VideoAnimationSection = () => {
  return (
    <motion.section
      id="video-section"
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-6 text-center">
        
        {/* Section Header */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4"
        >
          Our Journey in Motion 🎥
        </motion.h2>
        
        {/* Optional Subtitle/Description */}
        <motion.p
          variants={itemVariants}
          className="max-w-3xl mx-auto text-lg text-gray-600 mb-12"
        >
          A quick glimpse into the moments that brought us here.
        </motion.p>

        {/* Video / Animation Container */}
        <motion.div
          variants={itemVariants}
          // The relative container is essential for making the embedded video responsive
          className="relative w-full max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden"
          style={{ paddingBottom: "56.25%" }} // 16:9 Aspect Ratio (9/16 * 100)
        >
          {/* ---------------------------------------------------- */}
          {/* NEW VIDEO ELEMENT INSTEAD OF PLACEHOLDER DIV/IFRAME */}
          {/* ---------------------------------------------------- */}
          <video
            src={handhold} // Use the imported video source
            autoPlay 
            loop 
            muted // Muted is required for autoplay in most modern browsers
            playsInline // Recommended for mobile devices
            controls={false} // Hide controls for a cleaner animation loop
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
          
        </motion.div>
        
      </div>
    </motion.section>
  );
};

export default VideoAnimationSection;