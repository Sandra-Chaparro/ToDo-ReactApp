import { MdOutlineAddCircle } from "react-icons/md";
import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal }) {
  return (
    <MdOutlineAddCircle
      className="addTodo"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
      size="2.8em"
    />
  );
}

export { CreateTodoButton };
