import React from "react";
import { Outlet, Navigate } from "react-router";
import { useAppSelector } from "../../hooks/hooks";
const ProtectedRoute = () => {
  const { userAuthenticated } = useAppSelector((state) => state.credentials);
  return userAuthenticated ? <Outlet /> : <Navigate to="/enter" />;
};

export default ProtectedRoute;
