import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = ({ weddingDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(weddingDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }
    return (
      <div key={interval} className="flex flex-col items-center mx-4">
        <span className="text-4xl md:text-6xl font-bold text-primary">{timeLeft[interval]}</span>
        <span className="text-sm md:text-lg text-gray-600 uppercase">{interval}</span>
      </div>
    );
  });

  return (
    <div className="py-20 bg-gray-50 text-center">
      <motion.h2
        className="text-5xl font-script text-primary mb-12"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Until we say "I do"
      </motion.h2>
      <div className="flex justify-center">
        {timerComponents.length ? timerComponents : <span className="text-2xl">The day is here!</span>}
      </div>
    </div>
  );
};

export default Countdown;