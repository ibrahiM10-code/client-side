import React from "react";

function DeleteButton() {
  const openModal = () => {
    document.getElementById("modal").classList.remove("d-none");
  };

  return (
    <button className="delete-button text-danger" onClick={openModal}>
      <i className="fas fa-trash-alt"></i>
    </button>
  );
}

export default DeleteButton;
