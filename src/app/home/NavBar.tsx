'use client';

import React, { useEffect } from "react";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";

const NavBar: React.FC = () => {
  useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleSetActive = (to: string) => {
    console.log(to);
  };

  return (
    <div className="h-14 w-screen bg-customPurple fixed">
      <div className="text-white uppercase flex items-center justify-between h-full font-semibold mx-80 hover:cursor-pointer">
        <Link
          
          to="pageAbout"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={handleSetActive}
          className="bg-transparent border-none text-black cursor-pointer focus:outline-none p-2"
        >
          About
        </Link>
        <Link
          
          to="pageFeature"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={handleSetActive}
          className="bg-transparent border-none text-black cursor-pointer focus:outline-none p-2"
        >
          Feature
        </Link>
        <Link
          
          to="pageContact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={handleSetActive}
          className="bg-transparent border-none text-black cursor-pointer focus:outline-none p-2"
        >
          Contact
        </Link>
        <Link
          
          to="pageLogin"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={handleSetActive}
          className="bg-transparent border-none text-black cursor-pointer focus:outline-none p-2"
        >
          Login
        </Link>
        
        
      </div>
    </div>
  );
};

export default NavBar;