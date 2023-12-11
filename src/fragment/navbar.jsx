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

  return (
    <section className={`fixed px-[90px] w-full items-center ${sticky ? 'bg-[#bc6d38] shadow-lg' : 'bg-none'} h-[85px] z-[999] flex justify-between transition duration-300 z-200`}>
      <div>
        <AnchorLink href="#Home">
          <h1 className="text-white font-playfair font-bold text-3xl">FMA</h1>
        </AnchorLink>
      </div>
      <div className={`md:flex gap-x-4 text-white font-playfair ${showMenu ? 'hidden' : 'transition-opacity duration-500 opacity-100  bg-[#bc6d38] h-full w-[300px] fixed right-0 top-0 text-center pt-10  text-2xl z-12'}`}>
        <p>
          <AnchorLink href="#Home">Home</AnchorLink>
        </p>
        <p>
          <AnchorLink href="#About">About</AnchorLink>
        </p>
        <p>
          <AnchorLink href="#Skills">Skills</AnchorLink>
        </p>
        <p>
          <AnchorLink href="#Project">Project</AnchorLink>
        </p>
      </div>
      <div className="md:hidden transition duration-500 cursor-pointer">
        {showMenu ? (
          <CiMenuBurger className="text-white text-2xl font-bold z-100 transition duration-700" onClick={toggleMenu} />
        ) : (
          <IoMdClose className="text-white text-2xl cursor-pointer transition duration-700 absolute top-5 right-5" onClick={toggleMenu} />
        )}
      </div>
    </section>
  );
};

export default Navbar;
