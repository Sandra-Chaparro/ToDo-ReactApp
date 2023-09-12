import Card from "react-bootstrap/Card";
import "./index.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

function TodoItem(props) {
  return (
    <Card body className="todoItem">
      <AiFillCheckCircle className="item checkIcon" size="2.5em" />

      <p className="item task">{props.text}</p>

      <AiFillCloseCircle className="item deleteTask" size="2.5em" />
    </Card>
  );
}
export { TodoItem };
