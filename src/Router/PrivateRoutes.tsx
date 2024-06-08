import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import NavBar from "../Shared/NavBar";

const PrivateRoutes = () => {
  return (
    <>
      {/* NavBar */}
      <NavBar
        child={
          <Routes>
            <Route
              path="/"
              children={[<Route path="/" element={<Home />} key={"home"} />]}
            />
          </Routes>
        }
      />
    </>
  );
};

export default PrivateRoutes;
