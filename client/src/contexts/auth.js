import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

const AuthContextComponent = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || '""');
    setLoggedInUser({ ...storedUser });
  }, []);

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextComponent, AuthContext };
