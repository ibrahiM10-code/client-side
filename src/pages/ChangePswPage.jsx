import React, { useState } from "react";
import NavBar from "../components/NavBar"; 
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";

function ChangePswPage() {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("A code was sent to the email: ", email);
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <>
      <NavBar loggedIn={false} />
      <div className="form-container">
        <h1>Recover Password</h1>
        <form id="reset-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
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
        <p>
          Already have your code? <Link to="/code-change-password">Continue</Link>
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
