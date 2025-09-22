// import { motion } from 'framer-motion';

// const Footer = () => {
//   return (
//     <motion.footer
//       className="bg-gray-800 text-white py-12 text-center"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//     >
//       <div className="container mx-auto px-4">
//         <h3 className="text-3xl font-script text-accent mb-4">Thank You</h3>
//         <p className="text-lg mb-4">We are so excited to celebrate with you!</p>
//         <div className="flex justify-center space-x-4 mb-4">
//           <a href="#" className="hover:text-primary transition-colors">
//             {/* Social media icons can be placed here */}
//             Facebook
//           </a>
//           <a href="#" className="hover:text-primary transition-colors">
//             Instagram
//           </a>
//         </div>
//         <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Emma & Leo. All Rights Reserved.</p>
//       </div>
//     </motion.footer>
//   );
// };

// export default Footer;


import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      className="relative bg-gradient-to-r from-pink-300 via-red-400 to-pink-500 text-white py-12 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Overlay hearts floating softly */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 left-1/4 animate-pulse">💖</div>
        <div className="absolute bottom-16 right-1/3 animate-bounce">💕</div>
        <div className="absolute top-1/2 left-10 animate-ping">❤️</div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.h3
          className="text-4xl font-script mb-4 drop-shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Thank You 💍
        </motion.h3>

        <motion.p
          className="text-lg mb-6 font-light"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          We can’t wait to celebrate our special day with you!
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center space-x-6 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition transform hover:scale-110 hover:text-pink-500"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition transform hover:scale-110 hover:text-pink-500"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </motion.div>

        <p className="text-sm text-gray-200">
          &copy; {new Date().getFullYear()} Emma & Leo. All Rights Reserved.
        </p>

        <p className="text-xs text-gray-300 mt-2">
          Made with <span className="text-red-400">❤️</span> for our journey together
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
