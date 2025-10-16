import React from "react";
import { NavLink } from "react-router-dom";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-cyan-200 underline" : "")}
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
