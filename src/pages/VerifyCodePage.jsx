import React, { useState, useContext } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import AuthContext from "../context/AuthProvider";

function VerifyCodePage() {
  const [code, setCode] = useState(""); // State to store the entered code
  const [isActive, setIsActive] = useState(false); // To activate the success alert
  const [error, setError] = useState(false); // To show an error if the code is incorrect
  const [isSubmitted, setIsSubmitted] = useState(false); // To track if the code was submitted
  const { resetPswCode } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseInt(code) === resetPswCode) {
      // Assuming the correct code is "123456"
      setIsActive(true);
      setError(false);
      setIsSubmitted(true); // Correct code
      navigate("/request-password-change");
    } else {
      setIsActive(false);
      setError(true); // Incorrect code
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <NavBar />
      <div className="form-container">
        <h1>Verify Code</h1>
        <form id="verify-code-form" onSubmit={handleSubmit}>
          <label htmlFor="code">Verification Code</label>
          <input
            type="text"
            id="code"
            name="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter the code sent"
            required
          />
          <button type="submit">Verify Code</button>
        </form>

        <p>
          Didn't receive the code?{" "}
          <Link to="/reset-password">Request another</Link>
        </p>

        {/* Show the success alert if the code is correct */}
        {isActive && isSubmitted && (
          <Stack
            className="alert-register"
            sx={{
              width: "100%",
              maxWidth: "500px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "20px",
            }}
            spacing={2}
          >
            <Alert
              severity="success"
              onClose={() => setIsActive(false)}
              sx={{ textAlign: "center", padding: "12px" }}
            >
              The code is valid. You can now reset your password.
            </Alert>
          </Stack>
        )}

        {/* Show the error alert if the code is incorrect */}
        {error && isSubmitted && (
          <Stack
            className="alert-register"
            sx={{
              width: "100%",
              maxWidth: "500px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "20px",
            }}
            spacing={2}
          >
            <Alert
              severity="error"
              onClose={() => setError(false)}
              sx={{ textAlign: "center", padding: "12px" }}
            >
              The entered code is invalid. Please try again.
            </Alert>
          </Stack>
        )}
      </div>

      <Footer />
    </>
  );
}

export default VerifyCodePage;
