import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const isToken = false;
    return (
        <header>
            <h1 id="title">BC Finances</h1>
            <nav>
                <ul>
                    { isToken ? (
                        <>
                            <li className="welcome-msg">Welcome, user</li>
                            <li>
                                <img src="./images/foto-perfil.png" id="profile-pic" />
                            </li>
                        </>
                    ) : (
                        <li>Time to manage your expenses</li>
                    )}
                </ul>
            </nav>
            { !isToken && (
                <Link to="/login" className="to-login-btn">Login</Link>
            )}
        </header>
    )
}

export default NavBar;