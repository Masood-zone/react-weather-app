import React from "react";

const TaskTracker = ({ tasksList }) => {
  const completedTasks = tasksList.filter((task) => task.isCompleted).length;
  return (
    <div className=" w-80 flex items-center gap-5 card-bordered rounded-3xl text-rango-home-text p-5 justify-around border-2">
      <div className="flex items-start flex-col">
        <h1 className="text-2xl font-bold">Todo Done</h1>
        <p>keep it up</p>
      </div>
      <div className="rounded-full bg-rango-orange w-24 h-24 text-center">
        <h1 className="py-7 text-[#000] font-bold text-3xl">
          {completedTasks}/{tasksList.reduce((total) => total + 1, 0)}
        </h1>
      </div>
    </div>
  );
};

export default TaskTracker;
