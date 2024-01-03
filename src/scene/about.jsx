import Line from '../component/line';
import me from '../assets/me.png';
import cv from '../assets/CV.pdf';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className=" py-20  mx-auto " id="About">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}
        className="text-5xl font-bold    font-playfair text-center mb-3 "
      >
        <span className="text-white">About</span> <span className=" text-[#bc6d38]">Me </span>
      </motion.div>
      <div className="w-1/4 mx-auto mb-5">
        <Line />{' '}
      </div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.4, duration: 0.5 }} variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
        <span>
          <p className="indent-8 text-white">
            Saya adalah junior programmer, alumnni SMA Bina Insan Mandiri, dan masih kuliah di Universitas Al-azhar Cairo. Saya tertarik untuk belajar dan mendalami Front End Web Developer. Saya sudah belajar tentang bahasa pemrograman
            Javascript serta library yang digunakan untuk pengembangan web seperti React JS.
          </p>
          <br />
          <p className="indent-8 text-white">
            Saya seorang profesional yang berpengalaman dalam peyanan umum. Dengan 4 tahun pengalaman kerja, saya memiliki keahlian memecahkan masalah dengan cepat dan tepat. Selama karier saya, saya telah berhasil memberikan pemasukan
            terbesar dalam 5 tahun terahir,di Graha Jatim Hotel, yang merupakan hotel milik organisasi mahasiswa Jawa Timur, di Cairo, Mesir. Saya memiliki komunikasi yang kuat dan mampu bekerja sama dalam lintas fungsional
          </p>
        </span>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={{ hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } }}
        className="mt-5  flex justify-center "
      >
        <a href={cv} download>
          <button className="btn transition duration-300 hover:bg-blue-900 text-white py-3 px-7 bg-[#bc6d38] rounded-lg">Download CV</button>
        </a>
      </motion.div>
    </section>
  );
};

export default About;
