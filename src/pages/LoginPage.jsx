import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <>
            <NavBar />
            <div class="form-container">
                <h1>Iniciar Sesión</h1>
                <form id="login-form" method="post">
                    <label for="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" required />

                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password" required />

                    <button type="submit">Iniciar Sesión</button>
                </form>
                <p>¿No tienes una cuenta? <Link to="/register">Registrarse</Link></p>
            </div>
            <Footer />
        </>
    )
}

export default LoginPage;