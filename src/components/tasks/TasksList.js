import React from "react";
import { LuTrash } from "react-icons/lu";
import { HiPencilSquare } from "react-icons/hi2";

const TasksList = ({ tasks, toggleTaskComplete, onDelete }) => {
  return (
    <div className="w-full">
      <ul>
        {tasks.map((task) => {
          return (
            <div
              key={task.id}
              className="border-2 my-5 py-3 px-2 rounded-lg text-lg flex justify-between bg-rango-task text-rango-home-text"
            >
              <div className="flex items-center gap-5">
                <button
                  onClick={() => toggleTaskComplete(task.id)}
                  className={
                    task.isCompleted
                      ? "rounded-full bg-green-500 w-8 h-8"
                      : "rounded-full border-2 w-8 h-8 border-red-700"
                  }
                ></button>
                <p className={task.isCompleted ? "line-through" : ""}>
                  {task.task}
                </p>
              </div>
              <div className="flex items-center">
                <HiPencilSquare
                  fontSize={28}
                  className="hover:cursor-pointer"
                />
                <LuTrash
                  fontSize={28}
                  className="hover:cursor-pointer"
                  onClick={() => onDelete(task.id)}
                />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TasksList;
