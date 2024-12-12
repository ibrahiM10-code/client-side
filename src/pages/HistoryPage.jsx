import React, { useEffect, useState, useContext } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import AuthContext from "../context/AuthProvider";
import { BarChart } from "@mui/x-charts/BarChart";
import { chartSetting } from "../helpers/chartSettings";
import { apiProcessUrl } from "../helpers/apiUrl";
import axios from "axios";

function HistoryPage() {
  const [expensesHistory, setExpensesHistory] = useState([]);
  const { config } = useContext(AuthContext);
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const [month, setMonth] = useState([]);

  useEffect(() => {
    const dataHistory = async () => {
      try {
        const response = await axios.get(
          apiProcessUrl +
            `/user-expense/by-category?year=${currentYear}&month=${currentMonth}`,
          config
        );
        let updatedData = response.data.map((item) => ({
          ...item,
          total_amount: parseInt(item.total_amount),
        }));
        setExpensesHistory(updatedData);
      } catch (error) {
        if (error.status === 404) {
          alert("Please, choose a month in which you've made expenses.");
        } else if (error.status === 500) {
          alert("Please, choose a month in which you've made expenses.");
        }
      }
    };
    dataHistory();
  }, [config, currentMonth, currentYear]);

  const handleMonth = (event) => {
    const { value } = event.target;
    setMonth(value);
  };

  const getExpensesHistory = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        apiProcessUrl +
          `/user-expense/by-category?year=${currentYear}&month=${month}`,
        config
      );
      if (response.status === 200) {
        let updatedData = response.data.map((item) => ({
          ...item,
          total_amount: parseInt(item.total_amount),
        }));
        setExpensesHistory(updatedData);
      }
    } catch (error) {
      if (error.status === 404) {
        alert("Please, choose a month in which you've made expenses.");
      } else if (error.status === 500) {
        alert("Please, choose a month in which you've made expenses.");
      }
    }
  };

  return (
    <>
      <NavBar />
      <Sidebar />
      <div className="details-container">
        <div className="details-content">
          <p className="history-legend">
            Choose a Month to check your expenses
          </p>
          <div className="month-parameter parameter">
            <form onSubmit={getExpensesHistory}>
              <label htmlFor="" className="month-label mb-2">
                Month
              </label>
              <select
                name="month"
                id="month"
                className="form-control"
                onChange={handleMonth}
                defaultValue={currentMonth}
              >
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <button className="history-btn mt-1" type="submit">
                See history
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bar-chart-container">
        <BarChart
          dataset={expensesHistory}
          xAxis={[{ scaleType: "band", dataKey: "category" }]}
          {...chartSetting}
          className="bar-chart"
        />
      </div>
      <Footer />
    </>
  );
}

export default HistoryPage;
