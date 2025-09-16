import { motion } from 'framer-motion';

const VenueDetails = () => {
  return (
    <motion.section
      className="bg-gray-50 py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-5xl font-script text-primary mb-12">Venue & Details</h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {/* Ceremony Card */}
          <motion.div
            className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl font-script text-primary">The Ceremony</h3>
            <p className="mt-4 text-lg">2:00 PM</p>
            <p className="font-bold mt-2">The Botanical Garden</p>
            <p>123 Floral Avenue, New York, NY</p>
            <a
              href="https://maps.google.com/?q=123+Floral+Avenue,+New+York"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-opacity-90 transition-colors"
            >
              Get Directions
            </a>
          </motion.div>

          {/* Reception Card */}
          <motion.div
            className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg mt-8 md:mt-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl font-script text-primary">The Reception</h3>
            <p className="mt-4 text-lg">6:00 PM</p>
            <p className="font-bold mt-2">The Grand Ballroom</p>
            <p>456 Party Street, New York, NY</p>
            <a
              href="https://maps.google.com/?q=456+Party+Street,+New+York"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-opacity-90 transition-colors"
            >
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default VenueDetails;