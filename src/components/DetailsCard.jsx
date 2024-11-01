import React from "react";
import DeleteModal from "./DeleteModal";

function DetailsCard({
  children,
  paymentMethodName,
  totalSpent,
  expenseName,
  amountSpent,
}) {
  return (
    <>
      <div className="payment-method">
        <div className="payment-method-header">
          <div className="icon-container mr-3">
            <i
              className={
                paymentMethodName
                  ? "fas fa-credit-card fa-2x text-white"
                  : " fas fa-dollar-sign fa-2x text-white"
              }
            ></i>
          </div>
          <p>{paymentMethodName || expenseName}</p>
          {children}
        </div>
        <div className="money-spent">
          <p>Money Spent:</p>
          <p>${totalSpent || amountSpent}</p>
        </div>
      </div>
      <DeleteModal />
    </>
  );
}

export default DetailsCard;
