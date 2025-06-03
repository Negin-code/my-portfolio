import React from 'react';

const GlassIcon = ({ icon: Icon, name, color }) => {
  return (
    <div className="group">
      <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-[30px] bg-white/20 backdrop-blur-md shadow-lg hover:bg-white/30 transition-all duration-300 cursor-pointer">
        <div className="absolute inset-0 rounded-[30px] ring-1 ring-white/30"></div>
        <Icon style={{ color }} className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <p style={{ color }} className="mt-3 text-sm text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {name}
      </p>
    </div>
  );
};

export default GlassIcon; 