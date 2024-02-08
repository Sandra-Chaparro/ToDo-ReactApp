import React from "react";

//------custom hook for LocaStorage
function useLocalStorage(itemName, initialValue) {
  const [item, setItems] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName); //to retrieve what is in local storage to know
        //the todos we are starting with.
        let parsedItems;

        if (!localStorageItem) {
          //if there is no todos
          localStorage.setItem(itemName, JSON.stringify(initialValue)); //start todos with an empty array
          parsedItems = [];
        } else {
          parsedItems = JSON.parse(localStorageItem); //from string to array of obj to be able to read it
          setItems(parsedItems);
        }
        setLoading(false); // after the hook run we indicate that the loading is done
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000); //specify in miliseconds how long to wait for that to execute
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItems(newItem);
  };

  return { item, saveItem, loading, error }; //when there is more than 2 to return,
  //react Hooks reccomend to use object instead
}
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
export { useLocalStorage };
