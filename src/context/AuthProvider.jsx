import React, { useState, useEffect } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const checkLS = () => {
      try {
        const token = localStorage.getItem("token");
        if (token) setUserToken(token);
        if (userId) setUserId(userId);
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

  const setUser = (userId) => {
    localStorage.setItem("userId", userId);
    setUserId(userId);
  };

  const cleanLS = () => {
    localStorage.clear();
  };

  const config = { headers: { Authorization: `Bearer ${userToken}` } };

  return (
    <AuthContext.Provider
      value={{
        userToken,
        setUserToken,
        setToken,
        cleanLS,
        setUserId,
        setUser,
        config,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
