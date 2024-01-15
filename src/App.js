import React from "react";
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
    text: "MeeWOting",
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
  {
    text: "workflow ca",
    completed: true,
  },
];

function App() {
  //useState to track the number of todos
  const [todos, setTodos] = React.useState(defaultTodos);
  //useState to track the change on the input from user to searchTodos
  const [searchValue, setSearchValue] = React.useState(""); //Initalize with an empty string
  console.log("se busca " + searchValue);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  return (
    <>
      <Logo />
      <div style={{ backgroundColor: "#08313A", borderRadius: "2%" }}>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <CreateTodoButton />
        <TodoList>
          {searchedTodos.map((todo) => (
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
