import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack, IoIosArrowDropupCircle } from 'react-icons/io';

const HomeBottomNavigation = () => {
  return (
    <div className="col-span-4 md:col-span-6 lg:col-span-12 col-start-1  lg:col-span-12 lg:col-end-12 flex justify-between items-center mt-0">
      <Link
        to="/projects"
        className="flex items-center gap-2 mx-[2rem] lg:mx-10 lg:my-20 lg:mb-20 hover:opacity-80 transition-opacity"
      >
        <IoIosArrowRoundBack size={42} color="#493B32" className="my-4" />
        <p className="font-open font-semibold text-xl lg:text-2xl text-[#493B32]">
          Projects
        </p>
      </Link>
      <div>
        <IoIosArrowDropupCircle
          size={40}
          color="#493B32"
          className="mx-[2rem] my-10 mb-10 lg:mx-0 lg:pr-0 lg:my-20 lg:mb-20 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        />
      </div>
    </div>
  );
};

export default HomeBottomNavigation; 