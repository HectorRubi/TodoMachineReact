import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() {
  const {
    totalTodos: total,
    completedTodos: completed
  } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has completado {completed} de {total} ToDo's
    </h2>
  );
}

export { TodoCounter };
