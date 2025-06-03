import React from "react";
import { FiPlus } from "react-icons/fi";

const AccordionSection = ({ title, isExpanded, onToggle, children }) => {
  return (
    <div className="mr-15 ml-20 lg:mr-0 lg:ml-0 bg-[#FFF7F2] backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden p-4 xs:p-5 sm:p-6 md:p-8">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full text-left p-1 xs:p-5 sm:p-6 md:p-8 group"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-[0.2rem] sm:w-1 h-6 sm:h-8 bg-[#493b32] rounded-full"></div>
          <h2 className="font-tan text-lg xs:text-lg sm:text-xl font-bold text-[#1a1a1a] group-hover:text-[#493b32] transition-colors duration-200">
            {title}
          </h2>
        </div>
        <div className={`p-1.5 sm:p-2 rounded-full bg-[#5e3f27] group-hover:bg-[#493b32] group-hover:text-white transition-all duration-300 ${isExpanded ? 'rotate-45' : ''}`}>
          <FiPlus size={20} className="w-4 h-4 sm:w-6 sm:h-6 transition-transform duration-300" />
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pt-6 px-4 pb-4 xs:px-5 xs:pb-5 sm:px-6 sm:pb-6 md:px-8 md:pb-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionSection; 