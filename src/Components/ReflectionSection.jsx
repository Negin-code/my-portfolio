import React from 'react';
import { BsStars } from 'react-icons/bs';

const ReflectionCard = ({ title, description }) => (
  <div className="relative bg-gradient-to-br from-white to-[#493B32]/5 rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-all group overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-[#493B32]/5 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 group-hover:opacity-75 transition-opacity"></div>
    
    <div className="relative">
      {/* Title with icon */}
      <div className="flex items-center gap-3 mb-4">
        <BsStars className="text-[#493B32] text-xl group-hover:text-amber-400 transition-colors" />
        <h3 className="text-xl font-medium text-[#493B32] font-tan">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-[#493B32]/80 text-lg leading-relaxed pl-9">{description}</p>
    </div>
  </div>
);

const ReflectionSection = () => {
  const reflections = [
    {
      title: "User-Centric Design",
      description: "Streamlining flows reduced friction and abandonment"
    },
    {
      title: "Social Integration",
      description: "Social features should never feel like an afterthought"
    },
    {
      title: "Validation Process",
      description: "Prototyping and testing with real users was essential to validating our redesign decisions"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-row items-center gap-2">
        <div className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"></div>
        <h2 className="text-2xl sm:text-3xl font-tan text-[#493B32]">
          Reflections
        </h2>
      </div>

      {/* Introduction */}
      <div className="bg-[#493B32]/5 rounded-xl p-6 sm:p-8">
        <p className="text-[#493B32]/80 text-lg">
          Through this usability study, we gained valuable insights that shaped our understanding of effective UX design:
        </p>
      </div>

      {/* Reflections Stack */}
      <div className="space-y-6">
        {reflections.map((reflection, index) => (
          <ReflectionCard
            key={index}
            title={reflection.title}
            description={reflection.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ReflectionSection; 