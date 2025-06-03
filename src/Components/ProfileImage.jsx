import React from "react";

const ProfileImage = ({ imageSrc, altText = "Profile" }) => {
  return (
    <div className="col-span-full lg:col-span-5 flex justify-center mr-15 lg:mr-0 mt-20 mb-6 sm:mb-8 md:mt-20 lg:mt-0 lg:mb-0">
      <div className="w-[200px] h-[200px] xs:w-[180px] xs:h-[180px]  sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] relative bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProfileImage; 