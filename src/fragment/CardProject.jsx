import { FaGithub } from 'react-icons/fa';
import { BiShow } from 'react-icons/bi';
const CardProject = ({ title, image, github, live }) => {
  const iconClass = 'text-black text-6xl hover:text-slate-200 transition  duration-300 ease-in-out border-2 border-slate-500 rounded-[20px] p-2';
  return (
    <div className="w-[400px] h-[250px]  md:h-[330px] relative border border-white group py-5 px-2 rounded-[20px]">
      <img src={image} alt="" className=" mx-auto mb-2  " />
      <p className="text-center text-white font-semibold absolute bottom-5 left-1/2 -translate-x-1/2">{title}</p>
      <div className="absolute flex flex-col gap-y-3 rounded-[20px] p-2 top-8 transform -translate-x-2 bg-white  opacity-0 group-hover:opacity-100 group-hover:-translate-x-10 transition duration-300 ease-in-out right-0">
        <a href={github}>
          <FaGithub className={iconClass} />
        </a>
        <a href={live}>
          <BiShow className={iconClass} />
        </a>
      </div>
    </div>
  );
};

export default CardProject;
