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
      console.log("Se envió un código al correo: ", email);
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="form-container">
        <h1>Recuperar Contraseña</h1>
        <form id="reset-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo registrado"
            required
          />
          <button type="submit">Recibir Código</button>
        </form>

        <p>
          ¿Recuerdas tu contraseña? <Link to="/login">Inicia sesión</Link>
        </p>

        {/* Alerta de éxito */}
        {isActive && (
          <Alert
            severity="success"
            onClose={() => setIsActive(false)}
            className="alert-register"
          >
            Un código de verificación ha sido enviado a tu correo.
          </Alert>
        )}
      </div>

      <Footer />
    </>
  );
}

export default ChangePswPage;
