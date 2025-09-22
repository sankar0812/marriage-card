import { motion } from "framer-motion";
import { Calendar, MapPin, Music } from "lucide-react";

const events = [
  {
    icon: <Calendar className="w-10 h-10 text-pink-500" />,
    title: "Wedding Ceremony",
    time: "October 26, 2025 - 4:00 PM",
    location: "St. Patrick’s Cathedral, New York",
  },
  {
    icon: <Music className="w-10 h-10 text-pink-500" />,
    title: "Reception Party",
    time: "October 26, 2025 - 7:00 PM",
    location: "The Plaza Hotel, New York",
  },
  {
    icon: <MapPin className="w-10 h-10 text-pink-500" />,
    title: "After Party",
    time: "October 26, 2025 - 11:00 PM",
    location: "Rooftop Lounge, NYC",
  },
];

const TimelineSection = () => {
  return (
    <section className="bg-background py-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-script text-primary mb-12"
      >
        Wedding Day Events 💒
      </motion.h2>

      <div className="container mx-auto flex flex-col gap-10 px-6 max-w-3xl">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-6 hover:scale-105 transition"
          >
            {event.icon}
            <div className="text-left">
              <h3 className="text-xl font-bold text-primary">{event.title}</h3>
              <p className="text-gray-600">{event.time}</p>
              <p className="text-gray-500">{event.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
