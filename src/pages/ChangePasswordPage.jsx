import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function ChangePasswordPage() {
  const [newPassword, setNewPassword] = useState(""); // For the new password
  const [confirmPassword, setConfirmPassword] = useState(""); // For confirming the password
  const [isActive, setIsActive] = useState(false); // To activate the success alert
  const [error, setError] = useState(false); // To show an error if the passwords don't match

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword === confirmPassword && newPassword !== "") {
      setIsActive(true);
      setError(false);
      console.log("Password changed successfully");
    } else {
      setIsActive(false);
      setError(true);
    }
  };

  return (
    <>
      <NavBar />
      <div className="form-container">
        <h1>Change Password</h1>
        <form id="change-password-form" onSubmit={handleSubmit}>
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password-field"
            name="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter your new password"
            required
          />

          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password-field"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Repeat your new password"
            required
          />

          <button type="submit">Save New Password</button>
        </form>

        {isActive && (
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
              Your password has been successfully changed.
            </Alert>
          </Stack>
        )}

        {error && (
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
              The passwords do not match. Please try again.
            </Alert>
          </Stack>
        )}
      </div>

      <Footer />
    </>
  );
}

export default ChangePasswordPage;
