import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-950 z-10 w-full text-violet-50 h-12 px-12 flex justify-between">
      <div className="font-bold self-center">
        <Link to="/">Logo</Link>
      </div>
      <div className="flex">
        <ul className="flex gap-4 self-center">
          <NavLink to="products">
            <li className="navlink">
              Produtos
            </li>
          </NavLink>
          <NavLink to="error">
            <li className="navlink">
              Error
            </li>
          </NavLink>
          <NavLink to="about">
            <li className="navlink">
              Sobre
            </li>
          </NavLink>
        </ul>
        <ul>
          <NavLink to="login">
            <li className="p-2 bg-blue-600 ml-8 w-32 text-center font-bold text-white hover:bg-slate-300 hover:text-gray-800 rounded-md transition-colors duration-400">
              Login
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
