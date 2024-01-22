import React from "react";

//custom hook for LocaStorage
function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName); //to retrieve what is in local storage to know
  //the todos we are starting with.
  let parsedItems;
  if (!localStorageItem) {
    //if there is no todos
    localStorage.setItem(itemName, JSON.stringify(initialValue)); //start todos with an empty array
    parsedItems = [];
  } else {
    parsedItems = JSON.parse(localStorageItem); //from string to array of obj to be able to read it
  }
  const [item, setItems] = React.useState(parsedItems);
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItems(newItem);
  };

  return [item, saveItem];
}

export { useLocalStorage };
