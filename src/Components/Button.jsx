import React from 'react';

const Button = ({ 
  href, 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  showArrow = true,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 group";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#F75590] to-[#493B32] text-white hover:opacity-90 hover:shadow-lg",
    secondary: "bg-gradient-to-r from-[#493B32] to-[#F75590] text-white hover:opacity-90 hover:shadow-lg",
    outline: "border-2 border-[#493B32] text-[#493B32] hover:bg-[#493B32] hover:text-white hover:shadow-lg"
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;
  const shouldShowArrow = showArrow && variant !== 'outline';

  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
        {shouldShowArrow && (
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
        )}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses} {...props}>
      {children}
      {shouldShowArrow && (
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
      )}
    </button>
  );
};

export default Button; 