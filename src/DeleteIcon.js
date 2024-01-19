import "./index.css";
import { AiFillCloseCircle } from "react-icons/ai";

function DeleteIcon(props) {
  return (
    <>
      <AiFillCloseCircle
        className="item deleteTask"
        size="2.5em"
        onClick={props.onDelete}
      />
    </>
  );
}
export { DeleteIcon };
