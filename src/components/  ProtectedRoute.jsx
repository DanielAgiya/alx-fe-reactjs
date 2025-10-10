import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  // Simulate authentication
  return true; // Change to false to test redirect
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
