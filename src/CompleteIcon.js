import "./index.css";
import { AiFillCheckCircle } from "react-icons/ai";

function CompleteIcon(props) {
  return (
    <>
      <AiFillCheckCircle
        className={` item checkIcon ${
          props.completed == true && "checkIconTaskCompleted"
        } `}
        onClick={props.onComplete}
        size="2.5em"
      />
    </>
  );
}
export { CompleteIcon };
