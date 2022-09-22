import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function Modal({ setOpenModal }) {
  return (
      <div className="modalContainer">
        <div className="title">
          <h4>A product is added to cart.</h4>
        </div>
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <AiOutlineClose />
          </button>
        </div>
      </div>
  );
}

export default Modal;
