import React from "react";

const Value = ({ title, description }) => {
  return (
    <div className="pl-6 sm:pl-8 border-l-2 border-[#5e3f27]/20 hover:border-[#493b32]/40 transition-colors duration-200">
      <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#1a1a1a] mb-1">
        {title}
      </h3>
      <p className="text-[#666] text-xs xs:text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Value; 