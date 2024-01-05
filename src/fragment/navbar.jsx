import React, { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { CiMenuBurger } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const classNavItem = 'hover:text-slate-200 hover:scale-150 transition duration-300 text-xl font-semibold font-playfair ease-in-out';
  const classNavItemMobile = 'hover:text-slate-200 hover:scale-150 transition duration-300 ease-in-out text-center text-3xl font-semibold text-white';

  return (
    <section className={`fixed px-16 md:px-[90px] w-[100%] items-center ${sticky ? 'bg-gradient-to-r from-[#bc6d38] to-[#e18a4f] shadow-lg' : 'bg-none'} h-[85px] z-[999] flex justify-between transition-all duration-300 z-200`}>
      <div>
        <AnchorLink href="#Home">
          <h1 className="text-white font-playfair font-bold text-3xl">FMA</h1>
        </AnchorLink>
      </div>
      <div className={`md:flex gap-x-4 text-white font-playfair hidden`}>
        <p className={classNavItem}>
          <AnchorLink href="#About">About</AnchorLink>
        </p>
        <p className={classNavItem}>
          <AnchorLink href="#Skills">Skills</AnchorLink>
        </p>
        <p className={classNavItem}>
          <AnchorLink href="#Project">Project</AnchorLink>
        </p>
        <p className={classNavItem}>
          <AnchorLink href="#Contact">Contact</AnchorLink>
        </p>
      </div>
      <div className="md:hidden transition duration-500 cursor-pointer">
        <CiMenuBurger className="text-white text-3xl" onClick={toggleMenu} />
      </div>

      <div className={`fixed w-full h-[500px] bg-gradient-to-b from-[#bc6d38] to-[#f09a61] left-0 top-0 py-16 rounded-b-xl ${showMenu ? '-translate-y-[500px]' : ''} transition duration-300`}>
        <IoMdClose className="text-white text-2xl cursor-pointer transition-all duration-700 absolute top-5 right-5" onClick={toggleMenu} />
        <div className=" flex flex-col gap-y-12">
          <p className={classNavItemMobile} onClick={toggleMenu}>
            <AnchorLink href="#About">About</AnchorLink>
          </p>
          <p className={classNavItemMobile} onClick={toggleMenu}>
            <AnchorLink href="#Skills">Skills</AnchorLink>
          </p>
          <p className={classNavItemMobile} onClick={toggleMenu}>
            <AnchorLink href="#Project">Project</AnchorLink>
          </p>
          <p className={classNavItemMobile} onClick={toggleMenu}>
            <AnchorLink href="#Contact">Contact</AnchorLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
