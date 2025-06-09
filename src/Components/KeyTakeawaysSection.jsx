import React from 'react';
import { BsLightbulb } from 'react-icons/bs';

const TakeawayCard = ({ takeaway }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-all group">
    <div className="flex items-start gap-3">
      <div className="mt-1">
        <BsLightbulb className="text-[#493B32] text-xl group-hover:text-amber-400 transition-colors" />
      </div>
      <p className="text-[#493B32] text-lg leading-relaxed">{takeaway}</p>
    </div>
  </div>
);

const KeyTakeawaysSection = () => {
  const takeaways = [
    "Poor shelf management flow leads to frustration",
    "Lack of filtering and visibility hinders social interaction",
    "Discussions are hidden, reducing community engagement"
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-row items-center gap-2">
        <div className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"></div>
        <h2 className="text-2xl sm:text-3xl font-tan text-[#493B32]">
          Key Takeaways
        </h2>
      </div>

      {/* Introduction */}
      <div className="bg-[#493B32]/5 rounded-xl p-6">
        <p className="text-[#493B32]/80 text-lg">
          Our usability study revealed several critical areas that significantly impact the user experience on Goodreads:
        </p>
      </div>

      {/* Takeaways Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {takeaways.map((takeaway, index) => (
          <TakeawayCard key={index} takeaway={takeaway} />
        ))}
      </div>
    </div>
  );
};

export default KeyTakeawaysSection; 