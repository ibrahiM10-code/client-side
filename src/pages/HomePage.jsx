import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthProvider";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiProcessUrl } from "../helpers/apiUrl";
import CircularProgress from "@mui/material/CircularProgress";

function HomePage() {
  const { config } = useContext(AuthContext);
  const [latestExpense, setLatestExpense] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const bringExpenses = async () => {
      try {
        const response = await axios.get(
          `${apiProcessUrl}/user-expense/last-five`,
          config
        );
        setLatestExpense(response.data[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    bringExpenses();
  }, [config, latestExpense]);

  const redirect = (whereTo) => {
    switch (whereTo) {
      case "payment":
        navigate("/your-payment-methods");
        break;

      case "expense":
        navigate("/your-expenses");
        break;

      case "history":
        navigate("/your-history");
        break;

      default:
        break;
    }
  };

  return (
    <>
      <NavBar />
      <div className="menu-container">
        <div className="first-row-options">
          <div className="latest-expense-container option">
            <div className="latest-expense-content">
              <p>Latest expense made:</p>
              {loading ? (
                <CircularProgress />
              ) : (
                <>
                  <h1>${parseInt(latestExpense.expense_amount)}</h1>
                  <div className="latest-expense">
                    <img src="./images/red-arrow.png" alt="red arrow" />
                    <p>{latestExpense.expense_desc}</p>
                  </div>
                </>
              )}
            </div>
          </div>
          <div
            className="payment-methods-container option"
            onClick={() => redirect("payment")}
          >
            <div className="payment-method-content">
              <div className="option-legend">
                <p>My Payment</p>
                <p>Methods</p>
              </div>
              <div className="payment-methods-img-container">
                <img src="./images/cards.png" alt="cards icon" />
                <img
                  src="./images/money.png"
                  alt="money icon"
                  id="money-img-methods"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="second-row-options">
          <div
            className="add-expense-container option"
            onClick={() => redirect("expense")}
          >
            <div className="add-expense-content">
              <div className="option-legend">
                <p>Add</p>
                <p>Expense</p>
              </div>
              <div className="add-expense-img-container">
                <img src="./images/money-bag.png" alt="money bag icon" />
                <img
                  src="./images/red-arrow.png"
                  alt="red arrow"
                  id="red-arrow-add"
                />
              </div>
            </div>
          </div>
          <div
            className="history-container option"
            onClick={() => redirect("history")}
          >
            <div className="history-content">
              <div className="option-legend">
                <p>Expenses</p>
                <p>History</p>
              </div>
              <img src="./images/bar.png" alt="bars graph icon" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
