// import { motion } from "framer-motion";
// import { useState } from "react";
// import storybg1 from "../assets/images/couple-bg.jpg";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.3 },
//   },
// };

// const itemVariants = {
//   hidden: { y: 40, opacity: 0 },
//   visible: { y: 0, opacity: 1 },
// };

// const AboutUs = () => {
//   const [active, setActive] = useState(null);

//   const timeline = [
//     {
//       id: 1,
//       title: "The First Chapter",
//       text: "It all started in 2023 when we met at a Traing center. That first conversation felt endless...",
//       img: storybg1,
//     },
//     {
//       id: 2,
//       title: "The Proposal",
//       text: "On a beautiful evening in 2023, under the city lights, the question was asked — and the answer was yes!",
//       img: "/story-2.jpg",
//     },
//     {
//       id: 3,
//       title: "The Journey Ahead",
//       text: "Through ups and downs, laughter and adventures, we’re ready to start our forever together.",
//       img: "/story-3.jpg",
//     },
//   ];

//   return (
//     <motion.section
//       id="our-story"
//       className="relative bg-background py-20"
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       <motion.h2
//         variants={itemVariants}
//         className="text-center text-5xl font-script text-primary mb-16"
//       >
//         Our Story
//       </motion.h2>

//       <div className="relative container mx-auto px-6">
//         {/* vertical line */}
//         <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-pink-400 to-pink-600 rounded-full transform -translate-x-1/2"></div>

//         <div className="space-y-24">
//           {timeline.map((event, index) => (
//             <motion.div
//               key={event.id}
//               variants={itemVariants}
//               className={`flex flex-col md:flex-row items-center gap-10 ${
//                 index % 2 === 0 ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               {/* Image */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="w-full md:w-1/2 cursor-pointer relative group"
//                 onClick={() => setActive(active === event.id ? null : event.id)}
//               >
//                 <img
//                   src={event.img}
//                   alt={event.title}
//                   className="rounded-2xl shadow-lg object-cover w-full h-72 md:h-96"
//                 />
//                 {/* Overlay text on hover */}
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg transition-opacity rounded-2xl">
//                   Click to {active === event.id ? "close" : "read"}
//                 </div>
//               </motion.div>

//               {/* Text */}
//               <motion.div
//                 initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="w-full md:w-1/2"
//               >
//                 <h3 className="text-2xl font-bold text-primary mb-4">
//                   {event.title}
//                 </h3>
//                 {active === event.id && (
//                   <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-lg text-gray-700"
//                   >
//                     {event.text}
//                   </motion.p>
//                 )}
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default AboutUs;

// import { motion } from "framer-motion";
// // Assume you have these images or replace them with relevant paths
// import profilePic1 from "../assets/images/couple-bg.jpg"; // Image for December 2024
// import profilePic2 from "../assets/images/bride.png"; // Image for January 2025
// import profilePic3 from "../assets/images/groom.png"; // Image for February 2025

// // --- Framer Motion Variants ---

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2 },
//   },
// };

// const itemVariants = {
//   hidden: { x: -50, opacity: 0 },
//   visible: { x: 0, opacity: 1 },
// };

// // --- Timeline Data based on the images ---

// const timelineData = [
//   {
//     id: 1,
//     title: "How it starts...",
//     date: "DECEMBER 2024",
//     text: "It all began when we first heard about each other in December 2024. Though our profiles were exchanged, destiny had its own plans, and we didn't proceed further at that time. But fate had something beautiful in store for us.",
//     img: profilePic1,
//     side: "left", // Display content on the left side
//   },
//   {
//     id: 2,
//     title: "How its went...",
//     date: "JANUARY 2025",
//     text: "After Pongal, we decided to give it a chance and restart the conversation. During our hometown temple festival, our profiles were exchanged once again. This time, everything fell into place, and within a week, we realized that we were meant to be together.",
//     img: profilePic2,
//     side: "right", // Display content on the right side
//   },
//   {
//     id: 3,
//     title: "How its going...",
//     date: "FEBRUARY 2025",
//     text: "On February 2, 2025, our families met, and in on time, our wedding was confirmed. What started as an exchange of profiles turned into a beautiful beginning.",
//     img: profilePic3,
//     side: "left", // Display content on the left side
//   },
// ];

// // --- Timeline Event Sub-Component ---

// const TimelineEvent = ({ event, isLast }) => {
//   const isLeft = event.side === "left";
  
//   // Custom variant for smoother staggered motion based on side
//   const eventVariants = {
//     hidden: { x: isLeft ? -50 : 50, opacity: 0 },
//     visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 50, damping: 10 } },
//   };

//   return (
//     <div className="relative flex justify-center w-full my-8">
      
