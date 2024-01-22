import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { Footer } from "../Footer";
import { Logo } from "../SWITLogo";
import { CreateTodoButton } from "../CreateTodoButton";
import { useLocalStorage } from "./useLocalStorage";

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
  //useState to track the number of todos
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  //useState to track the change on the input from user to searchTodos
  const [searchValue, setSearchValue] = React.useState(""); //Initalize with an empty string
  console.log("se busca " + searchValue);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length; //to show the total number of todos on top of the search input
  const searchedTodos = todos.filter((todo) => {
    //to filter the todos according to the input the user is typing
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    //function to mark todo completed when user clicks the checkmark
    const newItem = [...todos]; //unpack values from the todo array (destructuring assignment syntax)
    const todoIndex = newItem.findIndex((todo) => todo.text == text);
    newItem[todoIndex].completed = true;
    saveTodos(newItem);
  };
  const deleteTodo = (text) => {
    //function to delete todo  when user clicks the X
    const newItem = [...todos]; //unpack values from the todo array (destructuring assignment syntax)
    const todoIndex = newItem.findIndex((todo) => todo.text == text);
    newItem.splice(todoIndex, 1);
    saveTodos(newItem);
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
