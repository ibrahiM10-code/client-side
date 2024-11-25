import React, { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { apiProcessUrl } from "../helpers/apiUrl";
import axios from "axios";
import DeleteModal from "./DeleteModal";

function DeleteButton({ payment_method_id }) {
  const { config } = useContext(AuthContext);
  const openModal = () => {
    document.getElementById("modal").classList.remove("d-none");
  };

  const deletePaymentMethod = async () => {
    try {
      console.log(payment_method_id);
      const response = await axios.delete(
        `${apiProcessUrl}/payment-method/${payment_method_id}`,
        config
      );
      if (response.status === 204) {
        alert("Payment method deleted!");
        console.log(response);
      }
    } catch (error) {
      alert("Failed to delete the payment method");
      console.error(error);
    }
  };

  return (
    <>
      <button
        className="delete-button text-danger"
        onClick={deletePaymentMethod}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
      {/* <DeleteModal /> */}
    </>
  );
}

export default DeleteButton;
