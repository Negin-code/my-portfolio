import React from 'react';

const ProjectHero = ({ title, image, imageAlt }) => {
  return (
    <>
      {/* Project Title */}
      <div className="flex flex-row items-start justify-start gap-1 mb-8 pl-0">
        <div className="w-[4vh] sm:w-[4vh] md:w-[5vh] h-[3px] bg-gradient-to-r from-[#493B32] to-[#F75590] mt-6"></div>
        <h1 id="top" className="text-2xl sm:text-5xl leading-relaxed font-tan text-[#493B32]">
          {title}
        </h1>
      </div>

      {/* Hero Image - Full Width */}
      <div className="w-full mb-16">
        <div className="relative w-full overflow-hidden bg-[#FFF7F2] max-h-[600px]">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-[600px] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectHero; 