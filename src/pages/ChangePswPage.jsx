import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { apiAuthUrl } from "../helpers/apiUrl";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ChangePswPage() {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const { setRestorePswCode, setEmailRestore } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        const code = Math.floor(100000 + Math.random() * 900000);
        setRestorePswCode(code);
        setEmailRestore(email);
        const data = { email, code };
        const response = await axios.post(`${apiAuthUrl}/send-email`, data);
        if (response.status === 201) {
          alert(`Code sent to ${email} succesfully!"`);
          navigate("/code-change-password");
        }
      } catch (error) {}
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="form-container">
        <h1>Recover Password</h1>
        <form id="reset-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your registered email"
            required
          />
          <button type="submit">Receive Code</button>
        </form>

        <p>
          Remember your password? <Link to="/login">Log in</Link>
        </p>

        {/* Success Alert */}
        {isActive && (
          <Alert
            severity="success"
            onClose={() => setIsActive(false)}
            className="alert-register"
          >
            A verification code has been sent to your email.
          </Alert>
        )}
      </div>

      <Footer />
    </>
  );
}

export default ChangePswPage;
