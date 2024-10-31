import React from "react";

function PaymentMethodCard({ paymentMethodName, totalSpent }) {
  // function openModal() {
  //   document.getElementById("modal").classNameList.remove("hidden");
  // }

  // function closeModal() {
  //   document.getElementById("modal").classList.add("hidden");
  // }

  // function confirmDelete() {
  //   alert("Método de pago eliminado.");
  //   closeModal();
  // }

  return (
    <>
      <div className="payment-method">
        <div className="payment-method-header">
          <div class="icon-container mr-3">
            <i class="fas fa-credit-card fa-2x text-white"></i>
          </div>
          <p>{paymentMethodName}</p>
          <button class="delete-button text-danger">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
        <div className="money-spent">
          <p>Money Spent:</p>
          <p>${totalSpent}</p>
        </div>
      </div>
    </>
  );
}

export default PaymentMethodCard;
