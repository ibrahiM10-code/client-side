import React from "react";
import NavBar from "../components/NavBar";
import EPContainer from "../components/EPContainer";
import DetailsCard from "../components/DetailsCard";
import Sidebar from "../components/Sidebar";

function ExpensesPage() {
  return (
    <>
      <NavBar />
      <Sidebar />
      <EPContainer title={"your expenses"} btnText={"add a new expense"}>
        <DetailsCard expenseName={"IPhone"} amountSpent={1500000} />
        <DetailsCard expenseName={"IPhone"} amountSpent={1500000} />
        <DetailsCard expenseName={"IPhone"} amountSpent={1500000} />
        <DetailsCard expenseName={"IPhone"} amountSpent={1500000} />
      </EPContainer>
    </>
  );
}

export default ExpensesPage;
