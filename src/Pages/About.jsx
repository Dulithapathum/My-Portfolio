import React from "react";
import { UserProfile } from "../assets/data";
const About = () => {
  return (
    <div className="px-5">
      <h1 className="text-center  font-semibold text-4xl text-blue-dark capitalize my-10">
        About me
      </h1>
      <div className="w-full flex justify-evenly ">
        <div className="w-[30%] ">
          <div className="max-w-[350px] max-h-[350px] bg-white-alpha-25 border-2 rounded-lg border-white-alpha-40 ">
            <img
              src={UserProfile.img}
              alt={UserProfile.name}
              className="w-full"
            />
          </div>
        </div>
        <div className="w-[60%] flex  flex-col gap-2 ">
          <p className="text-blue-dark text-lg text-justify">
            {UserProfile.about}
          </p>
          <div>
            <h2 className="text-2xl font-semibold my-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {UserProfile.skills.map((item, index) => (
                <div
                  key={index}
                  className=" cursor-pointer text-[16px] py-[2px] px-[13px] lg:py-[6px] lg:px-[30px] rounded-[30px]  text-blue-dark capitalize   border border-white-alpha-40 bg-white-alpha-25 transition-all duration-300 ease-linear hover:text-main-color"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold my-2">Tools</h2>
            <div className="flex flex-wrap gap-2">
              {UserProfile.tools.map((item, index) => (
                <div
                  key={index}
                  className=" cursor-pointer text-[16px] py-[2px] px-[13px] lg:py-[6px] lg:px-[30px] rounded-[30px]  text-blue-dark capitalize   border border-white-alpha-40 bg-white-alpha-25 transition-all duration-300 ease-linear hover:text-main-color"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <button type="button" data-target="#education">
              Education
            </button>
            <button type="button" data-target="#experience">
              Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
