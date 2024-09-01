import { MdOutlineAddCircle } from "react-icons/md";
import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenAddModal }) {
  return (
    <MdOutlineAddCircle
      className="addTodo"
      onClick={() => {
        setOpenAddModal((state) => !state);
      }}
      size="2.8em"
    />
  );
}

export { CreateTodoButton };
