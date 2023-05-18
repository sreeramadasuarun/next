"use client";
import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../pages/UserAuthContext";

function PrivateRoute({ children }) {
  const { user } = useUserAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
