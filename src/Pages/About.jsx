import React, { useState } from "react";
import { UserProfile } from "../assets/data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabClick = (target) => {
    setActiveTab(target);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-5 "
    >
      <h1 className="text-center font-semibold text-4xl text-blue-dark capitalize my-10">
        About me
      </h1>
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-evenly">
        <div className="lg:w-[30%] w-full flex justify-center ">
          <div className="max-w-[350px] max-h-[350px] bg-white-alpha-25 border-2 rounded-lg border-white-alpha-40 mb-6">
            <img
              src={UserProfile.img}
              alt={UserProfile.name}
              className="w-full"
            />
          </div>
        </div>
        <div className="lg:w-[60%] w-full flex flex-col gap-2">
          <p className="text-blue-dark text-lg text-justify">
            {UserProfile.about}
          </p>
          <div>
            <h2 className="text-2xl font-semibold my-4  text-center lg:text-start">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2  ">
              {UserProfile.skills.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer text-[16px] py-[2px] px-[13px] lg:py-[6px] lg:px-[30px] rounded-[30px] text-blue-dark capitalize border border-white-alpha-40 bg-white-alpha-25 transition-all duration-300 ease-linear hover:text-main-color"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold my-4 text-center lg:text-start">
              Tools
            </h2>
            <div className="flex flex-wrap gap-2 ">
              {UserProfile.tools.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer text-[16px] py-[2px] px-[13px] lg:py-[6px] lg:px-[30px] rounded-[30px] text-blue-dark capitalize border border-white-alpha-40 bg-white-alpha-25 transition-all duration-300 ease-linear hover:text-main-color"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex space-x-4 my-4 justify-evenly lg:justify-normal">
            <button
              className={`text-2xl font-[500] text-blue-dark relative pb-1 before:absolute before:left-0 before:bottom-0 before:h-[3px]  before:transition-width before:duration-300 before:bg-blue-dark ${
                activeTab === "education"
                  ? " before:w-full   "
                  : "before:w-0 hover:before:w-full hover:text-blue-dark "
              }`}
              onClick={() => handleTabClick("education")}
            >
              Education
            </button>
            <button
              className={`text-2xl font-[500] text-blue-dark relative pb-1 before:absolute before:left-0 before:bottom-0 before:h-[3px]  before:transition-width before:duration-300 before:bg-blue-dark ${
                activeTab === "experience"
                  ? " before:w-full"
                  : "before:w-0 hover:before:w-full hover:text-blue-dark "
              }`}
              onClick={() => handleTabClick("experience")}
            >
              Experience
            </button>
          </div>

          <div
            id="education"
            className={`tab-content ${
              activeTab === "education" ? "block" : "hidden"
            }`}
          >
            <div className="relative">
              <div className="absolute top-[11px] left-[5px] h-full w-[1px] bg-main-color"></div>

              {UserProfile.education.map((item, index) => (
                <div className="relative mb-8 pl-10" key={index}>
                  <span className="absolute left-0 top-2.5 h-[11px] w-[11px] bg-main-color rounded-full"></span>
                  <span className="block text-main-color text-md mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-semibold text-blue-dark mb-2">
                    {item.degree}
                    <span className="font-normal"> - {item.university}</span>
                  </h4>
                  <p className="text-gray-600 text-left">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            id="experience"
            className={`tab-content ${
              activeTab === "experience" ? "block" : "hidden"
            }`}
          >
            <div className="relative">
              <div className="absolute top-[11px] left-[5px] h-full w-[1px] bg-main-color"></div>

              {UserProfile.experience.map((item, index) => (
                <div className="relative mb-8 pl-10" key={index}>
                  <span className="absolute left-0 top-2.5 h-[11px] w-[11px] bg-main-color rounded-full"></span>
                  <span className="block text-main-color text-md mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-semibold text-blue-dark mb-2">
                    {item.position}
                    <span className="font-normal"> - {item.company}</span>
                  </h4>
                  <p className="text-gray-600 text-left">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full space-x-8 mb-6 justify-evenly lg:justify-normal">
            <Link to={"/"} className="custom-link text-[15px] px-4 sm:px-10 ">
              Download CV
            </Link>
            <Link to={"/"} className="custom-link text-[15px] px-4 sm:px-10">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
