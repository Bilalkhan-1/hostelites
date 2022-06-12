import React from "react";
import LoggedUser from "../App";
import { Navigate, Redirect, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function ProtectedRoute({ isLogged }) {
  const navigate = useNavigate();

  return isLogged ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
