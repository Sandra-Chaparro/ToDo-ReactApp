import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage";

// localStorage.removeItem("TODOS_V1");
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

function App() {
  //useState to track the number of todos
  const {
    item: todos, //we use ":" to rename this variables
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  //useState to track the change on the input from user to searchTodos
  const [searchValue, setSearchValue] = React.useState(""); //Initalize with an empty string

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
    const todoIndex = newItem.findIndex((todo) => todo.text === text);
    newItem[todoIndex].completed = true;
    saveTodos(newItem);
  };
  const deleteTodo = (text) => {
    //function to delete todo  when user clicks the X
    const newItem = [...todos]; //unpack values from the todo array (destructuring assignment syntax)
    const todoIndex = newItem.findIndex((todo) => todo.text === text);
    newItem.splice(todoIndex, 1);
    saveTodos(newItem);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
