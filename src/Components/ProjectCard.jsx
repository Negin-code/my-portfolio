import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ 
  image, 
  imageAlt, 
  category, 
  title, 
  description, 
  technologies, 
  projectLink,
  imageOnLeft = true,
  accentColor = '#5E3F27',
  index = 0
}) => {
  // Calculate dynamic gradient colors based on index
  const gradientColors = [
    { from: '#F75590', to: '#493B32' },
    { from: '#493B32', to: '#F75590' },
    { from: '#F75590', to: '#5E3F27' },
    { from: '#5E3F27', to: '#F75590' }
  ];
  
  const gradient = gradientColors[index % gradientColors.length];

  return (
    <div className="relative mb-20">
      
      {/* Main card container */}
      <div className={`relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start min-h-[800px]`}>
        
        {/* Image Section */}
        <div className={`
          col-span-1 lg:col-span-6
          ${imageOnLeft ? 'lg:col-start-1' : 'lg:col-start-7'}
          group relative overflow-hidden rounded-2xl h-[800px]
          ${!imageOnLeft ? 'lg:order-2' : ''}
        `}>
          {/* Glass overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-[2px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Image */}
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-[800px] aspect-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#493B32]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
        </div>

        {/* Content Section */}
        <div className={`
          col-span-1 lg:col-span-5
          ${imageOnLeft ? 'lg:col-start-8' : 'lg:col-start-1'}
          relative h-full
          ${!imageOnLeft ? 'lg:order-1' : ''}
          flex flex-col justify-center
        `}>
          {/* Glass card */}
          <div className="relative backdrop-blur-md bg-white/80 dark:bg-gray-900/80 rounded-2xl p-6 md:p-8 border border-white/50 shadow-2xl">
            {/* Category badge */}
            <span 
              className="inline-block text-sm font-medium rounded-full px-4 py-1.5 mb-4"
              style={{
                background: `linear-gradient(135deg, ${gradient.from}33, ${gradient.to}33)`,
                border: `1px solid ${gradient.from}66`,
                color: accentColor
              }}
            >
              {category}
            </span>
            
            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-tan text-[#493B32] dark:text-white mb-4">
              {title}
            </h3>
            
            {/* Decorative line */}
            <div 
              className="w-16 h-1 rounded-full mb-6"
              style={{
                background: `linear-gradient(90deg, ${gradient.from}, ${gradient.to})`
              }}
            />
            
            {/* Description */}
            <p className="text-[#493B32]/80 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              {description}
            </p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {technologies.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1.5 text-sm rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-[#493B32]/20 dark:border-gray-600/20 text-[#493B32] dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* View Project Button */}
            <Link
              to={projectLink}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white transition-all duration-300 hover:gap-3 hover:shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`
              }}
            >
              View Project
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>

            {/* Decorative elements */}
            <div 
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20"
              style={{
                background: gradient.from
              }}
            />
            <div 
              className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-3xl opacity-20"
              style={{
                background: gradient.to
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
