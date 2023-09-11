import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import Error404 from "../Pages/Errors/Error404";

const AllRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.component}
          exact={route.exact}
        />
      ))}
      <Route path="/" element={<Navigate replace to="/" />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AllRoutes;
