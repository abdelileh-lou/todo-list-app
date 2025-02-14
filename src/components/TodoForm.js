import { useState } from "react";
import React from "react";

const TodoForm = ({ onAddTodo }) => {
  const [task, setTask] = useState("");

  function handleSbumit(e) {
    e.preventDefault();

    onAddTodo(task);
    setTask("");
  }

  return (
    <form className="TodoForm" onSubmit={handleSbumit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
