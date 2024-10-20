import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function RegisterPage() {
    return (
        <>
            <NavBar />
            <div class="form-container">
                <h1>Registro</h1>
                <form id="registration-form" method="post">
                    <label for="firstName">Nombre</label>
                    <input type="text" id="firstName" name="firstName" required />

                    <label for="lastName">Apellido</label>
                    <input type="text" id="lastName" name="lastName" required />

                    <label for="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" required />

                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password" required />

                    <button type="submit">Registrar</button>
                </form>
                <p>¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link></p>
             </div>
             <Footer />
        </>
    )
}

export default RegisterPage;