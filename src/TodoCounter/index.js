import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h1>
      {completed === total
        ? `Congratulations! You have completed all TODOS`
        : `You have completed ${completed} of ${total} TODOS`}
    </h1>
  );
}

export { TodoCounter };
