import React from 'react';
import UIComparisonSection from './UIComparisonSection';
import DiscussionUISection from './DiscussionUISection';
import FriendDiscoverySection from './FriendDiscoverySection';

const SolutionsSection = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-row items-center gap-2">
        <div className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"></div>
        <h2 className="text-2xl sm:text-3xl font-tan text-[#493B32]">
          Solutions
        </h2>
      </div>

      {/* Solutions Container */}
      <div className="grid grid-cols-1 gap-16">
        {/* First Solution */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-[#493B32]/10">
          <UIComparisonSection />
        </div>

        {/* Second Solution */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-[#493B32]/10">
          <DiscussionUISection />
        </div>

        {/* Third Solution */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-[#493B32]/10">
          <FriendDiscoverySection />
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection; 