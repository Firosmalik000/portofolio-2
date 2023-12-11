import React from 'react';
import { FaReact } from 'react-icons/fa';

const CardSkills = ({ icon, title }) => {
  return (
    <section className="w-[200px] shadow-lg  h-[80px] bg-white rounded-lg my-5 flex border  ">
      <>
        <div className="w-[60px] h-[60px] border border-slate-700 rounded-full m-2 p-2  items-center flex justify-center  ">{icon}</div>
        <div className="items-center flex ml-3 w-full">{title}</div>
      </>
    </section>
  );
};

export default CardSkills;
