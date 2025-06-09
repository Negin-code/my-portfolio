import React from 'react';

const HMWSection = ({ question }) => {
  return (
    <div className="bg-[#493B32] rounded-2xl p-8 sm:p-10 shadow-lg relative overflow-hidden group">
      {/* Large decorative thinking bubble */}
      <div className="absolute -top-6 -right-6 w-24 h-24 text-[#FFF7F2]/10 transform rotate-12 group-hover:scale-110 transition-transform">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.486 2 2 6.486 2 12c0 5.513 4.486 10 10 10s10-4.487 10-10c0-5.514-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
          <path d="M13 7h-2v6h2V7zm0 8h-2v2h2v-2z"/>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[#FFF7F2]/90 text-2xl">💭</span>
          <h2 className="text-xl sm:text-2xl font-tan text-[#FFF7F2]/90">
            How Might We...
          </h2>
        </div>
        
        <p className="text-lg sm:text-xl text-[#FFF7F2] leading-relaxed font-light">
          {question}
        </p>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==')] bg-repeat opacity-5"></div>
    </div>
  );
};

export default HMWSection; 