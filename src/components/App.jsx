import React from "react";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";
import HistoryPage from "../pages/HistoryPage";
import PaymentMethodsPage from "../pages/PaymentMethodsPage";
import ExpensesPage from "../pages/ExpensesPage";
import ChangePasswordPage from "../pages/ChangePasswordPage";
import VerifyCodePage from "../pages/VerifyCodePage";
import ChangePswPage from "../pages/ChangePswPage";
import { AuthProvider } from "../context/AuthProvider";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/your-history" element={<HistoryPage />}></Route>
          <Route
            path="/your-payment-methods"
            element={<PaymentMethodsPage />}
          ></Route>
          <Route path="/your-expenses" element={<ExpensesPage />} />
          <Route
            path="/request-password-change"
            element={<ChangePasswordPage />}
          ></Route>
          <Route
            path="/code-change-password"
            element={<VerifyCodePage />}
          ></Route>
          <Route path="/change-password" element={<ChangePswPage />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
