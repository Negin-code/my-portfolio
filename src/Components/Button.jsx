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
  
  const getVariantStyles = (variant) => {
    switch (variant) {
      case 'primary':
        return {
          background: 'linear-gradient(to right, #F75590, #493B32)',
          color: 'white',
          className: 'hover:opacity-90 hover:shadow-lg'
        };
      case 'secondary':
        return {
          background: 'linear-gradient(to right, #493B32, #F75590)',
          color: 'white',
          className: 'hover:opacity-90 hover:shadow-lg'
        };
      case 'outline':
        return {
          background: 'transparent',
          color: '#493B32',
          className: 'border-2 border-[#493B32] hover:bg-[#493B32]/5 active:bg-[#493B32]/5'
        };
      default:
        return {
          background: 'linear-gradient(to right, #F75590, #493B32)',
          color: 'white',
          className: 'hover:opacity-90 hover:shadow-lg'
        };
    }
  };

  const variantStyles = getVariantStyles(variant);
  const combinedClassName = `${baseStyles} ${variantStyles.className} ${className}`;

  const ButtonComponent = href ? 'a' : 'button';
  const linkProps = href ? {
    href,
    target: href.startsWith('http') || href.includes('pdf') ? '_blank' : undefined,
    rel: href.startsWith('http') || href.includes('pdf') ? 'noopener noreferrer' : undefined
  } : {};

  return (
    <ButtonComponent
      {...linkProps}
      onClick={onClick}
      className={combinedClassName}
      style={{
        background: variantStyles.background,
        color: variantStyles.color
      }}
      {...props}
    >
      <span>{children}</span>
      {showArrow && (
        <svg
          className={`w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      )}
    </ButtonComponent>
  );
};

export default Button; 