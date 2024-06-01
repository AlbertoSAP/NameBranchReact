import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import NavBar from "../Shared/NavBar";

const RouterApp = () => {
  return (
    <BrowserRouter>
      {/* NavBar */}
      <NavBar
        child={
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        }
      />
    </BrowserRouter>
  );
};

export default RouterApp;
