import React from "react";
import { Link } from "react-router-dom";
import { UserProfile } from "../assets/data";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-[100%] h-full flex flex-col lg:flex-row justify-evenly lg:justify-between px-5 lg:px-16 items-center "
    >
      <div className="lg:order-1 order-2 flex flex-col lg:gap-1 text-center lg:text-left">
        <p className="text-3xl lg:text-4xl">Hello, I'm</p>
        <h1 className="text-[37px] lg:text-[60px] font-semibold text-second-color uppercase leading-none">
          {UserProfile.name}
        </h1>
        <h2 className="text-2xl">{UserProfile.role}</h2>
        <div className="flex gap-5 mt-4 justify-center lg:justify-normal">
          <Link
            to="/about"
            className="custom-link text-[13px] py-[3px] px-[13px] rounded-[20px] sm:text-[19px]  sm:py-[8px] sm:px-[36px] sm:rounded-[30px] "
          >
            <small>More about me</small>
          </Link>
          <a
            href="Dulitha Pathum CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-link text-[13px] py-[3px] px-[13px] rounded-[20px] sm:text-[19px]  sm:py-[8px] sm:px-[36px] sm:rounded-[30px] "
          >
            <small>Download CV</small>
          </a>
        </div>
      </div>
      <div className="lg:order-2 order-1">
        <img
          src={UserProfile.img}
          alt={UserProfile.name}
          className="w-[280px] lg:w-[360px] border-[8px] rounded-[50%] border-white-alpha-40 bg-white-alpha-25"
        />
      </div>
    </motion.div>
  );
};

export default Home;
