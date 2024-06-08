import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../Auth/Login";


const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>

            <Route
              path="/"
              element={<PrivateRoutes/>}
            />
            <Route
              path="/login"
              element={<Login/>}
            />
          
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
