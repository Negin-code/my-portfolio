import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ChromaGridCard = ({ 
  image, 
  imageAlt, 
  category, 
  title, 
  description, 
  technologies, 
  projectLink,
  index = 0,
  gradientFrom,
  gradientTo
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={projectLink}
      className="block group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main card */}
      <div className={`
        relative h-full bg-white rounded-xl overflow-hidden transition-all duration-300
        border border-[#493B32]/10 hover:shadow-md
      `}>
        {/* Image container */}
        <div className="relative h-56 sm:h-64 md:h-72 lg:h-64 overflow-hidden bg-[#FFF7F2]">
          <img
            src={image}
            alt={imageAlt}
            className={`w-full h-full object-cover object-center transition-all duration-300 hover:opacity-95 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
          
          {/* Subtle gradient overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category badge */}
          <span className="inline-block text-xs font-medium text-[#493B32]/60 mb-2">
            {category}
          </span>
          
          {/* Title */}
          <h3 className="text-xl font-medium text-[#493B32] mb-2 group-hover:text-[#F75590] transition-colors">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-[#493B32]/70 leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-2 py-1 text-xs rounded-lg bg-[#493B32]/5 text-[#493B32]/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChromaGridCard; 