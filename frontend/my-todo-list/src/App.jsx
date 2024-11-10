import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem.jsx";

function TodoList() {
  const [todos, setTodos] = useState([]); // State to store tasks.

  // Fetch tasks from the server when the component mounts.
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("http://localhost:5000/todos");
        setTodos(await res.json()); // Update state with fetched tasks.
      } catch (err) {
        console.log(err); // Handle errors
      }
    };
    fetchTodos();
  }, []); // Only runs once when the component mounts.

  // Function to add or delete tasks.
  const handleTodo = async (task, id = null) => {
    try {
      if (id) {
        await fetch(`http://localhost:5000/todos/${id}, { method: 'DELETE' }`);
        setTodos(todos.filter((todo) => todo._id !== id)); // Remove task
      } else {
        const res = await fetch("http://localhost:5000/todos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ task }),
        });
        setTodos([...todos, await res.json()]); // Add new task
      }
    } catch (err) {
      console.log(err); // Handle errors
    }
  };

  return (
    <div className="flex flex-col items-center p-5 bg-gray-300 min-h-screen ">
      <h1 className="font-bold p-2 text-2xl ">To-Do List</h1>
      <TodoForm addTodo={(task) => handleTodo(task)} /> {/* Add task */}
      <ul className="w-full max-w-md space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            deleteTodo={() => handleTodo(null, todo._id)} // Delete task
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
