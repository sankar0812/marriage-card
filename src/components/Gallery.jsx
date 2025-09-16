import { motion } from 'framer-motion';

const galleryImages = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-4.jpg',
  '/images/gallery-5.jpg',
  '/images/gallery-6.jpg',
];

const Gallery = () => {
  return (
    <motion.section
      className="bg-background py-20 px-4"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-5xl font-script text-primary mb-12">Our Favorite Memories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src={image} alt={`Couple's gallery image ${index + 1}`} className="object-cover w-full h-full aspect-square" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery;