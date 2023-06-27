import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";

import HomePage from "../../Pages/HomePage/HomePage";

const RoutesLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default RoutesLayout;
