import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

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

      case "home":
        navigate("/home");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="sb-container">
        <div className="sb-content">
          <div className="sb-item" onClick={() => redirect("home")}>
            <img src="./images/home-minimalist.png" alt="home icon" />
            <p>Menu</p>
          </div>
          <div className="sb-item" onClick={() => redirect("expense")}>
            <img
              src="./images/shopping-bag-minimalist.png"
              alt="shopping bag icon"
            />
            <p>Add Expense</p>
          </div>
          <div className="sb-item" onClick={() => redirect("payment")}>
            <img
              src="./images/credit-card-minimalist.png"
              alt="credit cards icon"
            />
            <p>My Payment Methods</p>
          </div>
          <div className="sb-item" onClick={() => redirect("history")}>
            <img src="./images/bar-chart-minimalist.png" alt="bar chart icon" />
            <p>Expenses History</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
