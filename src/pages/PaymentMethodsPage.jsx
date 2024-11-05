import React from "react";
import NavBar from "../components/NavBar";
import EPContainer from "../components/EPContainer";
import DetailsCard from "../components/DetailsCard";
import DeleteButton from "../components/DeleteButton";
import Sidebar from "../components/Sidebar";

function PaymentMethodsPage() {
  return (
    <>
      <NavBar loggedIn={true} />
      <Sidebar />
      <EPContainer
        title={"my payment methods"}
        btnText={"add a new payment method"}
      >
        <DetailsCard paymentMethodName={"Credit Card"} totalSpent={32000}>
          <DeleteButton />
        </DetailsCard>
        <DetailsCard paymentMethodName={"Apple pay"} totalSpent={12600}>
          <DeleteButton />
        </DetailsCard>
      </EPContainer>
    </>
  );
}

export default PaymentMethodsPage;
