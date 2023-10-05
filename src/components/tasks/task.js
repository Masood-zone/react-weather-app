import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddTasks from "./AddTasks";
import TaskTracker from "./TaskTracker";
import TasksList from "./TasksList";

const Task = () => {
  const [task, setTask] = useState("");

  const [tasksList, setTasksList] = useState([
    { id: 1, task: "Task 1", isCompleted: false },
    { id: 2, task: "Task 2", isCompleted: false },
    { id: 3, task: "Task 3", isCompleted: true },
  ]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };
  const onAddTask = (e) => {
    e.preventDefault();
    // Append to Taskslist
    setTasksList((prevTask) => {
      return [
        ...prevTask,
        {
          id: Math.floor(Math.random() * 10000),
          task: task,
          isCompleted: false,
        },
      ];
    });
    // console.log(tasksList);
    setTask("");
  };
  const handleToggleTaskComplete = (id) => {
    setTasksList(
      tasksList.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };
  const handleDelete = (id) => {
    const oldTasks = tasksList.filter((taskId) => taskId.id !== id);
    setTasksList(oldTasks);
  };
  return (
    <div className="w-[500px] mx-auto my-4 flex items-center flex-col justify-center p-4 bg-rango-luxury text-rango-home-text rounded-lg">
      <TaskTracker tasksList={tasksList} />
      <AddTasks value={task} onChange={handleTaskChange} addTask={onAddTask} />
      <TasksList
        tasks={tasksList}
        toggleTaskComplete={handleToggleTaskComplete}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Task;
