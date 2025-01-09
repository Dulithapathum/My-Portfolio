import React from "react";
import { MdHome } from "react-icons/md";
import { IoPersonCircleSharp, IoMail } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <ul className="w-full sm:h-[300px] flex sm:flex-col justify-evenly items-center min-h-[8vh]">
      <motion.li
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Link to="/">
          <MdHome
            className={`text-2xl transition-colors ${
              isActive("/")
                ? "text-main-color"
                : "text-second-color hover:text-main-color"
            }`}
          />
        </Link>
      </motion.li>
      <motion.li
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <Link to="/about">
          <IoPersonCircleSharp
            className={`text-2xl transition-colors ${
              isActive("/about")
                ? "text-main-color"
                : "text-second-color hover:text-main-color"
            }`}
          />
        </Link>
      </motion.li>
      <motion.li
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <Link to="/portfolio">
          <MdWork
            className={`text-2xl transition-colors ${
              isActive("/portfolio")
                ? "text-main-color"
                : "text-second-color hover:text-main-color"
            }`}
          />
        </Link>
      </motion.li>
      <motion.li
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
      >
        <Link to="/contact">
          <IoMail
            className={`text-2xl transition-colors ${
              isActive("/contact")
                ? "text-main-color"
                : "text-second-color hover:text-main-color"
            }`}
          />
        </Link>
      </motion.li>
    </ul>
  );
};

export default Header;
