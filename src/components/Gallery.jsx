// import { motion } from 'framer-motion';

// const galleryImages = [
//   '/images/gallery-1.jpg',
//   '/images/gallery-2.jpg',
//   '/images/gallery-3.jpg',
//   '/images/gallery-4.jpg',
//   '/images/gallery-5.jpg',
//   '/images/gallery-6.jpg',
// ];

// const Gallery = () => {
//   return (
//     <motion.section
//       className="bg-background py-20 px-4"
//       initial={{ opacity: 0, scale: 0.95 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true, amount: 0.2 }}
//     >
//       <div className="container mx-auto max-w-6xl text-center">
//         <h2 className="text-5xl font-script text-primary mb-12">Our Favorite Memories</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           {galleryImages.map((image, index) => (
//             <motion.div
//               key={index}
//               className="relative overflow-hidden rounded-lg shadow-lg"
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <img src={image} alt={`Couple's gallery image ${index + 1}`} className="object-cover w-full h-full aspect-square" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Gallery;

import { motion } from 'framer-motion';
import galleryImg1 from '../assets/images/bride.png'; 
import galleryImg2 from '../assets/images/groom.png'; 
import galleryImg3 from '../assets/images/couple-bg.jpg'; 
import galleryImg4 from '../assets/images/wedding-ring-finger.jpg'; 
import galleryImg5 from '../assets/images/couple-holding-hands.jpg'; 
import galleryImg6 from '../assets/images/Wedding-bg.jpg'; 

// --- Framer Motion Variants for text content ---
const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

// --- UPDATED: Gallery Images Data with captions ---
const galleryImages = [
  { 
    src: galleryImg1, 
    caption: 'Our first date at the old coffee shop.' 
  },
  { 
    src: galleryImg2, 
    caption: 'That magical sunset proposal moment!' 
  },
  { 
    src: galleryImg3, 
    caption: 'Exploring new cities, hand in hand.' 
  },
  { 
    src: galleryImg4, 
    caption: 'Laughing through our adventures together.' 
  },
  { 
    src: galleryImg5, 
    caption: 'A quiet evening that meant everything.' 
  },
  { 
    src: galleryImg6, 
    caption: 'Celebrating another milestone in our love story.' 
  },
];

const Gallery = () => {
  return (
    <motion.section
      id="gallery"
      className="bg-gray-100 py-20 px-4"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto max-w-6xl text-center">
        
        <motion.p 
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-lg text-pink-600 font-medium mb-2"
        >
          Cherished Moments
        </motion.p>

        <motion.h2 
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-5xl font-script text-gray-800 mb-6"
        >
          Our Favorite Memories
        </motion.h2>

        <motion.p
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-3xl mx-auto text-lg text-gray-700 mb-12 leading-relaxed"
        >
          Every picture tells a part of our story, a moment frozen in time that we hold dear. Here's a glimpse into the joy, laughter, and love we've shared on our incredible journey together.
        </motion.p>

        {/* Existing: Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => ( // Changed 'image' to 'item' for clarity, then item.src
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg aspect-square group" // Added 'group' for hover effects
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src={image.src} // Access the 'src' property
                alt={image.caption}
                className="object-cover w-full h-full" 
              />
              
              {/* NEW: Caption Overlay */}
              {image.caption && ( // Only render if a caption exists
                <div 
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center 
                             p-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 
                             transition-opacity duration-300"
                >
                  <p className="text-center">{image.caption}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery;