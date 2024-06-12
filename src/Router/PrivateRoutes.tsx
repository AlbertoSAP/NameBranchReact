import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import NavBar from "../Shared/NavBar";
import BranchName from "../Components/BranchName";

const PrivateRoutes = () => {
  console.log('routers p')
  return (
    <>
      {/* NavBar */}
      <NavBar
        child={
          <Routes>
              <Route path="home" element={<Home />} key={'privatehome'} />
              <Route path="create-branch" element={<BranchName />} key={'create-branch'} />
          </Routes>
        }
      />
    </>
  );
};

export default PrivateRoutes;
