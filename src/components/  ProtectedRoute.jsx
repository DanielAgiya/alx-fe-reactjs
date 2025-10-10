import { Navigate } from "react-router-dom";

const isAuthenticated = false; // set to true to test access

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
