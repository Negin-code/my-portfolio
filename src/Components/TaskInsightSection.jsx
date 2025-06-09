import React from 'react';
import TaskCard from './TaskCard';

const TaskInsightSection = () => {
  const tasks = [
    {
      number: "01",
      title: "Bookshelf Management",
      steps: ["Create a bookshelf", "Add 2 books to the shelf", "Delete the bookshelf"],
      time: "6 mins",
      quote: "The system is not very clear… I expected to add books directly to the shelf.",
      issue: "Shelf creation required adding a book first",
      result: "Users struggled most with deleting a shelf"
    },
    {
      number: "02",
      title: "Friend Search & Profile",
      steps: ["Search for 'Negin'", "Add friend", "Find their last read book"],
      time: "4–5 mins",
      quote: "Without filters or usernames, it's almost impossible to find a specific friend.",
      issue: "Irrelevant profiles shown, no filters (e.g., mutuals, country)",
      result: "Recently read book section unclear"
    },
    {
      number: "03",
      title: "Locate a Book Discussion",
      steps: ["Try to find a discussion on a book like Harry Potter"],
      time: "2:30 mins",
      quote: "I cannot figure out where to go. This is frustrating.",
      issue: "No discussion search feature",
      result: "Users had to scroll multiple pages and often gave up"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-row items-center gap-2">
        <div className="w-[3vh] sm:w-[3vh] md:w-[4vh] h-[2px] bg-[#493B32]"></div>
        <h2 className="text-2xl sm:text-3xl font-tan text-[#493B32]">
          User Tasks & Insights
        </h2>
      </div>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            number={task.number}
            title={task.title}
            steps={task.steps}
            time={task.time}
            quote={task.quote}
            issue={task.issue}
            result={task.result}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskInsightSection; 