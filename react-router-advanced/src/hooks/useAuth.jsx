import { useState } from "react";

// Simple auth hook to simulate login status
export default function useAuth() {
  const [isAuthenticated] = useState(true); // Change to false to test redirect
  return { isAuthenticated };
}
