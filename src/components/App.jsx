import React from "react";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";
import BasicDemo from "../pages/HistoryPage";
import PaymentMethodsPage from "../pages/PaymentMethodsPage";
import ExpensesPage from "../pages/ExpensesPage";
import RequestPswChangePage from "../pages/RequestPswChangePage";
import NewPswCodePage from "../pages/NewPswCodePage";
import ChangePswPage from "../pages/ChangePswPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/history" element={<BasicDemo />}></Route>
        <Route
          path="/your-payment-methods"
          element={<PaymentMethodsPage />}
        ></Route>
        <Route path="/your-expenses" element={<ExpensesPage />} />
        <Route
          path="/request-password-change"
          element={<RequestPswChangePage />}
        ></Route>
        <Route
          path="/code-change-password"
          element={<NewPswCodePage />}
        ></Route>
        <Route path="/change-password" element={<ChangePswPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
