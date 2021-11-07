import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton({ openModal, setOpenModal }) {
  const onClickButton = () => {
    (openModal)
    ? setOpenModal(false)
    : setOpenModal(true)
  };

  return (
    <button 
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
