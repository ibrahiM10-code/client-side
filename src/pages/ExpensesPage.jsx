import React, { useState, useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
import EPContainer from "../components/EPContainer";
import DetailsCard from "../components/DetailsCard";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import AuthContext from "../context/AuthProvider";
import { apiProcessUrl } from "../helpers/apiUrl";
import CircularProgress from "@mui/material/CircularProgress";

function ExpensesPage() {
  const { config } = useContext(AuthContext);
  const [expense, setExpense] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bringExpenses = async () => {
      try {
        const response = await axios.get(
          `${apiProcessUrl}/user-expense/last-five`,
          config
        );
        setExpense(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    bringExpenses();
  }, [expense, config]);

  return (
    <>
      <NavBar />
      <Sidebar />
      <EPContainer title={"your expenses"} btnText={"add a new expense"}>
        {loading ? (
          <CircularProgress />
        ) : expense.length === 0 ? (
          <h1>No expenses added</h1>
        ) : (
          expense.map((exp, index) => (
            <DetailsCard
              key={index}
              expenseName={exp.expense_desc}
              amountSpent={parseInt(exp.expense_amount)}
            />
          ))
        )}
      </EPContainer>
    </>
  );
}

export default ExpensesPage;
