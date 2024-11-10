import React, { useState, useEffect } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const checkLS = () => {
      try {
        const token = localStorage.getItem("token");
        if (token) setUserToken(token);
      } catch (error) {
        console.log(error);
      }
    };
    checkLS();
  }, []);

  const setToken = (token) => {
    localStorage.setItem("token", token);
    setUserToken(token);
  };

  const cleanLS = () => {
    localStorage.clear();
  };

  const config = { headers: { Authorization: `Bearer ${userToken}` } };

  return (
    <AuthContext.Provider
      value={{ userToken, setUserToken, setToken, cleanLS, config }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
