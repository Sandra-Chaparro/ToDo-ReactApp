import { MdOutlineAddCircle } from "react-icons/md";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <MdOutlineAddCircle
      className="addTodo"
      onClick={(event) => {
        console.log(event.target);
        console.log("le diste click");
      }}
      size="2.8em"
    />
  );
}

export { CreateTodoButton };
