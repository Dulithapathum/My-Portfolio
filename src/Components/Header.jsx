import React from "react";
import { MdHome } from "react-icons/md";
import { IoPersonCircleSharp, IoMail } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <ul className="w-full sm:h-[300px] flex sm:flex-col justify-evenly items-center min-h-[8vh]">
      <li>
        <Link to="/">
          <MdHome
            className={`text-2xl transition-colors ${
              isActive("/")
                ? "text-main-color"
                : "text-blue-dark hover:text-main-color"
            }`}
          />
        </Link>
      </li>
      <li>
        <Link to="/about">
          <IoPersonCircleSharp
            className={`text-2xl transition-colors ${
              isActive("/about")
                ? "text-main-color"
                : "text-blue-dark hover:text-main-color"
            }`}
          />
        </Link>
      </li>
      <li>
        <Link to="/portfolio">
          <MdWork
            className={`text-2xl transition-colors ${
              isActive("/portfolio")
                ? "text-main-color"
                : "text-blue-dark hover:text-main-color"
            }`}
          />
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <IoMail
            className={`text-2xl transition-colors ${
              isActive("/contact")
                ? "text-main-color"
                : "text-blue-dark hover:text-main-color"
            }`}
          />
        </Link>
      </li>
    </ul>
  );
};

export default Header;
