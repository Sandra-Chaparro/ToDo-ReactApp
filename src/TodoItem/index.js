import Card from "react-bootstrap/Card";
import "./TodoItem.css";

import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EditButton } from "./EditIcon";

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
      <EditButton
        setOpenEditModal={props.setOpenEditModal}
        onEdit={props.onEdit}
      />
      <DeleteIcon onDelete={props.onDelete} />
    </Card>
  );
}
export { TodoItem };
