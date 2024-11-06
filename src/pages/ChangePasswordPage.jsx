import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function ChangePasswordPage() {
  const [newPassword, setNewPassword] = useState(""); // Para la nueva contraseña
  const [confirmPassword, setConfirmPassword] = useState(""); // Para confirmar la contraseña
  const [isActive, setIsActive] = useState(false); // Para activar la alerta de éxito
  const [error, setError] = useState(false); // Para mostrar error si las contraseñas no coinciden

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword === confirmPassword && newPassword !== "") {
      setIsActive(true);
      setError(false);
      console.log("Contraseña cambiada correctamente");
    } else {
      setIsActive(false);
      setError(true);
    }
  };

  return (
    <>
      <NavBar loggedIn={false} />
      <div className="form-container">
        <h1>Cambiar Contraseña</h1>
        <form id="change-password-form" onSubmit={handleSubmit}>
          <label htmlFor="new-password">Nueva Contraseña</label>
          <input
            type="password"
            id="new-password-field"
            name="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Ingresa tu nueva contraseña"
            required
          />

          <label htmlFor="confirm-password">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirm-password-field"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Repite tu nueva contraseña"
            required
          />

          <button type="submit">Guardar Nueva Contraseña</button>
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
              Tu contraseña se ha cambiado exitosamente.
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
              Las contraseñas no coinciden. Por favor, intenta nuevamente.
            </Alert>
          </Stack>
        )}
      </div>

      <Footer />
    </>
  );
}

export default ChangePasswordPage;
