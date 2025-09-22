import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const quotes = [
  "Every love story is beautiful, but ours is my favorite.",
  "Together is a wonderful place to be.",
  "I look at you and see the rest of my life in front of my eyes.",
  "Two souls, one heart, forever united.",
];

const QuotesSection = () => {
  const [index, setIndex] = useState(0);

  // Auto-rotate quotes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-r from-pink-100 via-white to-pink-100">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl font-serif italic text-pink-700"
          >
            “{quotes[index]}”
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10 text-lg text-gray-600"
        >
          ❤️ With love, <span className="font-bold">[Name] & [Name]</span>
        </motion.div>
      </div>
    </section>
  );
};

export default QuotesSection;
