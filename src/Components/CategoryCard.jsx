import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ 
  icon: Icon, 
  iconSize = 48,
  title, 
  description, 
  buttonText, 
  buttonHref = "#projects",
  gradientFrom = "#F75590",
  gradientTo = "#493B32"
}) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden backdrop-blur-md bg-white/60 border border-white/50 hover:bg-white/80 transition-all duration-300 shadow-lg hover:shadow-2xl">
      {/* Icon Container */}
      <div className="relative p-8 md:p-10 flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div 
            className="absolute inset-0 rounded-full blur-xl"
            style={{
              background: `linear-gradient(to right, ${gradientFrom}33, ${gradientTo}33)`
            }}
          ></div>
          <div 
            className="relative p-6 rounded-full"
            style={{
              background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`
            }}
          >
            <Icon size={iconSize} className="text-white" />
          </div>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-tan text-[#493B32] mb-4">
          {title}
        </h3>
        
        <p className="text-base md:text-lg text-[#493B32]/80 mb-6 leading-relaxed">
          {description}
        </p>
        
        <Link 
          to={buttonHref}
          className="inline-flex items-center px-6 py-3 text-white rounded-full font-medium transition-all duration-300 hover:opacity-90 hover:shadow-lg group"
          style={{
            background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`
          }}
        >
          {buttonText}
          <svg
            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl"
          style={{
            background: `linear-gradient(to top right, ${gradientFrom}10, transparent)`
          }}
        ></div>
        <div 
          className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-2xl"
          style={{
            background: `linear-gradient(to bottom right, ${gradientTo}10, transparent)`
          }}
        ></div>
      </div>
    </div>
  );
};

export default CategoryCard; 