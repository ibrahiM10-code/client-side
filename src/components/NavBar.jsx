import React from "react";
import { Link } from "react-router-dom";

function NavBar({ loggedIn }) {
    return (
        <header>
            <h1 id="title">BC Finances</h1>
            <nav>
                <ul>
                    { loggedIn ? (
                        <>
                            <li className="welcome-msg">Welcome, user</li>
                            <li>
                                <img src="./images/foto-perfil.png" id="profile-pic" alt="profile picture" />
                            </li>
                        </>
                    ) : (
                        <li>Time to manage your expenses</li>
                    )}
                </ul>
            </nav>
            { !loggedIn && (
                <Link to="/login" className="to-login-btn">Login</Link>
            )}
        </header>
    )
}

export default NavBar;