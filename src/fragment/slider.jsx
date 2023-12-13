import React, { useState } from 'react';
import project1 from '../assets/project.png';
import project2 from '../assets/2.png';
import project3 from '../assets/3.png';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Projects = ({ src, title, github, live, description }) => {
  return (
    <section className="md:flex flex-col-1 md:w-full mx-auto p-11 gap-4 rounded-xl bg-[#bc6d38] relative">
      <div className="md:mb-0 mb-6">
        <img src={src} alt="" className="w-[500px] flex-2" />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl text-white font-bold mb-2 text-center md:text-left ">{title}</h1>
        <p className="indent-8 text-white text-justify">{description}</p>

        <div className="flex gap-4 mt-4 md:justify-start justify-center">
          <a href={github}>
            <button className="btn py-3 w-[100px] text-white bg-[#2F7BAD] rounded-lg hover:bg-blue-800 transition duration-300 easy-in-out">Github</button>{' '}
          </a>
          <a href={live}>
            <button className="btn py-3 w-[100px] text-white bg-[#2F7BAD] rounded-lg hover:bg-blue-800 transition duration-300 easy-in-out">Live</button>
          </a>
        </div>
      </div>
    </section>
  );
};

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      src: project1,
      title: 'PT Syahma Berkah Sukses',
      github: 'https://github.com/Firosmalik000/PT-Syahma-Sukses-Berkah',
      live: 'https://syahma-sukses-berkah.netlify.app/',
      description: `Adalah salah satu perusahaan rintisan yang bergerak di bidang export briket, dan masih dalam tahap pengembangan dalam bentuk prototype, karena terkendala waktu untuk komunikasi lebih lanjut. Ini merupakan project pertama saya
        untuk ditawarkan secara umum. Karena perusahaan ini milik teman saya sendiri jadi saya menawarkan membuat company profile untuk langkah awal karier saya di bidang Front End Web Developer.`,
    },
    {
      src: project2,
      title: 'Crypto Update',
      github: ' https://github.com/Firosmalik000/crypto-app',
      live: 'https://simple-crypto-update.netlify.app/',
      description: `Excited to present 'Crypto Update,' a project learned from YouTube tutorials. It provides real-time insights into the crypto world, featuring charts for visualizing price movements and market trends. Anticipating value addition to the crypto community. Appreciate your support.`,
    },
    {
      src: project3,
      title: 'Shoper (Final Assignment in Bootcamp)',
      github: 'https://github.com/Firosmalik000/first-simple-commerce',
      live: 'https://shoper-firos.netlify.app/',
      description: `The concluding eduwork assignment developed with the MERN stack features a simple e-commerce system, including authentication, orders, carts, and invoices. Yet to integrate a payment gateway and deploy the backend.`,
    },
    // Tambahkan proyek lain jika ada
  ];

  const totalSlides = projects.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  return (
    <>
      <div className="relative">
        {projects.map((project, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'block' : 'hidden'}`}>
            <Projects {...project} />
          </div>
        ))}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <BsChevronCompactLeft className="text-white text-3xl cursor-pointer" onClick={prevSlide} />
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <BsChevronCompactRight className="text-white text-3xl cursor-pointer" onClick={nextSlide} />
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <RxDotFilled key={index} className={`text-white text-xl ${index === currentSlide ? 'opacity-100' : 'opacity-50'}`} onClick={() => setCurrentSlide(index)} />
        ))}
      </div>
    </>
  );
};

export default Slider;
