import React from "react";

const HeroContent = ({ title, subtitle, description, buttonText, onButtonClick }) => {
  return (
    <div className="pt-8 mr-10 md:col-span-7 flex flex-col gap-3 sm:gap-4 md:gap-6 px-2 sm:px-4 lg:pl-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#493B32] xl:text-5xl font-tan leading-tight">
        {title}
        {subtitle && (
          <>
            <span className="block sm:inline">{subtitle.line1}</span>{" "}
            <span className="block sm:inline">{subtitle.line2}</span>{" "}
            <span className="block sm:inline">{subtitle.line3}</span>
          </>
        )}
      </h1>

      <p className="text-[#493B32] leading-relaxed text-base md:text-lg mt-2 sm:mt-4 lg:mt-6 max-w-prose">
        {description}
      </p>
    </div>
  );
};

export default HeroContent; 