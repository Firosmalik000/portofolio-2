import React from 'react';
import Contact from '../component/contact';
import me from '../assets/me.png';
import Line from '../component/line';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="Home" className="flex flex-col md:flex-row items-center justify-between h-full gap-x-4 py-7 md:py-28 ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
        className="mx-auto md:mx-0 z-10 md:order-2 mb-10 relative"
      >
        <img src={me} alt="" className="z-20 relative grayscale  scale-110" />
        <div className="w-[300px] h-[300px] absolute bg-[#bc6d38] flex rounded-full bottom-20 right-10 z-10"></div>
        <div className="w-[350px] h-[350px] absolute bg-none border border-gradient from-white to-black flex rounded-full bottom-20 right-10 z-10"></div>
      </motion.div>
      <div className="z-10 mb-16 md:mb-0  w-[400px] items-center  text-center md:text-left md:w-[500px] pt-10  ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
          className="text-4xl md:text-7xl mb-5 font-bold text-[#bc6d38] font-playfair"
        >
          Hello, <span className="text-white text-3xl md:text-6xl"> I am</span>{' '}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
          className="text-3xl md:text-5xl text-white font-bold mb-3  font-playfair"
        >
          Firos Malik Abdillah
        </motion.div>
        <div className="w-2/3 mx-auto md:mx-0 mb-3">
          <Line />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
          className="text-white mb-6"
        >
          Junior Front End Web Developer || React JS
        </motion.div>
        <a href="https://wa.me/6285236446961">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.3, duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
            <button className="btn px-10 py-2 mb-7 bg-[#bc6d38] text-white hover:bg-gray-800 rounded-lg transition duration-300 font-bold">Contact Me</button>
          </motion.div>
        </a>
        <div className=" md:justify-start justify-center flex ">
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default Hero;
