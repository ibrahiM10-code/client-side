import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { BarChart } from "@mui/x-charts/BarChart";
import { expensesData } from "../helpers/dataset/expenses";
import { chartSetting } from "../helpers/chartSettings";

function HistoryPage() {
  return (
    <>
      <NavBar />
      <Sidebar />
      <div className="details-container">
        <div className="details-content">
          <div className="month-parameter parameter">
            <label htmlFor="">Month</label>
            <select name="month" id="month">
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
          </div>
          <div className="week-parameter parameter"></div>
          <button>See history</button>
        </div>
      </div>
      <BarChart
        dataset={expensesData}
        xAxis={[{ scaleType: "band", dataKey: "category" }]}
        {...chartSetting}
        className="bar-chart"
      />
    </>
  );
}

export default HistoryPage;
