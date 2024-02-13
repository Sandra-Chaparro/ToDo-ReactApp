import React from "react";
import "./NewToDoForm.css";
import { TodoContext } from "../TodoContext";

function NewToDoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="inputForm">
      <p className="text">Enter your new TODO</p>
      <input
        className="input"
        placeholder="Send work email"
        value={newTodoValue}
        onChange={onChange}
      />
      <div>
        <button
          type="button"
          className=" button buttonCancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="button buttonAdd">
          Add
        </button>
      </div>
    </form>
  );
}

export { NewToDoForm };
