import React from "react";
import MyNavLink from "./MyNavLink";
import { Link } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li className="text-xl font-semibold">
        <MyNavLink to={"/"}>Home</MyNavLink>
      </li>
      <li className="text-xl font-semibold">
        <MyNavLink to={"/login"}>Login</MyNavLink>
      </li>
      <li className="text-xl font-semibold">
        <MyNavLink to={"/register"}>Register</MyNavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  sticky top-0 left-0 right-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          <figure className="w-[50px]">
            <img
              src="https://img.icons8.com/?size=100&id=62452&format=png&color=000000"
              alt=""
            />
          </figure>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn">Button</Link>
      </div>
    </div>
  );
};

export default Header;
