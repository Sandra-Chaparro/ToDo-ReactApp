import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { Footer } from "./Footer";
import { Logo } from "./Logo.js";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  {
    text: "Morning walk",
    completed: true,
  },
  {
    text: "Meeting",
    completed: false,
  },
  {
    text: "Read",
    completed: false,
  },
  {
    text: "Clean house",
    completed: true,
  },
];

function App() {
  return (
    <>
      <Logo />
      <div style={{ backgroundColor: "#08313A", borderRadius: "2%" }}>
        <TodoCounter completed={10} total={20} />
        <TodoSearch />
        <CreateTodoButton />
        <TodoList>
          {defaultTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
      </div>
      <Footer />
    </>
  );
}

export default App;
