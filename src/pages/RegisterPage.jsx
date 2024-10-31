import React, { useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function RegisterPage() {

    const [password, setPassword] = useState("");
    const [isActive, setIsActive] = useState(false);

    const handlePassword = (event) => {
        const pass = event.target.value;
        setPassword(pass)
    }

    const validatePassword = (password) => {
        if (password.length <= 7) {
            return "Password is too short."
        }
    }

    const registerUser = (event) => {
        const error = validatePassword(password);
        if (error) {
            setIsActive(true)
        }
        event.preventDefault();
    }


    return (
        <>
            <NavBar loggedIn={false} />
            <div className="form-container">
                <h1>Registro</h1>
                <form id="registration-form" method="post" onSubmit={registerUser}>
                    <label htmlFor="firstName">Nombre</label>
                    <input type="text" id="firstName" name="firstName" required />

                    <label htmlFor="lastName">Apellido</label>
                    <input type="text" id="lastName" name="lastName" required />

                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" onChange={handlePassword} required />

                    <button type="submit">Registrar</button>
                </form>
                <p>¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link></p>
             </div>
             {isActive && (
                <Stack className="alert-register" sx={{ width: '20%' }} spacing={2}>
                    <Alert severity="warning" onClose={() => {}} onClick={ () => {setIsActive(false)}}>
                        The password must be of 8 characters long.
                    </Alert>
                </Stack>
             )}
            <Footer />
        </>
    )
}

export default RegisterPage;