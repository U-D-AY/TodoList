import React from "react";

function TodoItem({ todo, deleteTodo }) {
  return (
    <li className="flex justify-between items-center p-3 bg-white rounded-md shadow-md">
      <span>{todo.task}</span> {/* Displays the task name */}
      <button
        onClick={deleteTodo}
        className="px-1 bg-blue-100 text-xs rounded-2xl"
      >
        X
      </button>{" "}
      {/* Deletes the task when clicked */}
    </li>
  );
}

export default TodoItem;
