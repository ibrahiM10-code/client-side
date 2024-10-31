import React from "react";
import NavBar from "../components/NavBar"
import PaymentMethodCard from "../components/PaymentMethodCard";

function PaymentMethodsPage() {
  return (
    <>
      <NavBar loggedIn={true}/>
      <div className="pms-container">
        <div className="pms-header">
          <h3>My payment methods</h3>
          <button className="modal-form-btn">Add a new expense</button>
        </div>
        <hr />
        <div className="user-pmtds-container">
          <PaymentMethodCard paymentMethodName={"Credit Card"} totalSpent={32000}/>
          <PaymentMethodCard paymentMethodName={"Debit Card"} totalSpent={61000}/>
          <PaymentMethodCard paymentMethodName={"Cash"} totalSpent={5310}/>
          <PaymentMethodCard paymentMethodName={"Apple pay"} totalSpent={12600}/>
        </div>
      </div>
    </>
  );
}

export default PaymentMethodsPage;