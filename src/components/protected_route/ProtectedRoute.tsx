import React, { FC } from "react";
import { Outlet, Navigate } from "react-router";

interface auth {
  userCre: any;
}
const ProtectedRoute: FC<auth> = ({ userCre }) => {
  return userCre ? <Outlet /> : <Navigate to="/enter" />;
};

export default ProtectedRoute;
