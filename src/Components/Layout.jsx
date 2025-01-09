import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { motion } from "framer-motion";

const Layout = () => {
  return (
    <div className="  bg-custom-linear bg-[length:400%_400%] animate-gradient w-full h-[100vh] sm:min-h-screen flex sm:flex-row flex-col justify-between py-5 px-5 sm:px-0 sm:justify-evenly sm:items-center mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className=" cursor-pointer min-h-[80vh] sm:w-[75%] sm:h-[calc(100vh-70px)] bg-white-alpha-25 rounded-xl sm:rounded-[30px] overflow-y-auto overflow-x-hidden hide-scrollbar"
      >
        <Outlet />
      </motion.div>
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className=" cursor-pointer min-h-[8vh] mt-10 sm:mt-0 sm:min-w-[60px] bg-white-alpha-25 sm:min-h-[300px] rounded-xl sm:rounded-[20px]"
      >
        <Header />
      </motion.div>
    </div>
  );
};

export default Layout;
