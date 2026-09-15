import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // User not logged in
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // User logged in but role doesn't match
  if (user.role !== role) {
    return <Navigate to="/unauthorized" replace />;
  }

  // User has correct role
  return children;
}

export default ProtectedRoute;