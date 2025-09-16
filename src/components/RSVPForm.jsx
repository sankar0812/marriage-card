import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: 1,
    attending: 'yes',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend service or API
    console.log('RSVP Data:', formData);
    alert('Thank you for your RSVP!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      guests: 1,
      attending: 'yes',
      message: '',
    });
  };

  return (
    <motion.section
      className="bg-gray-50 py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-5xl font-script text-primary mb-12 text-center">RSVP</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="attending" className="block text-gray-700 font-bold mb-2">Will you be attending?</label>
            <select
              id="attending"
              name="attending"
              value={formData.attending}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="yes">Yes, I will be there!</option>
              <option value="no">No, I can't make it.</option>
            </select>
          </div>
          {formData.attending === 'yes' && (
            <div className="mb-4">
              <label htmlFor="guests" className="block text-gray-700 font-bold mb-2">Number of Guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          )}
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message (optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-32"
            ></textarea>
          </div>
          <div className="text-center">
            <motion.button
              type="submit"
              className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-opacity-90 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit RSVP
            </motion.button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default RSVPForm;