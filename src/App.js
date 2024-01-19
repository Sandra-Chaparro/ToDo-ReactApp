import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { Footer } from "./Footer";
import { Logo } from "./Logo.js";
import { CreateTodoButton } from "./CreateTodoButton";

// const defaultTodos = [
//   {
//     text: "Morning walk",
//     completed: true,
//   },
//   {
//     text: "MeeWOting",
//     completed: false,
//   },
//   {
//     text: "Read",
//     completed: false,
//   },
//   {
//     text: "Clean house",
//     completed: true,
//   },
//   {
//     text: "workflow ca",
//     completed: true,
//   },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
//localStorage.removeItem("TODOS_V1");

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;
  if (!localStorageTodos) {
    //if there is no todos
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos); //from string to array of obj to be able to read it
  }

  //useState to track the number of todos
  const [todos, setTodos] = React.useState(parsedTodos);
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

  const saveTodos = (newTodos) => {
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    //function to mark todo completed when user clicks the checkmark
    const newTodos = [...todos]; //unpack values from the todo array (destructuring assignment syntax)
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    //function to delete todo  when user clicks the X
    const newTodos = [...todos]; //unpack values from the todo array (destructuring assignment syntax)
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
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
