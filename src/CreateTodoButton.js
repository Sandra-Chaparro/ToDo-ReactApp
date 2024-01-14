import { MdOutlineAddCircle } from "react-icons/md";
function CreateTodoButton() {
  return (
    <MdOutlineAddCircle
      className="addTask"
      onClick={(event) => {
        console.log(event.target);
        console.log("le diste click");
      }}
      size="2.8em"
    />
  );
}

export { CreateTodoButton };
