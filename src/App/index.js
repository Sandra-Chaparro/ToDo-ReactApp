import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppUI />
      {/*this will be send as children, so all the components 
      inside AppUI can have access to the parameters provided in the context*/}
    </TodoProvider>
  );
}

export default App;
