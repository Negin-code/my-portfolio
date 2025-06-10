import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';

const NextStepCard = ({ step, number }) => (
  <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-all group">
    <div className="flex items-start gap-4">
      {/* Step Number */}
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#493B32]/5 flex items-center justify-center group-hover:bg-[#493B32]/10 transition-colors">
        <span className="text-lg font-semibold text-[#493B32]">{number}</span>
      </div>

      {/* Step Content */}
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <BsArrowRightCircle className="text-[#493B32]/40 text-lg group-hover:text-[#493B32] transition-colors" />
          <p className="text-lg text-[#493B32] leading-relaxed">{step}</p>
        </div>
      </div>
    </div>
  </div>
);

const NextStepsSection = () => {
  const steps = [
    "Conduct second-round testing on mobile experience",
    "Explore notifications for discussion replies and new friend activity",
    "Collaborate with developers for handoff & implementation feasibility"
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-row items-center gap-2">
        <div className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"></div>
        <h2 className="text-2xl sm:text-3xl font-tan text-[#493B32]">
          Next Steps
        </h2>
      </div>

      {/* Introduction */}
      <div className="bg-[#493B32]/5 rounded-xl p-6 sm:p-8">
        <p className="text-[#493B32]/80 text-lg">
          Moving forward, we've identified key areas to focus on for continued improvement of the Goodreads experience:
        </p>
      </div>

      {/* Steps Stack */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <NextStepCard
            key={index}
            step={step}
            number={(index + 1).toString().padStart(2, '0')}
          />
        ))}
      </div>
    </div>
  );
};

export default NextStepsSection; 