import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = true; // change to false to test redirection

const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
