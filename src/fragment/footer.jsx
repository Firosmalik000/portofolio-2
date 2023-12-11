import React from 'react';
import Contact from '../component/contact';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <section className="w-4/6 h-[200px] mx-auto items-center flex justify-between   text-white ">
      <div className="flex justify-center py-10">
        <Contact />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 1.4, duration: 0.3 }}
        variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}
        className="text-center text-xl font-playfair"
      >
        See You In Next Project ❤
      </motion.div>
    </section>
  );
};

export default Footer;
