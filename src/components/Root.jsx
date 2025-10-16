import React from "react";
import Home from "./Home";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Root = () => {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
