import "./index.css";
import { MDBFooter } from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left footer">
      <div className="text-center p-3 footer">
        &copy; {new Date().getFullYear()} Copyright: : SWIT
      </div>
    </MDBFooter>
  );
}

export { Footer };
