// import React from 'react';
import React, { createContext, useContext, useState } from 'react';

export const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    // Clear the authentication token from localStorage
    localStorage.removeItem('authToken');
    // Update the logged-in status to false
    setLoggedIn(false);
  };

  const authValues = {
    logout,
    isLoggedIn,
  };

  return (
    <AuthContext.Provider value={authValues}>
      {children}
    </AuthContext.Provider>
  );
}
