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
  const totalTodos = todos.length; //to show the total number of todos on top of the search input
  const searchedTodos = todos.filter((todo) => {
    //to filter the todos accordint to the input the user is typing
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    //function to mark todo completed when user clicks the checkmark
    const newTodos = [...todos]; //unpack values from the todo array (destructuring assignment syntax)
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };
  const deleteTodo = (text) => {
    //function to delete todo  when user clicks the X
    const newTodos = [...todos]; //unpack values from the todo array (destructuring assignment syntax)
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

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
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      </div>
      <Footer />
    </>
  );
}

export default App;
