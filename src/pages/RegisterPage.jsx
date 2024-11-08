import React, { useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { apiAuthUrl } from "../helpers/apiUrl";
import axios from "axios";

function RegisterPage() {
  const [userPassword, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const psw = useRef();

  const handlePassword = (event) => {
    const pass = event.target.value;
    setPassword(pass);
  };

  const validatePassword = (password) => {
    if (password.length <= 7) {
      return "Password is too short.";
    }
  };

  const registerUser = async (event) => {
    event.preventDefault();
    const error = validatePassword(userPassword);
    if (error) setIsActive(true);
    const newUser = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: psw.current.value,
    };
    const response = await axios.post(`${apiAuthUrl}/register`, newUser);
    if (response.status === 201) {
      alert("User registered!");
      navigate("/login");
    }
  };

  return (
    <>
      <NavBar loggedIn={false} />
      <div className="form-container">
        <h1>Registro</h1>
        <form id="registration-form" onSubmit={registerUser}>
          <label htmlFor="firstName">Nombre</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            ref={firstName}
            required
          />

          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            ref={lastName}
            required
          />

          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" ref={email} required />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={psw}
            onChange={handlePassword}
            required
          />

          <button type="submit">Registrar</button>
        </form>
        <p>
          ¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link>
        </p>
      </div>
      {isActive && (
        <Stack className="alert-register" sx={{ width: "24%" }} spacing={2}>
          <Alert
            severity="warning"
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

export default RegisterPage;
