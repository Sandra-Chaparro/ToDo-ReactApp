import Card from "react-bootstrap/Card";
import "./index.css";

import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";

function TodoItem(props) {
  return (
    <Card body className="todoItem">
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />

      <p
        className={`item task ${
          props.completed == true && "todoItem-complete"
        } `}
      >
        {props.text}
      </p>

      <DeleteIcon onDelete={props.onDelete} />
    </Card>
  );
}
export { TodoItem };
