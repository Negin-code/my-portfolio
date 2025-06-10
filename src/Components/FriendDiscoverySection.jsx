import React from 'react';
import { BsArrowRight, BsArrowDown } from 'react-icons/bs';
import { FaSearch, FaUser, FaUsers, FaFilter } from 'react-icons/fa';
import { MdVerified, MdLocationOn, MdSort } from 'react-icons/md';
import MagnifiableImage from './MagnifiableImage';

// Import images - you'll need to add these to your assets
import beforeImage from '../assets/before1.png'; // Temporarily using existing image
import afterImage from '../assets/after1.png'; // Temporarily using existing image

const FlowStep = ({ icon: Icon, text, iconColor, bgColor }) => (
  <div className="flex flex-col items-center gap-1 text-center">
    <div 
      className="w-6 h-6 rounded-lg flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <Icon className="w-3 h-3" style={{ color: iconColor }} />
    </div>
    <span className="text-xs text-[#493B32]/80 max-w-[80px] font-medium">{text}</span>
  </div>
);

const UserFlow = ({ steps }) => (
  <div className="flex items-center justify-center gap-2 py-3">
    {steps.map((step, index) => (
      <React.Fragment key={index}>
        <FlowStep 
          icon={step.icon} 
          text={step.text} 
          iconColor={step.iconColor} 
          bgColor={step.bgColor}
        />
        {index < steps.length - 1 && (
          <BsArrowRight className="text-[#493B32]/40 w-4 h-4 flex-shrink-0" />
        )}
      </React.Fragment>
    ))}
  </div>
);

const ComparisonPoint = ({ before, after }) => (
  <div className="grid grid-cols-2 gap-4 text-sm">
    <div className="text-red-500">✖ {before}</div>
    <div className="text-emerald-600">✓ {after}</div>
  </div>
);

