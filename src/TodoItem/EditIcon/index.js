import "./EditButton.css";
import { CiEdit } from "react-icons/ci";

function EditButton({ setOpenEditModal }) {
  return (
    <>
      <CiEdit
        className="item editIcon"
        onClick={() => {
          setOpenEditModal((state) => !state);
        }}
        size="1.5em"
      />
    </>
  );
}
export { EditButton };
