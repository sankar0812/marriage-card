// // src/components/WeddingIntro.jsx
// import { Heart } from "lucide-react";
// import { motion } from "framer-motion";
// import groom from "../assets/images/groom.jpg";
// import bride from "../assets/images/bride.jpg";

// export default function WeddingIntro() {
//   return (
//     <section className="py-16 px-6 bg-white text-center">
//             <section className="mb-16">
//               <h2 className="text-3xl font-cursive text-pink-500 mb-12">
//                   Together Forever
//               </h2>
//           </section>
//       <div className="flex flex-col md:flex-row items-center justify-center gap-16">
//         {/* Groom */}
//         <motion.div
//           className="max-w-sm text-center"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-pink-500 font-cursive text-3xl mb-4">
//             Sankar
//           </h3>
//           <motion.img
//             src={groom}
//             alt="Sankar"
//             className="w-40 h-40 object-cover rounded-full mx-auto shadow-lg"
//             whileHover={{ scale: 1.1, rotate: 2 }}
//             transition={{ type: "spring", stiffness: 200 }}
//           />
//           <p className="text-gray-600 mt-5 text-sm leading-relaxed">
//             A dreamer at heart, grounded in values, and ready to begin a new
//             journey hand in hand. With love, laughter, and endless hope, he
//             steps forward into a life of togetherness.
//           </p>
//         </motion.div>

//         {/* Heart in the middle */}
//         <motion.div
//           className="hidden md:flex"
//           initial={{ scale: 0 }}
//           whileInView={{ scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
//           viewport={{ once: true }}
//         >
//           <Heart className="text-pink-500 w-10 h-10" />
//         </motion.div>

//         {/* Bride */}
//         <motion.div
//           className="max-w-sm text-center"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-pink-500 font-cursive text-3xl mb-4">
//             &&&&
//           </h3>
//           <motion.img
//             src={bride}
//             alt="&&&&"
//             className="w-40 h-40 object-cover rounded-full mx-auto shadow-lg"
//             whileHover={{ scale: 1.1, rotate: -2 }}
//             transition={{ type: "spring", stiffness: 200 }}
//           />
//           <p className="text-gray-600 mt-5 text-sm leading-relaxed">
//             A gentle soul with dreams as bright as her smile. She carries love
//             and tradition gracefully, ready to weave her story with his into a
//             beautiful tapestry of love and shared memories.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// src/components/WeddingIntro.jsx
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import groom from "../assets/images/groom.png";
import bride from "../assets/images/bride.png";

export default function WeddingIntro() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl font-cursive text-pink-500 mb-12">
        Together Forever
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-16">
        {/* Groom */}
        <motion.div
          className="max-w-sm text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-pink-500 font-cursive text-3xl mb-4">Sankar</h3>
          <motion.img
            src={groom}
            alt="Sankar"
            className="w-40 h-40 object-cover rounded-full mx-auto shadow-lg"
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <p className="text-gray-600 mt-5 text-sm leading-relaxed">
            A dreamer at heart, grounded in values, and ready to begin a new
            journey hand in hand. With love, laughter, and endless hope, he
            steps forward into a life of togetherness.
          </p>
        </motion.div>

        {/* Heart in the middle */}
        <motion.div
          className="hidden md:flex"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
          viewport={{ once: true }}
        >
          <Heart className="text-pink-500 w-10 h-10" />
        </motion.div>

        {/* Bride */}
        <motion.div
          className="max-w-sm text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-pink-500 font-cursive text-3xl mb-4">
            $$$$
          </h3>
          <motion.img
            src={bride}
            alt="$$$$"
            className="w-40 h-40 object-cover rounded-full mx-auto shadow-lg"
            whileHover={{ scale: 1.1, rotate: -2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <p className="text-gray-600 mt-5 text-sm leading-relaxed">
            A gentle soul with dreams as bright as her smile. She carries love
            and tradition gracefully, ready to weave her story with his into a
            beautiful tapestry of love and shared memories.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
