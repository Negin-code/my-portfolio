import React from 'react';
import { Link } from 'react-router-dom';

const StyledButton = ({ to, variant = 'primary', children, className = '', ...props }) => {
  let baseClasses = 'py-2 px-4 font-semibold rounded-sm text-center transition duration-300';
  let variantClasses = '';

  
  if (variant === 'primary') {
    variantClasses = ' bg-[#5E3F27] hover:bg-[#493B32] text-[#FFF7F2]';
  }
  // Add other variants here, e.g., 'secondary', 'outline', etc.

  // Combine base, variant, and any additional classes passed in props
  const allClasses = `${baseClasses}${variantClasses} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={allClasses} {...props}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={allClasses} {...props}>
        {children}
      </button>
    );
  }
};

export default StyledButton; 