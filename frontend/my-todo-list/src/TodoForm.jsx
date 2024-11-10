import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState(""); // Keeps track of the task the user enters.

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior.
    if (task) {
      addTodo(task); // Calls the addTodo function passed from the parent to add the task.
      setTask(""); // Clears the input field after submitting.
    }
  };

  return (
    <form className="flex mb-5 gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} // Updates the task as the user types.
        placeholder="New task"
        className="p-2 border-gray-500 rounded-md focus:outline-none focus:border-blue-400"
      />
      <button
        className=" px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-600"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
