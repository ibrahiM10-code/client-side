import React, { useState } from "react";
import FormModal from "./FormModal";

function EPContainer({ children, title, btnText }) {
  const [open, setOpen] = useState(false);
  const openTheModal = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="pms-container">
        <div className="pms-header">
          <h3>{title}</h3>
          <button className="modal-form-btn" onClick={openTheModal}>
            {btnText}
          </button>
        </div>
        <hr />
        <div className="user-pmtds-container">{children}</div>
      </div>
      {title === "your expenses" ? (
        <FormModal
          formTitle={"Add a new expense."}
          openFormModal={open}
          setOpenFormModal={setOpen}
        />
      ) : (
        <FormModal
          formTitle={"Add a new payment method."}
          openFormModal={open}
          setOpenFormModal={setOpen}
        />
      )}
    </>
  );
}

export default EPContainer;
