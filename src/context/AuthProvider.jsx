import React, { useState, useEffect } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userToken, setUserToken] = useState(null);
  const token = localStorage.getItem("token");
  const config = { headers: { Authorization: `Bearer ${userToken}` } };
  useEffect(() => {
    const checkLS = () => {
      try {
        setUserToken(token);
      } catch (error) {
        console.log(error);
      }
    };
    checkLS();
  }, [token]);

  return (
    <AuthContext.Provider value={{ userToken, setUserToken, config }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
