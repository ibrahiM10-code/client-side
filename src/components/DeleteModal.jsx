import React from "react";

function DeleteModal() {
  const confirmDelete = () => {
    console.log("glfsd");
    document.getElementById("modal").classList.add("d-none");
  };

  const closeModal = () => {
    document.getElementById("modal").classList.add("d-none");
  };

  return (
    <>
      <div
        id="modal"
        className="fixed-top d-none justify-content-center align-items-center"
        style={{
          top: "40px",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <div
          className="bg-white rounded-lg shadow-lg p-4 mx-auto"
          style={{ maxWidth: "400px" }}
        >
          <h2 className="h5 font-weight-bold">Confirmar Eliminación</h2>
          <p className="text-muted">
            ¿Estás seguro de que deseas eliminar este método de pago? Esta
            acción no se puede deshacer.
          </p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-danger" onClick={confirmDelete}>
              Eliminar
            </button>
            <button className="btn btn-secondary" onClick={closeModal}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
