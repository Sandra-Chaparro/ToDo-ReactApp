import React from "react";
import "./EditToDoForm.css";
import { TodoContext } from "../TodoContext";

function EditForm() {
  const { editTodo, setOpenEditModal } = React.useContext(TodoContext);
  // const [todoText, setTodoText] = React.useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    //editTodo(newTodoValue);
    console.log("click on edit");
    setOpenEditModal(false);
  };
  const onCancel = () => {
    setOpenEditModal(false);
  };

  return (
    <form onSubmit={onSubmit} className="inputForm">
      <p className="text">Edit your ToDo</p>
      <input className="input" />
      <div>
        <button
          type="button"
          className=" button buttonCancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button type="submit" className="button buttonEdit">
          Edit
        </button>
      </div>
    </form>
  );
}
export { EditForm };
