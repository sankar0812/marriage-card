import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-white py-12 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-script text-accent mb-4">Thank You</h3>
        <p className="text-lg mb-4">We are so excited to celebrate with you!</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-primary transition-colors">
            {/* Social media icons can be placed here */}
            Facebook
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Instagram
          </a>
        </div>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Emma & Leo. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;