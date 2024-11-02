import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function FormModal({ formTitle, openFormModal, setOpenFormModal }) {
  const handleClose = () => setOpenFormModal(false);

  return (
    <div>
      <Modal open={openFormModal} onClose={handleClose}>
        <Box sx={style}>
          {formTitle === "Add a new expense." ? (
            <form className="add-expense-form">
              <h4 className="mb-4">Add Expense</h4>
              <label htmlFor="">Expense Name</label>
              <input type="text" className="form-control" />
              <label htmlFor="">Amount Spent</label>
              <input type="number" className="form-control" />
              <label htmlFor="">Payment method used</label>
              <select name="" id="" className="form-control"></select>
              <button>Add expense</button>
            </form>
          ) : (
            <form className="add-pm-form">
              <h4 className="mb-4">Add Payment Method</h4>
              <label htmlFor="">Payment Method Name</label>
              <input type="text" className="form-control" />
              <button>Add payment method</button>
            </form>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default FormModal;
