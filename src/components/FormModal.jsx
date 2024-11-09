import React, { useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { apiProcessUrl } from "../helpers/apiUrl";
import AuthContext from "../context/AuthProvider";

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
  const { config } = useContext(AuthContext);
  const [paymentMethod, setPaymentMethod] = useState();
  const [userExpense, setUserExpense] = useState();
  const [paymentMethods, setPaymentMethods] = useState([]);

  useEffect(() => {
    const bringPaymentMethods = async () => {
      try {
        const response = await axios.get(
          `${apiProcessUrl}/payment-methods`,
          config
        );
        setPaymentMethods(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    bringPaymentMethods();
  }, [paymentMethods, config]);

  const handleClose = () => setOpenFormModal(false);

  const handlePaymentMethod = (event) => {
    const method = event.target.value;
    setPaymentMethod({ method });
  };

  const handleExpense = (event) => {
    const { name, value } = event.target;
    setUserExpense((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const submitPaymentMethod = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `${apiProcessUrl}/payment-methods`,
      paymentMethod,
      config
    );
    if (response.status === 201) {
      console.log("Payment method added!");
      setOpenFormModal(false);
    } else {
      console.log("Failed to add payment method");
    }
  };

  const submitExpense = async (event) => {
    event.preventDefault();
    const response = await axios.post();
  };

  return (
    <div>
      <Modal open={openFormModal} onClose={handleClose}>
        <Box sx={style}>
          {formTitle === "Add a new expense." ? (
            <form className="add-expense-form">
              <h4 className="mb-4">Add Expense</h4>
              <label htmlFor="">Expense Name</label>
              <input
                type="text"
                className="form-control"
                onChange={handleExpense}
              />
              <label htmlFor="">Amount Spent</label>
              <input
                type="number"
                className="form-control"
                onChange={handleExpense}
              />
              <label htmlFor="">Category</label>
              <select name="" id="" className="form-control">
                <option value="Entertainment">Entertainment</option>
              </select>
              <label htmlFor="">Payment method used</label>
              <select name="" id="" className="form-control">
                {paymentMethods.length === 0 ? (
                  <option>You must add payment methods.</option>
                ) : (
                  paymentMethods.map((pms, index) => (
                    <option key={index} value={pms.method}>
                      {pms.method}
                    </option>
                  ))
                )}
              </select>
              <button>Add expense</button>
            </form>
          ) : (
            <form className="add-pm-form" onSubmit={submitPaymentMethod}>
              <h4 className="mb-4">Add Payment Method</h4>
              <label htmlFor="">Payment Method Name</label>
              <input
                type="text"
                className="form-control mb-4"
                onChange={handlePaymentMethod}
              />
              <button type="submit">Add payment method</button>
            </form>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default FormModal;
