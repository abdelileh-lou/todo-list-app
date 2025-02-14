import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import TodoEdit from "./TodoEdit";

const TodoWrapper = () => {
  const [todos, setTodo] = useState([]);

  function handleTodo(todo) {
    setTodo([
      ...todos,
      { task: todo, id: uuidv4(), completed: false, isEditing: false },
    ]);

    console.log(todos);
  }
  function toggleComplete(id) {
    setTodo(
      todos.map((t) => {
        return t.id === id ? { ...t, completed: !t.completed } : t;
      }),
    );
  }

  function deleteTodo(id) {
    setTodo(todos.filter((t) => t.id !== id));
  }

  function editTodo(id) {
    setTodo(
      todos.map((t) => {
        return t.id === id ? { ...t, isEditing: !t.isEditing } : t;
      }),
    );
  }

  function editTask(task, id) {
    setTodo(
      todos.map((t) => {
        return t.id === id ? { ...t, task, isEditing: !t.isEditing } : t;
      }),
    );
  }

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm onAddTodo={handleTodo} />

      {todos.map((t, index) =>
        t.isEditing ? (
          <TodoEdit editTodo={editTask} tas={t} key={index} />
        ) : (
          <Todo
            todo={t}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ),
      )}
    </div>
  );
};

export default TodoWrapper;
