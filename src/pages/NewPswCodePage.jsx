import React, { useState } from "react";
import NavBar from "../components/NavBar"; 
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function VerifyCodePage() {
  const [code, setCode] = useState(""); // Estado para almacenar el código ingresado
  const [isActive, setIsActive] = useState(false); // Para activar la alerta de éxito
  const [error, setError] = useState(false); // Para mostrar error si el código es incorrecto
  const [isSubmitted, setIsSubmitted] = useState(false); // Para saber si el código fue enviado

  const handleSubmit = (e) => {
    e.preventDefault();

    if (code === "123456") {  // Suponemos que el código correcto es "123456"
      setIsActive(true);
      setError(false);
      setIsSubmitted(true); // Código correcto
    } else {
      setIsActive(false);
      setError(true); // Código incorrecto
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <NavBar loggedIn={false} />
      <div className="form-container">
        <h1>Verificar Código</h1>
        <form id="verify-code-form" onSubmit={handleSubmit}>
          <label htmlFor="code">Código de verificación</label>
          <input
            type="text"
            id="code"
            name="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Ingresa el código enviado"
            required
          />
          <button type="submit">Verificar Código</button>
        </form>

        <p>
          ¿No has recibido el código? <Link to="/reset-password">Solicitar otro</Link>
        </p>
        <p>
          Cambiar contraseña <Link to="/request-password-change">Continuar</Link>
        </p>

        {/* Mostrar la alerta si el código es correcto */}
        {isActive && isSubmitted && (
          <Stack className="alert-register" sx={{ width: "100%", maxWidth: "500px", marginLeft: "auto", marginRight: "auto", marginTop: "20px" }} spacing={2}>
            <Alert
              severity="success"
              onClose={() => setIsActive(false)}
              sx={{ textAlign: "center", padding: "12px" }}
            >
              El código es válido. Ahora puedes restablecer tu contraseña.
            </Alert>
          </Stack>
        )}

        {/* Mostrar la alerta si el código es incorrecto */}
        {error && isSubmitted && (
          <Stack className="alert-register" sx={{ width: "100%", maxWidth: "500px", marginLeft: "auto", marginRight: "auto", marginTop: "20px" }} spacing={2}>
            <Alert
              severity="error"
              onClose={() => setError(false)}
              sx={{ textAlign: "center", padding: "12px" }}
            >
              El código ingresado no es válido. Por favor, intenta nuevamente.
            </Alert>
          </Stack>
        )}
      </div>

      <Footer />
    </>
  );
}

export default VerifyCodePage;
