import React, { useContext, useState, createContext, useEffect } from "react";
import { getItem, removeItem, setItem } from "../utils/functions";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    try {
      // jwtDecode(getItem("auth").token);
      setAuth(getItem("auth"));
    } catch (error) {}
  }, []);

  useEffect(() => {}, [auth]);

  const logIn = (a) => {
    setItem("auth", JSON.stringify(a));
    setAuth(a);
  };

  const logOut = () => {
    console.log("logout");
    setAuth({});
    removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ auth, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
