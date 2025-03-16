import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { LOGIN_PATH } from "../../navigation/navigators/types";

export const PrivateRoute: React.FC = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to={LOGIN_PATH} />;
};
