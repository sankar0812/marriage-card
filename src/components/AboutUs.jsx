import { motion } from "framer-motion";
import { useState } from "react";
import storybg1 from "../assets/images/couple-bg.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const AboutUs = () => {
  const [active, setActive] = useState(null);

  const timeline = [
    {
      id: 1,
      title: "The First Chapter",
      text: "It all started in 2023 when we met at a Traing center. That first conversation felt endless...",
      img: storybg1,
    },
    {
      id: 2,
      title: "The Proposal",
      text: "On a beautiful evening in 2023, under the city lights, the question was asked — and the answer was yes!",
      img: "/story-2.jpg",
    },
    {
      id: 3,
      title: "The Journey Ahead",
      text: "Through ups and downs, laughter and adventures, we’re ready to start our forever together.",
      img: "/story-3.jpg",
    },
  ];

  return (
    <motion.section
      id="our-story"
      className="relative bg-background py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        variants={itemVariants}
        className="text-center text-5xl font-script text-primary mb-16"
      >
        Our Story
      </motion.h2>

      <div className="relative container mx-auto px-6">
        {/* vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-pink-400 to-pink-600 rounded-full transform -translate-x-1/2"></div>

        <div className="space-y-24">
          {timeline.map((event, index) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full md:w-1/2 cursor-pointer relative group"
                onClick={() => setActive(active === event.id ? null : event.id)}
              >
                <img
                  src={event.img}
                  alt={event.title}
                  className="rounded-2xl shadow-lg object-cover w-full h-72 md:h-96"
                />
                {/* Overlay text on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg transition-opacity rounded-2xl">
                  Click to {active === event.id ? "close" : "read"}
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {event.title}
                </h3>
                {active === event.id && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-lg text-gray-700"
                  >
                    {event.text}
                  </motion.p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
