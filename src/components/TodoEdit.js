import { useState } from "react";
import React from "react";

const TodoEdit = ({ editTodo, tas }) => {
  const [task, setTask] = useState(tas.task);

  function handleSbumit(e) {
    e.preventDefault();

    editTodo(task, tas.id);
    setTask("");
  }

  return (
    <form className="TodoForm" onSubmit={handleSbumit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default TodoEdit;
