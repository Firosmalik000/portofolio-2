import React from 'react';
import Line from '../component/line';
import CardSkills from '../fragment/cardSkills';
import { FaReact } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section className="py-20" id="Skills">
      <div className="mb-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}
          className="flex mb-3 mx-auto font-playfair justify-center  text-5xl font-bold"
        >
          <span className="text-[#bc6d38]">My </span> <span className=" text-white   "> Skills</span>
        </motion.div>
        <div className="w-1/5 mx-auto mb-10">
          <Line />
        </div>
        <div className=" flex flex-wrap flex-cols-2 sm:flex-cols-3 gap-x-5 mx-auto justify-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2, duration: 0.3 }} variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}>
            <CardSkills icon={<FaReact className="text-4xl text-[#7cc5d9]" />} title="React JS" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.5, duration: 0.3 }} variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}>
            <CardSkills icon={<IoLogoJavascript className="text-4xl text-[#f0db4f]" />} title="Javascript" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.8, duration: 0.3 }} variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}>
            <CardSkills icon={<FaHtml5 className="text-4xl text-[#e34c26]" />} title="HTML" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 1.1, duration: 0.3 }} variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}>
            <CardSkills icon={<FaCss3Alt className="text-4xl text-[#264de4]" />} title="CSS" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 1.4, duration: 0.3 }} variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1 } }}>
            <CardSkills icon={<SiTailwindcss className="text-4xl text-[#3490dc]" />} title="TailwindCSS" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
