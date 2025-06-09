import React from 'react';

const StudyMethod = ({ method }) => (
  <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#493B32]/10 hover:shadow-sm transition-shadow">
    <div className="w-2 h-2 rounded-full bg-[#493B32]"></div>
    <p className="text-[#493B32] text-base sm:text-lg">{method}</p>
  </div>
);

const ParticipantCard = ({ label, value }) => (
  <div className="bg-[#493B32]/5 rounded-lg p-4 hover:bg-[#493B32]/10 transition-colors">
    <h4 className="text-sm text-[#493B32]/70 mb-1">{label}</h4>
    <p className="text-base sm:text-lg font-medium text-[#493B32]">{value}</p>
  </div>
);

const UserStudySection = () => {
  const methods = [
    "Task-based testing (6 total tasks, 4 participants)",
    "Observations and think-aloud protocol",
    "SUS survey for scoring usability"
  ];

  const participants = [
    { label: "Ages", value: "21–42" },
    { label: "Tech Proficiency", value: "Moderate" },
    { label: "Familiarity with Goodreads", value: "0–Moderate" },
    { label: "Roles", value: "Medical student, design student, accountant, supervisor" }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-row items-center gap-2">
        <div className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"></div>
        <h2 className="text-2xl sm:text-3xl font-tan text-[#493B32]">
          User Study
        </h2>
      </div>

      {/* Methodology Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-medium text-[#493B32]">Methodology</h3>
        <div className="space-y-3">
          {methods.map((method, index) => (
            <StudyMethod key={index} method={method} />
          ))}
        </div>
      </div>

      {/* Participants Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-medium text-[#493B32]">Participants</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {participants.map((participant, index) => (
            <ParticipantCard
              key={index}
              label={participant.label}
              value={participant.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserStudySection; 