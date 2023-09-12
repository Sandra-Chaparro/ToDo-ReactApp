import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h1>
      You have completed {completed} of {total} TODOS
    </h1>
  );
}

export { TodoCounter };
