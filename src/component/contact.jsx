import React, { Children } from 'react';
import { FaFacebook } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="flex gap-6 items-center">
      <a href="https://web.facebook.com/profile.php?id=100008615866247">
        {' '}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.3, duration: 0.3 }} variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}>
          <FaFacebook className="text-4xl hover:scale-125 transition duration-300 text-gray-600 hover:text-white" />
        </motion.div>
      </a>
      <a href="https://www.instagram.com/firos_malik">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.6, duration: 0.3 }} variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}>
          <FaInstagram className="text-4xl  hover:scale-125 transition duration-300  text-gray-600 hover:text-white" />
        </motion.div>
      </a>
      <a href="https://www.linkedin.com/in/firos-malik-abdillah/">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.9, duration: 0.3 }} variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}>
          <FaLinkedin className="text-4xl  hover:scale-125 transition duration-300  text-gray-600 hover:text-white" />
        </motion.div>
      </a>
      <a href="https://wa.me/6285236446961">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 1.2, duration: 0.3 }} variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}>
          <IoLogoWhatsapp className="text-4xl  hover:scale-125 transition duration-300  text-gray-600 hover:text-white" />
        </motion.div>
      </a>
    </div>
  );
};

export default Contact;
