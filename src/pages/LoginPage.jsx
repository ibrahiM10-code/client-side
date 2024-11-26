import React, { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiAuthUrl } from "../helpers/apiUrl";
import AuthContext from "../context/AuthProvider";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import axios from "axios";

function LoginPage() {
  const [isActive, setIsActive] = useState(false);
  const { setToken, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const logUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiAuthUrl}/login`, {
        email: email.current.value,
        password: password.current.value,
      });
      if (response.status === 200) {
        setToken(response.data.token);
        setUser(response.data.id_user);
        navigate("/home");
      } else if (response.status === 400) {
        alert("Wrong credentials!");
      } else if (response.status === 500) {
        alert("There has been an internal error.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="form-container">
        <h1>Login</h1>
        <form id="login-form" onSubmit={logUser}>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" ref={email} required />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={password}
            required
          />

          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
        <p>
          Forgot your password?{" "}
          <Link to="/change-password">Recover Password</Link>
        </p>
      </div>
      {isActive && (
        <Stack className="alert-register" sx={{ width: "20%" }} spacing={2}>
          <Alert
            severity="info"
            onClose={() => {}}
            onClick={() => {
              setIsActive(false);
            }}
          >
            The password must be 8 characters long.
          </Alert>
        </Stack>
      )}
      <Footer />
    </>
  );
}

export default LoginPage;
