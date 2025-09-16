import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const AboutUs = () => {
  return (
    <motion.section
      className="bg-background py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.h2 variants={itemVariants} className="text-center text-5xl font-script text-primary mb-12">
        Our Story
      </motion.h2>
      <div className="container mx-auto px-4">
        <motion.p variants={itemVariants} className="text-center text-lg max-w-2xl mx-auto mb-8">
          It all started in 2018 when we met at a coffee shop...
        </motion.p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div variants={itemVariants} className="w-full md:w-1/2">

            <p className="mt-4 text-center text-primary font-bold">The First Chapter</p>
          </motion.div>
          <motion.div variants={itemVariants} className="w-full md:w-1/2">

            <p className="mt-4 text-center text-primary font-bold">The Proposal</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;