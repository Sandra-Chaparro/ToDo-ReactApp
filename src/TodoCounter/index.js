import "./TodoCounter.css";
import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <h1>
      {completedTodos === totalTodos
        ? `Congratulations! You have completed all TODOS`
        : `You have completed ${completedTodos} of ${totalTodos} TODOS`}
    </h1>
  );
}

export { TodoCounter };
