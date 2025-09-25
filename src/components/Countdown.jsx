// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const Countdown = ({ weddingDate }) => {
//   const calculateTimeLeft = () => {
//     const difference = +new Date(weddingDate) - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }
//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearTimeout(timer);
//   });

//   const timerComponents = Object.keys(timeLeft).map((interval) => {
//     if (!timeLeft[interval]) {
//       return null;
//     }
//     return (
//       <div key={interval} className="flex flex-col items-center mx-4">
//         <span className="text-4xl md:text-6xl font-bold text-primary">{timeLeft[interval]}</span>
//         <span className="text-sm md:text-lg text-gray-600 uppercase">{interval}</span>
//       </div>
//     );
//   });

//   return (
//     <div className="py-20 bg-gray-50 text-center">
//       <motion.h2
//         className="text-5xl font-script text-primary mb-12"
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true, amount: 0.5 }}
//       >
//         Until we say "I do"
//       </motion.h2>
//       <div className="flex justify-center">
//         {timerComponents.length ? timerComponents : <span className="text-2xl">The day is here!</span>}
//       </div>
//     </div>
//   );
// };

// export default Countdown;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const calculateTimeLeft = () => {
  const weddingDate = new Date("2026-10-26T00:00:00");
  const now = new Date();
  const difference = weddingDate - now;

  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    // <section className="relative bg-gradient-to-r from-pink-200 via-red-300 to-pink-400 py-20 text-white">
    // <section className="relative bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 py-20 text-white">
      <section className="relative bg-gradient-to-r from-gray-100 via-white-200 to-white-300 py-20 text-gray-800 shadow-md shadow-gray-200">
      <div className="container mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-script mb-6 drop-shadow-lg"
        >
          Countdown to Our Forever
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl mb-10 font-light"
        >
          We can’t wait to celebrate with you on <span className="font-bold">October 26, 2026</span>
        </motion.p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-6 md:gap-12 text-center">
          {Object.entries(timeLeft).map(([label, value], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.3, duration: 0.8 }}
              className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg"
            >
              <p className="text-4xl md:text-6xl font-bold">{value}</p>
              <p className="uppercase tracking-wider text-sm md:text-base">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
