import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiAuthUrl } from "../helpers/apiUrl";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import axios from "axios";

function LoginPage() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const logUser = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${apiAuthUrl}/login`, {
      email: email.current.value,
      password: password.current.value,
    });
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } else {
      alert("Wrong credentials.");
    }
  };

  return (
    <>
      <NavBar />
      <div className="form-container">
        <h1>Iniciar Sesión</h1>
        <form id="login-form" onSubmit={logUser}>
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" ref={email} required />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={password}
            required
          />

          <button type="submit">Iniciar Sesión</button>
        </form>
        <p>
          ¿No tienes una cuenta? <Link to="/register">Registrarse</Link>
        </p>
        <p>
          ¿Olvidaste tu Contraseña?{" "}
          <Link to="/change-password">Recuperar Contraseña</Link>
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
            The password must be of 8 characters long.
          </Alert>
        </Stack>
      )}
      <Footer />
    </>
  );
}

export default LoginPage;
