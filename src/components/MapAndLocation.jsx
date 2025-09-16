import { motion } from 'framer-motion';

const MapAndLocation = () => {
  return (
    <motion.section
      className="bg-background py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl font-script text-primary mb-12 text-center">Location & Directions</h2>
        <div className="bg-white p-6 md:p-12 rounded-lg shadow-xl flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            className="w-full md:w-1/2 h-80 md:h-96 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Replace the iframe src with your actual Google Maps embed URL */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.250554025126!2d-73.9875412845942!3d40.74844007932822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25964f44c4c4b%3A0x6b8d4f4f3c0b02f8!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1633512345678!5m2!1sen!2sus"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ceremony Location Map"
            ></iframe>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-3xl font-script text-primary mb-4">The Grand Ballroom</h3>
            <p className="text-lg mb-2">456 Party Street, New York, NY</p>
            <p className="text-gray-600 mb-6">
              The reception will be held at the elegant Grand Ballroom, a short 15-minute drive from the ceremony venue.
              Parking is available on-site.
            </p>
            <a
              href="https://maps.app.goo.gl/your-location-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-opacity-90 transition-colors shadow-lg"
            >
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MapAndLocation;