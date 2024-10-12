import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import AuthProvider from "../Hooks/AuthProvider";
import HomePublic from "../public/HomePublic";


const RouterApp = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>

            <Route
              path="/app/*"
              element={<PrivateRoutes/>}
              key={'privateRoutesparent'}
            />
            <Route
              path="/login"
              element={<Login/>}
              key={'login'}
            />
            <Route
              path="/register"
              element={<Register/>}
              key={'register'}
            />
            <Route
              path="/"
              element={<HomePublic/>}
              key={'home'}
            />
          
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default RouterApp;
