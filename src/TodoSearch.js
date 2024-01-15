import React from "react";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState(""); //Initalize with an empty string
  console.log("los usuarios buscan " + searchValue);

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
