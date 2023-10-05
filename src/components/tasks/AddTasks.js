import React from "react";

const AddTasks = ({ addTask, onChange, value }) => {
  return (
    <form className="flex items-center gap-5 my-3" onSubmit={addTask}>
      <input
        name="task"
        id="task"
        className="rounded-lg px-3 py-4 text-rango-home-text bg-rango-input w-80"
        value={value}
        onChange={onChange}
        placeholder="write your next task"
      />
      <button
        className="font-extrabold bg-rango-orange text-black btn btn-circle outline-none text-lg hover:bg-white text-center"
        type="submit"
      >
        +
      </button>
    </form>
  );
};

export default AddTasks;
