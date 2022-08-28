import Contact from '../../components/contact/Contact';
import React from 'react'
import { motion } from 'framer-motion';
const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
    >
      <Contact />
    </motion.div>
  );
}

export default ContactPage