//       {/* 1. Connecting Line */}
//       {!isLast && (
//         <div className="absolute top-0 bottom-0 w-0.5 bg-gray-300 z-0"></div>
//       )}

//       {/* 2. Main Event Content Container (Controls horizontal placement) */}
//       <div 
//         className={`flex w-full items-start ${isLeft ? 'justify-start md:justify-end' : 'justify-start'}`}
//       >
        
//         {/* 3. Image/Circle (Centered in the layout) */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
//           <motion.img
//             src={event.img}
//             alt={event.title}
//             className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white"
//             variants={itemVariants} // Use a simple motion variant for the image circle
//           />
//         </div>

//         {/* 4. Text Card (Positioned left or right) */}
//         <motion.div
//           className={`w-full md:w-5/12 bg-white rounded-xl shadow-lg p-6 my-2 
//             ${isLeft ? 'md:mr-[calc(50%+12px)]' : 'md:ml-[calc(50%+12px)]'} 
//             // Adjust margin to make space for the image circle (12px is half of 24px)
//           `}
//           variants={eventVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//         >
//           <h3 className="text-2xl font-semibold text-gray-800 mb-1">{event.title}</h3>
//           <p className="text-pink-500 font-medium text-sm mb-3">{event.date}</p>
//           <p className="text-gray-600 leading-relaxed">{event.text}</p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };


// // --- Main Story Section Component ---

// const AboutUs = () => {
//   return (
//     <motion.section
//       id="our-story-timeline"
//       className="py-20 bg-gray-50"
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       <div className="container mx-auto px-6">
//         {/* You can optionally add the header from your first component here */}
        
//         <div className="relative">
//           {timelineData.map((event, index) => (
//             <TimelineEvent 
//               key={event.id} 
//               event={event} 
//               isLast={index === timelineData.length - 1} 
//             />
//           ))}
//         </div>
        
//       </div>
//     </motion.section>
//   );
// };

// export default AboutUs;

import { motion } from "framer-motion";
import { useState } from "react"; // Import useState

// Assume you have these images or replace them with relevant paths
import profilePic1 from "../assets/images/couple-bg.jpg"; // Image for December 2024
import profilePic2 from "../assets/images/bride.png"; // Image for January 2025
import profilePic3 from "../assets/images/groom.png"; // Image for February 2025
import profilePic4 from "../assets/images/wedding-ring-finger.jpg";

// --- Framer Motion Variants ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

// --- Timeline Data (Use your existing data) ---

const timelineData = [
  {
    id: 1,
    title: "How it starts...",
    date: "October 2023",
    text: "Our journey truly began in October 2023 when a chance encounter brought us together. We met on a train journey, and what started as a casual conversation quickly turned into something much more profound.",
    img: profilePic1,
    side: "left", // Display content on the left side
  },
  {
    id: 2,
    title: "How its went...",
    date: "December 2023",
    text: "By December 2023, we officially started going out. We spent time exploring new places and getting to know each other deeply, setting the foundation for our relationship.",
    img: profilePic2,
    side: "right", // Display content on the right side
  },
  {
    id: 3,
    title: "Together in Love...",
    date: "January 2024",
    text: "The entire year of 2024 was dedicated to building our bond and cherishing our love. Through every adventure and milestone, our connection grew stronger, confirming we were meant to be together forever.",
    img: profilePic3,
    side: "left",
  },
  {
    id: 4,
    title: "The Next Step...",
    date: "July 2025",
    text: "As we entered 2025, our families met to discuss our future. The discussions for marriage were initiated between our two families, marking the exciting transition to our forever commitment.",
    img: profilePic4,
    side: "right",
  },
];


// --- Timeline Event Sub-Component (FINAL FIX) ---