const BranchingUserFlow = ({ steps }) => {
  const mainPath = steps.filter(step => !step.isAlternative && !step.isOptional);
  const alternativePath = steps.filter(step => step.isAlternative);
  const optionalSteps = steps.filter(step => step.isOptional);

  return (
    <div className="space-y-4 py-3">
      {/* Main Path */}
      <div className="flex items-center justify-center gap-2">
        {mainPath.map((step, index) => (
          <React.Fragment key={index}>
            <FlowStep 
              icon={step.icon} 
              text={step.text} 
              iconColor={step.iconColor} 
              bgColor={step.bgColor}
            />
            {index < mainPath.length - 1 && (
              <BsArrowRight className="text-[#493B32]/40 w-4 h-4 flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* OR text */}
      <div className="flex justify-center">
        <span className="text-xs text-[#493B32]/60 font-medium">OR</span>
      </div>
      
      {/* Alternative Path */}
      <div className="flex items-center justify-center gap-2">
        {alternativePath.map((step, index) => (
          <React.Fragment key={index}>
            <FlowStep 
              icon={step.icon} 
              text={step.text} 
              iconColor={step.iconColor} 
              bgColor={step.bgColor}
            />
            {index < alternativePath.length - 1 && (
              <BsArrowRight className="text-[#493B32]/40 w-4 h-4 flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Optional Steps */}
      {optionalSteps.length > 0 && (
        <div className="flex flex-col items-center pt-2">
          <BsArrowDown className="text-[#493B32]/40 w-4 h-4 mb-2" />
          <div className="flex items-center gap-2">
            {optionalSteps.map((step, index) => (
              <React.Fragment key={index}>
                <FlowStep 
                  icon={step.icon} 
                  text={step.text} 
                  iconColor={step.iconColor} 
                  bgColor={step.bgColor}
                />
                {index < optionalSteps.length - 1 && (
                  <BsArrowRight className="text-[#493B32]/40 w-4 h-4 flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const FriendDiscoverySection = () => {
  const beforeSteps = [
    { 
      icon: FaSearch, 
      text: "Search Name",
      iconColor: "#493B32",
      bgColor: "rgba(73, 59, 50, 0.1)"
    },
    { 
      icon: FaUsers, 
      text: "Multiple Duplicates",
      iconColor: "#9B6A4A",
      bgColor: "rgba(155, 106, 74, 0.1)"
    },
    { 
      icon: FaSearch, 
      text: "Try Again",
      iconColor: "#E2B091",
      bgColor: "rgba(226, 176, 145, 0.1)"
    }
  ];

  const afterSteps = [
    { 
      icon: FaSearch, 
      text: "Direct Search",
      iconColor: "#493B32",
      bgColor: "rgba(73, 59, 50, 0.1)"
    },
    { 
      icon: MdVerified, 
      text: "Find Friend",
      iconColor: "#E2B091",
      bgColor: "rgba(226, 176, 145, 0.1)"
    },
    { 
      icon: FaSearch, 
      text: "People Tab",
      iconColor: "#493B32",
      bgColor: "rgba(73, 59, 50, 0.1)",
      isAlternative: true
    },
    { 
      icon: MdVerified, 
      text: "Find Friend",
      iconColor: "#E2B091",
      bgColor: "rgba(226, 176, 145, 0.1)",
      isAlternative: true
    },
    { 
      icon: MdLocationOn, 
      text: "Location Filter",
      iconColor: "#9B6A4A",
      bgColor: "rgba(155, 106, 74, 0.1)",
      isOptional: true
    },
    { 
      icon: MdSort, 
      text: "Activity Sort",
      iconColor: "#BE8C63",
      bgColor: "rgba(190, 140, 99, 0.1)",
      isOptional: true
    }
  ];

  return (
    <div className="space-y-8">
      {/* Solution Title */}
      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#493B32]">
          Verified Profile Discovery
        </h3>
      </div>

      {/* UI Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Before Panel */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#493B32]/10">
          <h3 className="text-xl font-semibold text-[#493B32] mb-4">Before</h3>
          
          {/* Before Image with Magnification */}
          <MagnifiableImage
            src={beforeImage}
            alt="Original Goodreads friend discovery interface"
            caption="Confusing search with duplicate usernames and inactive profiles"
          />
          
          <div className="mt-4 bg-[#493B32]/5 rounded-lg p-3">
            <p className="text-xs text-[#493B32]/80 mb-2 font-medium">Original Search Flow:</p>
            <UserFlow steps={beforeSteps} />
          </div>
        </div>

        {/* After Panel */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#493B32]/10">
          <h3 className="text-xl font-semibold text-[#493B32] mb-4">After</h3>
          
          {/* After Image with Magnification */}
          <MagnifiableImage
            src={afterImage}
            alt="Redesigned Goodreads friend discovery interface"
            caption="Clear profile discovery with unique usernames and smart filters"
          />
          
          <div className="mt-4 bg-[#493B32]/5 rounded-lg p-3">
            <p className="text-xs text-[#493B32]/80 mb-2 font-medium">Improved Search Flow:</p>
            <BranchingUserFlow steps={afterSteps} />
          </div>
        </div>
      </div>

      {/* Key Improvements Callout */}
      <div className="bg-[#493B32]/5 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-[#493B32] mb-3">Key Improvements</h4>
        <div className="space-y-4">
          <ComparisonPoint 
            before="Duplicate usernames causing confusion"
            after="Unique username system with real-time validation"
          />
          <ComparisonPoint 
            before="No filtering options for search results"
            after="Smart filters for location and reading activity"
          />
          <ComparisonPoint 
            before="Mixed results with inactive profiles"
            after="Profile cards with activity indicators and follower count"
          />
          <ComparisonPoint 
            before="Hidden People tab with limited functionality"
            after="Dedicated People tab with advanced search features"
          />
          
          <div className="mt-6 pt-4 border-t border-[#493B32]/10">
            <p className="text-sm font-medium text-[#493B32]">🎯 Flow Improvement:</p>
            <p className="text-sm text-[#493B32]/80 mt-1">
              Scattered → Filtered → Verified
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDiscoverySection; 