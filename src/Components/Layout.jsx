import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
const Layout = () => {
  return (
    <div className="bg-custom-linear w-full h-[100vh] sm:min-h-screen flex sm:flex-row flex-col justify-between py-5 px-5 sm:px-0 sm:justify-evenly sm:items-center mx-auto   ">
      <div className="min-h-[80vh] sm:w-[75%] sm:h-[calc(100vh-70px)] bg-white-alpha-25 rounded-xl  sm:rounded-[30px] overflow-y-auto overflow-x-hidden hide-scrollbar ">
        <Outlet />
      </div>
      <div className="min-h-[8vh] sm:min-w-[60px] bg-white-alpha-25 sm:min-h-[300px] rounded-xl sm:rounded-[20px]">
        <Header />
      </div>
    </div>
  );
};

export default Layout;