const TimelineEvent = ({ event, isLast }) => {
  const isLeft = event.side === "left";
  
  const eventVariants = {
    // Desktop animation alternates based on side, Mobile uses the default left-to-right entrance
    hidden: { x: isLeft ? -50 : 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 50, damping: 10 } },
  };

  return (
    // Outer container: Base container
    <div className="relative flex justify-start w-full my-16"> 
      
      {/* 1. Connecting Line: Pinned to the left on mobile, centered on desktop */}
      {!isLast && (
        <div className="absolute top-0 bottom-0 w-0.5 bg-gray-300 z-0 
                        left-10 
                        md:left-1/2 md:transform md:-translate-x-1/2"
        ></div>
      )}

      {/* 2. Content Wrapper: This sets the horizontal alignment for the desktop view */}
      <div 
        className={`flex w-full items-start 
          // Desktop (md+): If event.side is 'right' (not isLeft), justify-start. If event.side is 'left' (isLeft), justify-end.
          ${isLeft ? 'md:justify-end' : 'md:justify-start'} 
        `}
      >
        
        {/* 3. Image/Circle Container (The hub that moves) */}
        <div 
          className={`absolute z-10 w-24 h-24 cursor-pointer 
            // Mobile (default): Pinned to the line at left: 40px
            top-0 left-10 transform -translate-x-1/2 
            
            // Desktop (md+): Reposition to center
            md:left-1/2 md:top-0 md:transform md:-translate-x-1/2
          `}
        >
          <motion.img
            src={event.img}
            alt={event.title}
            className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white"
            variants={itemVariants} 
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </div>

        {/* 4. Text Card (The card that needs to alternate left/right on desktop) */}
        <motion.div
          className={`bg-white rounded-xl shadow-lg p-6 
            // Mobile (default): Full width, pushed right to clear the left-aligned circle/line
            w-full ml-20 
            
            // Desktop (md+): Reset mobile margin, set width, and apply alternating margin logic
            md:ml-0 md:w-5/12 
            ${isLeft 
              ? 'md:mr-[calc(50%+12px)] md:order-first' // Left Card: Margin right, and force to the start of the flex container
              : 'md:ml-[calc(60%-110px)] md:order-last' // Right Card: Margin left, and force to the end of the flex container
            }
          `}
          variants={eventVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-1">{event.title}</h3>
          <p className="text-pink-500 font-medium text-sm mb-3">{event.date}</p>
          <p className="text-gray-600 leading-relaxed">{event.text}</p>
        </motion.div>
      </div>
    </div>
  );
};

// const TimelineEvent = ({ event, isLast }) => {
//   const isLeft = event.side === "left";
  
//   // Custom variant for smoother staggered motion based on side
//   const eventVariants = {
//     hidden: { x: isLeft ? -50 : 50, opacity: 0 },
//     visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 50, damping: 10 } },
//   };

//   return (
//     <div className="relative flex justify-center w-full my-8">
      
//       {/* 1. Connecting Line */}
//       {!isLast && (
//         <div className="absolute top-0 bottom-0 w-0.5 bg-gray-300 z-0"></div>
//       )}

//       {/* 2. Main Event Content Container (Now controls horizontal placement for ALL screens) */}
//       <div 
//         className={`flex w-full items-start ${isLeft ? 'justify-start sm:justify-end' : 'justify-start'}`}
//       >
        
//         {/* 3. Image/Circle (Centered in the layout) */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 z-10 cursor-pointer">
//           <motion.img
//             src={event.img}
//             alt={event.title}
//             className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white"
//             variants={itemVariants} 
//             // --- Hover-to-Zoom Change ---
//             whileHover={{ scale: 1.3 }} 
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             // --- End Hover-to-Zoom Change ---
//           />
//         </div>

//         {/* 4. Text Card (Positioned left or right - adjusted classes for mobile) */}
//         <motion.div
//           className={`w-11/12 sm:w-5/12 bg-white rounded-xl shadow-lg p-6 my-2 
//             ${isLeft 
//               ? 'sm:mr-[calc(50%+12px)]' // Left card: Margin right to avoid center line
//               : 'sm:ml-[calc(50%+35px)]' // Right card: Margin left to avoid center line
//             } 
//             // The 'sm:' prefix is used here to only apply the margin that creates the horizontal split 
//             // on screens slightly larger than a typical phone, giving full width on small phones.
//             // On very small screens, the content cards will overlap the images slightly, which is often unavoidable 
//             // with a two-column timeline on mobile, but this is the most common and readable fix.
//           `}
//           variants={eventVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//         >
//           <h3 className="text-2xl font-semibold text-gray-800 mb-1">{event.title}</h3>
//           <p className="text-pink-500 font-medium text-sm mb-3">{event.date}</p>
//           <p className="text-gray-600 leading-relaxed">{event.text}</p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };


// --- Main Story Section Component ---

const AboutUs = () => {
  return (
    <motion.section
      id="our-story"
      className="py-20 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-6">
        {/* You can optionally add the header from your first component here */}
        {/* For example: */}
        <div className="text-center mb-16 px-4">
          <motion.p variants={itemVariants} className="text-sm tracking-widest uppercase text-gray-500 mb-1">
            WE LOVE EACH OTHER
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-6xl font-script text-pink-500 mb-6">
            Our Story
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Some journeys are written in the stars, and ours was one such beautiful path. Guided by faith, strengthened by hope, and sealed with love, our story unfolded just the way it was always meant to.
          </motion.p>
        </div>
        
        <div className="relative">
          {timelineData.map((event, index) => (
            <TimelineEvent 
              key={event.id} 
              event={event} 
              isLast={index === timelineData.length - 1} 
            />
          ))}
        </div>
        
      </div>
    </motion.section>
  );
};

export default AboutUs;