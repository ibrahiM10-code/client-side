import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

function NavBar() {
  const { userToken } = useContext(AuthContext);
  return (
    <header>
      <h1 id="title">BC Finances</h1>
      <nav>
        <ul>
          {userToken ? (
            <>
              <li className="welcome-msg">Welcome, user</li>
              <li>
                <img
                  src="./images/foto-perfil.png"
                  id="profile-pic"
                  alt="profile picture"
                />
              </li>
              <li>
                <NavLink to="/logout">
                  <button className="to-login-btn">Log Out</button>
                </NavLink>
              </li>
            </>
          ) : (
            <li>Time to manage your expenses</li>
          )}
        </ul>
      </nav>
      {!userToken && (
        <Link to="/login" className="to-login-btn">
          Login
        </Link>
      )}
    </header>
  );
}

export default NavBar;
