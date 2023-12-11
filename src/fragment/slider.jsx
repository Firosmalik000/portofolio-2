import React from 'react';
import project1 from '../assets/project.png';

const Slider = () => {
  return (
    <section className=" md:flex flex-col-1   md:w-full mx-auto p-11 gap-4 rounded-xl   bg-[#bc6d38] relative">
      <div className="md:mb-0 mb-6">
        <img src={project1} alt="" className="w-[500px] flex-2" />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl text-white font-bold mb-2 text-center md:text-left ">PT Syahma Berkah Suksess</h1>
        <p className="indent-8 text-white text-justify">
          Adalah salah satu perusahaan rintisan yang bergerak di bidang export briket, dan masih dalam tahap pengembbangan dalam bentuk prototype, karna terkendala waktu untuk komunikasi lebih lanjut. Ini merupakan project pertama saya
          untuk ditawarkan secara umum. Karna perusahaan ini milik teman saya sendiri jadi saya menawarkan membuat company profile untuk langkah awal karier saya di bidang Front End Web Developer.
        </p>

        <div className="flex gap-4 mt-4 md:justify-start justify-center">
          <a href="https://github.com/Firosmalik000/PT-Syahma-Suksess-Berkah">
            <button className="btn py-3 w-[100px] text-white bg-[#2F7BAD] rounded-lg hover:bg-blue-800 transition duration-300 easy-in-out ">Github</button>{' '}
          </a>
          <a href="https://syahma-suksess-berkah.netlify.app/">
            <button className="btn py-3 w-[100px] text-white bg-[#2F7BAD] rounded-lg hover:bg-blue-800  transition duration-300 easy-in-out">Live</button>
          </a>
        </div>
      </div>
      {/* <div className="absolute p-2 bg-white rounded-full top-[200px] left-[-4px] "> a </div>
      <div className="absolute p-2 bg-white rounded-full top-[200px] right-[-4px] "> a </div> */}
    </section>
  );
};

export default Slider;
