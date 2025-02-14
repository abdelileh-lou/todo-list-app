const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(todo.id)}
        className={`${todo.completed ? "completed" : ""}`}>
        {todo.task}
      </p>
      <div>
        <button onClick={() => editTodo(todo.id)} className="todo-btn">
          Edit
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="todo-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
