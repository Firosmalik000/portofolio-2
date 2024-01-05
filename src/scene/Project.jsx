import Line from '../component/line';
import { projectData } from '../data';
import { motion } from 'framer-motion';
import CardProject from '../fragment/CardProject';

const Project = () => {
  console.log(projectData);
  return (
    <section id="Project" className="py-20 ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
        className="text-5xl  font-playfair flex justify-center mb-3"
      >
        <span className="text-white ">My </span>
        <span className="text-[#bc6d38] ">Project</span>
      </motion.div>
      <div className="w-1/4 mx-auto mb-3 ">
        <Line />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
        className="w-2/3 mx-auto"
      >
        <p className="text-center text-white mb-10 ">Ini adalah project yang saya buat, baik sudah selesai maupun dalam progress, dan akan saya perbarui ketika ada project baru yang saya kerjakan.</p>
      </motion.div>
      <div className="mt-12 overflow-x-hidden w-full  relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide ">
          {projectData.map((item, index) => (
            <CardProject key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
