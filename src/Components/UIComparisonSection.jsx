import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaBook, FaKeyboard, FaCheck } from 'react-icons/fa';
import { MdAdd, MdInput } from 'react-icons/md';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import MagnifiableImage from './MagnifiableImage';

// Import images with correct filenames
import beforeImage from '../assets/before1.png';
import afterImage from '../assets/after1.png';

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
  <div className="flex items-center justify-between w-full gap-2 py-3">
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

const UIComparisonSection = () => {
  const beforeSteps = [
    { 
      icon: FaBook, 
      text: "My Books",
      iconColor: "#493B32",
      bgColor: "rgba(73, 59, 50, 0.1)"
    },
    { 
      icon: MdInput, 
      text: "Find Input",
      iconColor: "#9B6A4A",
      bgColor: "rgba(155, 106, 74, 0.1)"
    },
    { 
      icon: FaKeyboard, 
      text: "Type Name",
      iconColor: "#BE8C63",
      bgColor: "rgba(190, 140, 99, 0.1)"
    },
    { 
      icon: FaCheck, 
      text: "No Feedback",
      iconColor: "#E2B091",
      bgColor: "rgba(226, 176, 145, 0.1)"
    }
  ];

  const afterSteps = [
    { 
      icon: FaBook, 
      text: "My Books",
      iconColor: "#493B32",
      bgColor: "rgba(73, 59, 50, 0.1)"
    },
    { 
      icon: MdAdd, 
      text: "Create Shelf",
      iconColor: "#9B6A4A",
      bgColor: "rgba(155, 106, 74, 0.1)"
    },
    { 
      icon: FaKeyboard, 
      text: "Fill Details",
      iconColor: "#BE8C63",
      bgColor: "rgba(190, 140, 99, 0.1)"
    },
    { 
      icon: IoMdCheckmarkCircle, 
      text: "Success ✓",
      iconColor: "#E2B091",
      bgColor: "rgba(226, 176, 145, 0.1)"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Solution Title */}
      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#493B32]">
          Streamlined Shelf Creation
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
            alt="Original Goodreads shelf creation interface"
            caption="Original interface with hidden input field and no guidance"
          />
          
          <div className="mt-4 bg-[#493B32]/5 rounded-lg p-3">
            <p className="text-xs text-[#493B32]/80 mb-2 font-medium">Original User Flow:</p>
            <UserFlow steps={beforeSteps} />
          </div>
        </div>

        {/* After Panel */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#493B32]/10">
          <h3 className="text-xl font-semibold text-[#493B32] mb-4">After</h3>
          
          {/* After Image with Magnification */}
          <MagnifiableImage
            src={afterImage}
            alt="Redesigned Goodreads shelf creation interface"
            caption="Redesigned interface with clear modal and guided process"
          />
          
          <div className="mt-4 bg-[#493B32]/5 rounded-lg p-3">
            <p className="text-xs text-[#493B32]/80 mb-2 font-medium">Improved User Flow:</p>
            <UserFlow steps={afterSteps} />
          </div>
        </div>
      </div>

      {/* Key Improvements Callout */}
      <div className="bg-[#493B32]/5 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-[#493B32] mb-3">Key Improvements</h4>
        <div className="space-y-4">
          <ComparisonPoint 
            before="Hidden input field with no clear entry point"
            after="Prominent '+ Create Shelf' button in main navigation"
          />
          <ComparisonPoint 
            before="No guidance or validation during creation"
            after="Modal with clear form fields and validation"
          />
          <ComparisonPoint 
            before="No feedback on successful creation"
            after="Visual confirmation and success notification"
          />
          <ComparisonPoint 
            before="Inconsistent visibility settings"
            after="Clear privacy options with visual indicators"
          />
          
          <div className="mt-6 pt-4 border-t border-[#493B32]/10">
            <p className="text-sm font-medium text-[#493B32]">🎯 Flow Improvement:</p>
            <p className="text-sm text-[#493B32]/80 mt-1">
              Hidden → Guided → Confirmed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIComparisonSection; 