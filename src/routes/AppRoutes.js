import React, { useEffect, useState } from "react";
import { Loading } from "notiflix";
import { useRoutes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import { useNavigate } from "react-router-dom";

function AppRoutes() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const user = getToken();
  // console.log("Token Login: " + user);

  //kiểm tra login hay chưa
  // const Routes = user && user !== {} ? ProtectedRoutes : PublicRoutes;
  const Routes = PublicRoutes;

  return (
    <React.Fragment>
      <Routes />
    </React.Fragment>
  );
}

export default AppRoutes;
