import React from "react";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      className="todoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      placeholder="Prepare meals"
    />
  );
}

export { TodoSearch };
