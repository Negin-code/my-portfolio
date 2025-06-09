import React from 'react';
import { BiTime } from 'react-icons/bi';

const TaskStep = ({ step }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#493B32]/5 text-[#493B32] text-sm font-medium">
    {step}
  </span>
);

const TaskCard = ({ number, title, steps, time, quote, issue, result }) => {
  return (
    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[#493B32]/10 hover:shadow-md transition-all group">
      {/* Task Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-10 h-10 rounded-lg bg-[#493B32]/5 flex items-center justify-center group-hover:bg-[#493B32]/10 transition-colors">
          <span className="text-lg font-semibold text-[#493B32]">{number}</span>
        </div>
        <h3 className="text-xl font-medium text-[#493B32]">{title}</h3>
      </div>

      {/* Task Steps */}
      <div className="flex flex-wrap gap-2 mb-6">
        {steps.map((step, index) => (
          <TaskStep key={index} step={step} />
        ))}
      </div>

      {/* Time */}
      <div className="flex items-center gap-2 mb-4">
        <BiTime className="text-xl text-[#493B32]" />
        <p className="text-[#493B32]/80">
          <span className="font-medium">Avg Time:</span> {time}
        </p>
      </div>

      {/* Quote */}
      <div className="bg-[#493B32]/5 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-2">
          <span className="text-lg">💬</span>
          <p className="text-[#493B32]/80 italic">"{quote}"</p>
        </div>
      </div>

      {/* Issues and Results */}
      <div className="space-y-4 border-t border-[#493B32]/10 pt-4">
        <div className="bg-red-50/50 rounded-lg p-4">
          <h4 className="text-sm font-medium text-[#493B32] uppercase tracking-wider mb-2 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
            Issue
          </h4>
          <p className="text-[#493B32]/80">{issue}</p>
        </div>
        <div className="bg-amber-50/50 rounded-lg p-4">
          <h4 className="text-sm font-medium text-[#493B32] uppercase tracking-wider mb-2 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
            Result
          </h4>
          <p className="text-[#493B32]/80">{result}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard; 