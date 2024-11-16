import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function LoginPage() {

    const [isActive, setIsActive] = useState(false);

    const logUser = (e) => {
        console.log("Logged in!");
        e.preventDefault();
    }

    return (
        <>
            <NavBar loggedIn={false}/>
            <div className="form-container">
                <h1>Log In</h1>
                <form id="login-form" onSubmit={logUser}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />

                    <button type="submit">Log In</button>
                </form>
                <p>Don't have an account? <Link to="/register">Register</Link></p>
                <p>Forgot your password? <Link to="/change-password">Recover Password</Link></p>
            </div>
            {isActive && (
                <Stack className="alert-register" sx={{ width: '20%' }} spacing={2}>
                    <Alert severity="info" onClose={() => {}} onClick={() => { setIsActive(false) }}>
                        The password must be 8 characters long.
                    </Alert>
                </Stack>
            )}
            <Footer />
        </>
    )
}

export default LoginPage;
