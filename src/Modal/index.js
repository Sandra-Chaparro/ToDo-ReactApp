import React from "react";
import ReactDOM from "react-dom";
import "./ModalBackground.css";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {/*{this content is the one we want to teletransport*/}
      {children}
    </div>,
    document.getElementById("modal") // where we want to make the teletransportation
  );
}

export { Modal };
